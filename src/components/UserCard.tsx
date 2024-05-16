import { PersonIcon } from "@src/components/PersonIcon"

type Props = {
  user: UserType
}

export const UserCard: React.FC<Props> = ({user}) => {

  return (
    <div className="rounded border px-10 py-5 bg-white w-[300px] h-[250px] flex flex-col justify-center items-center select-none">
      <PersonIcon className="h-[100px] w-[100px]"/>
      <p className="mt-[10px] text-gray-500 font-bold text-[20px] capitalize">{user.name}</p>
      <div className="flex flex-row mt-[30px] w-full justify-between">
        <div className="flex flex-col">
          <p className="text-gray-400 text-sm p-0 text-[10px]">Location: </p>
          <p className="text-gray-500 font-bold text-[13px] capitalize">{user.location}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400 text-sm p-0 text-[10px]">University: </p>
          <p className="text-gray-500 font-bold text-[13px] capitalize">{user.university}</p>
        </div>
      </div>
    </div>
  )
}
