import { createContext, useContext } from "react";

// Too overkill to use redux
// just for storing this one information
type AppContextType = {
  user?: UserType;
  setUser: (user: UserType) => void
}

export const AppContext = createContext<AppContextType>({setUser: () => null});

export const useAppContext = () => useContext(AppContext)
