import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { createContext, useContext, useReducer } from "react";

export interface CardType {
  id: number;
  title: string;
  currency: string;
  amount: number;
  amountWithCurrency?: string;
  icon: IconProp,
}

type UpdateAmountType = Pick<CardType, "id" | "amountWithCurrency">;

type DashboardAction =
  | { type: "SET_DASHBOARD_DATA"; payload: CardType[] }
  | { type: "UPDATE_SPECIFIC_DASHBOARD_AMOUNT"; payload: UpdateAmountType }
  | { type: "SET_EDIT_TOGGLE"; payload?: boolean };

interface DashboardState {
  cardList: CardType[];
  isEditable: boolean;
}

interface DashboardProviderProps {
  children: React.ReactNode;
}

export type DashboardDispatch = (action: DashboardAction) => void;

const initialState: DashboardState = {
  cardList: [],
  isEditable: false,
};

const DashboardContext = createContext<
  { state: DashboardState; dispatch: DashboardDispatch } | undefined
>(undefined);

function dashbaordReducer(state: DashboardState, action: DashboardAction) {
  switch (action.type) {
    case "SET_DASHBOARD_DATA": {
      return {
        ...state,
        cardList: action.payload,
      };
    }
    case "SET_EDIT_TOGGLE": {
      return {
        ...state,
        isEditable: action.payload ?? !state.isEditable,
      };
    }
    case "UPDATE_SPECIFIC_DASHBOARD_AMOUNT": {
      // debugger;
      const { cardList } = state;
      const tempCardList = cardList.map((eachCard) => {
        if (eachCard.id === action.payload.id) {
          return {
            ...eachCard,
            amountWithCurrency: action.payload.amountWithCurrency,
          };
        } else return eachCard;
      });
      return {
        ...state,
        cardList: tempCardList,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function DashboardProvider({ children }: DashboardProviderProps) {
  const [state, dispatch] = useReducer(dashbaordReducer, initialState);
  const value = { state, dispatch };
  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export const formatCurrency = (
  currencyType: CardType["currency"],
  amount: CardType["amount"]
) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyType,
  });
  return formatter.format(amount);
};

function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }

  return context;
}

export { DashboardProvider, useDashboard };
