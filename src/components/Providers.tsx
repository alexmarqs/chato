'use client';

import { QueryClient, QueryClientProvider } from 'react-query';

type ProvidersProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
