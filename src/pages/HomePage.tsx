import { UserCard } from "@src/components/UserCard"
import { PageRoutes } from "@src/enums"
import { useAppContext } from "@src/hooks/AppContext"
import { useMatchesQuery } from "@src/hooks/MatchesQuery"
import { ApiService } from "@src/services/ApiService"
import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import TinderCard from "react-tinder-card"

export const HomePage: React.FC = () => {

  const {user} = useAppContext()
  const fetchQuery = useMatchesQuery()
  const appContext = useAppContext()
  const navigate = useNavigate()

  const cards = useMemo(() => {
    if(fetchQuery.data == null) {
      return [];
    }

    const onSwipe = async (direction: SwipeDirection, match: MatchType) => {
      await ApiService.swipe(direction, match.id)

      fetchQuery.refetch()
    }

    return fetchQuery.data
      .map(item => {
        return (
          <TinderCard
            onSwipe={(direction) => onSwipe(direction, item)}
            preventSwipe={['up', 'down']} key={item.id}>
              <div className="absolute">
                <UserCard user={item.candidate}/>
              </div>
          </TinderCard>
        )
      })
  }, [fetchQuery]);

  const logout = () => {
    localStorage.clear();
    appContext.setUser(undefined);
    navigate(PageRoutes.LOGIN)
  }

  return (
    <>
      {fetchQuery.isPending && "loading"}
      {!fetchQuery.isPending && (
          <div className="h-screen flex flex-col justify-center items-center">
            <p className="text-2xl font-bold leading-9 tracking-tight text-gray-900 text-center capitalize">Welcome {user!.name}!</p>
            {fetchQuery.data!.length == 0 && (
              <p className="text-lg font-bold leading-9 tracking-tight text-gray-500 text-center capitalize">Thats all for today, come back tomorrow for a new matchs</p>
            )}
            {fetchQuery.data!.length != 0 && (
              <>
                <p className="text-lg font-bold leading-9 tracking-tight text-gray-500 text-center capitalize">Below is the list of candidates that you might like!</p>
                <div className="mt-[20px] w-[300px] h-[250px] relative">
                  {cards}
                </div>
              </>
            )}
            <button
              onClick={logout}
              className="mt-20 flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Logout
            </button>

          </div>
      )}
    </>
  )
}
