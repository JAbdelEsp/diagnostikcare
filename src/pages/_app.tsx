import { store } from "@/redux/store";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  );
}
