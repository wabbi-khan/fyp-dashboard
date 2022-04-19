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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\employees-management\\users\\EditUser.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // import FormikForm from "./FormikForm";





var EditUser = function EditUser() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();

  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useParams"])([]),
      id = _useParams.id;

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
    salary: ""
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
      salary = user.salary;

  var onInputChange = function onInputChange(e) {
    console.log(e.target.value);
    setUser(_objectSpread(_objectSpread({}, user), {}, Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, e.target.name, e.target.value)));
  }; // useEffect(() => {
  //   LoadUser();
  // }, []);


  var _onSubmit = /*#__PURE__*/function () {
    var _ref = Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e) {
      return E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("http://localhost:3001/users", user);

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
  }(); // const LoadUser = async () => {
  //   const result = await Axios.get(`http://localhost:3001/users/` + id);
  //   console.log(result);
  // };


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      data = _useState2[0],
      setData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var fetchBags = /*#__PURE__*/function () {
      var _ref2 = Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var _data;

        return E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("http://localhost:3001/users/" + id);

              case 3:
                _data = _context2.sent;
                console.log(_data);
                setData(_data);
                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                console.log(_context2.t0);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      return function fetchBags() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchBags();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_ContainerDefault__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: "Employees Manage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_shared_headers_HeaderDashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Employees Management",
        description: "Employees Listing "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Edit a Employee"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
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
              lineNumber: 86,
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
              lineNumber: 87,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "User Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
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
              lineNumber: 99,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Mobile No"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
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
              lineNumber: 113,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "CNIC No"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
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
              lineNumber: 125,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
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
              lineNumber: 139,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
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
              lineNumber: 160,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "for": "inputAddress",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
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
            lineNumber: 175,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
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
              lineNumber: 189,
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
              lineNumber: 190,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputState",
              children: "Province"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
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
                children: "Sindh"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 219,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Punjab"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Balochistan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Khyber Pakhtunkhwa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 222,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputZip",
              children: "Zip"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
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
              lineNumber: 227,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
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
              lineNumber: 242,
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
              lineNumber: 243,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputState",
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              "class": "form-control",
              name: "status",
              value: status,
              onChange: function onChange(e) {
                return onInputChange(e);
              },
              required: true,
              placeholder: "Hire / Not Hire"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 256,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputZip",
              children: "Salary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
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
              lineNumber: 268,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          "class": "btn btn-primary",
          style: {
            padding: "5px 20px",
            fontSize: "15px"
          },
          children: "SUBMIT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(EditUser, "SM/TPpvO2YAaf80grqArkCFRQTs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"], react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useParams"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRWRpdFVzZXIuanN4Il0sIm5hbWVzIjpbIkVkaXRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlUGFyYW1zIiwiaWQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJ1c2VyTmFtZSIsImVtYWlsIiwicGhvbmUiLCJjbmljTm8iLCJjaXR5IiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsInppcCIsImRlcGFydCIsInN0YXR1cyIsInNhbGFyeSIsInVzZXIiLCJzZXRVc2VyIiwib25JbnB1dENoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiQXhpb3MiLCJwb3N0IiwicHVzaCIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2hCYWdzIiwiZ2V0IiwicGFkZGluZyIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHFCLG1CQUVOQyxrRUFBUyxDQUFDLEVBQUQsQ0FGSDtBQUFBLE1BRWJDLEVBRmEsY0FFYkEsRUFGYTs7QUFBQSxrQkFJR0Msc0RBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFFLEVBRHlCO0FBRS9CQyxZQUFRLEVBQUUsRUFGcUI7QUFHL0JDLFNBQUssRUFBRSxFQUh3QjtBQUkvQkMsU0FBSyxFQUFFLEVBSndCO0FBSy9CQyxVQUFNLEVBQUUsRUFMdUI7QUFNL0JDLFFBQUksRUFBRSxFQU55QjtBQU8vQkMsV0FBTyxFQUFFLEVBUHNCO0FBUS9CQyxXQUFPLEVBQUUsRUFSc0I7QUFTL0JD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QTtBQUFBO0FBREYsbUJBREY7QUEwTkQsQ0E1UkQ7O0dBQU10QyxRO1VBQ1dFLHFELEVBQ0FDLDBEOzs7S0FGWEgsUTtBQThSU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvW2lkXS40MTEwODI1N2UxZDgxNDVlNzM3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENvbnRhaW5lckRlZmF1bHQgZnJvbSBcIn4vY29tcG9uZW50cy9sYXlvdXRzL0NvbnRhaW5lckRlZmF1bHRcIjtcclxuaW1wb3J0IEhlYWRlckRhc2hib2FyZCBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9oZWFkZXJzL0hlYWRlckRhc2hib2FyZFwiO1xyXG4vLyBpbXBvcnQgRm9ybWlrRm9ybSBmcm9tIFwiLi9Gb3JtaWtGb3JtXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IEVkaXRVc2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcyhbXSk7XHJcblxyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICB1c2VyTmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBjbmljTm86IFwiXCIsXHJcbiAgICBjaXR5OiBcIlwiLFxyXG4gICAgYWRkcmVzczogXCJcIixcclxuICAgIGNvdW50cnk6IFwiXCIsXHJcbiAgICBwcm92aW5jZTogXCJcIixcclxuICAgIHppcDogXCJcIixcclxuICAgIGRlcGFydDogXCJcIixcclxuICAgIHN0YXR1czogXCJcIixcclxuICAgIHNhbGFyeTogXCJcIixcclxuICB9KTtcclxuICBjb25zdCB7XHJcbiAgICBuYW1lLFxyXG4gICAgZW1haWwsXHJcbiAgICBwaG9uZSxcclxuICAgIGNuaWNObyxcclxuICAgIGNpdHksXHJcbiAgICBhZGRyZXNzLFxyXG4gICAgdXNlck5hbWUsXHJcbiAgICBjb3VudHJ5LFxyXG4gICAgcHJvdmluY2UsXHJcbiAgICB6aXAsXHJcbiAgICBkZXBhcnQsXHJcbiAgICBzdGF0dXMsXHJcbiAgICBzYWxhcnksXHJcbiAgfSA9IHVzZXI7XHJcbiAgY29uc3Qgb25JbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRVc2VyKHsgLi4udXNlciwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBMb2FkVXNlcigpO1xyXG4gIC8vIH0sIFtdKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhd2FpdCBBeGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3VzZXJzXCIsIHVzZXIpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvZW1wbG95ZWVzLW1hbmFnZW1lbnRcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc3QgTG9hZFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICBjb25zdCByZXN1bHQgPSBhd2FpdCBBeGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2Vycy9gICsgaWQpO1xyXG4gIC8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoQmFncyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgQXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdXNlcnMvYCArIGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBzZXREYXRhKGRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaEJhZ3MoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXJEZWZhdWx0IHRpdGxlPSdFbXBsb3llZXMgTWFuYWdlJz5cclxuICAgICAgICA8SGVhZGVyRGFzaGJvYXJkXHJcbiAgICAgICAgICB0aXRsZT0nRW1wbG95ZWVzIE1hbmFnZW1lbnQnXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj0nRW1wbG95ZWVzIExpc3RpbmcgJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgzPkVkaXQgYSBFbXBsb3llZTwvaDM+XHJcbiAgICAgICAgey8qIDxGb3JtaWtGb3JtIC8+ICovfVxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gb25TdWJtaXQoZSl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1yb3cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC02Jz5cclxuICAgICAgICAgICAgICA8bGFiZWw+RnVsbCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbXBsb3llZSBGdWxsIE5hbWUnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Vc2VyIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSd1c2VyTmFtZSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1wbG95ZWUgVXNlciBOYW1lJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLXJvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Nb2JpbGUgTm88L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bob25lJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbXBsb3llZSBNb2JpbGUgTm8nXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5DTklDIE5vPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdjbmljTm8nXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y25pY05vfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbXBsb3llZSBDbmljIE5vJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLXJvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1wbG95ZWUgRW1haWwgYWRkcmVzcydcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkNvdW50cnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nY291bnRyeSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbXBsb3llZSBDb3VudHJ5J1xyXG4gICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nY291bnRyeSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+UGFraXN0YW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+SW5kaWE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+VS5TLkE8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAnPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPSdpbnB1dEFkZHJlc3MnPkFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgaWQ9J2lucHV0QWRkcmVzcydcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMTIzNCBNYWluIFN0J1xyXG4gICAgICAgICAgICAgIG5hbWU9J2FkZHJlc3MnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2FkZHJlc3N9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLXJvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTUnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9J2lucHV0Q2l0eSc+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIGlkPSdpbnB1dENpdHknXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdjaXR5J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NpdHl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtcGxveWVlIENpdHknXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTMnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9J2lucHV0U3RhdGUnPlByb3ZpbmNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICB7LyogPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTaW5kaCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Byb3ZpbmNlJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3ZpbmNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Byb3ZpbmNlJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3ZpbmNlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+U2luZGg8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+UHVuamFiPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPkJhbG9jaGlzdGFuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPktoeWJlciBQYWtodHVua2h3YTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNCc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj0naW5wdXRaaXAnPlppcDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgaWQ9J2lucHV0WmlwJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nemlwJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ppcH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1wbG95ZWUgWmlwIGNvZGUnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLXJvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTQnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9J2lucHV0Q2l0eSc+RGVwYXJ0bWVudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIGlkPSdpbnB1dENpdHknXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdkZXBhcnQnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGVwYXJ0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbXBsb3llZSBEZXBhcnRtZW50J1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC00Jz5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPSdpbnB1dFN0YXRlJz5TdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdIaXJlIC8gTm90IEhpcmUnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTQnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9J2lucHV0WmlwJz5TYWxhcnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIGlkPSdpbnB1dFppcCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3NhbGFyeSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzYWxhcnl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtcGxveWVlIFNhbGFyeSdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5J1xyXG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjVweCAyMHB4XCIsIGZvbnRTaXplOiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTVUJNSVRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9Db250YWluZXJEZWZhdWx0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRVc2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9