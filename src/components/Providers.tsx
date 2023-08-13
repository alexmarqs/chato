import { ClerkProvider } from '@clerk/nextjs';
import { PropsWithChildren } from 'react';

export const Providers: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: 'black',
          colorTextOnPrimaryBackground: 'white'
        }
      }}
    >
      {children}
    </ClerkProvider>
  );
};
