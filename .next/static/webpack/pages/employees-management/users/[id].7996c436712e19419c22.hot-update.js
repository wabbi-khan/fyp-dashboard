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

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])(); // const { id } = router.query;

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
  }; // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   await Axios.put(`http://localhost:3001/users/${id}`, user);
  //   router.push("/employees-management");
  // };


  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var LoadUser = /*#__PURE__*/function () {
      var _ref = Object(E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var i, item;
        return E_FYP_admin_dashboard_martfury_admin_react_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  for (i = 0; i < data.docs.length; i++) {
                    item = data.docs[i];
                    setUser(_objectSpread(_objectSpread({}, item.data()), {}, {
                      id: item.id
                    }));
                    console.log(item.data());
                  } // console.log(data);
                  // const data = await Axios.get(`http://localhost:3001/users/` + id);
                  // setUser(data.data);

                } catch (error) {
                  console.log(error);
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function LoadUser() {
        return _ref.apply(this, arguments);
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
        lineNumber: 80,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: ["Editing ", user.name, " Profile"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: function (_onSubmit) {
          function onSubmit(_x) {
            return _onSubmit.apply(this, arguments);
          }

          onSubmit.toString = function () {
            return _onSubmit.toString();
          };

          return onSubmit;
        }(function (e) {
          return onSubmit(e);
        }),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Full Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
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
              lineNumber: 90,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "User Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
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
              lineNumber: 102,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Mobile No"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
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
              lineNumber: 116,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "CNIC No"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
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
              lineNumber: 128,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Email"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
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
              lineNumber: 142,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
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
                lineNumber: 170,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Pakistan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "India"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "U.S.A"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Date of birth"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
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
              lineNumber: 180,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              children: "Date of hiring"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
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
              lineNumber: 191,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            "for": "inputAddress",
            children: "Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
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
            lineNumber: 203,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 201,
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
              lineNumber: 217,
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
              lineNumber: 218,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-3",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputState",
              children: "Province"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
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
                lineNumber: 247,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Sindh"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Punjab"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 249,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Balochistan"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Khyber Pakhtunkhwa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 251,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputZip",
              children: "Zip"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
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
              lineNumber: 256,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
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
              lineNumber: 271,
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
              lineNumber: 272,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 270,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputState",
              children: "Status"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 284,
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
                lineNumber: 301,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Hire"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Not Hire"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                children: "Pending"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 304,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 294,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 283,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            "class": "form-group col-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
              "for": "inputZip",
              children: "Salary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 308,
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
              lineNumber: 309,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          className: _style_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.btn,
          children: "Edit Employee"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZW1wbG95ZWVzLW1hbmFnZW1lbnQvdXNlcnMvRWRpdFVzZXIuanN4Il0sIm5hbWVzIjpbImVtcGxveWVlSW5zdGFuY2UiLCJjb2xsZWN0aW9uIiwiZGF0YWJhc2UiLCJFZGl0VXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwibmFtZSIsInVzZXJOYW1lIiwiZW1haWwiLCJwaG9uZSIsImNuaWNObyIsImNpdHkiLCJhZGRyZXNzIiwiY291bnRyeSIsInByb3ZpbmNlIiwiemlwIiwiZGVwYXJ0Iiwic3RhdHVzIiwic2FsYXJ5IiwiZG9iIiwiZG9oIiwidXNlciIsInNldFVzZXIiLCJvbklucHV0Q2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInVzZUVmZmVjdCIsIkxvYWRVc2VyIiwiaSIsImRhdGEiLCJkb2NzIiwibGVuZ3RoIiwiaXRlbSIsImlkIiwiZXJyb3IiLCJvblN1Ym1pdCIsInN0eWxlIiwiYnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGdCQUFnQixHQUFHQyxzRUFBVSxDQUFDQyx5REFBRCxFQUFXLFVBQVgsQ0FBbkM7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBRHFCLENBRXJCOztBQUZxQixrQkFHR0Msc0RBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFFLEVBRHlCO0FBRS9CQyxZQUFRLEVBQUUsRUFGcUI7QUFHL0JDLFNBQUssRUFBRSxFQUh3QjtBQUkvQkMsU0FBSyxFQUFFLEVBSndCO0FBSy9CQyxVQUFNLEVBQUUsRUFMdUI7QUFNL0JDLFFBQUksRUFBRSxFQU55QjtBQU8vQkMsV0FBTyxFQUFF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QUFBQTtBQURGLG1CQURGO0FBNFBELENBOVREOztHQUFNdEMsUTtVQUNXRSxxRDs7O0tBRFhGLFE7QUFnVVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL1tpZF0uNzk5NmM0MzY3MTJlMTk0MTljMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250YWluZXJEZWZhdWx0IGZyb20gXCJ+L2NvbXBvbmVudHMvbGF5b3V0cy9Db250YWluZXJEZWZhdWx0XCI7XHJcbmltcG9ydCBIZWFkZXJEYXNoYm9hcmQgZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvaGVhZGVycy9IZWFkZXJEYXNoYm9hcmRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYywgZ2V0RG9jcywgZG9jcyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZGF0YWJhc2UgfSBmcm9tIFwifi9maXJlYmFzZUNvbmZpZ1wiO1xyXG5jb25zdCBlbXBsb3llZUluc3RhbmNlID0gY29sbGVjdGlvbihkYXRhYmFzZSwgXCJlbXBsb3llZVwiKTtcclxuXHJcbmNvbnN0IEVkaXRVc2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIC8vIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgdXNlck5hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgY25pY05vOiBcIlwiLFxyXG4gICAgY2l0eTogXCJcIixcclxuICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICBjb3VudHJ5OiBcIlwiLFxyXG4gICAgcHJvdmluY2U6IFwiXCIsXHJcbiAgICB6aXA6IFwiXCIsXHJcbiAgICBkZXBhcnQ6IFwiXCIsXHJcbiAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICBzYWxhcnk6IFwiXCIsXHJcbiAgICBkb2I6IFwiXCIsXHJcbiAgICBkb2g6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3Qge1xyXG4gICAgbmFtZSxcclxuICAgIGVtYWlsLFxyXG4gICAgcGhvbmUsXHJcbiAgICBjbmljTm8sXHJcbiAgICBjaXR5LFxyXG4gICAgYWRkcmVzcyxcclxuICAgIHVzZXJOYW1lLFxyXG4gICAgY291bnRyeSxcclxuICAgIHByb3ZpbmNlLFxyXG4gICAgemlwLFxyXG4gICAgZGVwYXJ0LFxyXG4gICAgc3RhdHVzLFxyXG4gICAgc2FsYXJ5LFxyXG4gICAgZG9iLFxyXG4gICAgZG9oLFxyXG4gIH0gPSB1c2VyO1xyXG4gIGNvbnN0IG9uSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0VXNlcih7IC4uLnVzZXIsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIC8vICAgYXdhaXQgQXhpb3MucHV0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdXNlcnMvJHtpZH1gLCB1c2VyKTtcclxuICAvLyAgIHJvdXRlci5wdXNoKFwiL2VtcGxveWVlcy1tYW5hZ2VtZW50XCIpO1xyXG4gIC8vIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBMb2FkVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuZG9jcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgaXRlbSA9IGRhdGEuZG9jc1tpXTtcclxuICAgICAgICAgIHNldFVzZXIoeyAuLi5pdGVtLmRhdGEoKSwgaWQ6IGl0ZW0uaWQgfSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmRhdGEoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgQXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjMwMDEvdXNlcnMvYCArIGlkKTtcclxuICAgICAgICAvLyBzZXRVc2VyKGRhdGEuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgTG9hZFVzZXIoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXJEZWZhdWx0IHRpdGxlPSdFbXBsb3llZXMgTWFuYWdlJz5cclxuICAgICAgICA8SGVhZGVyRGFzaGJvYXJkXHJcbiAgICAgICAgICB0aXRsZT0nRW1wbG95ZWVzIE1hbmFnZW1lbnQnXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj0nRW1wbG95ZWVzIExpc3RpbmcgJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgzPkVkaXRpbmcge3VzZXIubmFtZX0gUHJvZmlsZTwvaDM+XHJcbiAgICAgICAgey8qIDxGb3JtaWtGb3JtIC8+ICovfVxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gb25TdWJtaXQoZSl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1yb3cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC02Jz5cclxuICAgICAgICAgICAgICA8bGFiZWw+RnVsbCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nbmFtZSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbXBsb3llZSBGdWxsIE5hbWUnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Vc2VyIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSd1c2VyTmFtZSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyTmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1wbG95ZWUgVXNlciBOYW1lJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLXJvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5Nb2JpbGUgTm88L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGVsJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J3Bob25lJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbXBsb3llZSBNb2JpbGUgTm8nXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5DTklDIE5vPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdjbmljTm8nXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y25pY05vfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbXBsb3llZSBDbmljIE5vJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLXJvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1wbG95ZWUgRW1haWwgYWRkcmVzcydcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNic+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPkNvdW50cnk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nY291bnRyeSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbXBsb3llZSBDb3VudHJ5J1xyXG4gICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbmFtZT0nY291bnRyeSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudHJ5fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+Q2hvb3NlLi4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPlBha2lzdGFuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPkluZGlhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPlUuUy5BPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLXJvdyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5EYXRlIG9mIGJpcnRoPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J2RhdGUnXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nZG9iJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2RvYn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTYnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbD5EYXRlIG9mIGhpcmluZzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSdkYXRlJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2RvaCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkb2h9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwJz5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj0naW5wdXRBZGRyZXNzJz5BZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgIGlkPSdpbnB1dEFkZHJlc3MnXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzEyMzQgTWFpbiBTdCdcclxuICAgICAgICAgICAgICBuYW1lPSdhZGRyZXNzJ1xyXG4gICAgICAgICAgICAgIHZhbHVlPXthZGRyZXNzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1yb3cnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC01Jz5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPSdpbnB1dENpdHknPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBpZD0naW5wdXRDaXR5J1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nY2l0eSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjaXR5fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbXBsb3llZSBDaXR5J1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC0zJz5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPSdpbnB1dFN0YXRlJz5Qcm92aW5jZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2luZGgnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwcm92aW5jZSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm92aW5jZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdwcm92aW5jZSdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm92aW5jZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPkNob29zZS4uLjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5TaW5kaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj5QdW5qYWI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+QmFsb2NoaXN0YW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+S2h5YmVyIFBha2h0dW5raHdhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmb3JtLWdyb3VwIGNvbC1tZC00Jz5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPSdpbnB1dFppcCc+WmlwPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RlbCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBpZD0naW5wdXRaaXAnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSd6aXAnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17emlwfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbXBsb3llZSBaaXAgY29kZSdcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tcm93Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNCc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj0naW5wdXRDaXR5Jz5EZXBhcnRtZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgaWQ9J2lucHV0Q2l0eSdcclxuICAgICAgICAgICAgICAgIG5hbWU9J2RlcGFydCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkZXBhcnR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uSW5wdXRDaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtcGxveWVlIERlcGFydG1lbnQnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2Zvcm0tZ3JvdXAgY29sLW1kLTQnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9J2lucHV0U3RhdGUnPlN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIGNsYXNzPSdmb3JtLWNvbnRyb2wnXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbklucHV0Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdIaXJlIC8gTm90IEhpcmUnXHJcbiAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9J2Zvcm0tY29udHJvbCdcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPSdzdGF0dXMnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdHVzfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+Q2hvb3NlLi4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPkhpcmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+Tm90IEhpcmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24+UGVuZGluZzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZm9ybS1ncm91cCBjb2wtbWQtNCc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj0naW5wdXRaaXAnPlNhbGFyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZWwnXHJcbiAgICAgICAgICAgICAgICBjbGFzcz0nZm9ybS1jb250cm9sJ1xyXG4gICAgICAgICAgICAgICAgaWQ9J2lucHV0WmlwJ1xyXG4gICAgICAgICAgICAgICAgbmFtZT0nc2FsYXJ5J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NhbGFyeX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25JbnB1dENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1wbG95ZWUgU2FsYXJ5J1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT17c3R5bGUuYnRufT5cclxuICAgICAgICAgICAgRWRpdCBFbXBsb3llZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L0NvbnRhaW5lckRlZmF1bHQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFVzZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=