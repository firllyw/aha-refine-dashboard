import React from "react";
import { AppProps } from "next/app";
import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ReadyPage,
  ErrorComponent,
  AuthPage,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-nextjs-router";
import "@pankod/refine-antd/dist/styles.min.css";
import dataProvider from "@pankod/refine-simple-rest";
import { RefineKbarProvider } from "@pankod/refine-kbar";
import { authProvider } from "src/authProvider";
import { UserList } from "@components/users";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "@components/layout";

const API_URL = "http://178.79.159.75:1111";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RefineKbarProvider>
      <Refine
        routerProvider={routerProvider}
        notificationProvider={notificationProvider}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        dataProvider={dataProvider(API_URL)}
        authProvider={authProvider}
        LoginPage={AuthPage}
        resources={[
          {
            name: "users",
            list: UserList,
          },
        ]}
        Title={Title}
        Header={Header}
        Sider={Sider}
        Footer={Footer}
        Layout={Layout}
        OffLayoutArea={OffLayoutArea}
      >
        <Component {...pageProps} />
      </Refine>
    </RefineKbarProvider>
  );
}

export default MyApp;
