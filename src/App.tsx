import { LocalStorageKeys } from "@src/enums"
import { AppContext } from "@src/hooks/AppContext"
import { router } from "@src/routes"
import { useEffect, useState } from "react"
import { RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"


export const App = () => {
  const [user, setUser] = useState<UserType>()
  const [ready, setReady] = useState<boolean>(false)

  useEffect(() => {
    const userJson = localStorage.getItem(LocalStorageKeys.USER)
    setReady(true)

    if(userJson == null) {
      return
    }

    setUser(JSON.parse(userJson))
  }, [])

  return (
    <AppContext.Provider value={{user, setUser, appReady: ready}}>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-center" />
    </AppContext.Provider>
  )
}
