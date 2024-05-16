import { createContext, useContext } from "react";

// Too overkill to use redux
// just for storing this one information
type AppContextType = {
  appReady: boolean;
  user?: UserType;
  setUser: (user?: UserType) => void;
}

export const AppContext = createContext<AppContextType>({setUser: () => null, appReady: false});

export const useAppContext = () => useContext(AppContext)
