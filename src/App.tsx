import { AppContext } from "@src/hooks/AppContext"
import { router } from "@src/routes"
import { useState } from "react"
import { RouterProvider } from "react-router-dom"
import { ToastContainer } from "react-toastify"


export const App = () => {
  const [user, setUser] = useState<UserType>()

  return (
    <AppContext.Provider value={{user, setUser}}>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-center" />
    </AppContext.Provider>
  )
}
