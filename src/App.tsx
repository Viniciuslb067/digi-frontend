import Home from "@/modules/Home/pages/Home";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
