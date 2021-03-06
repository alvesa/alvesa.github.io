function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_components_alvesa_title_alvesa_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/components/alvesa-title/alvesa-title.component */
    "./src/components/alvesa-title/alvesa-title.component.ts");
    /* harmony import */


    var src_components_alvesa_content_alvesa_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/components/alvesa-content/alvesa-content.component */
    "./src/components/alvesa-content/alvesa-content.component.ts");
    /* harmony import */


    var src_components_alvesa_content_icon_alvesa_content_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/components/alvesa-content-icon/alvesa-content-icon.component */
    "./src/components/alvesa-content-icon/alvesa-content-icon.component.ts");
    /* harmony import */


    var src_components_alvesa_footer_alvesa_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/components/alvesa-footer/alvesa-footer.component */
    "./src/components/alvesa-footer/alvesa-footer.component.ts");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'alvesa';
    });

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 10,
      vars: 0,
      consts: [["id", "wrapper"], [1, "copyright"], ["href", "https://html5up.net"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-alvesa-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-alvesa-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-alvesa-content-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-alvesa-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\xA9 Andre Alves. All rights reserved. Theme by: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "HTML5 UP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [src_components_alvesa_title_alvesa_title_component__WEBPACK_IMPORTED_MODULE_1__["AlvesaTitleComponent"], src_components_alvesa_content_alvesa_content_component__WEBPACK_IMPORTED_MODULE_2__["AlvesaContentComponent"], src_components_alvesa_content_icon_alvesa_content_icon_component__WEBPACK_IMPORTED_MODULE_3__["AlvesaContentIconComponent"], src_components_alvesa_footer_alvesa_footer_component__WEBPACK_IMPORTED_MODULE_4__["AlvesaFooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var src_components_alvesa_title_alvesa_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/components/alvesa-title/alvesa-title.component */
    "./src/components/alvesa-title/alvesa-title.component.ts");
    /* harmony import */


    var src_components_alvesa_content_alvesa_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/components/alvesa-content/alvesa-content.component */
    "./src/components/alvesa-content/alvesa-content.component.ts");
    /* harmony import */


    var src_components_alvesa_footer_alvesa_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/components/alvesa-footer/alvesa-footer.component */
    "./src/components/alvesa-footer/alvesa-footer.component.ts");
    /* harmony import */


    var src_components_alvesa_content_icon_alvesa_content_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/components/alvesa-content-icon/alvesa-content-icon.component */
    "./src/components/alvesa-content-icon/alvesa-content-icon.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], src_components_alvesa_title_alvesa_title_component__WEBPACK_IMPORTED_MODULE_4__["AlvesaTitleComponent"], src_components_alvesa_content_alvesa_content_component__WEBPACK_IMPORTED_MODULE_5__["AlvesaContentComponent"], src_components_alvesa_footer_alvesa_footer_component__WEBPACK_IMPORTED_MODULE_6__["AlvesaFooterComponent"], src_components_alvesa_content_icon_alvesa_content_icon_component__WEBPACK_IMPORTED_MODULE_7__["AlvesaContentIconComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], src_components_alvesa_title_alvesa_title_component__WEBPACK_IMPORTED_MODULE_4__["AlvesaTitleComponent"], src_components_alvesa_content_alvesa_content_component__WEBPACK_IMPORTED_MODULE_5__["AlvesaContentComponent"], src_components_alvesa_footer_alvesa_footer_component__WEBPACK_IMPORTED_MODULE_6__["AlvesaFooterComponent"], src_components_alvesa_content_icon_alvesa_content_icon_component__WEBPACK_IMPORTED_MODULE_7__["AlvesaContentIconComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/components/alvesa-content-icon/alvesa-content-icon.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/components/alvesa-content-icon/alvesa-content-icon.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AlvesaContentIconComponent */

  /***/
  function srcComponentsAlvesaContentIconAlvesaContentIconComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlvesaContentIconComponent", function () {
      return AlvesaContentIconComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlvesaContentIconComponent = /*#__PURE__*/function () {
      function AlvesaContentIconComponent() {
        _classCallCheck(this, AlvesaContentIconComponent);
      }

      _createClass(AlvesaContentIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlvesaContentIconComponent;
    }();

    AlvesaContentIconComponent.??fac = function AlvesaContentIconComponent_Factory(t) {
      return new (t || AlvesaContentIconComponent)();
    };

    AlvesaContentIconComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AlvesaContentIconComponent,
      selectors: [["app-alvesa-content-icon"]],
      decls: 24,
      vars: 0,
      consts: [[1, "content"], [1, "feature-icons"], [1, "icon", "solid", "fa-laptop"], [1, "icon", "solid", "fa-bolt"], [1, "icon", "solid", "fa-signal"], [1, "icon", "solid", "fa-cog"], [1, "icon", "solid", "fa-map-marker-alt"], [1, "icon", "solid", "fa-code"]],
      template: function AlvesaContentIconComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Feugiat consequat tempus ultrices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Etiam tristique libero");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Consequat tempus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Etiam adipiscing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Libero nullam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Blandit condimentum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Lorem ipsum dolor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Nibh amet venenatis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9hbHZlc2EtY29udGVudC1pY29uL2FsdmVzYS1jb250ZW50LWljb24uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlvesaContentIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alvesa-content-icon',
          templateUrl: './alvesa-content-icon.component.html',
          styleUrls: ['./alvesa-content-icon.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/components/alvesa-content/alvesa-content.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/components/alvesa-content/alvesa-content.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AlvesaContentComponent */

  /***/
  function srcComponentsAlvesaContentAlvesaContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlvesaContentComponent", function () {
      return AlvesaContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlvesaContentComponent = /*#__PURE__*/function () {
      function AlvesaContentComponent() {
        _classCallCheck(this, AlvesaContentComponent);
      }

      _createClass(AlvesaContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlvesaContentComponent;
    }();

    AlvesaContentComponent.??fac = function AlvesaContentComponent_Factory(t) {
      return new (t || AlvesaContentComponent)();
    };

    AlvesaContentComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AlvesaContentComponent,
      selectors: [["app-alvesa-content"]],
      decls: 11,
      vars: 0,
      consts: [["id", "first"], [1, "content"], [1, "image", "main"], ["src", "images/pic02.jpg", "alt", ""]],
      template: function AlvesaContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "AAAMagna sed nullam nisl adipiscing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "AAALorem ipsum dolor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " sit amet consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9hbHZlc2EtY29udGVudC9hbHZlc2EtY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlvesaContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alvesa-content',
          templateUrl: './alvesa-content.component.html',
          styleUrls: ['./alvesa-content.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/components/alvesa-footer/alvesa-footer.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/components/alvesa-footer/alvesa-footer.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AlvesaFooterComponent */

  /***/
  function srcComponentsAlvesaFooterAlvesaFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlvesaFooterComponent", function () {
      return AlvesaFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlvesaFooterComponent = /*#__PURE__*/function () {
      function AlvesaFooterComponent() {
        _classCallCheck(this, AlvesaFooterComponent);
      }

      _createClass(AlvesaFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlvesaFooterComponent;
    }();

    AlvesaFooterComponent.??fac = function AlvesaFooterComponent_Factory(t) {
      return new (t || AlvesaFooterComponent)();
    };

    AlvesaFooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AlvesaFooterComponent,
      selectors: [["app-alvesa-footer"]],
      decls: 37,
      vars: 0,
      consts: [[1, "items"], ["href", "#"], [1, "icons"], ["href", "https://twitter.com/AndreEalves", 1, "icon", "brands", "fa-twitter"], [1, "label"], ["href", "https://www.linkedin.com/in/andr%C3%A9-euclides-alves-15b55584/", 1, "icon", "brands", "fa-linkedin-in"], ["href", "https://github.com/alvesa/", 1, "icon", "brands", "fa-github"]],
      template: function AlvesaFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Get in touch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "information@untitled.ext");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "(000) 000-0000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "1234 Somewhere Road, Nashville, TN 00000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Elsewhere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "LinkedIn");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9hbHZlc2EtZm9vdGVyL2FsdmVzYS1mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlvesaFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alvesa-footer',
          templateUrl: './alvesa-footer.component.html',
          styleUrls: ['./alvesa-footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/components/alvesa-title/alvesa-title.component.ts":
  /*!***************************************************************!*\
    !*** ./src/components/alvesa-title/alvesa-title.component.ts ***!
    \***************************************************************/

  /*! exports provided: AlvesaTitleComponent */

  /***/
  function srcComponentsAlvesaTitleAlvesaTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlvesaTitleComponent", function () {
      return AlvesaTitleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlvesaTitleComponent = /*#__PURE__*/function () {
      function AlvesaTitleComponent() {
        _classCallCheck(this, AlvesaTitleComponent);
      }

      _createClass(AlvesaTitleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlvesaTitleComponent;
    }();

    AlvesaTitleComponent.??fac = function AlvesaTitleComponent_Factory(t) {
      return new (t || AlvesaTitleComponent)();
    };

    AlvesaTitleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AlvesaTitleComponent,
      selectors: [["app-alvesa-title"]],
      decls: 19,
      vars: 0,
      consts: [[1, "intro"], ["href", "https://twitter.com/AndreEalves"], ["href", "https://alvesa.github.io/"], [1, "actions"], ["href", "#first", 1, "arrow", "scrolly"], [1, "label"], [1, "content"], ["data-position", "center", 1, "image", "fill"], ["src", "../../images/pic01.jpg", "alt", ""]],
      template: function AlvesaTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Andre Alves");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "A simple guy who loves programming ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "@AndreEalves");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " / ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Andre's Alves");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9hbHZlc2EtdGl0bGUvYWx2ZXNhLXRpdGxlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AlvesaTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alvesa-title',
          templateUrl: './alvesa-title.component.html',
          styleUrls: ['./alvesa-title.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Andre\Work\alvesa\alvesa.github.io\alvesa\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map