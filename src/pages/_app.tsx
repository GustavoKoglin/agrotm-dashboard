import { StyleProvider } from "@ant-design/cssinjs";
import Loading from "~/components/Loading";
import useAuthStore from "~/lib/stores/useAuthStore";
import GlobalStyles from "~/styles/GlobalStyles";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactElement, useEffect, lazy, Suspense, useState } from "react";

import "antd/dist/antd.css";

const LayoutPage = lazy(() => import("~/components/Layout"));

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const router = useRouter();
  const { token, loadFromGetToken } = useAuthStore();
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    loadFromGetToken();
    setInitialCheckDone(true);
  }, []);

  useEffect(() => {
    if (!initialCheckDone) return;

    if (token === null) {
      router.push("/signIn");
    } else if (token !== "") {
      router.push("/home");
    }
  }, [token, initialCheckDone]);

  return (
    <ConfigProvider locale={ptBR}>
      <StyleProvider hashPriority="high" ssrInline>
        <GlobalStyles />
        {!token ? (
          <Component {...pageProps} />
        ) : (
          <Suspense fallback={<Loading size="large" fullscreen />}>
            <LayoutPage>
              <Component {...pageProps} />
            </LayoutPage>
          </Suspense>
        )}
      </StyleProvider>
    </ConfigProvider>
  );
};

export default MyApp;
