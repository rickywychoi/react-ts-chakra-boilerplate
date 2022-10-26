import React, { useContext, useState } from 'react';

type ComponentDimensions = {
  width: number;
  height: number;
  ref: React.MutableRefObject<HTMLElement>;
  setRef: React.Dispatch<React.SetStateAction<React.MutableRefObject<HTMLElement>>>;
};

const ComponentDimensionsContext = React.createContext<ComponentDimensions>(undefined);

type Props = {
  children?: React.ReactNode;
};

export const ComponentDimensionsProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [ref, setRef] = useState<React.MutableRefObject<HTMLElement>>();
  const value: ComponentDimensions = { width: 0, height: 0, ref: ref, setRef: setRef };

  return <ComponentDimensionsContext.Provider value={value}>{children}</ComponentDimensionsContext.Provider>;
};

export const useComponentDimensionsContext = () => {
  const context = useContext(ComponentDimensionsContext);

  if (!context) {
    throw new Error('useComponentDimensionsContext should be used within ComponentDimensionsProvider');
  }

  return context;
};
