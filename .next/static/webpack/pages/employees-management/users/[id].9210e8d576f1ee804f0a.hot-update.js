webpackHotUpdate_N_E("pages/employees-management/users/[id]",{

/***/ "./pages/employees-management/users/EditUser.jsx":
/*!*******************************************************!*\
  !*** ./pages/employees-management/users/EditUser.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/components/layouts/ContainerDefault */ "./components/layouts/ContainerDefault.jsx");
/* harmony import */ var _components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/components/shared/headers/HeaderDashboard */ "./components/shared/headers/HeaderDashboard.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../style.module.css */ "./pages/employees-management/style.module.css");
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/firebaseConfig */ "./firebaseConfig.js");






var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\employees-management\\users\\EditUser.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var employeeInstance = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_10__["collection"])(_firebaseConfig__WEBPACK_IMPORTED_MODULE_11__["database"], "employee");

var EditUser = function EditUser() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var id = router.query.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: "",
    userName: "",
    email: "",
    phone: "",
    cnicNo: "",
    city: "",
    address: "",
    country: "",
    province: "",
    zip: "",
    depart: "",
    status: "",
    salary: "",
    dob: "",
    doh: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  var name = user.name,
      email = user.email,
      phone = user.phone,
      cnicNo = user.cnicNo,
      city = user.city,
      address = user.address,
      userName = user.userName,
      country = user.country,
      province = user.province,
      zip = user.zip,
      depart = user.depart,
      status = user.status,
      salary = user.salary,
      dob = user.dob,
      doh = user.doh;

  var onInputChange = function onInputChange(e) {
    console.log(e.target.value);
    setUser(_objectSpread(_objectSpread({}, user), {}, Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, e.target.name, e.target.value)));
  };

  var _onSubmit = /*#__PURE__*/function () {
    var _ref = Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      return E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_8___default.a.put("http://localhost:3001/users/".concat(id), user);

            case 3:
              router.push("/employees-management");

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var LoadUser = /*#__PURE__*/function () {
      var _ref2 = Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var data;
        return E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_10__["getDocs"])(employeeInstance, id);

              case 3:
                data = _context2.sent;
                setUser(data.docs); // const data = await Axios.get(`http://localhost:3001/users/` + id);
                // setUser(data.data);

                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      return function LoadUser() {
        return _ref2.apply(this, arguments);
      };
    }();

    LoadUser();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Employees Manage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Employees Management",
        description: "Employees Listing "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Editing ", user.name, " Profile"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: function onSubmit(e) {
          return _onSubmit(e);
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Full Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              "class": "form-control",
              name: "name",
              value: name,
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true,
              placeholder: "Employee Full Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "User Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              "class": "form-control",
              name: "userName",
              value: userName,
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true,
              placeholder: "Employee User Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Mobile No"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "tel",
              "class": "form-control",
              name: "phone",
              value: phone,
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true,
              placeholder: "Employee Mobile No"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "CNIC No"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "tel",
              "class": "form-control",
              name: "cnicNo",
              value: cnicNo,
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true,
              placeholder: "Employee Cnic No"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "email",
              "class": "form-control",
              name: "email",
              value: email,
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true,
              placeholder: "Employee Email address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              "class": "form-control",
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true,
              name: "country",
              value: country,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Choose..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Pakistan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "India"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "U.S.A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Date of birth"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "date",
              "class": "form-control",
              name: "dob",
              value: dob,
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Date of hiring"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "date",
              "class": "form-control",
              name: "doh",
              value: doh,
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "for": "inputAddress",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            "class": "form-control",
            id: "inputAddress",
            placeholder: "1234 Main St",
            name: "address",
            value: address,
            onChange: function onChange(e) {
              return onInputChange(e);
            },
            required: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputCity",
              children: "City"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              "class": "form-control",
              id: "inputCity",
              name: "city",
              value: city,
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true,
              placeholder: "Employee City"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputState",
              children: "Province"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              "class": "form-control",
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true,
              name: "province",
              value: province,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Choose..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Sindh"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Punjab"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Balochistan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Khyber Pakhtunkhwa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 247,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputZip",
              children: "Zip"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "tel",
              "class": "form-control",
              id: "inputZip",
              name: "zip",
              value: zip,
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true,
              placeholder: "Employee Zip code"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputCity",
              children: "Department"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              "class": "form-control",
              id: "inputCity",
              name: "depart",
              value: depart,
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true,
              placeholder: "Employee Department"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputState",
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
              "class": "form-control",
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true,
              name: "status",
              value: status,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Choose..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Hire"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Not Hire"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Pending"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputZip",
              children: "Salary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "tel",
              "class": "form-control",
              id: "inputZip",
              name: "salary",
              value: salary,
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true,
              placeholder: "Employee Salary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 305,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
          children: "Edit Employee"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(EditUser, "N8FDo1hi7iYuVNaezWBXfMom9kE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = EditUser;
/* harmony default export */ __webpack_exports__["default"] = (EditUser);

var _c;

$RefreshReg$(_c, "EditUser");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRWRpdFVzZXIuanN4Il0sIm5hbWVzIjpbImVtcGxveWVlSW5zdGFuY2UiLCJjb2xsZWN0aW9uIiwiZGF0YWJhc2UiLCJFZGl0VXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJ1c2VyTmFtZSIsImVtYWlsIiwicGhvbmUiLCJjbmljTm8iLCJjaXR5IiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsInppcCIsImRlcGFydCIsInN0YXR1cyIsInNhbGFyeSIsImRvYiIsImRvaCIsInVzZXIiLCJzZXRVc2VyIiwib25JbnB1dENoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiQXhpb3MiLCJwdXQiLCJwdXNoIiwidXNlRWZmZWN0IiwiTG9hZFVzZXIiLCJnZXREb2NzIiwiZGF0YSIsImRvY3MiLCJzdHlsZSIsImJ0biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBR0Msc0VBQVUsQ0FBQ0MseURBQUQsRUFBVyxVQUFYLENBQW5DOztBQUVBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURxQixNQUViQyxFQUZhLEdBRU5GLE1BQU0sQ0FBQ0csS0FGRCxDQUViRCxFQUZhOztBQUFBLGtCQUdHRSxzREFBUSxDQUFDO0FBQy9CQyxRQUFJLEVBQUUsRUFEeUI7QUFFL0JDLFlBQVEsRUFBRSxFQUZxQjtBQUcvQkMsU0FBSyxFQUFFLEVBSHdCO0FBSS9CQyxTQUFLLEVBQUUsRUFK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O0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUE0UEQsQ0ExVEQ7O0dBQU14QyxRO1VBQ1dFLHFEOzs7S0FEWEYsUTtBQTRUU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvW2lkXS45MjEwZThkNTc2ZjFlZTgwNGYwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXRzL0NvbnRhaW5lckRlZmF1bHRcIjtcclxuaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRhc2hib2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uL3N0eWxlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBnZXREb2NzIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBkYXRhYmFzZSB9IGZyb20gXCJ+L2ZpcmViYXNlQ29uZmlnXCI7XHJcbmNvbnN0IGVtcGxveWVlSW5zdGFuY2UgPSBjb2xsZWN0aW9uKGRhdGFiYXNlLCBcImVtcGxveWVlXCIpO1xyXG5cclxuY29uc3QgRWRpdFVzZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICB1c2VyTmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBjbmljTm86IFwiXCIsXHJcbiAgICBjaXR5OiBcIlwiLFxyXG4gICAgYWRkcmVzczogXCJcIixcclxuICAgIGNvdW50cnk6IFwiXCIsXHJcbiAgICBwcm92aW5jZTogXCJcIixcclxuICAgIHppcDogXCJcIixcclxuICAgIGRlcGFydDogXCJcIixcclxuICAgIHN0YXR1czogXCJcIixcclxuICAgIHNhbGFyeTogXCJcIixcclxuICAgIGRvYjogXCJcIixcclxuICAgIGRvaDogXCJcIixcclxuICB9KTtcclxuICBjb25zdCB7XHJcbiAgICBuYW1lLFxyXG4gICAgZW1haWwsXHJcbiAgICBwaG9uZSxcclxuICAgIGNuaWNObyxcclxuICAgIGNpdHksXHJcbiAgICBhZGRyZXNzLFxyXG4gICAgdXNlck5hbWUsXHJcbiAgICBjb3VudHJ5LFxyXG4gICAgcHJvdmluY2UsXHJcbiAgICB6aXAsXHJcbiAgICBkZXBhcnQsXHJcbiAgICBzdGF0dXMsXHJcbiAgICBzYWxhcnksXHJcbiAgICBkb2IsXHJcbiAgICBkb2gsXHJcbiAgfSA9IHVzZXI7XHJcbiAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRVc2VyKHsgLi4udXNlciwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhd2FpdCBBeGlvcy5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2Vycy8ke2lkfWAsIHVzZXIpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvZW1wbG95ZWVzLW1hbmFnZW1lbnRcIik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IExvYWRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREb2NzKGVtcGxveWVlSW5zdGFuY2UsIGlkKTtcclxuICAgICAgICBzZXRVc2VyKGRhdGEuZG9jcyk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCBBeGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2Vycy9gICsgaWQpO1xyXG4gICAgICAgIC8vIHNldFVzZXIoZGF0YS5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBMb2FkVXNlcigpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lckRlZmF1bHQgdGl0bGU9J0VtcGxveWVlcyBNYW5hZ2UnPlxyXG4gICAgICAgIDxIZWFkZXJEYXNoYm9hcmRcclxuICAgICAgICAgIHRpdGxlPSdFbXBsb3llZXMgTWFuYWdlbWVudCdcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPSdFbXBsb3llZXMgTGlzdGluZyAnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDM+RWRpdGluZyB7dXNlci5uYW1lfSBQcm9maWxlPC9oMz5cclxuICAgICAgICB7LyogPEZvcm1pa0Zvcm0gLz4gKi99XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBvblN1Ym1pdChlKX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLXJvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5GdWxsIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtcGxveWVlIEZ1bGwgTmFtZSdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlVzZXIgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3VzZXJOYW1lJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJOYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbXBsb3llZSBVc2VyIE5hbWUnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tcm93Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPk1vYmlsZSBObzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0ncGhvbmUnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cGhvbmV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtcGxveWVlIE1vYmlsZSBObydcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkNOSUMgTm88L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2NuaWNObydcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjbmljTm99XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtcGxveWVlIENuaWMgTm8nXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tcm93Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbXBsb3llZSBFbWFpbCBhZGRyZXNzJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC02Jz5cclxuICAgICAgICAgICAgICA8bGFiZWw+Q291bnRyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdjb3VudHJ5J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvdW50cnl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtcGxveWVlIENvdW50cnknXHJcbiAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdjb3VudHJ5J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvdW50cnl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5DaG9vc2UuLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+UGFraXN0YW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+SW5kaWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+VS5TLkE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tcm93Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkRhdGUgb2YgYmlydGg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0nZGF0ZSdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdkb2InXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZG9ifVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkRhdGUgb2YgaGlyaW5nPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J2RhdGUnXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nZG9oJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2RvaH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAnPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPSdpbnB1dEFkZHJlc3MnPkFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgaWQ9J2lucHV0QWRkcmVzcydcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMTIzNCBNYWluIFN0J1xyXG4gICAgICAgICAgICAgIG5hbWU9J2FkZHJlc3MnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2FkZHJlc3N9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLXJvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTUnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9J2lucHV0Q2l0eSc+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIGlkPSdpbnB1dENpdHknXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdjaXR5J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NpdHl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtcGxveWVlIENpdHknXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTMnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9J2lucHV0U3RhdGUnPlByb3ZpbmNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICB7LyogPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTaW5kaCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Byb3ZpbmNlJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3ZpbmNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Byb3ZpbmNlJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3ZpbmNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+Q2hvb3NlLi4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPlNpbmRoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPlB1bmphYjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5CYWxvY2hpc3Rhbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5LaHliZXIgUGFraHR1bmtod2E8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTQnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9J2lucHV0WmlwJz5aaXA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIGlkPSdpbnB1dFppcCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3ppcCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt6aXB9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtcGxveWVlIFppcCBjb2RlJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1yb3cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC00Jz5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPSdpbnB1dENpdHknPkRlcGFydG1lbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBpZD0naW5wdXRDaXR5J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nZGVwYXJ0J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2RlcGFydH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1wbG95ZWUgRGVwYXJ0bWVudCdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNCc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj0naW5wdXRTdGF0ZSc+U3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICB7LyogPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3N0YXR1cydcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0hpcmUgLyBOb3QgSGlyZSdcclxuICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIG5hbWU9J3N0YXR1cydcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5DaG9vc2UuLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+SGlyZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5Ob3QgSGlyZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5QZW5kaW5nPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC00Jz5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPSdpbnB1dFppcCc+U2FsYXJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBpZD0naW5wdXRaaXAnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdzYWxhcnknXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2FsYXJ5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbXBsb3llZSBTYWxhcnknXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPXtzdHlsZS5idG59PlxyXG4gICAgICAgICAgICBFZGl0IEVtcGxveWVlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvQ29udGFpbmVyRGVmYXVsdD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0VXNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==