import { Suspense } from "react";
import { QueryClientProvider } from "react-query";

import { Spinner } from "@/components/ui/spinner";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "@/lib/react-query";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<Spinner />}>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}
      </QueryClientProvider>
    </Suspense>
  );
};

export default AppProvider;
