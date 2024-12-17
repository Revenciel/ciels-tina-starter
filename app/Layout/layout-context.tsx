"use client";
import React, { useState, useContext } from "react";
// The parallel file in tailwind-starter also includes
// the stuff to pull in global settings (theme data)
// As I do not need this rn, I am attempting to cut those parts out

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
    /// finish copying from layout-context.tsx in tailwind-starter;
    // I was trying to return a component that had page data (context?)
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
