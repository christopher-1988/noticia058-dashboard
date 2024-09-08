import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
//Const
import themeConfig from "./config/theme.config.ts";
//Context
import { ThemeContext } from "./state/context/ThemeColor.tsx";
//Routers
import { Routers } from "@src/router";
//Hook
//import { useLayout } from "./hooks/index.tsx";

function App() {
  //Config
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeContext>
          <Routers />
          <Toaster
            position={themeConfig?.layout?.toastPosition ?? "top-right"}
            toastOptions={{ className: "react-hot-toast" }}
          />
        </ThemeContext>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
