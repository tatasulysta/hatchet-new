import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'common/helpers/query-client';
import { customTheme } from 'modules/styles/custome-theme';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (isMounted) {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={customTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    );
  }
}
