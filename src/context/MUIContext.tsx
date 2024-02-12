import React, { createContext, useContext, ReactNode } from 'react';

interface Breakpoints {
  small: string;
  medium: string;
  large: string;
}

interface BreakpointsProviderProps {
  breakpoints: Breakpoints;
  children: ReactNode; 
}

const BreakpointsContext = createContext<Breakpoints | undefined>(undefined);

export const BreakpointsProvider = ({ breakpoints, children }: BreakpointsProviderProps) => {
  return (
    <BreakpointsContext.Provider value={breakpoints}>
      {children}
    </BreakpointsContext.Provider>
  );
};

export const useBreakpoints = (): Breakpoints => {
  const context = useContext(BreakpointsContext);
  if (!context) {
    throw new Error('useBreakpoints must be used within a BreakpointsProvider');
  }
  return context;
};