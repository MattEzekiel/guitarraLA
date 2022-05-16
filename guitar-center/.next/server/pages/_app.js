/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/normalize.css */ \"./styles/normalize.css\");\n/* harmony import */ var _styles_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: carrito , 1: setCarrito  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        var ref;\n        const carritoLS = (ref = JSON.parse(localStorage.getItem(\"carrito\"))) !== null && ref !== void 0 ? ref : [];\n        if (carritoLS.length !== 0) {\n            setCarrito(carritoLS);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        localStorage.setItem(\"carrito\", JSON.stringify(carrito));\n    }, [\n        carrito\n    ]);\n    const agregarCarrito = (producto)=>{\n        if (carrito.some((articulo)=>articulo.id === producto.id\n        )) {\n            const carritoActualizado = carrito.map((articulo)=>{\n                if (articulo.id === producto.id) {\n                    articulo.cantidad = producto.cantidad;\n                }\n                return articulo;\n            });\n            setCarrito(carritoActualizado);\n        } else {\n            setCarrito([\n                ...carrito,\n                producto\n            ]);\n        }\n    };\n    const actualizarCantidad = (producto)=>{\n        const carritoActualizado = carrito.map((articulo)=>{\n            if (articulo.id === producto.id) {\n                articulo.cantidad = producto.cantidad;\n            }\n            return articulo;\n        });\n        setCarrito(carritoActualizado);\n    };\n    const eliminarProducto = (id)=>{\n        const carritoActualizado = carrito.filter((producto)=>producto.id !== id\n        );\n        setCarrito(carritoActualizado);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        carrito: carrito,\n        agregarCarrito: agregarCarrito,\n        actualizarCantidad: actualizarCantidad,\n        eliminarProducto: eliminarProducto\n    }, void 0, false, {\n        fileName: \"E:\\\\Documentos\\\\DISE\\xd1O WEB\\\\Cursos\\\\React - Hooks Context Redux MERN\\\\guitarraLA\\\\guitar-center\\\\pages\\\\_app.js\",\n        lineNumber: 51,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvbm9ybWFsaXplLmNzcyc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgW2NhcnJpdG8sIHNldENhcnJpdG9dID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2Fycml0b0xTID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2Fycml0bycpKSA/PyBbXTtcbiAgICBpZiAoY2Fycml0b0xTLmxlbmd0aCAhPT0gMCkge1xuICAgICAgc2V0Q2Fycml0byhjYXJyaXRvTFMpO1xuICAgIH1cbiAgfSxbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2Fycml0bycsSlNPTi5zdHJpbmdpZnkoY2Fycml0bykpO1xuICB9LFtjYXJyaXRvXSk7XG5cbiAgY29uc3QgYWdyZWdhckNhcnJpdG8gPSBwcm9kdWN0byA9PiB7XG4gICAgaWYgKGNhcnJpdG8uc29tZShhcnRpY3VsbyA9PiBhcnRpY3Vsby5pZCA9PT0gcHJvZHVjdG8uaWQpKSB7XG4gICAgICBjb25zdCBjYXJyaXRvQWN0dWFsaXphZG8gPSBjYXJyaXRvLm1hcCggYXJ0aWN1bG8gPT4ge1xuICAgICAgICBpZiAoYXJ0aWN1bG8uaWQgPT09IHByb2R1Y3RvLmlkKSB7XG4gICAgICAgICAgYXJ0aWN1bG8uY2FudGlkYWQgPSBwcm9kdWN0by5jYW50aWRhZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJ0aWN1bG87XG4gICAgICB9KTtcblxuICAgICAgc2V0Q2Fycml0byhjYXJyaXRvQWN0dWFsaXphZG8pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldENhcnJpdG8oWy4uLmNhcnJpdG8sIHByb2R1Y3RvXSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWN0dWFsaXphckNhbnRpZGFkID0gcHJvZHVjdG8gPT4ge1xuICAgIGNvbnN0IGNhcnJpdG9BY3R1YWxpemFkbyA9IGNhcnJpdG8ubWFwKCBhcnRpY3VsbyA9PiB7XG4gICAgICBpZiAoYXJ0aWN1bG8uaWQgPT09IHByb2R1Y3RvLmlkKSB7XG4gICAgICAgIGFydGljdWxvLmNhbnRpZGFkID0gcHJvZHVjdG8uY2FudGlkYWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJ0aWN1bG87XG4gICAgfSk7XG5cbiAgICBzZXRDYXJyaXRvKGNhcnJpdG9BY3R1YWxpemFkbyk7XG4gIH1cblxuICBjb25zdCBlbGltaW5hclByb2R1Y3RvID0gaWQgPT4ge1xuICAgIGNvbnN0IGNhcnJpdG9BY3R1YWxpemFkbyA9IGNhcnJpdG8uZmlsdGVyKCBwcm9kdWN0byA9PiBwcm9kdWN0by5pZCAhPT0gaWQpO1xuICAgIHNldENhcnJpdG8oY2Fycml0b0FjdHVhbGl6YWRvKTtcbiAgfVxuXG4gIHJldHVybiA8Q29tcG9uZW50XG4gICAgICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICAgICAgY2Fycml0bz17Y2Fycml0b31cbiAgICAgICAgICAgIGFncmVnYXJDYXJyaXRvPXthZ3JlZ2FyQ2Fycml0b31cbiAgICAgICAgICAgIGFjdHVhbGl6YXJDYW50aWRhZD17YWN0dWFsaXphckNhbnRpZGFkfVxuICAgICAgICAgICAgZWxpbWluYXJQcm9kdWN0bz17ZWxpbWluYXJQcm9kdWN0b31cbiAgICAgICAgICAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjYXJyaXRvIiwic2V0Q2Fycml0byIsIkpTT04iLCJjYXJyaXRvTFMiLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsZW5ndGgiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiYWdyZWdhckNhcnJpdG8iLCJwcm9kdWN0byIsInNvbWUiLCJhcnRpY3VsbyIsImlkIiwiY2Fycml0b0FjdHVhbGl6YWRvIiwibWFwIiwiY2FudGlkYWQiLCJhY3R1YWxpemFyQ2FudGlkYWQiLCJlbGltaW5hclByb2R1Y3RvIiwiZmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/normalize.css":
/*!******************************!*\
  !*** ./styles/normalize.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();