import AppProvider from "@/context/AppProvider/AppProvider";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
