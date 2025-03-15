import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ApolloProvider>
  </StrictMode>
);
