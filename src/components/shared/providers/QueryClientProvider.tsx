'use client';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider as QCP } from 'react-query';

const QueryClientProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <QCP client={new QueryClient()}>{children}</QCP>;
};

export default QueryClientProvider;
