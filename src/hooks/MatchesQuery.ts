import { useAppContext } from "@src/hooks/AppContext"
import { ApiService } from "@src/services/ApiService"
import { useQuery } from "@tanstack/react-query"

export const useMatchesQuery = () => {
  const appContext = useAppContext()

  const process = async () => {
    const resp = await ApiService.dailyMatches()

    return resp.data.data.matches
  }

  return useQuery({
    queryKey: ["matches", appContext.user?.id],
    queryFn: process,
  })
}
