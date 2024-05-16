import { Gender } from "@src/enums";
import { useRegisterQuery } from "@src/hooks/RegisterQuery";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Creatable from "react-select/creatable";
import { toast } from "react-toastify";

export const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState<Gender>(Gender.MALE);
  const [location, setLocation] = useState('');
  const [university, setUniversity] = useState('');
  const [interests, setInterests] = useState<string[]>([]);

  const registerQuery = useRegisterQuery({
    username,
    password,
    name,
    gender,
    location,
    university,
    interests
  })

  const genderOptions: LabelValueType[] = [
    {label: 'Male', value: Gender.MALE},
    {label: 'Female', value: Gender.FEMALE},
  ]
  const interestOptions: LabelValueType[] = [
    {label: 'Coding', value: "Coding"},
    {label: 'Watch Movie', value: "Watch Movie"},
    {label: 'Exercise', value: "Exercise"},
  ]

  const submitRegister = async () => {
    await registerQuery.mutateAsync()

    toast("User registered, please login with newly creted account")
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="py-6 flex flex-col w-[400px] mb-10">
        <p className="text-2xl font-bold leading-9 tracking-tight text-gray-900 text-center">Create a new Account</p>
        <p className="mt-10 text-md font-bold text-gray-400">Name</p>
        <input
          className="mt-[5px] block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          name="password"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p className="mt-5 text-md font-bold text-gray-400">Username</p>
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
        <p className="mt-5 text-md font-bold text-gray-400">University</p>
        <input
          className="mt-[5px] block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          name="university"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        />
        <p className="mt-5 text-md font-bold text-gray-400">Gender</p>
        <Select
          defaultValue={gender}
          // @ts-expect-error library typing error
          onChange={(item) => setGender(item.value ?? Gender.MALE)}
          options={genderOptions as never}
          isMulti={false}
          className="mt-[5px]"
        />

        <p className="mt-5 text-md font-bold text-gray-400">Location</p>
        <input
          className="mt-[5px] block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <p className="mt-5 text-md font-bold text-gray-400">Interests</p>
        <Creatable
          defaultValue={interests}
          onChange={(interests) => {
            // @ts-expect-error Typing error from library
            setInterests(interests.map(item => item.value))
          }}
          // @ts-expect-error Typing error from library
          options={interestOptions}
          isMulti={true}

          className="mt-[5px]"
        />

        <button
          type="submit"
          onClick={submitRegister}
          className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Register
        </button>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account ?
          <Link to="/login" className="ml-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</Link>
        </p>
      </div>
    </div>
  )
}
