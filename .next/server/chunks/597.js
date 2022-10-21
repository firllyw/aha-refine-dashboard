"use strict";
exports.id = 597;
exports.ids = [597];
exports.modules = {

/***/ 597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ authProvider)
/* harmony export */ });
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);

const mockUsers = [{
  username: "admin",
  email: "admin@refine.dev",
  roles: ["admin"]
}, {
  username: "editor",
  email: "editor@refine.dev",
  roles: ["editor"]
}];
const authProvider = {
  login: ({
    email,
    username,
    password,
    remember
  }) => {
    // Suppose we actually send a request to the back end here.
    const user = mockUsers[0];

    if (user) {
      nookies__WEBPACK_IMPORTED_MODULE_0___default().set(null, "auth", JSON.stringify(user), {
        maxAge: 30 * 24 * 60 * 60,
        path: "/"
      });
      return Promise.resolve();
    }

    return Promise.reject();
  },
  logout: () => {
    nookies__WEBPACK_IMPORTED_MODULE_0___default().destroy(null, "auth");
    return Promise.resolve();
  },
  checkError: error => {
    if (error && error.statusCode === 401) {
      return Promise.reject();
    }

    return Promise.resolve();
  },
  checkAuth: ctx => {
    const cookies = nookies__WEBPACK_IMPORTED_MODULE_0___default().get(ctx);
    return cookies["auth"] ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => {
    const auth = nookies__WEBPACK_IMPORTED_MODULE_0___default().get()["auth"];

    if (auth) {
      const parsedUser = JSON.parse(auth);
      return Promise.resolve(parsedUser.roles);
    }

    return Promise.reject();
  },
  getUserIdentity: () => {
    const auth = nookies__WEBPACK_IMPORTED_MODULE_0___default().get()["auth"];

    if (auth) {
      const parsedUser = JSON.parse(auth);
      return Promise.resolve(parsedUser.username);
    }

    return Promise.reject();
  }
};

/***/ })

};
;