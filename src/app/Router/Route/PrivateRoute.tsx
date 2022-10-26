import { useConst } from '@chakra-ui/react';
import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: JSX.Element;
  [x: string]: unknown;
};

export const PrivateRoute: React.FunctionComponent<Props> = ({ children }) => {
  const passed = useConst(true);

  return passed ? children : <Navigate to="/" />;
};
