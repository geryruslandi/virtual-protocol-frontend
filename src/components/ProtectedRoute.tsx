import { PageRoutes } from "@src/enums"
import { useAppContext } from "@src/hooks/AppContext"
import { ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"

type Props = {
  children: ReactNode
}

export const ProtectedRoute: React.FC<Props> = ({children}) => {

  const navigate = useNavigate()
  const appContext = useAppContext()

  useEffect(()=> {
    if(!appContext.appReady || appContext.user != null) {
      return;
    }

    navigate(PageRoutes.LOGIN)
  }, [navigate, appContext.user, appContext.appReady])

  return (
    <>
      {!appContext.appReady && "Loading..."}
      {appContext.appReady && children}
    </>
  )
}
