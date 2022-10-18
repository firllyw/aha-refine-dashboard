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
import { PostList, PostCreate, PostEdit, PostShow } from "@components/posts";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "@components/layout";

const API_URL = "https://api.fake-rest.refine.dev";

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
            name: "posts",
            list: PostList,
            create: PostCreate,
            edit: PostEdit,
            show: PostShow,
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
