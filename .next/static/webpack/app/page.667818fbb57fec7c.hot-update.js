"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/homepage-header.tsx":
/*!************************************************!*\
  !*** ./src/app/components/homepage-header.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomepageHeader; },\n/* harmony export */   getHeaderClasses: function() { return /* binding */ getHeaderClasses; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default,getHeaderClasses auto */ \nvar _s = $RefreshSig$();\n\nconst words = [\n    \"developers.\",\n    \"designers.\",\n    \"creators.\",\n    \"everyone.\",\n    \"<END>\"\n];\nconst colour = [\n    \"text-[#00000]\",\n    \"text-[#ffb4ed] dark:text-[#FFD6F5]\",\n    \"text-[#FF8F8F]  dark:text-[#FF8F8F]\",\n    \"text-[#ffef40] dark:text-[#FFF7A1]\"\n];\nconst TITLE = \"commune ai\";\nconst TAGLINE = \"Renovating the way we build software for \";\nfunction HomepageHeader() {\n    _s();\n    // blinker\n    const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const [subIndex, setSubIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const [blink, setBlink] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    const [reverse, setReverse] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    // state of the scroll position and header height\n    const [scrollPosition, setScrollPosition] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const headerRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const [headerHeight, setHeaderHeight] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(20);\n    // typeWriter effect\n    // give me the context of this whole useEffect\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (index === words.length) return; // if end of words, return\n        // if subIndex is equal to the length of the word + 1 and index is not the last word and not reverse\n        if (subIndex === words[index].length + 1 && index !== words.length - 1 && !reverse) {\n            setReverse(true);\n            return;\n        }\n        // if subIndex is equal to 0 and reverse is true\n        if (subIndex === 0 && reverse) {\n            setReverse(false);\n            setIndex((prev)=>prev + 1);\n            return;\n        }\n        // if reverse is true, subIndex is not 0 and index is not the last word\n        if (index === words.length - 1) setIndex(()=>0);\n        // if reverse is true, subIndex is not 0 and index is not the last word\n        // if reverse is false, subIndex is not the length of the word and index is not the last word\n        const timeout = setTimeout(()=>{\n            setSubIndex((prev)=>prev + (reverse ? -1 : 1));\n        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 75, 25));\n        return ()=>clearTimeout(timeout);\n    }, [\n        subIndex,\n        index,\n        reverse\n    ]);\n    // blinker effect\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const timeout2 = setTimeout(()=>{\n            setBlink((prev)=>!prev);\n        }, 250);\n        if (index === words.length) return;\n        return ()=>clearTimeout(timeout2);\n    }, [\n        blink\n    ]);\n    // Handle scroll position\n    const handleScroll = ()=>{\n        const position = window.pageYOffset;\n        setScrollPosition(position);\n    };\n    // Add scroll event listener to window\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    // Get header height on mount and when window is resized\n    // This is to offset the scroll position so that the header\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        if (headerRef === null || headerRef === void 0 ? void 0 : headerRef.current) {\n            setHeaderHeight(headerRef.current.clientHeight);\n        }\n    }, [\n        headerRef.current\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        ref: headerRef,\n        className: \" dark:bg-[#161616] p-[4rem] py-32 text-center overflow-hidden \".concat(getHeaderClasses(scrollPosition, headerHeight), \" duration-500\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"gif/logo/CubesShufflingGIF.gif\",\n                alt: \"Commune Logo\",\n                className: \"block sm:hidden\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-10 py-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex lg:flex-row flex-col h-1/2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full lg:w-1/2 flex flex-col items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" w-auto sm:w-[710px] sm:h-[250px] \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \" text-4xl sm:text-6xl sm:pb-3 dark:text-white\",\n                                            children: TITLE\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"hidden sm:block\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"hero__subtitle text-xl sm:text-4xl\",\n                                                children: [\n                                                    TAGLINE,\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                        fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                                                        lineNumber: 96,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"hero__subtitle text-4xl \".concat(colour[index], \" font-semibold mb-5\"),\n                                                        children: \"\".concat(words[index].substring(0, subIndex)).concat(blink ? \"|\" : \"\")\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-30 h-10\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"docs/next/Introduction\",\n                                        className: \" hover:no-underline\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \" bg-blue-700 rounded-lg shadow-lg hover:shadow-2xl text-center hover:bg-blue-600 duration-200 text-white hover:text-white font-sans font-semibold justify-center px-2 py-2 hover:border-blue-300 hover:border-2 hover:border-solid\",\n                                            children: \"Get Started\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden sm:block w-full lg:w-[75%] h-full lg:-mr-44 \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"gif/logo/CubesShufflingGIF.gif\",\n                                alt: \"Commune Logo\",\n                                className: \"\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Product\\\\frontend\\\\src\\\\app\\\\components\\\\homepage-header.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(HomepageHeader, \"b/A3B2TLYoZGp74Znlfj+TuSBKc=\");\n_c = HomepageHeader;\nconst getHeaderClasses = (position, height)=>{\n    if (position > height / 2) {\n        return \"rounded-b-lg shadow-lg mx-5\";\n    }\n    return \"\";\n};\nvar _c;\n$RefreshReg$(_c, \"HomepageHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS1oZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDMEI7QUFFMUIsTUFBTUMsUUFBa0I7SUFBQztJQUFlO0lBQWM7SUFBYTtJQUFhO0NBQVE7QUFDeEYsTUFBTUMsU0FBbUI7SUFBQztJQUFpQjtJQUFzQztJQUF1QztDQUFxQztBQUU3SixNQUFNQyxRQUFRO0FBQ2QsTUFBTUMsVUFBVTtBQUVELFNBQVNDOztJQUN0QixVQUFVO0lBQ1YsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLHFEQUFjLENBQUM7SUFDekMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLHFEQUFjLENBQUM7SUFDL0MsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLHFEQUFjLENBQUM7SUFDekMsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLHFEQUFjLENBQUM7SUFFN0MsaURBQWlEO0lBQ2pELE1BQU0sQ0FBQ2UsZ0JBQWdCQyxrQkFBa0IsR0FBR2hCLHFEQUFjLENBQUM7SUFDM0QsTUFBTWlCLFlBQVlqQixtREFBWSxDQUFNO0lBQ3BDLE1BQU0sQ0FBQ21CLGNBQWNDLGdCQUFnQixHQUFHcEIscURBQWMsQ0FBQztJQUd2RCxvQkFBb0I7SUFDcEIsOENBQThDO0lBQzlDQSxzREFBZSxDQUFDO1FBQ2QsSUFBSU0sVUFBVUwsTUFBTXFCLE1BQU0sRUFBRSxRQUFRLDBCQUEwQjtRQUM5RCxvR0FBb0c7UUFDcEcsSUFBSWIsYUFBYVIsS0FBSyxDQUFDSyxNQUFNLENBQUNnQixNQUFNLEdBQUcsS0FBS2hCLFVBQVVMLE1BQU1xQixNQUFNLEdBQUcsS0FBSyxDQUFDVCxTQUFTO1lBQ2xGQyxXQUFXO1lBQ1g7UUFDRjtRQUNBLGdEQUFnRDtRQUNoRCxJQUFJTCxhQUFhLEtBQUtJLFNBQVM7WUFDN0JDLFdBQVc7WUFDWFAsU0FBUyxDQUFDZ0IsT0FBU0EsT0FBTztZQUMxQjtRQUNGO1FBQ0EsdUVBQXVFO1FBQ3ZFLElBQUlqQixVQUFVTCxNQUFNcUIsTUFBTSxHQUFHLEdBQzNCZixTQUFTLElBQU07UUFDakIsdUVBQXVFO1FBQ3ZFLDZGQUE2RjtRQUM3RixNQUFNaUIsVUFBVUMsV0FBVztZQUN6QmYsWUFBWSxDQUFDYSxPQUFTQSxPQUFRVixDQUFBQSxVQUFVLENBQUMsSUFBSTtRQUMvQyxHQUFHYSxLQUFLQyxHQUFHLENBQUNkLFVBQVUsS0FBS0osYUFBYVIsS0FBSyxDQUFDSyxNQUFNLENBQUNnQixNQUFNLEdBQUcsT0FDNUQsSUFBSTtRQUNOLE9BQU8sSUFBTU0sYUFBYUo7SUFDNUIsR0FBRztRQUFDZjtRQUFVSDtRQUFPTztLQUFRO0lBRzdCLGlCQUFpQjtJQUNqQmIsc0RBQWUsQ0FBQztRQUNkLE1BQU02QixXQUFXSixXQUFXO1lBQzFCYixTQUFTLENBQUNXLE9BQVMsQ0FBQ0E7UUFDdEIsR0FBRztRQUNILElBQUlqQixVQUFVTCxNQUFNcUIsTUFBTSxFQUFFO1FBRTVCLE9BQU8sSUFBTU0sYUFBYUM7SUFDNUIsR0FBRztRQUFDbEI7S0FBTTtJQUVWLHlCQUF5QjtJQUN6QixNQUFNbUIsZUFBZTtRQUNuQixNQUFNQyxXQUFXQyxPQUFPQyxXQUFXO1FBQ25DakIsa0JBQWtCZTtJQUNwQjtJQUVBLHNDQUFzQztJQUN0Qy9CLHNEQUFlLENBQUM7UUFDZGdDLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVKLGNBQWM7WUFBRUssU0FBUztRQUFLO1FBRWhFLE9BQU87WUFDTEgsT0FBT0ksbUJBQW1CLENBQUMsVUFBVU47UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCx3REFBd0Q7SUFDeEQsMkRBQTJEO0lBQzNEOUIsc0RBQWUsQ0FBQztRQUNkLElBQUlpQixzQkFBQUEsZ0NBQUFBLFVBQVdvQixPQUFPLEVBQUU7WUFDdEJqQixnQkFBZ0JILFVBQVVvQixPQUFPLENBQUNDLFlBQVk7UUFDaEQ7SUFDRixHQUFHO1FBQUNyQixVQUFVb0IsT0FBTztLQUFDO0lBRXRCLHFCQUNFLDhEQUFDRTtRQUFPQyxLQUFLdkI7UUFBV3dCLFdBQVcsaUVBQWdILE9BQS9DQyxpQkFBaUIzQixnQkFBZ0JJLGVBQWM7OzBCQUVqSiw4REFBQ3dCO2dCQUFJQyxLQUFJO2dCQUFpQ0MsS0FBSTtnQkFBZUosV0FBVTs7Ozs7OzBCQUN2RSw4REFBQ0s7Z0JBQUlMLFdBQVU7MEJBQ2IsNEVBQUNLO29CQUFJTCxXQUFVOztzQ0FDYiw4REFBQ0s7NEJBQUlMLFdBQVU7OzhDQUViLDhEQUFDSztvQ0FBSUwsV0FBVTs7c0RBQ2IsOERBQUNNOzRDQUFHTixXQUFVO3NEQUFpRHRDOzs7Ozs7c0RBQy9ELDhEQUFDMkM7NENBQUlMLFdBQVU7c0RBQ2IsNEVBQUNPO2dEQUFFUCxXQUFVOztvREFBc0NyQztrRUFDakQsOERBQUM2Qzs7Ozs7a0VBQ0QsOERBQUNDO3dEQUFLVCxXQUFXLDJCQUF5QyxPQUFkdkMsTUFBTSxDQUFDSSxNQUFNLEVBQUM7a0VBQXVCLEdBQXlDSyxPQUF0Q1YsS0FBSyxDQUFDSyxNQUFNLENBQUM2QyxTQUFTLENBQUMsR0FBRzFDLFdBQTZCLE9BQWpCRSxRQUFRLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUk5SSw4REFBQ21DO29DQUFJTCxXQUFVOzhDQUNiLDRFQUFDVzt3Q0FBRUMsTUFBSzt3Q0FBeUJaLFdBQVU7a0RBQ3pDLDRFQUFDSzs0Q0FBSUwsV0FBVTtzREFBc087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBUzNQLDhEQUFDSzs0QkFBSUwsV0FBVTtzQ0FDYiw0RUFBQ0U7Z0NBQUlDLEtBQUk7Z0NBQWlDQyxLQUFJO2dDQUFlSixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5GO0dBL0d3QnBDO0tBQUFBO0FBaUhqQixNQUFNcUMsbUJBQW1CLENBQUNYLFVBQWtCdUI7SUFDakQsSUFBSXZCLFdBQVl1QixTQUFTLEdBQUk7UUFDM0IsT0FBTztJQUNUO0lBQ0EsT0FBTztBQUNULEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2hvbWVwYWdlLWhlYWRlci50c3g/MWYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHdvcmRzOiBzdHJpbmdbXSA9IFtcImRldmVsb3BlcnMuXCIsIFwiZGVzaWduZXJzLlwiLCBcImNyZWF0b3JzLlwiLCBcImV2ZXJ5b25lLlwiLCBcIjxFTkQ+XCJdO1xyXG5jb25zdCBjb2xvdXI6IHN0cmluZ1tdID0gW1widGV4dC1bIzAwMDAwXVwiLCBcInRleHQtWyNmZmI0ZWRdIGRhcms6dGV4dC1bI0ZGRDZGNV1cIiwgXCJ0ZXh0LVsjRkY4RjhGXSAgZGFyazp0ZXh0LVsjRkY4RjhGXVwiLCBcInRleHQtWyNmZmVmNDBdIGRhcms6dGV4dC1bI0ZGRjdBMV1cIl07XHJcblxyXG5jb25zdCBUSVRMRSA9IFwiY29tbXVuZSBhaVwiO1xyXG5jb25zdCBUQUdMSU5FID0gXCJSZW5vdmF0aW5nIHRoZSB3YXkgd2UgYnVpbGQgc29mdHdhcmUgZm9yIFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2VIZWFkZXIoKSB7XHJcbiAgLy8gYmxpbmtlclxyXG4gIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3N1YkluZGV4LCBzZXRTdWJJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYmxpbmssIHNldEJsaW5rXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtyZXZlcnNlLCBzZXRSZXZlcnNlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gc3RhdGUgb2YgdGhlIHNjcm9sbCBwb3NpdGlvbiBhbmQgaGVhZGVyIGhlaWdodFxyXG4gIGNvbnN0IFtzY3JvbGxQb3NpdGlvbiwgc2V0U2Nyb2xsUG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGVhZGVyUmVmID0gUmVhY3QudXNlUmVmPGFueT4obnVsbCk7XHJcbiAgY29uc3QgW2hlYWRlckhlaWdodCwgc2V0SGVhZGVySGVpZ2h0XSA9IFJlYWN0LnVzZVN0YXRlKDIwKTtcclxuXHJcblxyXG4gIC8vIHR5cGVXcml0ZXIgZWZmZWN0XHJcbiAgLy8gZ2l2ZSBtZSB0aGUgY29udGV4dCBvZiB0aGlzIHdob2xlIHVzZUVmZmVjdFxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaW5kZXggPT09IHdvcmRzLmxlbmd0aCkgcmV0dXJuOyAvLyBpZiBlbmQgb2Ygd29yZHMsIHJldHVyblxyXG4gICAgLy8gaWYgc3ViSW5kZXggaXMgZXF1YWwgdG8gdGhlIGxlbmd0aCBvZiB0aGUgd29yZCArIDEgYW5kIGluZGV4IGlzIG5vdCB0aGUgbGFzdCB3b3JkIGFuZCBub3QgcmV2ZXJzZVxyXG4gICAgaWYgKHN1YkluZGV4ID09PSB3b3Jkc1tpbmRleF0ubGVuZ3RoICsgMSAmJiBpbmRleCAhPT0gd29yZHMubGVuZ3RoIC0gMSAmJiAhcmV2ZXJzZSkge1xyXG4gICAgICBzZXRSZXZlcnNlKHRydWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBpZiBzdWJJbmRleCBpcyBlcXVhbCB0byAwIGFuZCByZXZlcnNlIGlzIHRydWVcclxuICAgIGlmIChzdWJJbmRleCA9PT0gMCAmJiByZXZlcnNlKSB7XHJcbiAgICAgIHNldFJldmVyc2UoZmFsc2UpO1xyXG4gICAgICBzZXRJbmRleCgocHJldikgPT4gcHJldiArIDEpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBpZiByZXZlcnNlIGlzIHRydWUsIHN1YkluZGV4IGlzIG5vdCAwIGFuZCBpbmRleCBpcyBub3QgdGhlIGxhc3Qgd29yZFxyXG4gICAgaWYgKGluZGV4ID09PSB3b3Jkcy5sZW5ndGggLSAxKVxyXG4gICAgICBzZXRJbmRleCgoKSA9PiAwKVxyXG4gICAgLy8gaWYgcmV2ZXJzZSBpcyB0cnVlLCBzdWJJbmRleCBpcyBub3QgMCBhbmQgaW5kZXggaXMgbm90IHRoZSBsYXN0IHdvcmRcclxuICAgIC8vIGlmIHJldmVyc2UgaXMgZmFsc2UsIHN1YkluZGV4IGlzIG5vdCB0aGUgbGVuZ3RoIG9mIHRoZSB3b3JkIGFuZCBpbmRleCBpcyBub3QgdGhlIGxhc3Qgd29yZFxyXG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTdWJJbmRleCgocHJldikgPT4gcHJldiArIChyZXZlcnNlID8gLTEgOiAxKSk7XHJcbiAgICB9LCBNYXRoLm1heChyZXZlcnNlID8gNzUgOiBzdWJJbmRleCA9PT0gd29yZHNbaW5kZXhdLmxlbmd0aCA/IDEwMDAgOlxyXG4gICAgICA3NSwgMjUpKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgfSwgW3N1YkluZGV4LCBpbmRleCwgcmV2ZXJzZV0pO1xyXG5cclxuXHJcbiAgLy8gYmxpbmtlciBlZmZlY3RcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGltZW91dDIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0QmxpbmsoKHByZXYpID0+ICFwcmV2KTtcclxuICAgIH0sIDI1MCk7XHJcbiAgICBpZiAoaW5kZXggPT09IHdvcmRzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dDIpO1xyXG4gIH0sIFtibGlua10pO1xyXG5cclxuICAvLyBIYW5kbGUgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICBzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgfTtcclxuXHJcbiAgLy8gQWRkIHNjcm9sbCBldmVudCBsaXN0ZW5lciB0byB3aW5kb3dcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIEdldCBoZWFkZXIgaGVpZ2h0IG9uIG1vdW50IGFuZCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXHJcbiAgLy8gVGhpcyBpcyB0byBvZmZzZXQgdGhlIHNjcm9sbCBwb3NpdGlvbiBzbyB0aGF0IHRoZSBoZWFkZXJcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGhlYWRlclJlZj8uY3VycmVudCkge1xyXG4gICAgICBzZXRIZWFkZXJIZWlnaHQoaGVhZGVyUmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0KTtcclxuICAgIH1cclxuICB9LCBbaGVhZGVyUmVmLmN1cnJlbnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgcmVmPXtoZWFkZXJSZWZ9IGNsYXNzTmFtZT17YCBkYXJrOmJnLVsjMTYxNjE2XSBwLVs0cmVtXSBweS0zMiB0ZXh0LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gJHtnZXRIZWFkZXJDbGFzc2VzKHNjcm9sbFBvc2l0aW9uLCBoZWFkZXJIZWlnaHQpfSBkdXJhdGlvbi01MDBgfSA+XHJcblxyXG4gICAgICA8aW1nIHNyYz1cImdpZi9sb2dvL0N1YmVzU2h1ZmZsaW5nR0lGLmdpZlwiIGFsdD1cIkNvbW11bmUgTG9nb1wiIGNsYXNzTmFtZT0nYmxvY2sgc206aGlkZGVuJyAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEwIHB5LTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBsZzpmbGV4LXJvdyBmbGV4LWNvbCBoLTEvMic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGxnOnctMS8yIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgdy1hdXRvIHNtOnctWzcxMHB4XSBzbTpoLVsyNTBweF0gJz5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHRleHQtNHhsIHNtOnRleHQtNnhsIHNtOnBiLTMgZGFyazp0ZXh0LXdoaXRlXCI+e1RJVExFfTwvaDE+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGRlbiBzbTpibG9jayc+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZXJvX19zdWJ0aXRsZSB0ZXh0LXhsIHNtOnRleHQtNHhsXCI+e1RBR0xJTkV9XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BoZXJvX19zdWJ0aXRsZSB0ZXh0LTR4bCAke2NvbG91cltpbmRleF19IGZvbnQtc2VtaWJvbGQgbWItNWB9PntgJHt3b3Jkc1tpbmRleF0uc3Vic3RyaW5nKDAsIHN1YkluZGV4KX0ke2JsaW5rID8gXCJ8XCIgOiBcIlwifWB9PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0zMCBoLTEwJz5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiZG9jcy9uZXh0L0ludHJvZHVjdGlvblwiIGNsYXNzTmFtZT0nIGhvdmVyOm5vLXVuZGVybGluZScgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBiZy1ibHVlLTcwMCByb3VuZGVkLWxnIHNoYWRvdy1sZyBob3ZlcjpzaGFkb3ctMnhsIHRleHQtY2VudGVyIGhvdmVyOmJnLWJsdWUtNjAwIGR1cmF0aW9uLTIwMCB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtd2hpdGUgZm9udC1zYW5zIGZvbnQtc2VtaWJvbGQganVzdGlmeS1jZW50ZXIgcHgtMiBweS0yIGhvdmVyOmJvcmRlci1ibHVlLTMwMCBob3Zlcjpib3JkZXItMiBob3Zlcjpib3JkZXItc29saWQnID5cclxuICAgICAgICAgICAgICAgICAgR2V0IFN0YXJ0ZWRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoaWRkZW4gc206YmxvY2sgdy1mdWxsIGxnOnctWzc1JV0gaC1mdWxsIGxnOi1tci00NCAnPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImdpZi9sb2dvL0N1YmVzU2h1ZmZsaW5nR0lGLmdpZlwiIGFsdD1cIkNvbW11bmUgTG9nb1wiIGNsYXNzTmFtZT0nJyAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SGVhZGVyQ2xhc3NlcyA9IChwb3NpdGlvbjogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4ge1xyXG4gIGlmIChwb3NpdGlvbiA+IChoZWlnaHQgLyAyKSkge1xyXG4gICAgcmV0dXJuICdyb3VuZGVkLWItbGcgc2hhZG93LWxnIG14LTUnO1xyXG4gIH1cclxuICByZXR1cm4gJyc7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwid29yZHMiLCJjb2xvdXIiLCJUSVRMRSIsIlRBR0xJTkUiLCJIb21lcGFnZUhlYWRlciIsImluZGV4Iiwic2V0SW5kZXgiLCJ1c2VTdGF0ZSIsInN1YkluZGV4Iiwic2V0U3ViSW5kZXgiLCJibGluayIsInNldEJsaW5rIiwicmV2ZXJzZSIsInNldFJldmVyc2UiLCJzY3JvbGxQb3NpdGlvbiIsInNldFNjcm9sbFBvc2l0aW9uIiwiaGVhZGVyUmVmIiwidXNlUmVmIiwiaGVhZGVySGVpZ2h0Iiwic2V0SGVhZGVySGVpZ2h0IiwidXNlRWZmZWN0IiwibGVuZ3RoIiwicHJldiIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiTWF0aCIsIm1heCIsImNsZWFyVGltZW91dCIsInRpbWVvdXQyIiwiaGFuZGxlU2Nyb2xsIiwicG9zaXRpb24iLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJjbGllbnRIZWlnaHQiLCJoZWFkZXIiLCJyZWYiLCJjbGFzc05hbWUiLCJnZXRIZWFkZXJDbGFzc2VzIiwiaW1nIiwic3JjIiwiYWx0IiwiZGl2IiwiaDEiLCJwIiwiYnIiLCJzcGFuIiwic3Vic3RyaW5nIiwiYSIsImhyZWYiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/homepage-header.tsx\n"));

/***/ })

});