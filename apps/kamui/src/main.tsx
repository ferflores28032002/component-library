import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider, theme } from "@shidori/react-kit";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ChakraProvider>
);
