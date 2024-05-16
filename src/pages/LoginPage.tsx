import { useLoginQuery } from "@src/hooks/LoginQuery";
import { LocalStorageKeys } from "@src/enums";
import { useState } from "react"
import { useAppContext } from "@src/hooks/AppContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginQuery = useLoginQuery(username, password)
  const appContext = useAppContext();


  const submitLogin = async () => {
    const data = await loginQuery.mutateAsync()

    localStorage.setItem(LocalStorageKeys.JWT, data.token)
    localStorage.setItem(LocalStorageKeys.USER, JSON.stringify(data.user))
    appContext.setUser(data.user)

    toast("Logged in", {type: 'success'})
  }


  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="py-6 flex flex-col w-[400px] mb-10">
        <p className="text-2xl font-bold leading-9 tracking-tight text-gray-900 text-center">Sign in to your account</p>
        <p className="mt-10 text-md font-bold text-gray-400">Username</p>
        <input
          className="mt-[5px] block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="mt-5 text-md font-bold text-gray-400">Password</p>
        <input
          type="password"
          className="mt-[5px] block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          onClick={submitLogin}
          className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Sign in
        </button>
        <p className="mt-10 text-center text-sm text-gray-500">
          Doesnt have an account?
          <Link to="/register" className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register</Link>
        </p>
      </div>
    </div>
  )
}
