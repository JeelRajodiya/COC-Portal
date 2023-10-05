import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import "./styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <main className="dark text-foreground bg-background">
      <SessionProvider session={session}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </main>
  );
}
