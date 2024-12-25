"use client";
import React, { useState, useContext } from "react";

interface LayoutState {
  pageData: {};
  setPageData: React.Dispatch<React.SetStateAction<{}>>;
}

const LayoutContext = React.createContext<LayoutState | undefined>(undefined);

interface LayoutProviderProps {
  children: React.ReactNode;
  pageData: {};
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({
  children,
  pageData: initialPageData,
}) => {
  const [pageData, setPageData] = useState<{}>(initialPageData);
  return (
    <LayoutContext.Provider
      value={{
        pageData,
        setPageData,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
