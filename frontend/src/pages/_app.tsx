import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "styles/global.scss";
import { FC, useEffect } from "react";
import theme from "utils/theme";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { createAxiosClient } from "utils/axios";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    createAxiosClient();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      >
        <Component {...pageProps} />
      </GoogleReCaptchaProvider>
    </ChakraProvider>
  );
};

export default App;
