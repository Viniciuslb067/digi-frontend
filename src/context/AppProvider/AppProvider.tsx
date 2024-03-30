import { Suspense } from "react";
import { QueryClientProvider } from "react-query";

import { Spinner } from "@/components/ui/spinner";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "@/lib/react-query";

import { CartProvider } from "../CartProvider/CardProvider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<Spinner />}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <CartProvider>{children}</CartProvider>
      </QueryClientProvider>
    </Suspense>
  );
};

export default AppProvider;
