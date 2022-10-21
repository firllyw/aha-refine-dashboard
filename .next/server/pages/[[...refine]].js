"use strict";
(() => {
var exports = {};
exports.id = 517;
exports.ids = [517];
exports.modules = {

/***/ 554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _pankod_refine_nextjs_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(999);
/* harmony import */ var _pankod_refine_nextjs_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pankod_refine_nextjs_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pankod_refine_simple_rest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(215);
/* harmony import */ var _pankod_refine_simple_rest__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pankod_refine_simple_rest__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_authProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(597);
const _excluded = ["isAuthenticated"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const API_URL = "https://api.fake-rest.refine.dev";

const getServerSideProps = async context => {
  const {
    resource,
    action,
    id
  } = (0,_pankod_refine_nextjs_router__WEBPACK_IMPORTED_MODULE_0__.handleRefineParams)(context.params?.refine);

  const _await$checkAuthentic = await (0,_pankod_refine_nextjs_router__WEBPACK_IMPORTED_MODULE_0__.checkAuthentication)(src_authProvider__WEBPACK_IMPORTED_MODULE_2__/* .authProvider */ .b, context),
        {
    isAuthenticated
  } = _await$checkAuthentic,
        props = _objectWithoutProperties(_await$checkAuthentic, _excluded);

  if (!isAuthenticated) {
    return props;
  }

  try {
    if (resource && action === "show" && id) {
      const data = await _pankod_refine_simple_rest__WEBPACK_IMPORTED_MODULE_1___default()(API_URL).getOne({
        resource: resource.slice(resource.lastIndexOf("/") + 1),
        id
      });
      return {
        props: {
          initialData: data
        }
      };
    } else if (resource && !action && !id) {
      const data = await _pankod_refine_simple_rest__WEBPACK_IMPORTED_MODULE_1___default()(API_URL).getList({
        resource: resource.slice(resource.lastIndexOf("/") + 1)
      });
      return {
        props: {
          initialData: data
        }
      };
    }
  } catch (error) {
    return {
      props: {}
    };
  }

  return {
    props: {}
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_pankod_refine_nextjs_router__WEBPACK_IMPORTED_MODULE_0__.NextRouteComponent);
/**
 * To define a custom initial route for refine to redirect and start with:
 *
 * Bind the `initialRoute` value to the `NextRouteComponent` like the following:
 *
 * export default NextRouteComponent.bind({ initialRoute: "/posts" });
 *
 **/

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [597], () => (__webpack_exec__(554)));
module.exports = __webpack_exports__;

})();