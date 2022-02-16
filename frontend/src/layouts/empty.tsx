import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/dist/client/router";
import Messages from "locale/type";

interface LayoutArgs {
  children: ReactNode;
}

const EmptyLayout: FunctionComponent<LayoutArgs> = (args) => {
  const router = useRouter();
  const locale = useMemo(
    () => (router.locale ? router.locale : "en"),
    [router.locale]
  );

  const [messages, setMessages] = useState<Messages | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      const importedMessages: Messages = (await import(`locale/${locale}`))
        .default;
      setMessages(importedMessages);
      setLoading(false);
    })();
  }, [locale]);

  return loading ? null : (
    <IntlProvider locale={locale} messages={messages}>
      {args.children}
    </IntlProvider>
  );
};

export default EmptyLayout;
