import { useCubeQuery } from "@cubejs-client/react";
import { useContext, createContext } from "react";
import type { ReactNode } from 'react';
import { PROVIDER_LIST, ACTIVITIES_PER_PROVIDER, ACTIVITIES_MONTHLY } from "./queries";

const QueriesContext = createContext();

function useQueriesContextProvider () {
  const providers = useCubeQuery(PROVIDER_LIST);
  const activitiesPerProviders = useCubeQuery(ACTIVITIES_PER_PROVIDER);
  const monthly = useCubeQuery(ACTIVITIES_MONTHLY);

  return {
    providers,
    activitiesPerProviders,
    monthly
  }
}

export const QueriesProvider = ({ children }: ReactNode) => {
  const value = useQueriesContextProvider()
  return (
    <QueriesContext.Provider value={value}>
      {children}
    </QueriesContext.Provider>
  )
};

export const useQueriesContext = () => useContext(QueriesContext);