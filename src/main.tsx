import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import WebApp from "@twa-dev/sdk";

import "./index.css";

WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TonConnectUIProvider manifestUrl="https://go-tma.vercel.app/tonconnect-manifest.json">
    <App />
  </TonConnectUIProvider>
);
