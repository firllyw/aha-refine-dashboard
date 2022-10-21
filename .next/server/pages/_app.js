"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "@pankod/refine-core"
const refine_core_namespaceObject = require("@pankod/refine-core");
;// CONCATENATED MODULE: external "@pankod/refine-antd"
const refine_antd_namespaceObject = require("@pankod/refine-antd");
// EXTERNAL MODULE: external "@pankod/refine-nextjs-router"
var refine_nextjs_router_ = __webpack_require__(999);
var refine_nextjs_router_default = /*#__PURE__*/__webpack_require__.n(refine_nextjs_router_);
// EXTERNAL MODULE: external "@pankod/refine-simple-rest"
var refine_simple_rest_ = __webpack_require__(215);
var refine_simple_rest_default = /*#__PURE__*/__webpack_require__.n(refine_simple_rest_);
;// CONCATENATED MODULE: external "@pankod/refine-kbar"
const refine_kbar_namespaceObject = require("@pankod/refine-kbar");
// EXTERNAL MODULE: ./src/authProvider.ts
var authProvider = __webpack_require__(597);
;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
;// CONCATENATED MODULE: ./src/components/users/list.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const UserList = ({
  initialData
}) => {
  const {
    tableProps,
    sorter
  } = (0,refine_antd_namespaceObject.useTable)({
    queryOptions: {
      initialData
    }
  });
  return /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.List, {
    children: /*#__PURE__*/(0,jsx_runtime_namespaceObject.jsxs)(refine_antd_namespaceObject.Table, _objectSpread(_objectSpread({}, tableProps), {}, {
      rowKey: "id",
      children: [/*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.Table.Column, {
        dataIndex: "id",
        title: "ID",
        render: value => /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.TextField, {
          value: value
        }),
        defaultSortOrder: (0,refine_antd_namespaceObject.getDefaultSortOrder)("id", sorter),
        sorter: true
      }, "id"), /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.Table.Column, {
        dataIndex: "first_name",
        title: "First Name",
        render: value => /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.TextField, {
          value: value
        }),
        defaultSortOrder: (0,refine_antd_namespaceObject.getDefaultSortOrder)("first_name", sorter),
        sorter: true
      }, "first_name"), /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.Table.Column, {
        dataIndex: "last_name",
        title: "Last Name",
        render: value => /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.TextField, {
          value: value
        }),
        defaultSortOrder: (0,refine_antd_namespaceObject.getDefaultSortOrder)("last_name", sorter),
        sorter: true
      }, "last_name"), /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.Table.Column, {
        dataIndex: "email",
        title: "Email At",
        render: value => /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.TextField, {
          value: value
        }),
        defaultSortOrder: (0,refine_antd_namespaceObject.getDefaultSortOrder)("email", sorter),
        sorter: true
      }, "email"), /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.Table.Column, {
        dataIndex: "login_count",
        title: "Login Count",
        render: value => /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.TextField, {
          value: value
        }),
        defaultSortOrder: (0,refine_antd_namespaceObject.getDefaultSortOrder)("login_count", sorter),
        sorter: true
      }, "login_count"), /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.Table.Column, {
        dataIndex: "last_signed_in",
        title: "Last Signed in",
        render: value => /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.DateField, {
          value: value,
          format: "LLL"
        }),
        defaultSortOrder: (0,refine_antd_namespaceObject.getDefaultSortOrder)("login_count", sorter),
        sorter: true
      }, "last_signed_in")]
    }))
  });
};
;// CONCATENATED MODULE: external "react-markdown"
const external_react_markdown_namespaceObject = require("react-markdown");
;// CONCATENATED MODULE: external "react-mde"
const external_react_mde_namespaceObject = require("react-mde");
;// CONCATENATED MODULE: ./src/components/users/create.tsx
function create_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function create_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? create_ownKeys(Object(source), !0).forEach(function (key) { create_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : create_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function create_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const PostCreate = () => {
  const {
    0: selectedTab,
    1: setSelectedTab
  } = useState("write");
  const {
    formProps,
    saveButtonProps
  } = useForm();
  const {
    selectProps: categorySelectProps
  } = useSelect({
    resource: "categories"
  });
  return /*#__PURE__*/_jsx(Create, {
    saveButtonProps: saveButtonProps,
    children: /*#__PURE__*/_jsxs(Form, create_objectSpread(create_objectSpread({}, formProps), {}, {
      layout: "vertical",
      children: [/*#__PURE__*/_jsx(Form.Item, {
        label: "Title",
        name: "title",
        rules: [{
          required: true
        }],
        children: /*#__PURE__*/_jsx(Input, {})
      }), /*#__PURE__*/_jsx(Form.Item, {
        label: "Status",
        name: "status",
        rules: [{
          required: true
        }],
        children: /*#__PURE__*/_jsx(Select, {
          options: [{
            label: "published",
            value: "published"
          }, {
            label: "draft",
            value: "draft"
          }, {
            label: "rejected",
            value: "rejected"
          }]
        })
      }), /*#__PURE__*/_jsx(Form.Item, {
        label: "Category",
        name: ["category", "id"],
        rules: [{
          required: true
        }],
        children: /*#__PURE__*/_jsx(Select, create_objectSpread({}, categorySelectProps))
      }), /*#__PURE__*/_jsx(Form.Item, {
        label: "Content",
        name: "content",
        rules: [{
          required: true
        }],
        children: /*#__PURE__*/_jsx(ReactMde, {
          selectedTab: selectedTab,
          onTabChange: setSelectedTab,
          generateMarkdownPreview: markdown => Promise.resolve( /*#__PURE__*/_jsx(ReactMarkdown, {
            children: markdown
          }))
        })
      })]
    }))
  });
};
;// CONCATENATED MODULE: ./src/components/users/edit.tsx
function edit_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function edit_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? edit_ownKeys(Object(source), !0).forEach(function (key) { edit_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : edit_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function edit_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const PostEdit = () => {
  const {
    0: selectedTab,
    1: setSelectedTab
  } = useState("write");
  const {
    formProps,
    saveButtonProps,
    queryResult
  } = useForm();
  const {
    selectProps: categorySelectProps
  } = useSelect({
    resource: "categories",
    defaultValue: queryResult?.data?.data.category.id
  });
  return /*#__PURE__*/_jsx(Edit, {
    saveButtonProps: saveButtonProps,
    children: /*#__PURE__*/_jsxs(Form, edit_objectSpread(edit_objectSpread({}, formProps), {}, {
      layout: "vertical",
      children: [/*#__PURE__*/_jsx(Form.Item, {
        label: "Title",
        name: "title",
        rules: [{
          required: true
        }],
        children: /*#__PURE__*/_jsx(Input, {})
      }), /*#__PURE__*/_jsx(Form.Item, {
        label: "Status",
        name: "status",
        rules: [{
          required: true
        }],
        children: /*#__PURE__*/_jsx(Select, {
          options: [{
            label: "published",
            value: "published"
          }, {
            label: "draft",
            value: "draft"
          }, {
            label: "rejected",
            value: "rejected"
          }]
        })
      }), /*#__PURE__*/_jsx(Form.Item, {
        label: "Category",
        name: ["category", "id"],
        rules: [{
          required: true
        }],
        children: /*#__PURE__*/_jsx(Select, edit_objectSpread({}, categorySelectProps))
      }), /*#__PURE__*/_jsx(Form.Item, {
        label: "Content",
        name: "content",
        rules: [{
          required: true
        }],
        children: /*#__PURE__*/_jsx(ReactMde, {
          selectedTab: selectedTab,
          onTabChange: setSelectedTab,
          generateMarkdownPreview: markdown => Promise.resolve( /*#__PURE__*/_jsx(ReactMarkdown, {
            children: markdown
          }))
        })
      })]
    }))
  });
};
;// CONCATENATED MODULE: ./src/components/users/show.tsx




const {
  Title,
  Text
} = refine_antd_namespaceObject.Typography;
const PostShow = () => {
  const {
    queryResult
  } = useShow();
  const {
    data,
    isLoading
  } = queryResult;
  const record = data?.data;
  const {
    data: categoryData
  } = useOne({
    resource: "categories",
    id: record?.category.id ?? "",
    queryOptions: {
      enabled: !!record?.category.id
    }
  });
  return /*#__PURE__*/_jsxs(Show, {
    isLoading: isLoading,
    children: [/*#__PURE__*/_jsx(Title, {
      level: 5,
      children: "Title"
    }), /*#__PURE__*/_jsx(Text, {
      children: record?.title
    }), /*#__PURE__*/_jsx(Title, {
      level: 5,
      children: "Status"
    }), /*#__PURE__*/_jsx(Text, {
      children: /*#__PURE__*/_jsx(Tag, {
        children: record?.status
      })
    }), /*#__PURE__*/_jsx(Title, {
      level: 5,
      children: "Category"
    }), /*#__PURE__*/_jsx(Text, {
      children: categoryData?.data.title
    }), /*#__PURE__*/_jsx(Title, {
      level: 5,
      children: "Content"
    }), /*#__PURE__*/_jsx(MarkdownField, {
      value: record?.content
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/users/index.ts




;// CONCATENATED MODULE: ./src/components/layout/footer/index.tsx
const Footer = () => null;
;// CONCATENATED MODULE: ./src/components/layout/header/index.tsx





const {
  Text: header_Text
} = refine_antd_namespaceObject.Typography;
const Header = () => {
  const {
    data: user
  } = (0,refine_core_namespaceObject.useGetIdentity)();
  const shouldRenderHeader = user && (user.name || user.avatar);
  return shouldRenderHeader ? /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.AntdLayout.Header, {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "0px 24px",
      height: "64px",
      backgroundColor: "#FFF"
    },
    children: /*#__PURE__*/(0,jsx_runtime_namespaceObject.jsxs)(refine_antd_namespaceObject.Space, {
      children: [user.name && /*#__PURE__*/jsx_runtime_namespaceObject.jsx(header_Text, {
        ellipsis: true,
        strong: true,
        children: user.name
      }), user.avatar && /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.Avatar, {
        size: "large",
        src: user?.avatar,
        alt: user?.name
      })]
    })
  }) : null;
};
;// CONCATENATED MODULE: ./src/components/layout/title/index.tsx



const title_Title = ({
  collapsed
}) => /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_nextjs_router_.Link, {
  href: "/",
  children: collapsed ? /*#__PURE__*/jsx_runtime_namespaceObject.jsx("img", {
    src: "/refine-collapsed.svg",
    alt: "Refine",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "12px 24px"
    }
  }) : /*#__PURE__*/jsx_runtime_namespaceObject.jsx("img", {
    src: "/refine.svg",
    alt: "Refine",
    style: {
      width: "200px",
      padding: "12px 24px"
    }
  })
});
;// CONCATENATED MODULE: ./src/components/layout/sider/styles.ts
const antLayoutSider = {
  position: "relative"
};
const antLayoutSiderMobile = {
  position: "fixed",
  height: "100vh",
  zIndex: 999
};
;// CONCATENATED MODULE: ./src/components/layout/sider/index.tsx








const {
  UnorderedListOutlined,
  LogoutOutlined
} = refine_antd_namespaceObject.Icons;
const {
  SubMenu
} = refine_antd_namespaceObject.Menu;
const Sider = ({
  render
}) => {
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,external_react_.useState)(false);
  const isExistAuthentication = (0,refine_core_namespaceObject.useIsExistAuthentication)();
  const {
    Link
  } = (0,refine_core_namespaceObject.useRouterContext)();
  const {
    mutate: mutateLogout
  } = (0,refine_core_namespaceObject.useLogout)();
  const Title = (0,refine_core_namespaceObject.useTitle)();
  const translate = (0,refine_core_namespaceObject.useTranslate)();
  const {
    menuItems,
    selectedKey,
    defaultOpenKeys
  } = (0,refine_core_namespaceObject.useMenu)();
  const breakpoint = refine_antd_namespaceObject.Grid.useBreakpoint();
  const {
    hasDashboard
  } = (0,refine_core_namespaceObject.useRefineContext)();
  const isMobile = typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;
  const RenderToTitle = Title ?? title_Title;

  const renderTreeView = (tree, selectedKey) => {
    return tree.map(item => {
      const {
        icon,
        label,
        route,
        name,
        children,
        parentName
      } = item;

      if (children.length > 0) {
        return /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_core_namespaceObject.CanAccess, {
          resource: name.toLowerCase(),
          action: "list",
          params: {
            resource: item
          },
          children: /*#__PURE__*/jsx_runtime_namespaceObject.jsx(SubMenu, {
            icon: icon ?? /*#__PURE__*/jsx_runtime_namespaceObject.jsx(UnorderedListOutlined, {}),
            title: label,
            children: renderTreeView(children, selectedKey)
          }, route)
        }, route);
      }

      const isSelected = route === selectedKey;
      const isRoute = !(parentName !== undefined && children.length === 0);
      return /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_core_namespaceObject.CanAccess, {
        resource: name.toLowerCase(),
        action: "list",
        params: {
          resource: item
        },
        children: /*#__PURE__*/(0,jsx_runtime_namespaceObject.jsxs)(refine_antd_namespaceObject.Menu.Item, {
          style: {
            fontWeight: isSelected ? "bold" : "normal"
          },
          icon: icon ?? (isRoute && /*#__PURE__*/jsx_runtime_namespaceObject.jsx(UnorderedListOutlined, {})),
          children: [/*#__PURE__*/jsx_runtime_namespaceObject.jsx(Link, {
            to: route,
            children: label
          }), !collapsed && isSelected && /*#__PURE__*/jsx_runtime_namespaceObject.jsx("div", {
            className: "ant-menu-tree-arrow"
          })]
        }, route)
      }, route);
    });
  };

  const logout = isExistAuthentication && /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.Menu.Item, {
    onClick: () => mutateLogout(),
    icon: /*#__PURE__*/jsx_runtime_namespaceObject.jsx(LogoutOutlined, {}),
    children: translate("buttons.logout", "Logout")
  }, "logout");

  const dashboard = hasDashboard && /*#__PURE__*/(0,jsx_runtime_namespaceObject.jsxs)(refine_antd_namespaceObject.Menu.Item, {
    style: {
      fontWeight: selectedKey === "/" ? "bold" : "normal"
    },
    icon: /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.Icons.DashboardOutlined, {}),
    children: [/*#__PURE__*/jsx_runtime_namespaceObject.jsx(Link, {
      href: "/",
      children: translate("dashboard.title", "Dashboard")
    }), !collapsed && selectedKey === "/" && /*#__PURE__*/jsx_runtime_namespaceObject.jsx("div", {
      className: "ant-menu-tree-arrow"
    })]
  }, "dashboard");

  const items = renderTreeView(menuItems, selectedKey);

  const renderSider = () => {
    if (render) {
      return render({
        dashboard,
        items,
        logout,
        collapsed
      });
    }

    return /*#__PURE__*/(0,jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
      children: [dashboard, items, logout]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_namespaceObject.jsxs)(refine_antd_namespaceObject.AntdLayout.Sider, {
    collapsible: true,
    collapsed: collapsed,
    onCollapse: collapsed => setCollapsed(collapsed),
    collapsedWidth: isMobile ? 0 : 80,
    breakpoint: "lg",
    style: isMobile ? antLayoutSiderMobile : antLayoutSider,
    children: [/*#__PURE__*/jsx_runtime_namespaceObject.jsx(RenderToTitle, {
      collapsed: collapsed
    }), /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.Menu, {
      selectedKeys: [selectedKey],
      defaultOpenKeys: defaultOpenKeys,
      mode: "inline",
      onClick: () => {
        if (!breakpoint.lg) {
          setCollapsed(true);
        }
      },
      children: renderSider()
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/layout/layout/index.tsx




const Layout = ({
  children,
  Sider,
  Header,
  Footer,
  OffLayoutArea
}) => {
  const breakpoint = refine_antd_namespaceObject.Grid.useBreakpoint();
  return /*#__PURE__*/(0,jsx_runtime_namespaceObject.jsxs)(refine_antd_namespaceObject.AntdLayout, {
    style: {
      minHeight: "100vh",
      flexDirection: "row"
    },
    children: [Sider && /*#__PURE__*/jsx_runtime_namespaceObject.jsx(Sider, {}), /*#__PURE__*/(0,jsx_runtime_namespaceObject.jsxs)(refine_antd_namespaceObject.AntdLayout, {
      children: [Header && /*#__PURE__*/jsx_runtime_namespaceObject.jsx(Header, {}), /*#__PURE__*/(0,jsx_runtime_namespaceObject.jsxs)(refine_antd_namespaceObject.AntdLayout.Content, {
        children: [/*#__PURE__*/jsx_runtime_namespaceObject.jsx("div", {
          style: {
            padding: breakpoint.sm ? 24 : 12,
            minHeight: 360
          },
          children: children
        }), OffLayoutArea && /*#__PURE__*/jsx_runtime_namespaceObject.jsx(OffLayoutArea, {})]
      }), Footer && /*#__PURE__*/jsx_runtime_namespaceObject.jsx(Footer, {})]
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/layout/offLayoutArea/index.tsx



const OffLayoutArea = () => {
  return /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_kbar_namespaceObject.RefineKbar, {});
};
;// CONCATENATED MODULE: ./src/components/layout/index.ts






;// CONCATENATED MODULE: ./pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? _app_ownKeys(Object(source), !0).forEach(function (key) { _app_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const API_URL = "http://localhost:3001";

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_kbar_namespaceObject.RefineKbarProvider, {
    children: /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_core_namespaceObject.Refine, {
      routerProvider: (refine_nextjs_router_default()),
      notificationProvider: refine_antd_namespaceObject.notificationProvider,
      ReadyPage: refine_antd_namespaceObject.ReadyPage,
      catchAll: /*#__PURE__*/jsx_runtime_namespaceObject.jsx(refine_antd_namespaceObject.ErrorComponent, {}),
      dataProvider: refine_simple_rest_default()(API_URL),
      authProvider: authProvider/* authProvider */.b,
      LoginPage: refine_antd_namespaceObject.AuthPage,
      resources: [{
        name: "users",
        list: UserList
      }],
      Title: title_Title,
      Header: Header,
      Sider: Sider,
      Footer: Footer,
      Layout: Layout,
      OffLayoutArea: OffLayoutArea,
      children: /*#__PURE__*/jsx_runtime_namespaceObject.jsx(Component, _app_objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 999:
/***/ ((module) => {

module.exports = require("@pankod/refine-nextjs-router");

/***/ }),

/***/ 215:
/***/ ((module) => {

module.exports = require("@pankod/refine-simple-rest");

/***/ }),

/***/ 53:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [597], () => (__webpack_exec__(560)));
module.exports = __webpack_exports__;

})();