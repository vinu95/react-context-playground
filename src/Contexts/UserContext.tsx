import { createContext, useCallback, useContext, useReducer } from "react";

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
}

type UserAction =
  | { type: "SET_USERS"; payload: User[] }
  | { type: "ADD_USER"; payload: User };

interface UserState {
  userList: User[] | undefined;
  registeredUsers: User[];
}

interface UserProviderProps {
  children: React.ReactNode;
}

export type UserDispatch = (action: UserAction) => void;

const initialState: UserState = {
  userList: undefined,
  registeredUsers: [],
};

const UserContext = createContext<
  { state: UserState; dispatch: UserDispatch } | undefined
>(undefined);

function userReducer(state: UserState, action: UserAction) {
  switch (action.type) {
    case "SET_USERS": {
      return {
        ...state,
        userList: action.payload,
      };
    }
    case "ADD_USER": {
      return {
        ...state,
        registeredUsers: [...state.registeredUsers, action.payload],
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function UserProvider({ children }: UserProviderProps) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useTeams() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useTeams must be used within a UserProvider");
  }
  const { dispatch } = context;

  const addUser = useCallback((formData: User) => {
    dispatch({ type: "ADD_USER", payload: formData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { context, addUser };
}

export { UserProvider, useTeams };
