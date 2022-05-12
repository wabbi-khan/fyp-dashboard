webpackHotUpdate_N_E("pages/employees-management",{

/***/ "./firebaseConfig.js":
/*!***************************!*\
  !*** ./firebaseConfig.js ***!
  \***************************/
/*! exports provided: app, database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app", function() { return app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "database", function() { return database; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
// Import the functions you need from the SDKs you need



var firebaseConfig = {
  apiKey: "AIzaSyD2fFro448NgCMuR8ZrQBP2iT5l3qoSdmg",
  authDomain: "learn-189ba.firebaseapp.com",
  projectId: "learn-189ba",
  storageBucket: "learn-189ba.appspot.com",
  messagingSenderId: "9257843948",
  appId: "1:9257843948:web:dfa51db592a39a0d5379c9",
  measurementId: "G-TQWCCB47FP"
}; // Initialize Firebase

var app = Object(firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"])(firebaseConfig);
var database = Object(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__["getFirestore"])(app);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@firebase/storage/dist/index.esm2017.js":
/*!**************************************************************!*\
  !*** ./node_modules/@firebase/storage/dist/index.esm2017.js ***!
  \**************************************************************/
/*! exports provided: StringFormat, _FbsBlob, _Location, _TaskEvent, _TaskState, _UploadTask, _dataFromString, _getChild, _invalidArgument, _invalidRootOperation, connectStorageEmulator, deleteObject, getBlob, getBytes, getDownloadURL, getMetadata, getStorage, getStream, list, listAll, ref, updateMetadata, uploadBytes, uploadBytesResumable, uploadString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringFormat", function() { return StringFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_FbsBlob", function() { return FbsBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_TaskEvent", function() { return TaskEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_TaskState", function() { return TaskState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_UploadTask", function() { return UploadTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_dataFromString", function() { return dataFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getChild", function() { return _getChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_invalidArgument", function() { return invalidArgument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_invalidRootOperation", function() { return invalidRootOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectStorageEmulator", function() { return connectStorageEmulator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteObject", function() { return deleteObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlob", function() { return getBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBytes", function() { return getBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDownloadURL", function() { return getDownloadURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetadata", function() { return getMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return getStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStream", function() { return getStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAll", function() { return listAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMetadata", function() { return updateMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadBytes", function() { return uploadBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadBytesResumable", function() { return uploadBytesResumable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadString", function() { return uploadString; });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js");




/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Constants used in the Firebase Storage library.
 */
/**
 * Domain name for firebase storage.
 */
const DEFAULT_HOST = 'firebasestorage.googleapis.com';
/**
 * The key in Firebase config json for the storage bucket.
 */
const CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
/**
 * 2 minutes
 *
 * The timeout for all operations except upload.
 */
const DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
/**
 * 10 minutes
 *
 * The timeout for upload.
 */
const DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An error returned by the Firebase Storage SDK.
 * @public
 */
class StorageError extends _firebase_util__WEBPACK_IMPORTED_MODULE_1__["FirebaseError"] {
    /**
     * @param code - A StorageErrorCode string to be prefixed with 'storage/' and
     *  added to the end of the message.
     * @param message  - Error message.
     */
    constructor(code, message) {
        super(prependCode(code), `Firebase Storage: ${message} (${prependCode(code)})`);
        /**
         * Stores custom error data unque to StorageError.
         */
        this.customData = { serverResponse: null };
        this._baseMessage = this.message;
        // Without this, `instanceof StorageError`, in tests for example,
        // returns false.
        Object.setPrototypeOf(this, StorageError.prototype);
    }
    /**
     * Compares a StorageErrorCode against this error's code, filtering out the prefix.
     */
    _codeEquals(code) {
        return prependCode(code) === this.code;
    }
    /**
     * Optional response message that was added by the server.
     */
    get serverResponse() {
        return this.customData.serverResponse;
    }
    set serverResponse(serverResponse) {
        this.customData.serverResponse = serverResponse;
        if (this.customData.serverResponse) {
            this.message = `${this._baseMessage}\n${this.customData.serverResponse}`;
        }
        else {
            this.message = this._baseMessage;
        }
    }
}
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    const message = 'An unknown error occurred, please check the error payload for ' +
        'server response.';
    return new StorageError("unknown" /* UNKNOWN */, message);
}
function objectNotFound(path) {
    return new StorageError("object-not-found" /* OBJECT_NOT_FOUND */, "Object '" + path + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new StorageError("quota-exceeded" /* QUOTA_EXCEEDED */, "Quota for bucket '" +
        bucket +
        "' exceeded, please view quota on " +
        'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    const message = 'User is not authenticated, please authenticate using Firebase ' +
        'Authentication and try again.';
    return new StorageError("unauthenticated" /* UNAUTHENTICATED */, message);
}
function unauthorizedApp() {
    return new StorageError("unauthorized-app" /* UNAUTHORIZED_APP */, 'This app does not have permission to access Firebase Storage on this project.');
}
function unauthorized(path) {
    return new StorageError("unauthorized" /* UNAUTHORIZED */, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new StorageError("retry-limit-exceeded" /* RETRY_LIMIT_EXCEEDED */, 'Max retry time for operation exceeded, please try again.');
}
function canceled() {
    return new StorageError("canceled" /* CANCELED */, 'User canceled the upload/download.');
}
function invalidUrl(url) {
    return new StorageError("invalid-url" /* INVALID_URL */, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new StorageError("invalid-default-bucket" /* INVALID_DEFAULT_BUCKET */, "Invalid default bucket '" + bucket + "'.");
}
function noDefaultBucket() {
    return new StorageError("no-default-bucket" /* NO_DEFAULT_BUCKET */, 'No default bucket ' +
        "found. Did you set the '" +
        CONFIG_STORAGE_BUCKET_KEY +
        "' property when initializing the app?");
}
function cannotSliceBlob() {
    return new StorageError("cannot-slice-blob" /* CANNOT_SLICE_BLOB */, 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new StorageError("server-file-wrong-size" /* SERVER_FILE_WRONG_SIZE */, 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new StorageError("no-download-url" /* NO_DOWNLOAD_URL */, 'The given file does not have any download URLs.');
}
/**
 * @internal
 */
function invalidArgument(message) {
    return new StorageError("invalid-argument" /* INVALID_ARGUMENT */, message);
}
function appDeleted() {
    return new StorageError("app-deleted" /* APP_DELETED */, 'The Firebase app was deleted.');
}
/**
 * @param name - The name of the operation that was invalid.
 *
 * @internal
 */
function invalidRootOperation(name) {
    return new StorageError("invalid-root-operation" /* INVALID_ROOT_OPERATION */, "The operation '" +
        name +
        "' cannot be performed on a root reference, create a non-root " +
        "reference using child, such as .child('file.png').");
}
/**
 * @param format - The format that was not valid.
 * @param message - A message describing the format violation.
 */
function invalidFormat(format, message) {
    return new StorageError("invalid-format" /* INVALID_FORMAT */, "String does not match format '" + format + "': " + message);
}
/**
 * @param message - A message describing the internal error.
 */
function internalError(message) {
    throw new StorageError("internal-error" /* INTERNAL_ERROR */, 'Internal error: ' + message);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Firebase Storage location data.
 *
 * @internal
 */
class Location {
    constructor(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
    }
    get path() {
        return this.path_;
    }
    get isRoot() {
        return this.path.length === 0;
    }
    fullServerUrl() {
        const encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    }
    bucketOnlyServerUrl() {
        const encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    }
    static makeFromBucketSpec(bucketString, host) {
        let bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString, host);
        }
        catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
        }
        if (bucketLocation.path === '') {
            return bucketLocation;
        }
        else {
            throw invalidDefaultBucket(bucketString);
        }
    }
    static makeFromUrl(url, host) {
        let location = null;
        const bucketDomain = '([A-Za-z0-9.\\-_]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
                loc.path_ = loc.path_.slice(0, -1);
            }
        }
        const gsPath = '(/(.*))?$';
        const gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        const gsIndices = { bucket: 1, path: 3 };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        const version = 'v[A-Za-z0-9_]+';
        const firebaseStorageHost = host.replace(/[.]/g, '\\.');
        const firebaseStoragePath = '(/([^?#]*).*)?$';
        const firebaseStorageRegExp = new RegExp(`^https?://${firebaseStorageHost}/${version}/b/${bucketDomain}/o${firebaseStoragePath}`, 'i');
        const firebaseStorageIndices = { bucket: 1, path: 3 };
        const cloudStorageHost = host === DEFAULT_HOST
            ? '(?:storage.googleapis.com|storage.cloud.google.com)'
            : host;
        const cloudStoragePath = '([^?#]*)';
        const cloudStorageRegExp = new RegExp(`^https?://${cloudStorageHost}/${bucketDomain}/${cloudStoragePath}`, 'i');
        const cloudStorageIndices = { bucket: 1, path: 2 };
        const groups = [
            { regex: gsRegex, indices: gsIndices, postModify: gsModify },
            {
                regex: firebaseStorageRegExp,
                indices: firebaseStorageIndices,
                postModify: httpModify
            },
            {
                regex: cloudStorageRegExp,
                indices: cloudStorageIndices,
                postModify: httpModify
            }
        ];
        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            const captures = group.regex.exec(url);
            if (captures) {
                const bucketValue = captures[group.indices.bucket];
                let pathValue = captures[group.indices.path];
                if (!pathValue) {
                    pathValue = '';
                }
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) {
            throw invalidUrl(url);
        }
        return location;
    }
}

/**
 * A request whose promise always fails.
 */
class FailRequest {
    constructor(error) {
        this.promise_ = Promise.reject(error);
    }
    /** @inheritDoc */
    getPromise() {
        return this.promise_;
    }
    /** @inheritDoc */
    cancel(_appDelete = false) { }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param f May be invoked
 *     before the function returns.
 * @param callback Get all the arguments passed to the function
 *     passed to f, including the initial boolean.
 */
function start(f, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
callback, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    let waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    // TODO: find a way to exclude Node type definition for storage because storage only works in browser
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let retryTimeoutId = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let globalTimeoutId = null;
    let hitTimeout = false;
    let cancelState = 0;
    function canceled() {
        return cancelState === 2;
    }
    let triggeredCallback = false;
    function triggerCallback(...args) {
        if (!triggeredCallback) {
            triggeredCallback = true;
            callback.apply(null, args);
        }
    }
    function callWithDelay(millis) {
        retryTimeoutId = setTimeout(() => {
            retryTimeoutId = null;
            f(handler, canceled());
        }, millis);
    }
    function clearGlobalTimeout() {
        if (globalTimeoutId) {
            clearTimeout(globalTimeoutId);
        }
    }
    function handler(success, ...args) {
        if (triggeredCallback) {
            clearGlobalTimeout();
            return;
        }
        if (success) {
            clearGlobalTimeout();
            triggerCallback.call(null, success, ...args);
            return;
        }
        const mustStop = canceled() || hitTimeout;
        if (mustStop) {
            clearGlobalTimeout();
            triggerCallback.call(null, success, ...args);
            return;
        }
        if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
        }
        let waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        }
        else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
        }
        callWithDelay(waitMillis);
    }
    let stopped = false;
    function stop(wasTimeout) {
        if (stopped) {
            return;
        }
        stopped = true;
        clearGlobalTimeout();
        if (triggeredCallback) {
            return;
        }
        if (retryTimeoutId !== null) {
            if (!wasTimeout) {
                cancelState = 2;
            }
            clearTimeout(retryTimeoutId);
            callWithDelay(0);
        }
        else {
            if (!wasTimeout) {
                cancelState = 1;
            }
        }
    }
    callWithDelay(0);
    globalTimeoutId = setTimeout(() => {
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */
function stop(id) {
    id(false);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isJustDef(p) {
    return p !== void 0;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(p) {
    return typeof p === 'function';
}
function isNonArrayObject(p) {
    return typeof p === 'object' && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}
function validateNumber(argument, minValue, maxValue, value) {
    if (value < minValue) {
        throw invalidArgument(`Invalid value for '${argument}'. Expected ${minValue} or greater.`);
    }
    if (value > maxValue) {
        throw invalidArgument(`Invalid value for '${argument}'. Expected ${maxValue} or less.`);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function makeUrl(urlPart, host, protocol) {
    let origin = host;
    if (protocol == null) {
        origin = `https://${host}`;
    }
    return `${protocol}://${origin}/v0${urlPart}`;
}
function makeQueryString(params) {
    const encode = encodeURIComponent;
    let queryPart = '?';
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const nextPart = encode(key) + '=' + encode(params[key]);
            queryPart = queryPart + nextPart + '&';
        }
    }
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Error codes for requests made by the the XhrIo wrapper.
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Handles network logic for all Storage Requests, including error reporting and
 * retries with backoff.
 *
 * @param I - the type of the backend's network response.
 * @param - O the output type used by the rest of the SDK. The conversion
 * happens in the specified `callback_`.
 */
class NetworkRequest {
    constructor(url_, method_, headers_, body_, successCodes_, additionalRetryCodes_, callback_, errorCallback_, timeout_, progressCallback_, connectionFactory_) {
        this.url_ = url_;
        this.method_ = method_;
        this.headers_ = headers_;
        this.body_ = body_;
        this.successCodes_ = successCodes_;
        this.additionalRetryCodes_ = additionalRetryCodes_;
        this.callback_ = callback_;
        this.errorCallback_ = errorCallback_;
        this.timeout_ = timeout_;
        this.progressCallback_ = progressCallback_;
        this.connectionFactory_ = connectionFactory_;
        this.pendingConnection_ = null;
        this.backoffId_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.promise_ = new Promise((resolve, reject) => {
            this.resolve_ = resolve;
            this.reject_ = reject;
            this.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */
    start_() {
        const doTheRequest = (backoffCallback, canceled) => {
            if (canceled) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            const connection = this.connectionFactory_();
            this.pendingConnection_ = connection;
            const progressListener = progressEvent => {
                const loaded = progressEvent.loaded;
                const total = progressEvent.lengthComputable
                    ? progressEvent.total
                    : -1;
                if (this.progressCallback_ !== null) {
                    this.progressCallback_(loaded, total);
                }
            };
            if (this.progressCallback_ !== null) {
                connection.addUploadProgressListener(progressListener);
            }
            // connection.send() never rejects, so we don't need to have a error handler or use catch on the returned promise.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            connection
                .send(this.url_, this.method_, this.body_, this.headers_)
                .then(() => {
                if (this.progressCallback_ !== null) {
                    connection.removeUploadProgressListener(progressListener);
                }
                this.pendingConnection_ = null;
                const hitServer = connection.getErrorCode() === ErrorCode.NO_ERROR;
                const status = connection.getStatus();
                if (!hitServer || this.isRetryStatusCode_(status)) {
                    const wasCanceled = connection.getErrorCode() === ErrorCode.ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                const successCode = this.successCodes_.indexOf(status) !== -1;
                backoffCallback(true, new RequestEndStatus(successCode, connection));
            });
        };
        /**
         * @param requestWentThrough - True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */
        const backoffDone = (requestWentThrough, status) => {
            const resolve = this.resolve_;
            const reject = this.reject_;
            const connection = status.connection;
            if (status.wasSuccessCode) {
                try {
                    const result = this.callback_(connection, connection.getResponse());
                    if (isJustDef(result)) {
                        resolve(result);
                    }
                    else {
                        resolve();
                    }
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                if (connection !== null) {
                    const err = unknown();
                    err.serverResponse = connection.getErrorText();
                    if (this.errorCallback_) {
                        reject(this.errorCallback_(connection, err));
                    }
                    else {
                        reject(err);
                    }
                }
                else {
                    if (status.canceled) {
                        const err = this.appDelete_ ? appDeleted() : canceled();
                        reject(err);
                    }
                    else {
                        const err = retryLimitExceeded();
                        reject(err);
                    }
                }
            }
        };
        if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
        }
        else {
            this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
        }
    }
    /** @inheritDoc */
    getPromise() {
        return this.promise_;
    }
    /** @inheritDoc */
    cancel(appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) {
            stop(this.backoffId_);
        }
        if (this.pendingConnection_ !== null) {
            this.pendingConnection_.abort();
        }
    }
    isRetryStatusCode_(status) {
        // The codes for which to retry came from this page:
        // https://cloud.google.com/storage/docs/exponential-backoff
        const isFiveHundredCode = status >= 500 && status < 600;
        const extraRetryCodes = [
            // Request Timeout: web server didn't receive full request in time.
            408,
            // Too Many Requests: you're getting rate-limited, basically.
            429
        ];
        const isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
        const isRequestSpecificRetryCode = this.additionalRetryCodes_.indexOf(status) !== -1;
        return isFiveHundredCode || isExtraRetryCode || isRequestSpecificRetryCode;
    }
}
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled - Defaults to false.
 */
class RequestEndStatus {
    constructor(wasSuccessCode, connection, canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.connection = connection;
        this.canceled = !!canceled;
    }
}
function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
    }
}
function addVersionHeader_(headers, firebaseVersion) {
    headers['X-Firebase-Storage-Version'] =
        'webjs/' + (firebaseVersion !== null && firebaseVersion !== void 0 ? firebaseVersion : 'AppManager');
}
function addGmpidHeader_(headers, appId) {
    if (appId) {
        headers['X-Firebase-GMPID'] = appId;
    }
}
function addAppCheckHeader_(headers, appCheckToken) {
    if (appCheckToken !== null) {
        headers['X-Firebase-AppCheck'] = appCheckToken;
    }
}
function makeRequest(requestInfo, appId, authToken, appCheckToken, requestFactory, firebaseVersion) {
    const queryPart = makeQueryString(requestInfo.urlParams);
    const url = requestInfo.url + queryPart;
    const headers = Object.assign({}, requestInfo.headers);
    addGmpidHeader_(headers, appId);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers, firebaseVersion);
    addAppCheckHeader_(headers, appCheckToken);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, requestFactory);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
    }
    else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
    }
    else {
        return undefined;
    }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param args The values that will make up the resulting blob.
 * @return The blob.
 */
function getBlob$1(...args) {
    const BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        const bb = new BlobBuilder();
        for (let i = 0; i < args.length; i++) {
            bb.append(args[i]);
        }
        return bb.getBlob();
    }
    else {
        if (isNativeBlobDefined()) {
            return new Blob(args);
        }
        else {
            throw new StorageError("unsupported-environment" /* UNSUPPORTED_ENVIRONMENT */, "This browser doesn't seem to support creating Blobs");
        }
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */
function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
    }
    else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
    }
    else if (blob.slice) {
        return blob.slice(start, end);
    }
    return null;
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Converts a Base64 encoded string to a binary string. */
function decodeBase64(encoded) {
    return atob(encoded);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An enumeration of the possible string formats for upload.
 * @public
 */
const StringFormat = {
    /**
     * Indicates the string should be interpreted "raw", that is, as normal text.
     * The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
     * sequence.
     * Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
     * 48 65 6c 6c 6f 21 20 f0 9f 98 8a
     */
    RAW: 'raw',
    /**
     * Indicates the string should be interpreted as base64-encoded data.
     * Padding characters (trailing '='s) are optional.
     * Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
     * ad 69 8e fb e1 3a b7 bf eb 97
     */
    BASE64: 'base64',
    /**
     * Indicates the string should be interpreted as base64url-encoded data.
     * Padding characters (trailing '='s) are optional.
     * Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
     * ad 69 8e fb e1 3a b7 bf eb 97
     */
    BASE64URL: 'base64url',
    /**
     * Indicates the string is a data URL, such as one obtained from
     * canvas.toDataURL().
     * Example: the string 'data:application/octet-stream;base64,aaaa'
     * becomes the byte sequence
     * 69 a6 9a
     * (the content-type "application/octet-stream" is also applied, but can
     * be overridden in the metadata object).
     */
    DATA_URL: 'data_url'
};
class StringData {
    constructor(data, contentType) {
        this.data = data;
        this.contentType = contentType || null;
    }
}
/**
 * @internal
 */
function dataFromString(format, stringData) {
    switch (format) {
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(stringData));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, stringData));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
        // do nothing
    }
    // assert(false);
    throw unknown();
}
function utf8Bytes_(value) {
    const b = [];
    for (let i = 0; i < value.length; i++) {
        let c = value.charCodeAt(i);
        if (c <= 127) {
            b.push(c);
        }
        else {
            if (c <= 2047) {
                b.push(192 | (c >> 6), 128 | (c & 63));
            }
            else {
                if ((c & 64512) === 55296) {
                    // The start of a surrogate pair.
                    const valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
                    if (!valid) {
                        // The second surrogate wasn't there.
                        b.push(239, 191, 189);
                    }
                    else {
                        const hi = c;
                        const lo = value.charCodeAt(++i);
                        c = 65536 | ((hi & 1023) << 10) | (lo & 1023);
                        b.push(240 | (c >> 18), 128 | ((c >> 12) & 63), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
                else {
                    if ((c & 64512) === 56320) {
                        // Invalid low surrogate.
                        b.push(239, 191, 189);
                    }
                    else {
                        b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
            }
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(value) {
    let decoded;
    try {
        decoded = decodeURIComponent(value);
    }
    catch (e) {
        throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, value) {
    switch (format) {
        case StringFormat.BASE64: {
            const hasMinus = value.indexOf('-') !== -1;
            const hasUnder = value.indexOf('_') !== -1;
            if (hasMinus || hasUnder) {
                const invalidChar = hasMinus ? '-' : '_';
                throw invalidFormat(format, "Invalid character '" +
                    invalidChar +
                    "' found: is it base64url encoded?");
            }
            break;
        }
        case StringFormat.BASE64URL: {
            const hasPlus = value.indexOf('+') !== -1;
            const hasSlash = value.indexOf('/') !== -1;
            if (hasPlus || hasSlash) {
                const invalidChar = hasPlus ? '+' : '/';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
            }
            value = value.replace(/-/g, '+').replace(/_/g, '/');
            break;
        }
        // do nothing
    }
    let bytes;
    try {
        bytes = decodeBase64(value);
    }
    catch (e) {
        throw invalidFormat(format, 'Invalid character found');
    }
    const array = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return array;
}
class DataURLParts {
    constructor(dataURL) {
        this.base64 = false;
        this.contentType = null;
        const matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) {
            throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }
        const middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64
                ? middle.substring(0, middle.length - ';base64'.length)
                : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
}
function dataURLBytes_(dataUrl) {
    const parts = new DataURLParts(dataUrl);
    if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
    }
    else {
        return percentEncodedBytes_(parts.rest);
    }
}
function dataURLContentType_(dataUrl) {
    const parts = new DataURLParts(dataUrl);
    return parts.contentType;
}
function endsWith(s, end) {
    const longEnough = s.length >= end.length;
    if (!longEnough) {
        return false;
    }
    return s.substring(s.length - end.length) === end;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param opt_elideCopy - If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 *
 * @internal
 */
class FbsBlob {
    constructor(data, elideCopy) {
        let size = 0;
        let blobType = '';
        if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        }
        else if (data instanceof ArrayBuffer) {
            if (elideCopy) {
                this.data_ = new Uint8Array(data);
            }
            else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        }
        else if (data instanceof Uint8Array) {
            if (elideCopy) {
                this.data_ = data;
            }
            else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    size() {
        return this.size_;
    }
    type() {
        return this.type_;
    }
    slice(startByte, endByte) {
        if (isNativeBlob(this.data_)) {
            const realBlob = this.data_;
            const sliced = sliceBlob(realBlob, startByte, endByte);
            if (sliced === null) {
                return null;
            }
            return new FbsBlob(sliced);
        }
        else {
            const slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    }
    static getBlob(...args) {
        if (isNativeBlobDefined()) {
            const blobby = args.map((val) => {
                if (val instanceof FbsBlob) {
                    return val.data_;
                }
                else {
                    return val;
                }
            });
            return new FbsBlob(getBlob$1.apply(null, blobby));
        }
        else {
            const uint8Arrays = args.map((val) => {
                if (isString(val)) {
                    return dataFromString(StringFormat.RAW, val).data;
                }
                else {
                    // Blobs don't exist, so this has to be a Uint8Array.
                    return val.data_;
                }
            });
            let finalLength = 0;
            uint8Arrays.forEach((array) => {
                finalLength += array.byteLength;
            });
            const merged = new Uint8Array(finalLength);
            let index = 0;
            uint8Arrays.forEach((array) => {
                for (let i = 0; i < array.length; i++) {
                    merged[index++] = array[i];
                }
            });
            return new FbsBlob(merged, true);
        }
    }
    uploadData() {
        return this.data_;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */
function jsonObjectOrNull(s) {
    let obj;
    try {
        obj = JSON.parse(s);
    }
    catch (e) {
        return null;
    }
    if (isNonArrayObject(obj)) {
        return obj;
    }
    else {
        return null;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Contains helper methods for manipulating paths.
 */
/**
 * @return Null if the path is already at the root.
 */
function parent(path) {
    if (path.length === 0) {
        return null;
    }
    const index = path.lastIndexOf('/');
    if (index === -1) {
        return '';
    }
    const newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    const canonicalChildPath = childPath
        .split('/')
        .filter(component => component.length > 0)
        .join('/');
    if (path.length === 0) {
        return canonicalChildPath;
    }
    else {
        return path + '/' + canonicalChildPath;
    }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */
function lastComponent(path) {
    const index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) {
        return path;
    }
    else {
        return path.slice(index + 1);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function noXform_(metadata, value) {
    return value;
}
class Mapping {
    constructor(server, local, writable, xform) {
        this.server = server;
        this.local = local || server;
        this.writable = !!writable;
        this.xform = xform || noXform_;
    }
}
let mappings_ = null;
function xformPath(fullPath) {
    if (!isString(fullPath) || fullPath.length < 2) {
        return fullPath;
    }
    else {
        return lastComponent(fullPath);
    }
}
function getMappings() {
    if (mappings_) {
        return mappings_;
    }
    const mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(_metadata, fullPath) {
        return xformPath(fullPath);
    }
    const nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */
    function xformSize(_metadata, size) {
        if (size !== undefined) {
            return Number(size);
        }
        else {
            return size;
        }
    }
    const sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, service) {
    function generateRef() {
        const bucket = metadata['bucket'];
        const path = metadata['fullPath'];
        const loc = new Location(bucket, path);
        return service._makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', { get: generateRef });
}
function fromResource(service, resource, mappings) {
    const metadata = {};
    metadata['type'] = 'file';
    const len = mappings.length;
    for (let i = 0; i < len; i++) {
        const mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, service);
    return metadata;
}
function fromResourceString(service, resourceString, mappings) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    const resource = obj;
    return fromResource(service, resource, mappings);
}
function downloadUrlFromResourceString(metadata, resourceString, host, protocol) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    if (!isString(obj['downloadTokens'])) {
        // This can happen if objects are uploaded through GCS and retrieved
        // through list, so we don't want to throw an Error.
        return null;
    }
    const tokens = obj['downloadTokens'];
    if (tokens.length === 0) {
        return null;
    }
    const encode = encodeURIComponent;
    const tokensList = tokens.split(',');
    const urls = tokensList.map((token) => {
        const bucket = metadata['bucket'];
        const path = metadata['fullPath'];
        const urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
        const base = makeUrl(urlPart, host, protocol);
        const queryString = makeQueryString({
            alt: 'media',
            token
        });
        return base + queryString;
    });
    return urls[0];
}
function toResourceString(metadata, mappings) {
    const resource = {};
    const len = mappings.length;
    for (let i = 0; i < len; i++) {
        const mapping = mappings[i];
        if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
        }
    }
    return JSON.stringify(resource);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PREFIXES_KEY = 'prefixes';
const ITEMS_KEY = 'items';
function fromBackendResponse(service, bucket, resource) {
    const listResult = {
        prefixes: [],
        items: [],
        nextPageToken: resource['nextPageToken']
    };
    if (resource[PREFIXES_KEY]) {
        for (const path of resource[PREFIXES_KEY]) {
            const pathWithoutTrailingSlash = path.replace(/\/$/, '');
            const reference = service._makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
            listResult.prefixes.push(reference);
        }
    }
    if (resource[ITEMS_KEY]) {
        for (const item of resource[ITEMS_KEY]) {
            const reference = service._makeStorageReference(new Location(bucket, item['name']));
            listResult.items.push(reference);
        }
    }
    return listResult;
}
function fromResponseString(service, bucket, resourceString) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    const resource = obj;
    return fromBackendResponse(service, bucket, resource);
}

/**
 * Contains a fully specified request.
 *
 * @param I - the type of the backend's network response.
 * @param O - the output response type used by the rest of the SDK.
 */
class RequestInfo {
    constructor(url, method, 
    /**
     * Returns the value with which to resolve the request's promise. Only called
     * if the request is successful. Throw from this function to reject the
     * returned Request's promise with the thrown error.
     * Note: The XhrIo passed to this function may be reused after this callback
     * returns. Do not keep a reference to it in any way.
     */
    handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */
        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws the UNKNOWN StorageError if cndn is false.
 */
function handlerCheck(cndn) {
    if (!cndn) {
        throw unknown();
    }
}
function metadataHandler(service, mappings) {
    function handler(xhr, text) {
        const metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function listHandler(service, bucket) {
    function handler(xhr, text) {
        const listResult = fromResponseString(service, bucket, text);
        handlerCheck(listResult !== null);
        return listResult;
    }
    return handler;
}
function downloadUrlHandler(service, mappings) {
    function handler(xhr, text) {
        const metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return downloadUrlFromResourceString(metadata, text, service.host, service._protocol);
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        let newErr;
        if (xhr.getStatus() === 401) {
            if (
            // This exact message string is the only consistent part of the
            // server's error response that identifies it as an App Check error.
            xhr.getErrorText().includes('Firebase App Check token is invalid')) {
                newErr = unauthorizedApp();
            }
            else {
                newErr = unauthenticated();
            }
        }
        else {
            if (xhr.getStatus() === 402) {
                newErr = quotaExceeded(location.bucket);
            }
            else {
                if (xhr.getStatus() === 403) {
                    newErr = unauthorized(location.path);
                }
                else {
                    newErr = err;
                }
            }
        }
        newErr.serverResponse = err.serverResponse;
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    const shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        let newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) {
            newErr = objectNotFound(location.path);
        }
        newErr.serverResponse = err.serverResponse;
        return newErr;
    }
    return errorHandler;
}
function getMetadata$2(service, location, mappings) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'GET';
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function list$2(service, location, delimiter, pageToken, maxResults) {
    const urlParams = {};
    if (location.isRoot) {
        urlParams['prefix'] = '';
    }
    else {
        urlParams['prefix'] = location.path + '/';
    }
    if (delimiter && delimiter.length > 0) {
        urlParams['delimiter'] = delimiter;
    }
    if (pageToken) {
        urlParams['pageToken'] = pageToken;
    }
    if (maxResults) {
        urlParams['maxResults'] = maxResults;
    }
    const urlPart = location.bucketOnlyServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'GET';
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
function getBytes$1(service, location, maxDownloadSizeBytes) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol) + '?alt=media';
    const method = 'GET';
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, (_, data) => data, timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    if (maxDownloadSizeBytes !== undefined) {
        requestInfo.headers['Range'] = `bytes=0-${maxDownloadSizeBytes}`;
        requestInfo.successCodes = [200 /* OK */, 206 /* Partial Content */];
    }
    return requestInfo;
}
function getDownloadUrl(service, location, mappings) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'GET';
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata$2(service, location, metadata, mappings) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'PATCH';
    const body = toResourceString(metadata, mappings);
    const headers = { 'Content-Type': 'application/json; charset=utf-8' };
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject$2(service, location) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'DELETE';
    const timeout = service.maxOperationRetryTime;
    function handler(_xhr, _text) { }
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.successCodes = [200, 204];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return ((metadata && metadata['contentType']) ||
        (blob && blob.type()) ||
        'application/octet-stream');
}
function metadataForUpload_(location, blob, metadata) {
    const metadataClone = Object.assign({}, metadata);
    metadataClone['fullPath'] = location.path;
    metadataClone['size'] = blob.size();
    if (!metadataClone['contentType']) {
        metadataClone['contentType'] = determineContentType_(null, blob);
    }
    return metadataClone;
}
/**
 * Prepare RequestInfo for uploads as Content-Type: multipart.
 */
function multipartUpload(service, location, mappings, blob, metadata) {
    const urlPart = location.bucketOnlyServerUrl();
    const headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        let str = '';
        for (let i = 0; i < 2; i++) {
            str = str + Math.random().toString().slice(2);
        }
        return str;
    }
    const boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    const metadata_ = metadataForUpload_(location, blob, metadata);
    const metadataString = toResourceString(metadata_, mappings);
    const preBlobPart = '--' +
        boundary +
        '\r\n' +
        'Content-Type: application/json; charset=utf-8\r\n\r\n' +
        metadataString +
        '\r\n--' +
        boundary +
        '\r\n' +
        'Content-Type: ' +
        metadata_['contentType'] +
        '\r\n\r\n';
    const postBlobPart = '\r\n--' + boundary + '--';
    const body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
        throw cannotSliceBlob();
    }
    const urlParams = { name: metadata_['fullPath'] };
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'POST';
    const timeout = service.maxUploadRetryTime;
    const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 */
class ResumableUploadStatus {
    constructor(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
}
function checkResumeHeader_(xhr, allowed) {
    let status = null;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    }
    catch (e) {
        handlerCheck(false);
    }
    const allowedStatus = allowed || ['active'];
    handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
    return status;
}
function createResumableUpload(service, location, mappings, blob, metadata) {
    const urlPart = location.bucketOnlyServerUrl();
    const metadataForUpload = metadataForUpload_(location, blob, metadata);
    const urlParams = { name: metadataForUpload['fullPath'] };
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'POST';
    const headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': `${blob.size()}`,
        'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    const body = toResourceString(metadataForUpload, mappings);
    const timeout = service.maxUploadRetryTime;
    function handler(xhr) {
        checkResumeHeader_(xhr);
        let url;
        try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
        }
        catch (e) {
            handlerCheck(false);
        }
        handlerCheck(isString(url));
        return url;
    }
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */
function getResumableUploadStatus(service, location, url, blob) {
    const headers = { 'X-Goog-Upload-Command': 'query' };
    function handler(xhr) {
        const status = checkResumeHeader_(xhr, ['active', 'final']);
        let sizeString = null;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        }
        catch (e) {
            handlerCheck(false);
        }
        if (!sizeString) {
            // null or empty string
            handlerCheck(false);
        }
        const size = Number(sizeString);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    const method = 'POST';
    const timeout = service.maxUploadRetryTime;
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */
const RESUMABLE_UPLOAD_CHUNK_SIZE = 256 * 1024;
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */
function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    const status_ = new ResumableUploadStatus(0, 0);
    if (status) {
        status_.current = status.current;
        status_.total = status.total;
    }
    else {
        status_.current = 0;
        status_.total = blob.size();
    }
    if (blob.size() !== status_.total) {
        throw serverFileWrongSize();
    }
    const bytesLeft = status_.total - status_.current;
    let bytesToUpload = bytesLeft;
    if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
    }
    const startByte = status_.current;
    const endByte = startByte + bytesToUpload;
    const uploadCommand = bytesToUpload === bytesLeft ? 'upload, finalize' : 'upload';
    const headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': `${status_.current}`
    };
    const body = blob.slice(startByte, endByte);
    if (body === null) {
        throw cannotSliceBlob();
    }
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        const uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        const newCurrent = status_.current + bytesToUpload;
        const size = blob.size();
        let metadata;
        if (uploadStatus === 'final') {
            metadata = metadataHandler(service, mappings)(xhr, text);
        }
        else {
            metadata = null;
        }
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    const method = 'POST';
    const timeout = service.maxUploadRetryTime;
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An event that is triggered on a task.
 * @internal
 */
const TaskEvent = {
    /**
     * For this event,
     * <ul>
     *   <li>The `next` function is triggered on progress updates and when the
     *       task is paused/resumed with an `UploadTaskSnapshot` as the first
     *       argument.</li>
     *   <li>The `error` function is triggered if the upload is canceled or fails
     *       for another reason.</li>
     *   <li>The `complete` function is triggered if the upload completes
     *       successfully.</li>
     * </ul>
     */
    STATE_CHANGED: 'state_changed'
};
// type keys = keyof TaskState
/**
 * Represents the current state of a running upload.
 * @internal
 */
const TaskState = {
    /** The task is currently transferring data. */
    RUNNING: 'running',
    /** The task was paused by the user. */
    PAUSED: 'paused',
    /** The task completed successfully. */
    SUCCESS: 'success',
    /** The task was canceled. */
    CANCELED: 'canceled',
    /** The task failed with an error. */
    ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch (state) {
        case "running" /* RUNNING */:
        case "pausing" /* PAUSING */:
        case "canceling" /* CANCELING */:
            return TaskState.RUNNING;
        case "paused" /* PAUSED */:
            return TaskState.PAUSED;
        case "success" /* SUCCESS */:
            return TaskState.SUCCESS;
        case "canceled" /* CANCELED */:
            return TaskState.CANCELED;
        case "error" /* ERROR */:
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Observer {
    constructor(nextOrObserver, error, complete) {
        const asFunctions = isFunction(nextOrObserver) || error != null || complete != null;
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = error !== null && error !== void 0 ? error : undefined;
            this.complete = complete !== null && complete !== void 0 ? complete : undefined;
        }
        else {
            const observer = nextOrObserver;
            this.next = observer.next;
            this.error = observer.error;
            this.complete = observer.complete;
        }
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(f) {
    return (...argsToForward) => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(() => f(...argsToForward));
    };
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** An override for the text-based Connection. Used in tests. */
let textFactoryOverride = null;
/**
 * Network layer for browsers. We use this instead of goog.net.XhrIo because
 * goog.net.XhrIo is hyuuuuge and doesn't work in React Native on Android.
 */
class XhrConnection {
    constructor() {
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.initXhr();
        this.errorCode_ = ErrorCode.NO_ERROR;
        this.sendPromise_ = new Promise(resolve => {
            this.xhr_.addEventListener('abort', () => {
                this.errorCode_ = ErrorCode.ABORT;
                resolve();
            });
            this.xhr_.addEventListener('error', () => {
                this.errorCode_ = ErrorCode.NETWORK_ERROR;
                resolve();
            });
            this.xhr_.addEventListener('load', () => {
                resolve();
            });
        });
    }
    send(url, method, body, headers) {
        if (this.sent_) {
            throw internalError('cannot .send() more than once');
        }
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (headers !== undefined) {
            for (const key in headers) {
                if (headers.hasOwnProperty(key)) {
                    this.xhr_.setRequestHeader(key, headers[key].toString());
                }
            }
        }
        if (body !== undefined) {
            this.xhr_.send(body);
        }
        else {
            this.xhr_.send();
        }
        return this.sendPromise_;
    }
    getErrorCode() {
        if (!this.sent_) {
            throw internalError('cannot .getErrorCode() before sending');
        }
        return this.errorCode_;
    }
    getStatus() {
        if (!this.sent_) {
            throw internalError('cannot .getStatus() before sending');
        }
        try {
            return this.xhr_.status;
        }
        catch (e) {
            return -1;
        }
    }
    getResponse() {
        if (!this.sent_) {
            throw internalError('cannot .getResponse() before sending');
        }
        return this.xhr_.response;
    }
    getErrorText() {
        if (!this.sent_) {
            throw internalError('cannot .getErrorText() before sending');
        }
        return this.xhr_.statusText;
    }
    /** Aborts the request. */
    abort() {
        this.xhr_.abort();
    }
    getResponseHeader(header) {
        return this.xhr_.getResponseHeader(header);
    }
    addUploadProgressListener(listener) {
        if (this.xhr_.upload != null) {
            this.xhr_.upload.addEventListener('progress', listener);
        }
    }
    removeUploadProgressListener(listener) {
        if (this.xhr_.upload != null) {
            this.xhr_.upload.removeEventListener('progress', listener);
        }
    }
}
class XhrTextConnection extends XhrConnection {
    initXhr() {
        this.xhr_.responseType = 'text';
    }
}
function newTextConnection() {
    return textFactoryOverride ? textFactoryOverride() : new XhrTextConnection();
}
class XhrBytesConnection extends XhrConnection {
    initXhr() {
        this.xhr_.responseType = 'arraybuffer';
    }
}
function newBytesConnection() {
    return new XhrBytesConnection();
}
class XhrBlobConnection extends XhrConnection {
    initXhr() {
        this.xhr_.responseType = 'blob';
    }
}
function newBlobConnection() {
    return new XhrBlobConnection();
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 * @internal
 */
class UploadTask {
    /**
     * @param ref - The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob - The blob to upload.
     */
    constructor(ref, blob, metadata = null) {
        /**
         * Number of bytes transferred so far.
         */
        this._transferred = 0;
        this._needToFetchStatus = false;
        this._needToFetchMetadata = false;
        this._observers = [];
        this._error = undefined;
        this._uploadUrl = undefined;
        this._request = undefined;
        this._chunkMultiplier = 1;
        this._resolve = undefined;
        this._reject = undefined;
        this._ref = ref;
        this._blob = blob;
        this._metadata = metadata;
        this._mappings = getMappings();
        this._resumable = this._shouldDoResumable(this._blob);
        this._state = "running" /* RUNNING */;
        this._errorHandler = error => {
            this._request = undefined;
            this._chunkMultiplier = 1;
            if (error._codeEquals("canceled" /* CANCELED */)) {
                this._needToFetchStatus = true;
                this.completeTransitions_();
            }
            else {
                this._error = error;
                this._transition("error" /* ERROR */);
            }
        };
        this._metadataErrorHandler = error => {
            this._request = undefined;
            if (error._codeEquals("canceled" /* CANCELED */)) {
                this.completeTransitions_();
            }
            else {
                this._error = error;
                this._transition("error" /* ERROR */);
            }
        };
        this._promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
            this._start();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this._promise.then(null, () => { });
    }
    _makeProgressCallback() {
        const sizeBefore = this._transferred;
        return loaded => this._updateProgress(sizeBefore + loaded);
    }
    _shouldDoResumable(blob) {
        return blob.size() > 256 * 1024;
    }
    _start() {
        if (this._state !== "running" /* RUNNING */) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
        }
        if (this._request !== undefined) {
            return;
        }
        if (this._resumable) {
            if (this._uploadUrl === undefined) {
                this._createResumable();
            }
            else {
                if (this._needToFetchStatus) {
                    this._fetchStatus();
                }
                else {
                    if (this._needToFetchMetadata) {
                        // Happens if we miss the metadata on upload completion.
                        this._fetchMetadata();
                    }
                    else {
                        this._continueUpload();
                    }
                }
            }
        }
        else {
            this._oneShotUpload();
        }
    }
    _resolveToken(callback) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.all([
            this._ref.storage._getAuthToken(),
            this._ref.storage._getAppCheckToken()
        ]).then(([authToken, appCheckToken]) => {
            switch (this._state) {
                case "running" /* RUNNING */:
                    callback(authToken, appCheckToken);
                    break;
                case "canceling" /* CANCELING */:
                    this._transition("canceled" /* CANCELED */);
                    break;
                case "pausing" /* PAUSING */:
                    this._transition("paused" /* PAUSED */);
                    break;
            }
        });
    }
    // TODO(andysoto): assert false
    _createResumable() {
        this._resolveToken((authToken, appCheckToken) => {
            const requestInfo = createResumableUpload(this._ref.storage, this._ref._location, this._mappings, this._blob, this._metadata);
            const createRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = createRequest;
            createRequest.getPromise().then((url) => {
                this._request = undefined;
                this._uploadUrl = url;
                this._needToFetchStatus = false;
                this.completeTransitions_();
            }, this._errorHandler);
        });
    }
    _fetchStatus() {
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        const url = this._uploadUrl;
        this._resolveToken((authToken, appCheckToken) => {
            const requestInfo = getResumableUploadStatus(this._ref.storage, this._ref._location, url, this._blob);
            const statusRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = statusRequest;
            statusRequest.getPromise().then(status => {
                status = status;
                this._request = undefined;
                this._updateProgress(status.current);
                this._needToFetchStatus = false;
                if (status.finalized) {
                    this._needToFetchMetadata = true;
                }
                this.completeTransitions_();
            }, this._errorHandler);
        });
    }
    _continueUpload() {
        const chunkSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
        const status = new ResumableUploadStatus(this._transferred, this._blob.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        const url = this._uploadUrl;
        this._resolveToken((authToken, appCheckToken) => {
            let requestInfo;
            try {
                requestInfo = continueResumableUpload(this._ref._location, this._ref.storage, url, this._blob, chunkSize, this._mappings, status, this._makeProgressCallback());
            }
            catch (e) {
                this._error = e;
                this._transition("error" /* ERROR */);
                return;
            }
            const uploadRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = uploadRequest;
            uploadRequest.getPromise().then((newStatus) => {
                this._increaseMultiplier();
                this._request = undefined;
                this._updateProgress(newStatus.current);
                if (newStatus.finalized) {
                    this._metadata = newStatus.metadata;
                    this._transition("success" /* SUCCESS */);
                }
                else {
                    this.completeTransitions_();
                }
            }, this._errorHandler);
        });
    }
    _increaseMultiplier() {
        const currentSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
        // Max chunk size is 32M.
        if (currentSize < 32 * 1024 * 1024) {
            this._chunkMultiplier *= 2;
        }
    }
    _fetchMetadata() {
        this._resolveToken((authToken, appCheckToken) => {
            const requestInfo = getMetadata$2(this._ref.storage, this._ref._location, this._mappings);
            const metadataRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = metadataRequest;
            metadataRequest.getPromise().then(metadata => {
                this._request = undefined;
                this._metadata = metadata;
                this._transition("success" /* SUCCESS */);
            }, this._metadataErrorHandler);
        });
    }
    _oneShotUpload() {
        this._resolveToken((authToken, appCheckToken) => {
            const requestInfo = multipartUpload(this._ref.storage, this._ref._location, this._mappings, this._blob, this._metadata);
            const multipartRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = multipartRequest;
            multipartRequest.getPromise().then(metadata => {
                this._request = undefined;
                this._metadata = metadata;
                this._updateProgress(this._blob.size());
                this._transition("success" /* SUCCESS */);
            }, this._errorHandler);
        });
    }
    _updateProgress(transferred) {
        const old = this._transferred;
        this._transferred = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this._transferred !== old) {
            this._notifyObservers();
        }
    }
    _transition(state) {
        if (this._state === state) {
            return;
        }
        switch (state) {
            case "canceling" /* CANCELING */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this._state = state;
                if (this._request !== undefined) {
                    this._request.cancel();
                }
                break;
            case "pausing" /* PAUSING */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING);
                this._state = state;
                if (this._request !== undefined) {
                    this._request.cancel();
                }
                break;
            case "running" /* RUNNING */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                const wasPaused = this._state === "paused" /* PAUSED */;
                this._state = state;
                if (wasPaused) {
                    this._notifyObservers();
                    this._start();
                }
                break;
            case "paused" /* PAUSED */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this._state = state;
                this._notifyObservers();
                break;
            case "canceled" /* CANCELED */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._error = canceled();
                this._state = state;
                this._notifyObservers();
                break;
            case "error" /* ERROR */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._state = state;
                this._notifyObservers();
                break;
            case "success" /* SUCCESS */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._state = state;
                this._notifyObservers();
                break;
        }
    }
    completeTransitions_() {
        switch (this._state) {
            case "pausing" /* PAUSING */:
                this._transition("paused" /* PAUSED */);
                break;
            case "canceling" /* CANCELING */:
                this._transition("canceled" /* CANCELED */);
                break;
            case "running" /* RUNNING */:
                this._start();
                break;
        }
    }
    /**
     * A snapshot of the current task state.
     */
    get snapshot() {
        const externalState = taskStateFromInternalTaskState(this._state);
        return {
            bytesTransferred: this._transferred,
            totalBytes: this._blob.size(),
            state: externalState,
            metadata: this._metadata,
            task: this,
            ref: this._ref
        };
    }
    /**
     * Adds a callback for an event.
     * @param type - The type of event to listen for.
     * @param nextOrObserver -
     *     The `next` function, which gets called for each item in
     *     the event stream, or an observer object with some or all of these three
     *     properties (`next`, `error`, `complete`).
     * @param error - A function that gets called with a `StorageError`
     *     if the event stream ends due to an error.
     * @param completed - A function that gets called if the
     *     event stream ends normally.
     * @returns
     *     If only the event argument is passed, returns a function you can use to
     *     add callbacks (see the examples above). If more than just the event
     *     argument is passed, returns a function you can call to unregister the
     *     callbacks.
     */
    on(type, nextOrObserver, error, completed) {
        const observer = new Observer(nextOrObserver || undefined, error || undefined, completed || undefined);
        this._addObserver(observer);
        return () => {
            this._removeObserver(observer);
        };
    }
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled - The fulfillment callback. Promise chaining works as normal.
     * @param onRejected - The rejection callback.
     */
    then(onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this._promise.then(onFulfilled, onRejected);
    }
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */
    catch(onRejected) {
        return this.then(null, onRejected);
    }
    /**
     * Adds the given observer.
     */
    _addObserver(observer) {
        this._observers.push(observer);
        this._notifyObserver(observer);
    }
    /**
     * Removes the given observer.
     */
    _removeObserver(observer) {
        const i = this._observers.indexOf(observer);
        if (i !== -1) {
            this._observers.splice(i, 1);
        }
    }
    _notifyObservers() {
        this._finishPromise();
        const observers = this._observers.slice();
        observers.forEach(observer => {
            this._notifyObserver(observer);
        });
    }
    _finishPromise() {
        if (this._resolve !== undefined) {
            let triggered = true;
            switch (taskStateFromInternalTaskState(this._state)) {
                case TaskState.SUCCESS:
                    async(this._resolve.bind(null, this.snapshot))();
                    break;
                case TaskState.CANCELED:
                case TaskState.ERROR:
                    const toCall = this._reject;
                    async(toCall.bind(null, this._error))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this._resolve = undefined;
                this._reject = undefined;
            }
        }
    }
    _notifyObserver(observer) {
        const externalState = taskStateFromInternalTaskState(this._state);
        switch (externalState) {
            case TaskState.RUNNING:
            case TaskState.PAUSED:
                if (observer.next) {
                    async(observer.next.bind(observer, this.snapshot))();
                }
                break;
            case TaskState.SUCCESS:
                if (observer.complete) {
                    async(observer.complete.bind(observer))();
                }
                break;
            case TaskState.CANCELED:
            case TaskState.ERROR:
                if (observer.error) {
                    async(observer.error.bind(observer, this._error))();
                }
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error) {
                    async(observer.error.bind(observer, this._error))();
                }
        }
    }
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @returns True if the operation took effect, false if ignored.
     */
    resume() {
        const valid = this._state === "paused" /* PAUSED */ ||
            this._state === "pausing" /* PAUSING */;
        if (valid) {
            this._transition("running" /* RUNNING */);
        }
        return valid;
    }
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @returns True if the operation took effect, false if ignored.
     */
    pause() {
        const valid = this._state === "running" /* RUNNING */;
        if (valid) {
            this._transition("pausing" /* PAUSING */);
        }
        return valid;
    }
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @returns True if the operation took effect, false if ignored.
     */
    cancel() {
        const valid = this._state === "running" /* RUNNING */ ||
            this._state === "pausing" /* PAUSING */;
        if (valid) {
            this._transition("canceling" /* CANCELING */);
        }
        return valid;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @internal
 * @param _location - An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */
class Reference {
    constructor(_service, location) {
        this._service = _service;
        if (location instanceof Location) {
            this._location = location;
        }
        else {
            this._location = Location.makeFromUrl(location, _service.host);
        }
    }
    /**
     * Returns the URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */
    toString() {
        return 'gs://' + this._location.bucket + '/' + this._location.path;
    }
    _newRef(service, location) {
        return new Reference(service, location);
    }
    /**
     * A reference to the root of this object's bucket.
     */
    get root() {
        const location = new Location(this._location.bucket, '');
        return this._newRef(this._service, location);
    }
    /**
     * The name of the bucket containing this reference's object.
     */
    get bucket() {
        return this._location.bucket;
    }
    /**
     * The full path of this object.
     */
    get fullPath() {
        return this._location.path;
    }
    /**
     * The short name of this object, which is the last component of the full path.
     * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
     */
    get name() {
        return lastComponent(this._location.path);
    }
    /**
     * The `StorageService` instance this `StorageReference` is associated with.
     */
    get storage() {
        return this._service;
    }
    /**
     * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
     * this reference is the root.
     */
    get parent() {
        const newPath = parent(this._location.path);
        if (newPath === null) {
            return null;
        }
        const location = new Location(this._location.bucket, newPath);
        return new Reference(this._service, location);
    }
    /**
     * Utility function to throw an error in methods that do not accept a root reference.
     */
    _throwIfRoot(name) {
        if (this._location.path === '') {
            throw invalidRootOperation(name);
        }
    }
}
/**
 * Download the bytes at the object's location.
 * @returns A Promise containing the downloaded bytes.
 */
function getBytesInternal(ref, maxDownloadSizeBytes) {
    ref._throwIfRoot('getBytes');
    const requestInfo = getBytes$1(ref.storage, ref._location, maxDownloadSizeBytes);
    return ref.storage
        .makeRequestWithTokens(requestInfo, newBytesConnection)
        .then(bytes => maxDownloadSizeBytes !== undefined
        ? // GCS may not honor the Range header for small files
            bytes.slice(0, maxDownloadSizeBytes)
        : bytes);
}
/**
 * Download the bytes at the object's location.
 * @returns A Promise containing the downloaded blob.
 */
function getBlobInternal(ref, maxDownloadSizeBytes) {
    ref._throwIfRoot('getBlob');
    const requestInfo = getBytes$1(ref.storage, ref._location, maxDownloadSizeBytes);
    return ref.storage
        .makeRequestWithTokens(requestInfo, newBlobConnection)
        .then(blob => maxDownloadSizeBytes !== undefined
        ? // GCS may not honor the Range header for small files
            blob.slice(0, maxDownloadSizeBytes)
        : blob);
}
/**
 * Uploads data to this object's location.
 * The upload is not resumable.
 *
 * @param ref - StorageReference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the newly uploaded data.
 * @returns A Promise containing an UploadResult
 */
function uploadBytes$1(ref, data, metadata) {
    ref._throwIfRoot('uploadBytes');
    const requestInfo = multipartUpload(ref.storage, ref._location, getMappings(), new FbsBlob(data, true), metadata);
    return ref.storage
        .makeRequestWithTokens(requestInfo, newTextConnection)
        .then(finalMetadata => {
        return {
            metadata: finalMetadata,
            ref
        };
    });
}
/**
 * Uploads data to this object's location.
 * The upload can be paused and resumed, and exposes progress updates.
 * @public
 * @param ref - StorageReference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the newly uploaded data.
 * @returns An UploadTask
 */
function uploadBytesResumable$1(ref, data, metadata) {
    ref._throwIfRoot('uploadBytesResumable');
    return new UploadTask(ref, new FbsBlob(data), metadata);
}
/**
 * Uploads a string to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - StorageReference where string should be uploaded.
 * @param value - The string to upload.
 * @param format - The format of the string to upload.
 * @param metadata - Metadata for the newly uploaded string.
 * @returns A Promise containing an UploadResult
 */
function uploadString$1(ref, value, format = StringFormat.RAW, metadata) {
    ref._throwIfRoot('uploadString');
    const data = dataFromString(format, value);
    const metadataClone = Object.assign({}, metadata);
    if (metadataClone['contentType'] == null && data.contentType != null) {
        metadataClone['contentType'] = data.contentType;
    }
    return uploadBytes$1(ref, data.data, metadataClone);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: listAll may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - StorageReference to get list from.
 *
 * @returns A Promise that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */
function listAll$1(ref) {
    const accumulator = {
        prefixes: [],
        items: []
    };
    return listAllHelper(ref, accumulator).then(() => accumulator);
}
/**
 * Separated from listAll because async functions can't use "arguments".
 * @param ref
 * @param accumulator
 * @param pageToken
 */
async function listAllHelper(ref, accumulator, pageToken) {
    const opt = {
        // maxResults is 1000 by default.
        pageToken
    };
    const nextPage = await list$1(ref, opt);
    accumulator.prefixes.push(...nextPage.prefixes);
    accumulator.items.push(...nextPage.items);
    if (nextPage.nextPageToken != null) {
        await listAllHelper(ref, accumulator, nextPage.nextPageToken);
    }
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - StorageReference to get list from.
 * @param options - See ListOptions for details.
 * @returns A Promise that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */
function list$1(ref, options) {
    if (options != null) {
        if (typeof options.maxResults === 'number') {
            validateNumber('options.maxResults', 
            /* minValue= */ 1, 
            /* maxValue= */ 1000, options.maxResults);
        }
    }
    const op = options || {};
    const requestInfo = list$2(ref.storage, ref._location, 
    /*delimiter= */ '/', op.pageToken, op.maxResults);
    return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * A `Promise` that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retreived, the promise is
 * rejected.
 * @public
 * @param ref - StorageReference to get metadata from.
 */
function getMetadata$1(ref) {
    ref._throwIfRoot('getMetadata');
    const requestInfo = getMetadata$2(ref.storage, ref._location, getMappings());
    return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - StorageReference to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A `Promise` that resolves
 *     with the new metadata for this object.
 *     See `firebaseStorage.Reference.prototype.getMetadata`
 */
function updateMetadata$1(ref, metadata) {
    ref._throwIfRoot('updateMetadata');
    const requestInfo = updateMetadata$2(ref.storage, ref._location, metadata, getMappings());
    return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Returns the download URL for the given Reference.
 * @public
 * @returns A `Promise` that resolves with the download
 *     URL for this object.
 */
function getDownloadURL$1(ref) {
    ref._throwIfRoot('getDownloadURL');
    const requestInfo = getDownloadUrl(ref.storage, ref._location, getMappings());
    return ref.storage
        .makeRequestWithTokens(requestInfo, newTextConnection)
        .then(url => {
        if (url === null) {
            throw noDownloadURL();
        }
        return url;
    });
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - StorageReference for object to delete.
 * @returns A `Promise` that resolves if the deletion succeeds.
 */
function deleteObject$1(ref) {
    ref._throwIfRoot('deleteObject');
    const requestInfo = deleteObject$2(ref.storage, ref._location);
    return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Returns reference for object obtained by appending `childPath` to `ref`.
 *
 * @param ref - StorageReference to get child of.
 * @param childPath - Child path from provided ref.
 * @returns A reference to the object obtained by
 * appending childPath, removing any duplicate, beginning, or trailing
 * slashes.
 *
 */
function _getChild$1(ref, childPath) {
    const newPath = child(ref._location.path, childPath);
    const location = new Location(ref._location.bucket, newPath);
    return new Reference(ref.storage, location);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isUrl(path) {
    return /^[A-Za-z]+:\/\//.test(path);
}
/**
 * Returns a firebaseStorage.Reference for the given url.
 */
function refFromURL(service, url) {
    return new Reference(service, url);
}
/**
 * Returns a firebaseStorage.Reference for the given path in the default
 * bucket.
 */
function refFromPath(ref, path) {
    if (ref instanceof FirebaseStorageImpl) {
        const service = ref;
        if (service._bucket == null) {
            throw noDefaultBucket();
        }
        const reference = new Reference(service, service._bucket);
        if (path != null) {
            return refFromPath(reference, path);
        }
        else {
            return reference;
        }
    }
    else {
        // ref is a Reference
        if (path !== undefined) {
            return _getChild$1(ref, path);
        }
        else {
            return ref;
        }
    }
}
function ref$1(serviceOrRef, pathOrUrl) {
    if (pathOrUrl && isUrl(pathOrUrl)) {
        if (serviceOrRef instanceof FirebaseStorageImpl) {
            return refFromURL(serviceOrRef, pathOrUrl);
        }
        else {
            throw invalidArgument('To use ref(service, url), the first argument must be a Storage instance.');
        }
    }
    else {
        return refFromPath(serviceOrRef, pathOrUrl);
    }
}
function extractBucket(host, config) {
    const bucketString = config === null || config === void 0 ? void 0 : config[CONFIG_STORAGE_BUCKET_KEY];
    if (bucketString == null) {
        return null;
    }
    return Location.makeFromBucketSpec(bucketString, host);
}
function connectStorageEmulator$1(storage, host, port, options = {}) {
    storage.host = `${host}:${port}`;
    storage._protocol = 'http';
    const { mockUserToken } = options;
    if (mockUserToken) {
        storage._overrideAuthToken =
            typeof mockUserToken === 'string'
                ? mockUserToken
                : Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["createMockUserToken"])(mockUserToken, storage.app.options.projectId);
    }
}
/**
 * A service that provides Firebase Storage Reference instances.
 * @param opt_url - gs:// url to a custom Storage Bucket
 *
 * @internal
 */
class FirebaseStorageImpl {
    constructor(
    /**
     * FirebaseApp associated with this StorageService instance.
     */
    app, _authProvider, 
    /**
     * @internal
     */
    _appCheckProvider, 
    /**
     * @internal
     */
    _url, _firebaseVersion) {
        this.app = app;
        this._authProvider = _authProvider;
        this._appCheckProvider = _appCheckProvider;
        this._url = _url;
        this._firebaseVersion = _firebaseVersion;
        this._bucket = null;
        /**
         * This string can be in the formats:
         * - host
         * - host:port
         */
        this._host = DEFAULT_HOST;
        this._protocol = 'https';
        this._appId = null;
        this._deleted = false;
        this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
        this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
        this._requests = new Set();
        if (_url != null) {
            this._bucket = Location.makeFromBucketSpec(_url, this._host);
        }
        else {
            this._bucket = extractBucket(this._host, this.app.options);
        }
    }
    /**
     * The host string for this service, in the form of `host` or
     * `host:port`.
     */
    get host() {
        return this._host;
    }
    set host(host) {
        this._host = host;
        if (this._url != null) {
            this._bucket = Location.makeFromBucketSpec(this._url, host);
        }
        else {
            this._bucket = extractBucket(host, this.app.options);
        }
    }
    /**
     * The maximum time to retry uploads in milliseconds.
     */
    get maxUploadRetryTime() {
        return this._maxUploadRetryTime;
    }
    set maxUploadRetryTime(time) {
        validateNumber('time', 
        /* minValue=*/ 0, 
        /* maxValue= */ Number.POSITIVE_INFINITY, time);
        this._maxUploadRetryTime = time;
    }
    /**
     * The maximum time to retry operations other than uploads or downloads in
     * milliseconds.
     */
    get maxOperationRetryTime() {
        return this._maxOperationRetryTime;
    }
    set maxOperationRetryTime(time) {
        validateNumber('time', 
        /* minValue=*/ 0, 
        /* maxValue= */ Number.POSITIVE_INFINITY, time);
        this._maxOperationRetryTime = time;
    }
    async _getAuthToken() {
        if (this._overrideAuthToken) {
            return this._overrideAuthToken;
        }
        const auth = this._authProvider.getImmediate({ optional: true });
        if (auth) {
            const tokenData = await auth.getToken();
            if (tokenData !== null) {
                return tokenData.accessToken;
            }
        }
        return null;
    }
    async _getAppCheckToken() {
        const appCheck = this._appCheckProvider.getImmediate({ optional: true });
        if (appCheck) {
            const result = await appCheck.getToken();
            // TODO: What do we want to do if there is an error getting the token?
            // Context: appCheck.getToken() will never throw even if an error happened. In the error case, a dummy token will be
            // returned along with an error field describing the error. In general, we shouldn't care about the error condition and just use
            // the token (actual or dummy) to send requests.
            return result.token;
        }
        return null;
    }
    /**
     * Stop running requests and prevent more from being created.
     */
    _delete() {
        if (!this._deleted) {
            this._deleted = true;
            this._requests.forEach(request => request.cancel());
            this._requests.clear();
        }
        return Promise.resolve();
    }
    /**
     * Returns a new firebaseStorage.Reference object referencing this StorageService
     * at the given Location.
     */
    _makeStorageReference(loc) {
        return new Reference(this, loc);
    }
    /**
     * @param requestInfo - HTTP RequestInfo object
     * @param authToken - Firebase auth token
     */
    _makeRequest(requestInfo, requestFactory, authToken, appCheckToken) {
        if (!this._deleted) {
            const request = makeRequest(requestInfo, this._appId, authToken, appCheckToken, requestFactory, this._firebaseVersion);
            this._requests.add(request);
            // Request removes itself from set when complete.
            request.getPromise().then(() => this._requests.delete(request), () => this._requests.delete(request));
            return request;
        }
        else {
            return new FailRequest(appDeleted());
        }
    }
    async makeRequestWithTokens(requestInfo, requestFactory) {
        const [authToken, appCheckToken] = await Promise.all([
            this._getAuthToken(),
            this._getAppCheckToken()
        ]);
        return this._makeRequest(requestInfo, requestFactory, authToken, appCheckToken).getPromise();
    }
}

const name = "@firebase/storage";
const version = "0.9.5";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Storage.
 */
const STORAGE_TYPE = 'storage';

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Downloads the data at the object's location. Returns an error if the object
 * is not found.
 *
 * To use this functionality, you have to whitelist your app's origin in your
 * Cloud Storage bucket. See also
 * https://cloud.google.com/storage/docs/configuring-cors
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A Promise containing the object's bytes
 */
function getBytes(ref, maxDownloadSizeBytes) {
    ref = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getModularInstance"])(ref);
    return getBytesInternal(ref, maxDownloadSizeBytes);
}
/**
 * Uploads data to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - {@link StorageReference} where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the data to upload.
 * @returns A Promise containing an UploadResult
 */
function uploadBytes(ref, data, metadata) {
    ref = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getModularInstance"])(ref);
    return uploadBytes$1(ref, data, metadata);
}
/**
 * Uploads a string to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - {@link StorageReference} where string should be uploaded.
 * @param value - The string to upload.
 * @param format - The format of the string to upload.
 * @param metadata - Metadata for the string to upload.
 * @returns A Promise containing an UploadResult
 */
function uploadString(ref, value, format, metadata) {
    ref = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getModularInstance"])(ref);
    return uploadString$1(ref, value, format, metadata);
}
/**
 * Uploads data to this object's location.
 * The upload can be paused and resumed, and exposes progress updates.
 * @public
 * @param ref - {@link StorageReference} where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the data to upload.
 * @returns An UploadTask
 */
function uploadBytesResumable(ref, data, metadata) {
    ref = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getModularInstance"])(ref);
    return uploadBytesResumable$1(ref, data, metadata);
}
/**
 * A `Promise` that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retreived, the promise is
 * rejected.
 * @public
 * @param ref - {@link StorageReference} to get metadata from.
 */
function getMetadata(ref) {
    ref = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getModularInstance"])(ref);
    return getMetadata$1(ref);
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - {@link StorageReference} to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A `Promise` that resolves with the new metadata for this object.
 */
function updateMetadata(ref, metadata) {
    ref = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getModularInstance"])(ref);
    return updateMetadata$1(ref, metadata);
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - {@link StorageReference} to get list from.
 * @param options - See {@link ListOptions} for details.
 * @returns A `Promise` that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */
function list(ref, options) {
    ref = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getModularInstance"])(ref);
    return list$1(ref, options);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: `listAll` may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - {@link StorageReference} to get list from.
 *
 * @returns A `Promise` that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */
function listAll(ref) {
    ref = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getModularInstance"])(ref);
    return listAll$1(ref);
}
/**
 * Returns the download URL for the given {@link StorageReference}.
 * @public
 * @param ref - {@link StorageReference} to get the download URL for.
 * @returns A `Promise` that resolves with the download
 *     URL for this object.
 */
function getDownloadURL(ref) {
    ref = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getModularInstance"])(ref);
    return getDownloadURL$1(ref);
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - {@link StorageReference} for object to delete.
 * @returns A `Promise` that resolves if the deletion succeeds.
 */
function deleteObject(ref) {
    ref = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getModularInstance"])(ref);
    return deleteObject$1(ref);
}
function ref(serviceOrRef, pathOrUrl) {
    serviceOrRef = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getModularInstance"])(serviceOrRef);
    return ref$1(serviceOrRef, pathOrUrl);
}
/**
 * @internal
 */
function _getChild(ref, childPath) {
    return _getChild$1(ref, childPath);
}
/**
 * Gets a {@link FirebaseStorage} instance for the given Firebase app.
 * @public
 * @param app - Firebase app to get {@link FirebaseStorage} instance for.
 * @param bucketUrl - The gs:// url to your Firebase Storage Bucket.
 * If not passed, uses the app's default Storage Bucket.
 * @returns A {@link FirebaseStorage} instance.
 */
function getStorage(app = Object(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["getApp"])(), bucketUrl) {
    app = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getModularInstance"])(app);
    const storageProvider = Object(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["_getProvider"])(app, STORAGE_TYPE);
    const storageInstance = storageProvider.getImmediate({
        identifier: bucketUrl
    });
    return storageInstance;
}
/**
 * Modify this {@link FirebaseStorage} instance to communicate with the Cloud Storage emulator.
 *
 * @param storage - The {@link FirebaseStorage} instance
 * @param host - The emulator host (ex: localhost)
 * @param port - The emulator port (ex: 5001)
 * @param options - Emulator options. `options.mockUserToken` is the mock auth
 * token to use for unit testing Security Rules.
 * @public
 */
function connectStorageEmulator(storage, host, port, options = {}) {
    connectStorageEmulator$1(storage, host, port, options);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Downloads the data at the object's location. Returns an error if the object
 * is not found.
 *
 * To use this functionality, you have to whitelist your app's origin in your
 * Cloud Storage bucket. See also
 * https://cloud.google.com/storage/docs/configuring-cors
 *
 * This API is not available in Node.
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A Promise that resolves with a Blob containing the object's bytes
 */
function getBlob(ref, maxDownloadSizeBytes) {
    ref = Object(_firebase_util__WEBPACK_IMPORTED_MODULE_1__["getModularInstance"])(ref);
    return getBlobInternal(ref, maxDownloadSizeBytes);
}
/**
 * Downloads the data at the object's location. Raises an error event if the
 * object is not found.
 *
 * This API is only available in Node.
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A stream with the object's data as bytes
 */
function getStream(ref, maxDownloadSizeBytes) {
    throw new Error('getStream() is only supported by NodeJS builds');
}

/**
 * Cloud Storage for Firebase
 *
 * @packageDocumentation
 */
function factory(container, { instanceIdentifier: url }) {
    const app = container.getProvider('app').getImmediate();
    const authProvider = container.getProvider('auth-internal');
    const appCheckProvider = container.getProvider('app-check-internal');
    return new FirebaseStorageImpl(app, authProvider, appCheckProvider, url, _firebase_app__WEBPACK_IMPORTED_MODULE_0__["SDK_VERSION"]);
}
function registerStorage() {
    Object(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["_registerComponent"])(new _firebase_component__WEBPACK_IMPORTED_MODULE_2__["Component"](STORAGE_TYPE, factory, "PUBLIC" /* PUBLIC */).setMultipleInstances(true));
    //RUNTIME_ENV will be replaced during the compilation to "node" for nodejs and an empty string for browser
    Object(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["registerVersion"])(name, version, '');
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    Object(_firebase_app__WEBPACK_IMPORTED_MODULE_0__["registerVersion"])(name, version, 'esm2017');
}
registerStorage();


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/firebase/storage/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/storage/dist/index.esm.js ***!
  \*********************************************************/
/*! exports provided: StringFormat, _FbsBlob, _Location, _TaskEvent, _TaskState, _UploadTask, _dataFromString, _getChild, _invalidArgument, _invalidRootOperation, connectStorageEmulator, deleteObject, getBlob, getBytes, getDownloadURL, getMetadata, getStorage, getStream, list, listAll, ref, updateMetadata, uploadBytes, uploadBytesResumable, uploadString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/storage */ "./node_modules/@firebase/storage/dist/index.esm2017.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringFormat", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["StringFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_FbsBlob", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["_FbsBlob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_Location", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["_Location"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_TaskEvent", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["_TaskEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_TaskState", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["_TaskState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_UploadTask", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["_UploadTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_dataFromString", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["_dataFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_getChild", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["_getChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_invalidArgument", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["_invalidArgument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_invalidRootOperation", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["_invalidRootOperation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connectStorageEmulator", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["connectStorageEmulator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteObject", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["deleteObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBlob", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["getBlob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBytes", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["getBytes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDownloadURL", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["getDownloadURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMetadata", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["getMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["getStorage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStream", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["getStream"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "list", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["list"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listAll", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["listAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateMetadata", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["updateMetadata"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadBytes", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["uploadBytes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadBytesResumable", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["uploadBytesResumable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadString", function() { return _firebase_storage__WEBPACK_IMPORTED_MODULE_0__["uploadString"]; });


//# sourceMappingURL=index.esm.js.map


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2Uvc3RvcmFnZS9kaXN0L2luZGV4LmVzbTIwMTcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9maXJlYmFzZS9zdG9yYWdlL2Rpc3QvaW5kZXguZXNtLmpzIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImluaXRpYWxpemVBcHAiLCJkYXRhYmFzZSIsImdldEZpcmVzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsY0FBYyxHQUFHO0FBQ25CQyxRQUFNLEVBQUUseUNBRFc7QUFFbkJDLFlBQVUsRUFBRSw2QkFGTztBQUduQkMsV0FBUyxFQUFFLGFBSFE7QUFJbkJDLGVBQWEsRUFBRSx5QkFKSTtBQUtuQkMsbUJBQWlCLEVBQUUsWUFMQTtBQU1uQkMsT0FBSyxFQUFFLHlDQU5ZO0FBT25CQyxlQUFhLEVBQUU7QUFQSSxDQUF2QixDLENBVUE7O0FBQ08sSUFBTUMsR0FBRyxHQUFHQyxrRUFBYSxDQUFDVCxjQUFELENBQXpCO0FBRUEsSUFBTVUsUUFBUSxHQUFHQyx1RUFBWSxDQUFDSCxHQUFELENBQTdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RztBQUNmO0FBQ3hDOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0REFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsUUFBUSxJQUFJLGtCQUFrQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0IsSUFBSSwrQkFBK0I7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELG9CQUFvQixHQUFHLFFBQVEsS0FBSyxhQUFhLElBQUksb0JBQW9CO0FBQ3ZJLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxpQkFBaUIsR0FBRyxhQUFhLEdBQUcsaUJBQWlCO0FBQ2hILHFDQUFxQztBQUNyQztBQUNBLGFBQWEsMkRBQTJEO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxTQUFTLGNBQWMsU0FBUztBQUNwRjtBQUNBO0FBQ0Esb0RBQW9ELFNBQVMsY0FBYyxTQUFTO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSztBQUNqQztBQUNBLGNBQWMsU0FBUyxLQUFLLE9BQU8sS0FBSyxRQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4QkFBOEI7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRkFBK0Y7QUFDL0Y7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG1CQUFtQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHFCQUFxQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsWUFBWTtBQUM5RDtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esd0NBQXdDLEVBQUU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkUsc0JBQXNCLEtBQUssR0FBRyxLQUFLO0FBQ25DO0FBQ0EsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMEVBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsaUJBQWlCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxpQkFBaUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5RUFBa0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5RUFBa0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHlFQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHlFQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBLFVBQVUseUVBQWtCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUseUVBQWtCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDLHlCQUF5QixrQkFBa0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5RUFBa0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHlFQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdUJBQXVCO0FBQ2xFO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUseUVBQWtCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFVBQVUseUVBQWtCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5RUFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakM7QUFDQSxxQ0FBcUMsc0JBQXNCO0FBQzNEO0FBQ0E7QUFDQSxlQUFlLHNCQUFzQjtBQUNyQztBQUNBLDBCQUEwQiw0REFBTTtBQUNoQyxVQUFVLHlFQUFrQjtBQUM1Qiw0QkFBNEIsa0VBQVk7QUFDeEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0EseUJBQXlCLHNCQUFzQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHlFQUFrQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMEJBQTBCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RSx5REFBVztBQUN4RjtBQUNBO0FBQ0EsSUFBSSx3RUFBa0IsS0FBSyw2REFBUztBQUNwQztBQUNBLElBQUkscUVBQWU7QUFDbkI7QUFDQSxJQUFJLHFFQUFlO0FBQ25CO0FBQ0E7O0FBRXFkO0FBQ3JkOzs7Ozs7Ozs7Ozs7O0FDaDlHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQztBQUNsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbXBsb3llZXMtbWFuYWdlbWVudC5kMmJhMmM2ZmVjOGMxMjY4M2Y1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnXHJcbmltcG9ydCB7fSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJ1xyXG5cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUQyZkZybzQ0OE5nQ011UjhaclFCUDJpVDVsM3FvU2RtZ1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJsZWFybi0xODliYS5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJsZWFybi0xODliYVwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJsZWFybi0xODliYS5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTI1Nzg0Mzk0OFwiLFxyXG4gICAgYXBwSWQ6IFwiMTo5MjU3ODQzOTQ4OndlYjpkZmE1MWRiNTkyYTM5YTBkNTM3OWM5XCIsXHJcbiAgICBtZWFzdXJlbWVudElkOiBcIkctVFFXQ0NCNDdGUFwiXHJcbn1cclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuZXhwb3J0IGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlID0gZ2V0RmlyZXN0b3JlKGFwcCk7IiwiaW1wb3J0IHsgZ2V0QXBwLCBfZ2V0UHJvdmlkZXIsIF9yZWdpc3RlckNvbXBvbmVudCwgcmVnaXN0ZXJWZXJzaW9uLCBTREtfVkVSU0lPTiB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuaW1wb3J0IHsgRmlyZWJhc2VFcnJvciwgY3JlYXRlTW9ja1VzZXJUb2tlbiwgZ2V0TW9kdWxhckluc3RhbmNlIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IENvbnN0YW50cyB1c2VkIGluIHRoZSBGaXJlYmFzZSBTdG9yYWdlIGxpYnJhcnkuXHJcbiAqL1xyXG4vKipcclxuICogRG9tYWluIG5hbWUgZm9yIGZpcmViYXNlIHN0b3JhZ2UuXHJcbiAqL1xyXG5jb25zdCBERUZBVUxUX0hPU1QgPSAnZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tJztcclxuLyoqXHJcbiAqIFRoZSBrZXkgaW4gRmlyZWJhc2UgY29uZmlnIGpzb24gZm9yIHRoZSBzdG9yYWdlIGJ1Y2tldC5cclxuICovXHJcbmNvbnN0IENPTkZJR19TVE9SQUdFX0JVQ0tFVF9LRVkgPSAnc3RvcmFnZUJ1Y2tldCc7XHJcbi8qKlxyXG4gKiAyIG1pbnV0ZXNcclxuICpcclxuICogVGhlIHRpbWVvdXQgZm9yIGFsbCBvcGVyYXRpb25zIGV4Y2VwdCB1cGxvYWQuXHJcbiAqL1xyXG5jb25zdCBERUZBVUxUX01BWF9PUEVSQVRJT05fUkVUUllfVElNRSA9IDIgKiA2MCAqIDEwMDA7XHJcbi8qKlxyXG4gKiAxMCBtaW51dGVzXHJcbiAqXHJcbiAqIFRoZSB0aW1lb3V0IGZvciB1cGxvYWQuXHJcbiAqL1xyXG5jb25zdCBERUZBVUxUX01BWF9VUExPQURfUkVUUllfVElNRSA9IDEwICogNjAgKiAxMDAwO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQW4gZXJyb3IgcmV0dXJuZWQgYnkgdGhlIEZpcmViYXNlIFN0b3JhZ2UgU0RLLlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5jbGFzcyBTdG9yYWdlRXJyb3IgZXh0ZW5kcyBGaXJlYmFzZUVycm9yIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGNvZGUgLSBBIFN0b3JhZ2VFcnJvckNvZGUgc3RyaW5nIHRvIGJlIHByZWZpeGVkIHdpdGggJ3N0b3JhZ2UvJyBhbmRcclxuICAgICAqICBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBtZXNzYWdlLlxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2UgIC0gRXJyb3IgbWVzc2FnZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29kZSwgbWVzc2FnZSkge1xyXG4gICAgICAgIHN1cGVyKHByZXBlbmRDb2RlKGNvZGUpLCBgRmlyZWJhc2UgU3RvcmFnZTogJHttZXNzYWdlfSAoJHtwcmVwZW5kQ29kZShjb2RlKX0pYCk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3RvcmVzIGN1c3RvbSBlcnJvciBkYXRhIHVucXVlIHRvIFN0b3JhZ2VFcnJvci5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmN1c3RvbURhdGEgPSB7IHNlcnZlclJlc3BvbnNlOiBudWxsIH07XHJcbiAgICAgICAgdGhpcy5fYmFzZU1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2U7XHJcbiAgICAgICAgLy8gV2l0aG91dCB0aGlzLCBgaW5zdGFuY2VvZiBTdG9yYWdlRXJyb3JgLCBpbiB0ZXN0cyBmb3IgZXhhbXBsZSxcclxuICAgICAgICAvLyByZXR1cm5zIGZhbHNlLlxyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBTdG9yYWdlRXJyb3IucHJvdG90eXBlKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQ29tcGFyZXMgYSBTdG9yYWdlRXJyb3JDb2RlIGFnYWluc3QgdGhpcyBlcnJvcidzIGNvZGUsIGZpbHRlcmluZyBvdXQgdGhlIHByZWZpeC5cclxuICAgICAqL1xyXG4gICAgX2NvZGVFcXVhbHMoY29kZSkge1xyXG4gICAgICAgIHJldHVybiBwcmVwZW5kQ29kZShjb2RlKSA9PT0gdGhpcy5jb2RlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBPcHRpb25hbCByZXNwb25zZSBtZXNzYWdlIHRoYXQgd2FzIGFkZGVkIGJ5IHRoZSBzZXJ2ZXIuXHJcbiAgICAgKi9cclxuICAgIGdldCBzZXJ2ZXJSZXNwb25zZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21EYXRhLnNlcnZlclJlc3BvbnNlO1xyXG4gICAgfVxyXG4gICAgc2V0IHNlcnZlclJlc3BvbnNlKHNlcnZlclJlc3BvbnNlKSB7XHJcbiAgICAgICAgdGhpcy5jdXN0b21EYXRhLnNlcnZlclJlc3BvbnNlID0gc2VydmVyUmVzcG9uc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tRGF0YS5zZXJ2ZXJSZXNwb25zZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBgJHt0aGlzLl9iYXNlTWVzc2FnZX1cXG4ke3RoaXMuY3VzdG9tRGF0YS5zZXJ2ZXJSZXNwb25zZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5fYmFzZU1lc3NhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHByZXBlbmRDb2RlKGNvZGUpIHtcclxuICAgIHJldHVybiAnc3RvcmFnZS8nICsgY29kZTtcclxufVxyXG5mdW5jdGlvbiB1bmtub3duKCkge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLCBwbGVhc2UgY2hlY2sgdGhlIGVycm9yIHBheWxvYWQgZm9yICcgK1xyXG4gICAgICAgICdzZXJ2ZXIgcmVzcG9uc2UuJztcclxuICAgIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFwidW5rbm93blwiIC8qIFVOS05PV04gKi8sIG1lc3NhZ2UpO1xyXG59XHJcbmZ1bmN0aW9uIG9iamVjdE5vdEZvdW5kKHBhdGgpIHtcclxuICAgIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFwib2JqZWN0LW5vdC1mb3VuZFwiIC8qIE9CSkVDVF9OT1RfRk9VTkQgKi8sIFwiT2JqZWN0ICdcIiArIHBhdGggKyBcIicgZG9lcyBub3QgZXhpc3QuXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHF1b3RhRXhjZWVkZWQoYnVja2V0KSB7XHJcbiAgICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcInF1b3RhLWV4Y2VlZGVkXCIgLyogUVVPVEFfRVhDRUVERUQgKi8sIFwiUXVvdGEgZm9yIGJ1Y2tldCAnXCIgK1xyXG4gICAgICAgIGJ1Y2tldCArXHJcbiAgICAgICAgXCInIGV4Y2VlZGVkLCBwbGVhc2UgdmlldyBxdW90YSBvbiBcIiArXHJcbiAgICAgICAgJ2h0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9wcmljaW5nLy4nKTtcclxufVxyXG5mdW5jdGlvbiB1bmF1dGhlbnRpY2F0ZWQoKSB7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gJ1VzZXIgaXMgbm90IGF1dGhlbnRpY2F0ZWQsIHBsZWFzZSBhdXRoZW50aWNhdGUgdXNpbmcgRmlyZWJhc2UgJyArXHJcbiAgICAgICAgJ0F1dGhlbnRpY2F0aW9uIGFuZCB0cnkgYWdhaW4uJztcclxuICAgIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFwidW5hdXRoZW50aWNhdGVkXCIgLyogVU5BVVRIRU5USUNBVEVEICovLCBtZXNzYWdlKTtcclxufVxyXG5mdW5jdGlvbiB1bmF1dGhvcml6ZWRBcHAoKSB7XHJcbiAgICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcInVuYXV0aG9yaXplZC1hcHBcIiAvKiBVTkFVVEhPUklaRURfQVBQICovLCAnVGhpcyBhcHAgZG9lcyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyBGaXJlYmFzZSBTdG9yYWdlIG9uIHRoaXMgcHJvamVjdC4nKTtcclxufVxyXG5mdW5jdGlvbiB1bmF1dGhvcml6ZWQocGF0aCkge1xyXG4gICAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXCJ1bmF1dGhvcml6ZWRcIiAvKiBVTkFVVEhPUklaRUQgKi8sIFwiVXNlciBkb2VzIG5vdCBoYXZlIHBlcm1pc3Npb24gdG8gYWNjZXNzICdcIiArIHBhdGggKyBcIicuXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHJldHJ5TGltaXRFeGNlZWRlZCgpIHtcclxuICAgIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFwicmV0cnktbGltaXQtZXhjZWVkZWRcIiAvKiBSRVRSWV9MSU1JVF9FWENFRURFRCAqLywgJ01heCByZXRyeSB0aW1lIGZvciBvcGVyYXRpb24gZXhjZWVkZWQsIHBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbn1cclxuZnVuY3Rpb24gY2FuY2VsZWQoKSB7XHJcbiAgICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcImNhbmNlbGVkXCIgLyogQ0FOQ0VMRUQgKi8sICdVc2VyIGNhbmNlbGVkIHRoZSB1cGxvYWQvZG93bmxvYWQuJyk7XHJcbn1cclxuZnVuY3Rpb24gaW52YWxpZFVybCh1cmwpIHtcclxuICAgIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFwiaW52YWxpZC11cmxcIiAvKiBJTlZBTElEX1VSTCAqLywgXCJJbnZhbGlkIFVSTCAnXCIgKyB1cmwgKyBcIicuXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGludmFsaWREZWZhdWx0QnVja2V0KGJ1Y2tldCkge1xyXG4gICAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXCJpbnZhbGlkLWRlZmF1bHQtYnVja2V0XCIgLyogSU5WQUxJRF9ERUZBVUxUX0JVQ0tFVCAqLywgXCJJbnZhbGlkIGRlZmF1bHQgYnVja2V0ICdcIiArIGJ1Y2tldCArIFwiJy5cIik7XHJcbn1cclxuZnVuY3Rpb24gbm9EZWZhdWx0QnVja2V0KCkge1xyXG4gICAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXCJuby1kZWZhdWx0LWJ1Y2tldFwiIC8qIE5PX0RFRkFVTFRfQlVDS0VUICovLCAnTm8gZGVmYXVsdCBidWNrZXQgJyArXHJcbiAgICAgICAgXCJmb3VuZC4gRGlkIHlvdSBzZXQgdGhlICdcIiArXHJcbiAgICAgICAgQ09ORklHX1NUT1JBR0VfQlVDS0VUX0tFWSArXHJcbiAgICAgICAgXCInIHByb3BlcnR5IHdoZW4gaW5pdGlhbGl6aW5nIHRoZSBhcHA/XCIpO1xyXG59XHJcbmZ1bmN0aW9uIGNhbm5vdFNsaWNlQmxvYigpIHtcclxuICAgIHJldHVybiBuZXcgU3RvcmFnZUVycm9yKFwiY2Fubm90LXNsaWNlLWJsb2JcIiAvKiBDQU5OT1RfU0xJQ0VfQkxPQiAqLywgJ0Nhbm5vdCBzbGljZSBibG9iIGZvciB1cGxvYWQuIFBsZWFzZSByZXRyeSB0aGUgdXBsb2FkLicpO1xyXG59XHJcbmZ1bmN0aW9uIHNlcnZlckZpbGVXcm9uZ1NpemUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcInNlcnZlci1maWxlLXdyb25nLXNpemVcIiAvKiBTRVJWRVJfRklMRV9XUk9OR19TSVpFICovLCAnU2VydmVyIHJlY29yZGVkIGluY29ycmVjdCB1cGxvYWQgZmlsZSBzaXplLCBwbGVhc2UgcmV0cnkgdGhlIHVwbG9hZC4nKTtcclxufVxyXG5mdW5jdGlvbiBub0Rvd25sb2FkVVJMKCkge1xyXG4gICAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXCJuby1kb3dubG9hZC11cmxcIiAvKiBOT19ET1dOTE9BRF9VUkwgKi8sICdUaGUgZ2l2ZW4gZmlsZSBkb2VzIG5vdCBoYXZlIGFueSBkb3dubG9hZCBVUkxzLicpO1xyXG59XHJcbi8qKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIGludmFsaWRBcmd1bWVudChtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcImludmFsaWQtYXJndW1lbnRcIiAvKiBJTlZBTElEX0FSR1VNRU5UICovLCBtZXNzYWdlKTtcclxufVxyXG5mdW5jdGlvbiBhcHBEZWxldGVkKCkge1xyXG4gICAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXCJhcHAtZGVsZXRlZFwiIC8qIEFQUF9ERUxFVEVEICovLCAnVGhlIEZpcmViYXNlIGFwcCB3YXMgZGVsZXRlZC4nKTtcclxufVxyXG4vKipcclxuICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgd2FzIGludmFsaWQuXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gaW52YWxpZFJvb3RPcGVyYXRpb24obmFtZSkge1xyXG4gICAgcmV0dXJuIG5ldyBTdG9yYWdlRXJyb3IoXCJpbnZhbGlkLXJvb3Qtb3BlcmF0aW9uXCIgLyogSU5WQUxJRF9ST09UX09QRVJBVElPTiAqLywgXCJUaGUgb3BlcmF0aW9uICdcIiArXHJcbiAgICAgICAgbmFtZSArXHJcbiAgICAgICAgXCInIGNhbm5vdCBiZSBwZXJmb3JtZWQgb24gYSByb290IHJlZmVyZW5jZSwgY3JlYXRlIGEgbm9uLXJvb3QgXCIgK1xyXG4gICAgICAgIFwicmVmZXJlbmNlIHVzaW5nIGNoaWxkLCBzdWNoIGFzIC5jaGlsZCgnZmlsZS5wbmcnKS5cIik7XHJcbn1cclxuLyoqXHJcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgZm9ybWF0IHRoYXQgd2FzIG5vdCB2YWxpZC5cclxuICogQHBhcmFtIG1lc3NhZ2UgLSBBIG1lc3NhZ2UgZGVzY3JpYmluZyB0aGUgZm9ybWF0IHZpb2xhdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIGludmFsaWRGb3JtYXQoZm9ybWF0LCBtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gbmV3IFN0b3JhZ2VFcnJvcihcImludmFsaWQtZm9ybWF0XCIgLyogSU5WQUxJRF9GT1JNQVQgKi8sIFwiU3RyaW5nIGRvZXMgbm90IG1hdGNoIGZvcm1hdCAnXCIgKyBmb3JtYXQgKyBcIic6IFwiICsgbWVzc2FnZSk7XHJcbn1cclxuLyoqXHJcbiAqIEBwYXJhbSBtZXNzYWdlIC0gQSBtZXNzYWdlIGRlc2NyaWJpbmcgdGhlIGludGVybmFsIGVycm9yLlxyXG4gKi9cclxuZnVuY3Rpb24gaW50ZXJuYWxFcnJvcihtZXNzYWdlKSB7XHJcbiAgICB0aHJvdyBuZXcgU3RvcmFnZUVycm9yKFwiaW50ZXJuYWwtZXJyb3JcIiAvKiBJTlRFUk5BTF9FUlJPUiAqLywgJ0ludGVybmFsIGVycm9yOiAnICsgbWVzc2FnZSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEZpcmViYXNlIFN0b3JhZ2UgbG9jYXRpb24gZGF0YS5cclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5jbGFzcyBMb2NhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihidWNrZXQsIHBhdGgpIHtcclxuICAgICAgICB0aGlzLmJ1Y2tldCA9IGJ1Y2tldDtcclxuICAgICAgICB0aGlzLnBhdGhfID0gcGF0aDtcclxuICAgIH1cclxuICAgIGdldCBwYXRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGhfO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzUm9vdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRoLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuICAgIGZ1bGxTZXJ2ZXJVcmwoKSB7XHJcbiAgICAgICAgY29uc3QgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xyXG4gICAgICAgIHJldHVybiAnL2IvJyArIGVuY29kZSh0aGlzLmJ1Y2tldCkgKyAnL28vJyArIGVuY29kZSh0aGlzLnBhdGgpO1xyXG4gICAgfVxyXG4gICAgYnVja2V0T25seVNlcnZlclVybCgpIHtcclxuICAgICAgICBjb25zdCBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XHJcbiAgICAgICAgcmV0dXJuICcvYi8nICsgZW5jb2RlKHRoaXMuYnVja2V0KSArICcvbyc7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbWFrZUZyb21CdWNrZXRTcGVjKGJ1Y2tldFN0cmluZywgaG9zdCkge1xyXG4gICAgICAgIGxldCBidWNrZXRMb2NhdGlvbjtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBidWNrZXRMb2NhdGlvbiA9IExvY2F0aW9uLm1ha2VGcm9tVXJsKGJ1Y2tldFN0cmluZywgaG9zdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vIE5vdCB2YWxpZCBVUkwsIHVzZSBhcy1pcy4gVGhpcyBsZXRzIHlvdSBwdXQgYmFyZSBidWNrZXQgbmFtZXMgaW5cclxuICAgICAgICAgICAgLy8gY29uZmlnLlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IExvY2F0aW9uKGJ1Y2tldFN0cmluZywgJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYnVja2V0TG9jYXRpb24ucGF0aCA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1Y2tldExvY2F0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgaW52YWxpZERlZmF1bHRCdWNrZXQoYnVja2V0U3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbWFrZUZyb21VcmwodXJsLCBob3N0KSB7XHJcbiAgICAgICAgbGV0IGxvY2F0aW9uID0gbnVsbDtcclxuICAgICAgICBjb25zdCBidWNrZXREb21haW4gPSAnKFtBLVphLXowLTkuXFxcXC1fXSspJztcclxuICAgICAgICBmdW5jdGlvbiBnc01vZGlmeShsb2MpIHtcclxuICAgICAgICAgICAgaWYgKGxvYy5wYXRoLmNoYXJBdChsb2MucGF0aC5sZW5ndGggLSAxKSA9PT0gJy8nKSB7XHJcbiAgICAgICAgICAgICAgICBsb2MucGF0aF8gPSBsb2MucGF0aF8uc2xpY2UoMCwgLTEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGdzUGF0aCA9ICcoLyguKikpPyQnO1xyXG4gICAgICAgIGNvbnN0IGdzUmVnZXggPSBuZXcgUmVnRXhwKCdeZ3M6Ly8nICsgYnVja2V0RG9tYWluICsgZ3NQYXRoLCAnaScpO1xyXG4gICAgICAgIGNvbnN0IGdzSW5kaWNlcyA9IHsgYnVja2V0OiAxLCBwYXRoOiAzIH07XHJcbiAgICAgICAgZnVuY3Rpb24gaHR0cE1vZGlmeShsb2MpIHtcclxuICAgICAgICAgICAgbG9jLnBhdGhfID0gZGVjb2RlVVJJQ29tcG9uZW50KGxvYy5wYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9ICd2W0EtWmEtejAtOV9dKyc7XHJcbiAgICAgICAgY29uc3QgZmlyZWJhc2VTdG9yYWdlSG9zdCA9IGhvc3QucmVwbGFjZSgvWy5dL2csICdcXFxcLicpO1xyXG4gICAgICAgIGNvbnN0IGZpcmViYXNlU3RvcmFnZVBhdGggPSAnKC8oW14/I10qKS4qKT8kJztcclxuICAgICAgICBjb25zdCBmaXJlYmFzZVN0b3JhZ2VSZWdFeHAgPSBuZXcgUmVnRXhwKGBeaHR0cHM/Oi8vJHtmaXJlYmFzZVN0b3JhZ2VIb3N0fS8ke3ZlcnNpb259L2IvJHtidWNrZXREb21haW59L28ke2ZpcmViYXNlU3RvcmFnZVBhdGh9YCwgJ2knKTtcclxuICAgICAgICBjb25zdCBmaXJlYmFzZVN0b3JhZ2VJbmRpY2VzID0geyBidWNrZXQ6IDEsIHBhdGg6IDMgfTtcclxuICAgICAgICBjb25zdCBjbG91ZFN0b3JhZ2VIb3N0ID0gaG9zdCA9PT0gREVGQVVMVF9IT1NUXHJcbiAgICAgICAgICAgID8gJyg/OnN0b3JhZ2UuZ29vZ2xlYXBpcy5jb218c3RvcmFnZS5jbG91ZC5nb29nbGUuY29tKSdcclxuICAgICAgICAgICAgOiBob3N0O1xyXG4gICAgICAgIGNvbnN0IGNsb3VkU3RvcmFnZVBhdGggPSAnKFtePyNdKiknO1xyXG4gICAgICAgIGNvbnN0IGNsb3VkU3RvcmFnZVJlZ0V4cCA9IG5ldyBSZWdFeHAoYF5odHRwcz86Ly8ke2Nsb3VkU3RvcmFnZUhvc3R9LyR7YnVja2V0RG9tYWlufS8ke2Nsb3VkU3RvcmFnZVBhdGh9YCwgJ2knKTtcclxuICAgICAgICBjb25zdCBjbG91ZFN0b3JhZ2VJbmRpY2VzID0geyBidWNrZXQ6IDEsIHBhdGg6IDIgfTtcclxuICAgICAgICBjb25zdCBncm91cHMgPSBbXHJcbiAgICAgICAgICAgIHsgcmVnZXg6IGdzUmVnZXgsIGluZGljZXM6IGdzSW5kaWNlcywgcG9zdE1vZGlmeTogZ3NNb2RpZnkgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVnZXg6IGZpcmViYXNlU3RvcmFnZVJlZ0V4cCxcclxuICAgICAgICAgICAgICAgIGluZGljZXM6IGZpcmViYXNlU3RvcmFnZUluZGljZXMsXHJcbiAgICAgICAgICAgICAgICBwb3N0TW9kaWZ5OiBodHRwTW9kaWZ5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiBjbG91ZFN0b3JhZ2VSZWdFeHAsXHJcbiAgICAgICAgICAgICAgICBpbmRpY2VzOiBjbG91ZFN0b3JhZ2VJbmRpY2VzLFxyXG4gICAgICAgICAgICAgICAgcG9zdE1vZGlmeTogaHR0cE1vZGlmeVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGdyb3Vwc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgY2FwdHVyZXMgPSBncm91cC5yZWdleC5leGVjKHVybCk7XHJcbiAgICAgICAgICAgIGlmIChjYXB0dXJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnVja2V0VmFsdWUgPSBjYXB0dXJlc1tncm91cC5pbmRpY2VzLmJ1Y2tldF07XHJcbiAgICAgICAgICAgICAgICBsZXQgcGF0aFZhbHVlID0gY2FwdHVyZXNbZ3JvdXAuaW5kaWNlcy5wYXRoXTtcclxuICAgICAgICAgICAgICAgIGlmICghcGF0aFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aFZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbihidWNrZXRWYWx1ZSwgcGF0aFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGdyb3VwLnBvc3RNb2RpZnkobG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvY2F0aW9uID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgaW52YWxpZFVybCh1cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbG9jYXRpb247XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEEgcmVxdWVzdCB3aG9zZSBwcm9taXNlIGFsd2F5cyBmYWlscy5cclxuICovXHJcbmNsYXNzIEZhaWxSZXF1ZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5wcm9taXNlXyA9IFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgZ2V0UHJvbWlzZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlXztcclxuICAgIH1cclxuICAgIC8qKiBAaW5oZXJpdERvYyAqL1xyXG4gICAgY2FuY2VsKF9hcHBEZWxldGUgPSBmYWxzZSkgeyB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBwYXJhbSBmIE1heSBiZSBpbnZva2VkXHJcbiAqICAgICBiZWZvcmUgdGhlIGZ1bmN0aW9uIHJldHVybnMuXHJcbiAqIEBwYXJhbSBjYWxsYmFjayBHZXQgYWxsIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBmdW5jdGlvblxyXG4gKiAgICAgcGFzc2VkIHRvIGYsIGluY2x1ZGluZyB0aGUgaW5pdGlhbCBib29sZWFuLlxyXG4gKi9cclxuZnVuY3Rpb24gc3RhcnQoZiwgXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbmNhbGxiYWNrLCB0aW1lb3V0KSB7XHJcbiAgICAvLyBUT0RPKGFuZHlzb3RvKTogbWFrZSB0aGlzIGNvZGUgY2xlYW5lciAocHJvYmFibHkgcmVmYWN0b3IgaW50byBhbiBhY3R1YWxcclxuICAgIC8vIHR5cGUgaW5zdGVhZCBvZiBhIGJ1bmNoIG9mIGZ1bmN0aW9ucyB3aXRoIHN0YXRlIHNoYXJlZCBpbiB0aGUgY2xvc3VyZSlcclxuICAgIGxldCB3YWl0U2Vjb25kcyA9IDE7XHJcbiAgICAvLyBXb3VsZCB0eXBlIHRoaXMgYXMgXCJudW1iZXJcIiBidXQgdGhhdCBkb2Vzbid0IHdvcmsgZm9yIE5vZGUgc28gwq9cXF8o44OEKV8vwq9cclxuICAgIC8vIFRPRE86IGZpbmQgYSB3YXkgdG8gZXhjbHVkZSBOb2RlIHR5cGUgZGVmaW5pdGlvbiBmb3Igc3RvcmFnZSBiZWNhdXNlIHN0b3JhZ2Ugb25seSB3b3JrcyBpbiBicm93c2VyXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgbGV0IHJldHJ5VGltZW91dElkID0gbnVsbDtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICBsZXQgZ2xvYmFsVGltZW91dElkID0gbnVsbDtcclxuICAgIGxldCBoaXRUaW1lb3V0ID0gZmFsc2U7XHJcbiAgICBsZXQgY2FuY2VsU3RhdGUgPSAwO1xyXG4gICAgZnVuY3Rpb24gY2FuY2VsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbmNlbFN0YXRlID09PSAyO1xyXG4gICAgfVxyXG4gICAgbGV0IHRyaWdnZXJlZENhbGxiYWNrID0gZmFsc2U7XHJcbiAgICBmdW5jdGlvbiB0cmlnZ2VyQ2FsbGJhY2soLi4uYXJncykge1xyXG4gICAgICAgIGlmICghdHJpZ2dlcmVkQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdHJpZ2dlcmVkQ2FsbGJhY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxsV2l0aERlbGF5KG1pbGxpcykge1xyXG4gICAgICAgIHJldHJ5VGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHJ5VGltZW91dElkID0gbnVsbDtcclxuICAgICAgICAgICAgZihoYW5kbGVyLCBjYW5jZWxlZCgpKTtcclxuICAgICAgICB9LCBtaWxsaXMpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xlYXJHbG9iYWxUaW1lb3V0KCkge1xyXG4gICAgICAgIGlmIChnbG9iYWxUaW1lb3V0SWQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGdsb2JhbFRpbWVvdXRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlcihzdWNjZXNzLCAuLi5hcmdzKSB7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJlZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNsZWFyR2xvYmFsVGltZW91dCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGNsZWFyR2xvYmFsVGltZW91dCgpO1xyXG4gICAgICAgICAgICB0cmlnZ2VyQ2FsbGJhY2suY2FsbChudWxsLCBzdWNjZXNzLCAuLi5hcmdzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtdXN0U3RvcCA9IGNhbmNlbGVkKCkgfHwgaGl0VGltZW91dDtcclxuICAgICAgICBpZiAobXVzdFN0b3ApIHtcclxuICAgICAgICAgICAgY2xlYXJHbG9iYWxUaW1lb3V0KCk7XHJcbiAgICAgICAgICAgIHRyaWdnZXJDYWxsYmFjay5jYWxsKG51bGwsIHN1Y2Nlc3MsIC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3YWl0U2Vjb25kcyA8IDY0KSB7XHJcbiAgICAgICAgICAgIC8qIFRPRE8oYW5keXNvdG8pOiBkb24ndCBiYWNrIG9mZiBzbyBxdWlja2x5IGlmIHdlIGtub3cgd2UncmUgb2ZmbGluZS4gKi9cclxuICAgICAgICAgICAgd2FpdFNlY29uZHMgKj0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHdhaXRNaWxsaXM7XHJcbiAgICAgICAgaWYgKGNhbmNlbFN0YXRlID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbFN0YXRlID0gMjtcclxuICAgICAgICAgICAgd2FpdE1pbGxpcyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3YWl0TWlsbGlzID0gKHdhaXRTZWNvbmRzICsgTWF0aC5yYW5kb20oKSkgKiAxMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxsV2l0aERlbGF5KHdhaXRNaWxsaXMpO1xyXG4gICAgfVxyXG4gICAgbGV0IHN0b3BwZWQgPSBmYWxzZTtcclxuICAgIGZ1bmN0aW9uIHN0b3Aod2FzVGltZW91dCkge1xyXG4gICAgICAgIGlmIChzdG9wcGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RvcHBlZCA9IHRydWU7XHJcbiAgICAgICAgY2xlYXJHbG9iYWxUaW1lb3V0KCk7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJlZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJldHJ5VGltZW91dElkICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICghd2FzVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsU3RhdGUgPSAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXRyeVRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgIGNhbGxXaXRoRGVsYXkoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXdhc1RpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbFN0YXRlID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhbGxXaXRoRGVsYXkoMCk7XHJcbiAgICBnbG9iYWxUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBoaXRUaW1lb3V0ID0gdHJ1ZTtcclxuICAgICAgICBzdG9wKHRydWUpO1xyXG4gICAgfSwgdGltZW91dCk7XHJcbiAgICByZXR1cm4gc3RvcDtcclxufVxyXG4vKipcclxuICogU3RvcHMgdGhlIHJldHJ5IGxvb3AgZnJvbSByZXBlYXRpbmcuXHJcbiAqIElmIHRoZSBmdW5jdGlvbiBpcyBjdXJyZW50bHkgXCJpbiBiZXR3ZWVuXCIgcmV0cmllcywgaXQgaXMgaW52b2tlZCBpbW1lZGlhdGVseVxyXG4gKiB3aXRoIHRoZSBzZWNvbmQgcGFyYW1ldGVyIGFzIFwidHJ1ZVwiLiBPdGhlcndpc2UsIGl0IHdpbGwgYmUgaW52b2tlZCBvbmNlIG1vcmVcclxuICogYWZ0ZXIgdGhlIGN1cnJlbnQgaW52b2NhdGlvbiBmaW5pc2hlcyBpZmYgdGhlIGN1cnJlbnQgaW52b2NhdGlvbiB3b3VsZCBoYXZlXHJcbiAqIHRyaWdnZXJlZCBhbm90aGVyIHJldHJ5LlxyXG4gKi9cclxuZnVuY3Rpb24gc3RvcChpZCkge1xyXG4gICAgaWQoZmFsc2UpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGlzSnVzdERlZihwKSB7XHJcbiAgICByZXR1cm4gcCAhPT0gdm9pZCAwO1xyXG59XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24ocCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBwID09PSAnZnVuY3Rpb24nO1xyXG59XHJcbmZ1bmN0aW9uIGlzTm9uQXJyYXlPYmplY3QocCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBwID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShwKTtcclxufVxyXG5mdW5jdGlvbiBpc1N0cmluZyhwKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHAgPT09ICdzdHJpbmcnIHx8IHAgaW5zdGFuY2VvZiBTdHJpbmc7XHJcbn1cclxuZnVuY3Rpb24gaXNOYXRpdmVCbG9iKHApIHtcclxuICAgIHJldHVybiBpc05hdGl2ZUJsb2JEZWZpbmVkKCkgJiYgcCBpbnN0YW5jZW9mIEJsb2I7XHJcbn1cclxuZnVuY3Rpb24gaXNOYXRpdmVCbG9iRGVmaW5lZCgpIHtcclxuICAgIHJldHVybiB0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVOdW1iZXIoYXJndW1lbnQsIG1pblZhbHVlLCBtYXhWYWx1ZSwgdmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA8IG1pblZhbHVlKSB7XHJcbiAgICAgICAgdGhyb3cgaW52YWxpZEFyZ3VtZW50KGBJbnZhbGlkIHZhbHVlIGZvciAnJHthcmd1bWVudH0nLiBFeHBlY3RlZCAke21pblZhbHVlfSBvciBncmVhdGVyLmApO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlID4gbWF4VmFsdWUpIHtcclxuICAgICAgICB0aHJvdyBpbnZhbGlkQXJndW1lbnQoYEludmFsaWQgdmFsdWUgZm9yICcke2FyZ3VtZW50fScuIEV4cGVjdGVkICR7bWF4VmFsdWV9IG9yIGxlc3MuYCk7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gbWFrZVVybCh1cmxQYXJ0LCBob3N0LCBwcm90b2NvbCkge1xyXG4gICAgbGV0IG9yaWdpbiA9IGhvc3Q7XHJcbiAgICBpZiAocHJvdG9jb2wgPT0gbnVsbCkge1xyXG4gICAgICAgIG9yaWdpbiA9IGBodHRwczovLyR7aG9zdH1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAke3Byb3RvY29sfTovLyR7b3JpZ2lufS92MCR7dXJsUGFydH1gO1xyXG59XHJcbmZ1bmN0aW9uIG1ha2VRdWVyeVN0cmluZyhwYXJhbXMpIHtcclxuICAgIGNvbnN0IGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcclxuICAgIGxldCBxdWVyeVBhcnQgPSAnPyc7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXJhbXMpIHtcclxuICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dFBhcnQgPSBlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZShwYXJhbXNba2V5XSk7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFydCA9IHF1ZXJ5UGFydCArIG5leHRQYXJ0ICsgJyYnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIENob3Agb2ZmIHRoZSBleHRyYSAnJicgb3IgJz8nIG9uIHRoZSBlbmRcclxuICAgIHF1ZXJ5UGFydCA9IHF1ZXJ5UGFydC5zbGljZSgwLCAtMSk7XHJcbiAgICByZXR1cm4gcXVlcnlQYXJ0O1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBFcnJvciBjb2RlcyBmb3IgcmVxdWVzdHMgbWFkZSBieSB0aGUgdGhlIFhocklvIHdyYXBwZXIuXHJcbiAqL1xyXG52YXIgRXJyb3JDb2RlO1xyXG4oZnVuY3Rpb24gKEVycm9yQ29kZSkge1xyXG4gICAgRXJyb3JDb2RlW0Vycm9yQ29kZVtcIk5PX0VSUk9SXCJdID0gMF0gPSBcIk5PX0VSUk9SXCI7XHJcbiAgICBFcnJvckNvZGVbRXJyb3JDb2RlW1wiTkVUV09SS19FUlJPUlwiXSA9IDFdID0gXCJORVRXT1JLX0VSUk9SXCI7XHJcbiAgICBFcnJvckNvZGVbRXJyb3JDb2RlW1wiQUJPUlRcIl0gPSAyXSA9IFwiQUJPUlRcIjtcclxufSkoRXJyb3JDb2RlIHx8IChFcnJvckNvZGUgPSB7fSkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogSGFuZGxlcyBuZXR3b3JrIGxvZ2ljIGZvciBhbGwgU3RvcmFnZSBSZXF1ZXN0cywgaW5jbHVkaW5nIGVycm9yIHJlcG9ydGluZyBhbmRcclxuICogcmV0cmllcyB3aXRoIGJhY2tvZmYuXHJcbiAqXHJcbiAqIEBwYXJhbSBJIC0gdGhlIHR5cGUgb2YgdGhlIGJhY2tlbmQncyBuZXR3b3JrIHJlc3BvbnNlLlxyXG4gKiBAcGFyYW0gLSBPIHRoZSBvdXRwdXQgdHlwZSB1c2VkIGJ5IHRoZSByZXN0IG9mIHRoZSBTREsuIFRoZSBjb252ZXJzaW9uXHJcbiAqIGhhcHBlbnMgaW4gdGhlIHNwZWNpZmllZCBgY2FsbGJhY2tfYC5cclxuICovXHJcbmNsYXNzIE5ldHdvcmtSZXF1ZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKHVybF8sIG1ldGhvZF8sIGhlYWRlcnNfLCBib2R5Xywgc3VjY2Vzc0NvZGVzXywgYWRkaXRpb25hbFJldHJ5Q29kZXNfLCBjYWxsYmFja18sIGVycm9yQ2FsbGJhY2tfLCB0aW1lb3V0XywgcHJvZ3Jlc3NDYWxsYmFja18sIGNvbm5lY3Rpb25GYWN0b3J5Xykge1xyXG4gICAgICAgIHRoaXMudXJsXyA9IHVybF87XHJcbiAgICAgICAgdGhpcy5tZXRob2RfID0gbWV0aG9kXztcclxuICAgICAgICB0aGlzLmhlYWRlcnNfID0gaGVhZGVyc187XHJcbiAgICAgICAgdGhpcy5ib2R5XyA9IGJvZHlfO1xyXG4gICAgICAgIHRoaXMuc3VjY2Vzc0NvZGVzXyA9IHN1Y2Nlc3NDb2Rlc187XHJcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsUmV0cnlDb2Rlc18gPSBhZGRpdGlvbmFsUmV0cnlDb2Rlc187XHJcbiAgICAgICAgdGhpcy5jYWxsYmFja18gPSBjYWxsYmFja187XHJcbiAgICAgICAgdGhpcy5lcnJvckNhbGxiYWNrXyA9IGVycm9yQ2FsbGJhY2tfO1xyXG4gICAgICAgIHRoaXMudGltZW91dF8gPSB0aW1lb3V0XztcclxuICAgICAgICB0aGlzLnByb2dyZXNzQ2FsbGJhY2tfID0gcHJvZ3Jlc3NDYWxsYmFja187XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uRmFjdG9yeV8gPSBjb25uZWN0aW9uRmFjdG9yeV87XHJcbiAgICAgICAgdGhpcy5wZW5kaW5nQ29ubmVjdGlvbl8gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYmFja29mZklkXyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxlZF8gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFwcERlbGV0ZV8gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByb21pc2VfID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVfID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3RfID0gcmVqZWN0O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0XygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBY3R1YWxseSBzdGFydHMgdGhlIHJldHJ5IGxvb3AuXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0XygpIHtcclxuICAgICAgICBjb25zdCBkb1RoZVJlcXVlc3QgPSAoYmFja29mZkNhbGxiYWNrLCBjYW5jZWxlZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2FuY2VsZWQpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tvZmZDYWxsYmFjayhmYWxzZSwgbmV3IFJlcXVlc3RFbmRTdGF0dXMoZmFsc2UsIG51bGwsIHRydWUpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uRmFjdG9yeV8oKTtcclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nQ29ubmVjdGlvbl8gPSBjb25uZWN0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzc0xpc3RlbmVyID0gcHJvZ3Jlc3NFdmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkZWQgPSBwcm9ncmVzc0V2ZW50LmxvYWRlZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gcHJvZ3Jlc3NFdmVudC5sZW5ndGhDb21wdXRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgPyBwcm9ncmVzc0V2ZW50LnRvdGFsXHJcbiAgICAgICAgICAgICAgICAgICAgOiAtMTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzQ2FsbGJhY2tfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0NhbGxiYWNrXyhsb2FkZWQsIHRvdGFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NDYWxsYmFja18gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24uYWRkVXBsb2FkUHJvZ3Jlc3NMaXN0ZW5lcihwcm9ncmVzc0xpc3RlbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25uZWN0aW9uLnNlbmQoKSBuZXZlciByZWplY3RzLCBzbyB3ZSBkb24ndCBuZWVkIHRvIGhhdmUgYSBlcnJvciBoYW5kbGVyIG9yIHVzZSBjYXRjaCBvbiB0aGUgcmV0dXJuZWQgcHJvbWlzZS5cclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAuc2VuZCh0aGlzLnVybF8sIHRoaXMubWV0aG9kXywgdGhpcy5ib2R5XywgdGhpcy5oZWFkZXJzXylcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzQ2FsbGJhY2tfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi5yZW1vdmVVcGxvYWRQcm9ncmVzc0xpc3RlbmVyKHByb2dyZXNzTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQ29ubmVjdGlvbl8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGl0U2VydmVyID0gY29ubmVjdGlvbi5nZXRFcnJvckNvZGUoKSA9PT0gRXJyb3JDb2RlLk5PX0VSUk9SO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gY29ubmVjdGlvbi5nZXRTdGF0dXMoKTtcclxuICAgICAgICAgICAgICAgIGlmICghaGl0U2VydmVyIHx8IHRoaXMuaXNSZXRyeVN0YXR1c0NvZGVfKHN0YXR1cykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3YXNDYW5jZWxlZCA9IGNvbm5lY3Rpb24uZ2V0RXJyb3JDb2RlKCkgPT09IEVycm9yQ29kZS5BQk9SVDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrb2ZmQ2FsbGJhY2soZmFsc2UsIG5ldyBSZXF1ZXN0RW5kU3RhdHVzKGZhbHNlLCBudWxsLCB3YXNDYW5jZWxlZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NDb2RlID0gdGhpcy5zdWNjZXNzQ29kZXNfLmluZGV4T2Yoc3RhdHVzKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICBiYWNrb2ZmQ2FsbGJhY2sodHJ1ZSwgbmV3IFJlcXVlc3RFbmRTdGF0dXMoc3VjY2Vzc0NvZGUsIGNvbm5lY3Rpb24pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBAcGFyYW0gcmVxdWVzdFdlbnRUaHJvdWdoIC0gVHJ1ZSBpZiB0aGUgcmVxdWVzdCBldmVudHVhbGx5IHdlbnRcclxuICAgICAgICAgKiAgICAgdGhyb3VnaCwgZmFsc2UgaWYgaXQgaGl0IHRoZSByZXRyeSBsaW1pdCBvciB3YXMgY2FuY2VsZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc3QgYmFja29mZkRvbmUgPSAocmVxdWVzdFdlbnRUaHJvdWdoLCBzdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZSA9IHRoaXMucmVzb2x2ZV87XHJcbiAgICAgICAgICAgIGNvbnN0IHJlamVjdCA9IHRoaXMucmVqZWN0XztcclxuICAgICAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHN0YXR1cy5jb25uZWN0aW9uO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzLndhc1N1Y2Nlc3NDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY2FsbGJhY2tfKGNvbm5lY3Rpb24sIGNvbm5lY3Rpb24uZ2V0UmVzcG9uc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSnVzdERlZihyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyID0gdW5rbm93bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVyci5zZXJ2ZXJSZXNwb25zZSA9IGNvbm5lY3Rpb24uZ2V0RXJyb3JUZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZXJyb3JDYWxsYmFja18pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMuZXJyb3JDYWxsYmFja18oY29ubmVjdGlvbiwgZXJyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmNhbmNlbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IHRoaXMuYXBwRGVsZXRlXyA/IGFwcERlbGV0ZWQoKSA6IGNhbmNlbGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyID0gcmV0cnlMaW1pdEV4Y2VlZGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuY2FuY2VsZWRfKSB7XHJcbiAgICAgICAgICAgIGJhY2tvZmZEb25lKGZhbHNlLCBuZXcgUmVxdWVzdEVuZFN0YXR1cyhmYWxzZSwgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iYWNrb2ZmSWRfID0gc3RhcnQoZG9UaGVSZXF1ZXN0LCBiYWNrb2ZmRG9uZSwgdGhpcy50aW1lb3V0Xyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBnZXRQcm9taXNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2VfO1xyXG4gICAgfVxyXG4gICAgLyoqIEBpbmhlcml0RG9jICovXHJcbiAgICBjYW5jZWwoYXBwRGVsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5jYW5jZWxlZF8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXBwRGVsZXRlXyA9IGFwcERlbGV0ZSB8fCBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5iYWNrb2ZmSWRfICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHN0b3AodGhpcy5iYWNrb2ZmSWRfKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZ0Nvbm5lY3Rpb25fICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ0Nvbm5lY3Rpb25fLmFib3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaXNSZXRyeVN0YXR1c0NvZGVfKHN0YXR1cykge1xyXG4gICAgICAgIC8vIFRoZSBjb2RlcyBmb3Igd2hpY2ggdG8gcmV0cnkgY2FtZSBmcm9tIHRoaXMgcGFnZTpcclxuICAgICAgICAvLyBodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vc3RvcmFnZS9kb2NzL2V4cG9uZW50aWFsLWJhY2tvZmZcclxuICAgICAgICBjb25zdCBpc0ZpdmVIdW5kcmVkQ29kZSA9IHN0YXR1cyA+PSA1MDAgJiYgc3RhdHVzIDwgNjAwO1xyXG4gICAgICAgIGNvbnN0IGV4dHJhUmV0cnlDb2RlcyA9IFtcclxuICAgICAgICAgICAgLy8gUmVxdWVzdCBUaW1lb3V0OiB3ZWIgc2VydmVyIGRpZG4ndCByZWNlaXZlIGZ1bGwgcmVxdWVzdCBpbiB0aW1lLlxyXG4gICAgICAgICAgICA0MDgsXHJcbiAgICAgICAgICAgIC8vIFRvbyBNYW55IFJlcXVlc3RzOiB5b3UncmUgZ2V0dGluZyByYXRlLWxpbWl0ZWQsIGJhc2ljYWxseS5cclxuICAgICAgICAgICAgNDI5XHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBpc0V4dHJhUmV0cnlDb2RlID0gZXh0cmFSZXRyeUNvZGVzLmluZGV4T2Yoc3RhdHVzKSAhPT0gLTE7XHJcbiAgICAgICAgY29uc3QgaXNSZXF1ZXN0U3BlY2lmaWNSZXRyeUNvZGUgPSB0aGlzLmFkZGl0aW9uYWxSZXRyeUNvZGVzXy5pbmRleE9mKHN0YXR1cykgIT09IC0xO1xyXG4gICAgICAgIHJldHVybiBpc0ZpdmVIdW5kcmVkQ29kZSB8fCBpc0V4dHJhUmV0cnlDb2RlIHx8IGlzUmVxdWVzdFNwZWNpZmljUmV0cnlDb2RlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBBIGNvbGxlY3Rpb24gb2YgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlc3VsdCBvZiBhIG5ldHdvcmsgcmVxdWVzdC5cclxuICogQHBhcmFtIG9wdF9jYW5jZWxlZCAtIERlZmF1bHRzIHRvIGZhbHNlLlxyXG4gKi9cclxuY2xhc3MgUmVxdWVzdEVuZFN0YXR1cyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3YXNTdWNjZXNzQ29kZSwgY29ubmVjdGlvbiwgY2FuY2VsZWQpIHtcclxuICAgICAgICB0aGlzLndhc1N1Y2Nlc3NDb2RlID0gd2FzU3VjY2Vzc0NvZGU7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gY29ubmVjdGlvbjtcclxuICAgICAgICB0aGlzLmNhbmNlbGVkID0gISFjYW5jZWxlZDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRBdXRoSGVhZGVyXyhoZWFkZXJzLCBhdXRoVG9rZW4pIHtcclxuICAgIGlmIChhdXRoVG9rZW4gIT09IG51bGwgJiYgYXV0aFRva2VuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBoZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnRmlyZWJhc2UgJyArIGF1dGhUb2tlbjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRWZXJzaW9uSGVhZGVyXyhoZWFkZXJzLCBmaXJlYmFzZVZlcnNpb24pIHtcclxuICAgIGhlYWRlcnNbJ1gtRmlyZWJhc2UtU3RvcmFnZS1WZXJzaW9uJ10gPVxyXG4gICAgICAgICd3ZWJqcy8nICsgKGZpcmViYXNlVmVyc2lvbiAhPT0gbnVsbCAmJiBmaXJlYmFzZVZlcnNpb24gIT09IHZvaWQgMCA/IGZpcmViYXNlVmVyc2lvbiA6ICdBcHBNYW5hZ2VyJyk7XHJcbn1cclxuZnVuY3Rpb24gYWRkR21waWRIZWFkZXJfKGhlYWRlcnMsIGFwcElkKSB7XHJcbiAgICBpZiAoYXBwSWQpIHtcclxuICAgICAgICBoZWFkZXJzWydYLUZpcmViYXNlLUdNUElEJ10gPSBhcHBJZDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRBcHBDaGVja0hlYWRlcl8oaGVhZGVycywgYXBwQ2hlY2tUb2tlbikge1xyXG4gICAgaWYgKGFwcENoZWNrVG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgICBoZWFkZXJzWydYLUZpcmViYXNlLUFwcENoZWNrJ10gPSBhcHBDaGVja1Rva2VuO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBhcHBJZCwgYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuLCByZXF1ZXN0RmFjdG9yeSwgZmlyZWJhc2VWZXJzaW9uKSB7XHJcbiAgICBjb25zdCBxdWVyeVBhcnQgPSBtYWtlUXVlcnlTdHJpbmcocmVxdWVzdEluZm8udXJsUGFyYW1zKTtcclxuICAgIGNvbnN0IHVybCA9IHJlcXVlc3RJbmZvLnVybCArIHF1ZXJ5UGFydDtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCByZXF1ZXN0SW5mby5oZWFkZXJzKTtcclxuICAgIGFkZEdtcGlkSGVhZGVyXyhoZWFkZXJzLCBhcHBJZCk7XHJcbiAgICBhZGRBdXRoSGVhZGVyXyhoZWFkZXJzLCBhdXRoVG9rZW4pO1xyXG4gICAgYWRkVmVyc2lvbkhlYWRlcl8oaGVhZGVycywgZmlyZWJhc2VWZXJzaW9uKTtcclxuICAgIGFkZEFwcENoZWNrSGVhZGVyXyhoZWFkZXJzLCBhcHBDaGVja1Rva2VuKTtcclxuICAgIHJldHVybiBuZXcgTmV0d29ya1JlcXVlc3QodXJsLCByZXF1ZXN0SW5mby5tZXRob2QsIGhlYWRlcnMsIHJlcXVlc3RJbmZvLmJvZHksIHJlcXVlc3RJbmZvLnN1Y2Nlc3NDb2RlcywgcmVxdWVzdEluZm8uYWRkaXRpb25hbFJldHJ5Q29kZXMsIHJlcXVlc3RJbmZvLmhhbmRsZXIsIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciwgcmVxdWVzdEluZm8udGltZW91dCwgcmVxdWVzdEluZm8ucHJvZ3Jlc3NDYWxsYmFjaywgcmVxdWVzdEZhY3RvcnkpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGdldEJsb2JCdWlsZGVyKCkge1xyXG4gICAgaWYgKHR5cGVvZiBCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICByZXR1cm4gQmxvYkJ1aWxkZXI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgV2ViS2l0QmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIFdlYktpdEJsb2JCdWlsZGVyO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQ29uY2F0ZW5hdGVzIG9uZSBvciBtb3JlIHZhbHVlcyB0b2dldGhlciBhbmQgY29udmVydHMgdGhlbSB0byBhIEJsb2IuXHJcbiAqXHJcbiAqIEBwYXJhbSBhcmdzIFRoZSB2YWx1ZXMgdGhhdCB3aWxsIG1ha2UgdXAgdGhlIHJlc3VsdGluZyBibG9iLlxyXG4gKiBAcmV0dXJuIFRoZSBibG9iLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0QmxvYiQxKC4uLmFyZ3MpIHtcclxuICAgIGNvbnN0IEJsb2JCdWlsZGVyID0gZ2V0QmxvYkJ1aWxkZXIoKTtcclxuICAgIGlmIChCbG9iQnVpbGRlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc3QgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYmIuYXBwZW5kKGFyZ3NbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmIuZ2V0QmxvYigpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYgKGlzTmF0aXZlQmxvYkRlZmluZWQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJsb2IoYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU3RvcmFnZUVycm9yKFwidW5zdXBwb3J0ZWQtZW52aXJvbm1lbnRcIiAvKiBVTlNVUFBPUlRFRF9FTlZJUk9OTUVOVCAqLywgXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgY3JlYXRpbmcgQmxvYnNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBTbGljZXMgdGhlIGJsb2IuIFRoZSByZXR1cm5lZCBibG9iIGNvbnRhaW5zIGRhdGEgZnJvbSB0aGUgc3RhcnQgYnl0ZVxyXG4gKiAoaW5jbHVzaXZlKSB0aWxsIHRoZSBlbmQgYnl0ZSAoZXhjbHVzaXZlKS4gTmVnYXRpdmUgaW5kaWNlcyBjYW5ub3QgYmUgdXNlZC5cclxuICpcclxuICogQHBhcmFtIGJsb2IgVGhlIGJsb2IgdG8gYmUgc2xpY2VkLlxyXG4gKiBAcGFyYW0gc3RhcnQgSW5kZXggb2YgdGhlIHN0YXJ0aW5nIGJ5dGUuXHJcbiAqIEBwYXJhbSBlbmQgSW5kZXggb2YgdGhlIGVuZGluZyBieXRlLlxyXG4gKiBAcmV0dXJuIFRoZSBibG9iIHNsaWNlIG9yIG51bGwgaWYgbm90IHN1cHBvcnRlZC5cclxuICovXHJcbmZ1bmN0aW9uIHNsaWNlQmxvYihibG9iLCBzdGFydCwgZW5kKSB7XHJcbiAgICBpZiAoYmxvYi53ZWJraXRTbGljZSkge1xyXG4gICAgICAgIHJldHVybiBibG9iLndlYmtpdFNsaWNlKHN0YXJ0LCBlbmQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYmxvYi5tb3pTbGljZSkge1xyXG4gICAgICAgIHJldHVybiBibG9iLm1velNsaWNlKHN0YXJ0LCBlbmQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYmxvYi5zbGljZSkge1xyXG4gICAgICAgIHJldHVybiBibG9iLnNsaWNlKHN0YXJ0LCBlbmQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqIENvbnZlcnRzIGEgQmFzZTY0IGVuY29kZWQgc3RyaW5nIHRvIGEgYmluYXJ5IHN0cmluZy4gKi9cclxuZnVuY3Rpb24gZGVjb2RlQmFzZTY0KGVuY29kZWQpIHtcclxuICAgIHJldHVybiBhdG9iKGVuY29kZWQpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBBbiBlbnVtZXJhdGlvbiBvZiB0aGUgcG9zc2libGUgc3RyaW5nIGZvcm1hdHMgZm9yIHVwbG9hZC5cclxuICogQHB1YmxpY1xyXG4gKi9cclxuY29uc3QgU3RyaW5nRm9ybWF0ID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgdGhlIHN0cmluZyBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgXCJyYXdcIiwgdGhhdCBpcywgYXMgbm9ybWFsIHRleHQuXHJcbiAgICAgKiBUaGUgc3RyaW5nIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgVVRGLTE2LCB0aGVuIHVwbG9hZGVkIGFzIGEgVVRGLTggYnl0ZVxyXG4gICAgICogc2VxdWVuY2UuXHJcbiAgICAgKiBFeGFtcGxlOiBUaGUgc3RyaW5nICdIZWxsbyEgXFxcXHVkODNkXFxcXHVkZTBhJyBiZWNvbWVzIHRoZSBieXRlIHNlcXVlbmNlXHJcbiAgICAgKiA0OCA2NSA2YyA2YyA2ZiAyMSAyMCBmMCA5ZiA5OCA4YVxyXG4gICAgICovXHJcbiAgICBSQVc6ICdyYXcnLFxyXG4gICAgLyoqXHJcbiAgICAgKiBJbmRpY2F0ZXMgdGhlIHN0cmluZyBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgYXMgYmFzZTY0LWVuY29kZWQgZGF0YS5cclxuICAgICAqIFBhZGRpbmcgY2hhcmFjdGVycyAodHJhaWxpbmcgJz0ncykgYXJlIG9wdGlvbmFsLlxyXG4gICAgICogRXhhbXBsZTogVGhlIHN0cmluZyAncldtTysrRTZ0Ny9ybHc9PScgYmVjb21lcyB0aGUgYnl0ZSBzZXF1ZW5jZVxyXG4gICAgICogYWQgNjkgOGUgZmIgZTEgM2EgYjcgYmYgZWIgOTdcclxuICAgICAqL1xyXG4gICAgQkFTRTY0OiAnYmFzZTY0JyxcclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGVzIHRoZSBzdHJpbmcgc2hvdWxkIGJlIGludGVycHJldGVkIGFzIGJhc2U2NHVybC1lbmNvZGVkIGRhdGEuXHJcbiAgICAgKiBQYWRkaW5nIGNoYXJhY3RlcnMgKHRyYWlsaW5nICc9J3MpIGFyZSBvcHRpb25hbC5cclxuICAgICAqIEV4YW1wbGU6IFRoZSBzdHJpbmcgJ3JXbU8tLUU2dDdfcmx3PT0nIGJlY29tZXMgdGhlIGJ5dGUgc2VxdWVuY2VcclxuICAgICAqIGFkIDY5IDhlIGZiIGUxIDNhIGI3IGJmIGViIDk3XHJcbiAgICAgKi9cclxuICAgIEJBU0U2NFVSTDogJ2Jhc2U2NHVybCcsXHJcbiAgICAvKipcclxuICAgICAqIEluZGljYXRlcyB0aGUgc3RyaW5nIGlzIGEgZGF0YSBVUkwsIHN1Y2ggYXMgb25lIG9idGFpbmVkIGZyb21cclxuICAgICAqIGNhbnZhcy50b0RhdGFVUkwoKS5cclxuICAgICAqIEV4YW1wbGU6IHRoZSBzdHJpbmcgJ2RhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxhYWFhJ1xyXG4gICAgICogYmVjb21lcyB0aGUgYnl0ZSBzZXF1ZW5jZVxyXG4gICAgICogNjkgYTYgOWFcclxuICAgICAqICh0aGUgY29udGVudC10eXBlIFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIgaXMgYWxzbyBhcHBsaWVkLCBidXQgY2FuXHJcbiAgICAgKiBiZSBvdmVycmlkZGVuIGluIHRoZSBtZXRhZGF0YSBvYmplY3QpLlxyXG4gICAgICovXHJcbiAgICBEQVRBX1VSTDogJ2RhdGFfdXJsJ1xyXG59O1xyXG5jbGFzcyBTdHJpbmdEYXRhIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEsIGNvbnRlbnRUeXBlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRUeXBlID0gY29udGVudFR5cGUgfHwgbnVsbDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBkYXRhRnJvbVN0cmluZyhmb3JtYXQsIHN0cmluZ0RhdGEpIHtcclxuICAgIHN3aXRjaCAoZm9ybWF0KSB7XHJcbiAgICAgICAgY2FzZSBTdHJpbmdGb3JtYXQuUkFXOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0cmluZ0RhdGEodXRmOEJ5dGVzXyhzdHJpbmdEYXRhKSk7XHJcbiAgICAgICAgY2FzZSBTdHJpbmdGb3JtYXQuQkFTRTY0OlxyXG4gICAgICAgIGNhc2UgU3RyaW5nRm9ybWF0LkJBU0U2NFVSTDpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdEYXRhKGJhc2U2NEJ5dGVzXyhmb3JtYXQsIHN0cmluZ0RhdGEpKTtcclxuICAgICAgICBjYXNlIFN0cmluZ0Zvcm1hdC5EQVRBX1VSTDpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdEYXRhKGRhdGFVUkxCeXRlc18oc3RyaW5nRGF0YSksIGRhdGFVUkxDb250ZW50VHlwZV8oc3RyaW5nRGF0YSkpO1xyXG4gICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgIH1cclxuICAgIC8vIGFzc2VydChmYWxzZSk7XHJcbiAgICB0aHJvdyB1bmtub3duKCk7XHJcbn1cclxuZnVuY3Rpb24gdXRmOEJ5dGVzXyh2YWx1ZSkge1xyXG4gICAgY29uc3QgYiA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjID0gdmFsdWUuY2hhckNvZGVBdChpKTtcclxuICAgICAgICBpZiAoYyA8PSAxMjcpIHtcclxuICAgICAgICAgICAgYi5wdXNoKGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGMgPD0gMjA0Nykge1xyXG4gICAgICAgICAgICAgICAgYi5wdXNoKDE5MiB8IChjID4+IDYpLCAxMjggfCAoYyAmIDYzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGMgJiA2NDUxMikgPT09IDU1Mjk2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHN0YXJ0IG9mIGEgc3Vycm9nYXRlIHBhaXIuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWQgPSBpIDwgdmFsdWUubGVuZ3RoIC0gMSAmJiAodmFsdWUuY2hhckNvZGVBdChpICsgMSkgJiA2NDUxMikgPT09IDU2MzIwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHNlY29uZCBzdXJyb2dhdGUgd2Fzbid0IHRoZXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnB1c2goMjM5LCAxOTEsIDE4OSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoaSA9IGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvID0gdmFsdWUuY2hhckNvZGVBdCgrK2kpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gNjU1MzYgfCAoKGhpICYgMTAyMykgPDwgMTApIHwgKGxvICYgMTAyMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGIucHVzaCgyNDAgfCAoYyA+PiAxOCksIDEyOCB8ICgoYyA+PiAxMikgJiA2MyksIDEyOCB8ICgoYyA+PiA2KSAmIDYzKSwgMTI4IHwgKGMgJiA2MykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoYyAmIDY0NTEyKSA9PT0gNTYzMjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW52YWxpZCBsb3cgc3Vycm9nYXRlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnB1c2goMjM5LCAxOTEsIDE4OSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLnB1c2goMjI0IHwgKGMgPj4gMTIpLCAxMjggfCAoKGMgPj4gNikgJiA2MyksIDEyOCB8IChjICYgNjMpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYik7XHJcbn1cclxuZnVuY3Rpb24gcGVyY2VudEVuY29kZWRCeXRlc18odmFsdWUpIHtcclxuICAgIGxldCBkZWNvZGVkO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBkZWNvZGVkID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgaW52YWxpZEZvcm1hdChTdHJpbmdGb3JtYXQuREFUQV9VUkwsICdNYWxmb3JtZWQgZGF0YSBVUkwuJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXRmOEJ5dGVzXyhkZWNvZGVkKTtcclxufVxyXG5mdW5jdGlvbiBiYXNlNjRCeXRlc18oZm9ybWF0LCB2YWx1ZSkge1xyXG4gICAgc3dpdGNoIChmb3JtYXQpIHtcclxuICAgICAgICBjYXNlIFN0cmluZ0Zvcm1hdC5CQVNFNjQ6IHtcclxuICAgICAgICAgICAgY29uc3QgaGFzTWludXMgPSB2YWx1ZS5pbmRleE9mKCctJykgIT09IC0xO1xyXG4gICAgICAgICAgICBjb25zdCBoYXNVbmRlciA9IHZhbHVlLmluZGV4T2YoJ18nKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIGlmIChoYXNNaW51cyB8fCBoYXNVbmRlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW52YWxpZENoYXIgPSBoYXNNaW51cyA/ICctJyA6ICdfJztcclxuICAgICAgICAgICAgICAgIHRocm93IGludmFsaWRGb3JtYXQoZm9ybWF0LCBcIkludmFsaWQgY2hhcmFjdGVyICdcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZENoYXIgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJyBmb3VuZDogaXMgaXQgYmFzZTY0dXJsIGVuY29kZWQ/XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFN0cmluZ0Zvcm1hdC5CQVNFNjRVUkw6IHtcclxuICAgICAgICAgICAgY29uc3QgaGFzUGx1cyA9IHZhbHVlLmluZGV4T2YoJysnKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhc1NsYXNoID0gdmFsdWUuaW5kZXhPZignLycpICE9PSAtMTtcclxuICAgICAgICAgICAgaWYgKGhhc1BsdXMgfHwgaGFzU2xhc2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGludmFsaWRDaGFyID0gaGFzUGx1cyA/ICcrJyA6ICcvJztcclxuICAgICAgICAgICAgICAgIHRocm93IGludmFsaWRGb3JtYXQoZm9ybWF0LCBcIkludmFsaWQgY2hhcmFjdGVyICdcIiArIGludmFsaWRDaGFyICsgXCInIGZvdW5kOiBpcyBpdCBiYXNlNjQgZW5jb2RlZD9cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8tL2csICcrJykucmVwbGFjZSgvXy9nLCAnLycpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZG8gbm90aGluZ1xyXG4gICAgfVxyXG4gICAgbGV0IGJ5dGVzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBieXRlcyA9IGRlY29kZUJhc2U2NCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IGludmFsaWRGb3JtYXQoZm9ybWF0LCAnSW52YWxpZCBjaGFyYWN0ZXIgZm91bmQnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZXMubGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBhcnJheVtpXSA9IGJ5dGVzLmNoYXJDb2RlQXQoaSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuY2xhc3MgRGF0YVVSTFBhcnRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGFVUkwpIHtcclxuICAgICAgICB0aGlzLmJhc2U2NCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGVudFR5cGUgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBkYXRhVVJMLm1hdGNoKC9eZGF0YTooW14sXSspPywvKTtcclxuICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBpbnZhbGlkRm9ybWF0KFN0cmluZ0Zvcm1hdC5EQVRBX1VSTCwgXCJNdXN0IGJlIGZvcm1hdHRlZCAnZGF0YTpbPG1lZGlhdHlwZT5dWztiYXNlNjRdLDxkYXRhPlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWlkZGxlID0gbWF0Y2hlc1sxXSB8fCBudWxsO1xyXG4gICAgICAgIGlmIChtaWRkbGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmJhc2U2NCA9IGVuZHNXaXRoKG1pZGRsZSwgJztiYXNlNjQnKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50VHlwZSA9IHRoaXMuYmFzZTY0XHJcbiAgICAgICAgICAgICAgICA/IG1pZGRsZS5zdWJzdHJpbmcoMCwgbWlkZGxlLmxlbmd0aCAtICc7YmFzZTY0Jy5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICA6IG1pZGRsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXN0ID0gZGF0YVVSTC5zdWJzdHJpbmcoZGF0YVVSTC5pbmRleE9mKCcsJykgKyAxKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBkYXRhVVJMQnl0ZXNfKGRhdGFVcmwpIHtcclxuICAgIGNvbnN0IHBhcnRzID0gbmV3IERhdGFVUkxQYXJ0cyhkYXRhVXJsKTtcclxuICAgIGlmIChwYXJ0cy5iYXNlNjQpIHtcclxuICAgICAgICByZXR1cm4gYmFzZTY0Qnl0ZXNfKFN0cmluZ0Zvcm1hdC5CQVNFNjQsIHBhcnRzLnJlc3QpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRFbmNvZGVkQnl0ZXNfKHBhcnRzLnJlc3QpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGRhdGFVUkxDb250ZW50VHlwZV8oZGF0YVVybCkge1xyXG4gICAgY29uc3QgcGFydHMgPSBuZXcgRGF0YVVSTFBhcnRzKGRhdGFVcmwpO1xyXG4gICAgcmV0dXJuIHBhcnRzLmNvbnRlbnRUeXBlO1xyXG59XHJcbmZ1bmN0aW9uIGVuZHNXaXRoKHMsIGVuZCkge1xyXG4gICAgY29uc3QgbG9uZ0Vub3VnaCA9IHMubGVuZ3RoID49IGVuZC5sZW5ndGg7XHJcbiAgICBpZiAoIWxvbmdFbm91Z2gpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcy5zdWJzdHJpbmcocy5sZW5ndGggLSBlbmQubGVuZ3RoKSA9PT0gZW5kO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAcGFyYW0gb3B0X2VsaWRlQ29weSAtIElmIHRydWUsIGRvZXNuJ3QgY29weSBtdXRhYmxlIGlucHV0IGRhdGFcclxuICogICAgIChlLmcuIFVpbnQ4QXJyYXlzKS4gUGFzcyB0cnVlIG9ubHkgaWYgeW91IGtub3cgdGhlIG9iamVjdHMgd2lsbCBub3QgYmVcclxuICogICAgIG1vZGlmaWVkIGFmdGVyIHRoaXMgYmxvYidzIGNvbnN0cnVjdGlvbi5cclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5jbGFzcyBGYnNCbG9iIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEsIGVsaWRlQ29weSkge1xyXG4gICAgICAgIGxldCBzaXplID0gMDtcclxuICAgICAgICBsZXQgYmxvYlR5cGUgPSAnJztcclxuICAgICAgICBpZiAoaXNOYXRpdmVCbG9iKGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YV8gPSBkYXRhO1xyXG4gICAgICAgICAgICBzaXplID0gZGF0YS5zaXplO1xyXG4gICAgICAgICAgICBibG9iVHlwZSA9IGRhdGEudHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGlkZUNvcHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YV8gPSBuZXcgVWludDhBcnJheShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YV8gPSBuZXcgVWludDhBcnJheShkYXRhLmJ5dGVMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhXy5zZXQobmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNpemUgPSB0aGlzLmRhdGFfLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgaWYgKGVsaWRlQ29weSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhXyA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFfID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhXy5zZXQoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2l6ZSA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNpemVfID0gc2l6ZTtcclxuICAgICAgICB0aGlzLnR5cGVfID0gYmxvYlR5cGU7XHJcbiAgICB9XHJcbiAgICBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemVfO1xyXG4gICAgfVxyXG4gICAgdHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlXztcclxuICAgIH1cclxuICAgIHNsaWNlKHN0YXJ0Qnl0ZSwgZW5kQnl0ZSkge1xyXG4gICAgICAgIGlmIChpc05hdGl2ZUJsb2IodGhpcy5kYXRhXykpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVhbEJsb2IgPSB0aGlzLmRhdGFfO1xyXG4gICAgICAgICAgICBjb25zdCBzbGljZWQgPSBzbGljZUJsb2IocmVhbEJsb2IsIHN0YXJ0Qnl0ZSwgZW5kQnl0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzbGljZWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmJzQmxvYihzbGljZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2xpY2UgPSBuZXcgVWludDhBcnJheSh0aGlzLmRhdGFfLmJ1ZmZlciwgc3RhcnRCeXRlLCBlbmRCeXRlIC0gc3RhcnRCeXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGYnNCbG9iKHNsaWNlLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0QmxvYiguLi5hcmdzKSB7XHJcbiAgICAgICAgaWYgKGlzTmF0aXZlQmxvYkRlZmluZWQoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBibG9iYnkgPSBhcmdzLm1hcCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRmJzQmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWwuZGF0YV87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGYnNCbG9iKGdldEJsb2IkMS5hcHBseShudWxsLCBibG9iYnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVpbnQ4QXJyYXlzID0gYXJncy5tYXAoKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YUZyb21TdHJpbmcoU3RyaW5nRm9ybWF0LlJBVywgdmFsKS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQmxvYnMgZG9uJ3QgZXhpc3QsIHNvIHRoaXMgaGFzIHRvIGJlIGEgVWludDhBcnJheS5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmRhdGFfO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IGZpbmFsTGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdWludDhBcnJheXMuZm9yRWFjaCgoYXJyYXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGZpbmFsTGVuZ3RoICs9IGFycmF5LmJ5dGVMZW5ndGg7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBuZXcgVWludDhBcnJheShmaW5hbExlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHVpbnQ4QXJyYXlzLmZvckVhY2goKGFycmF5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VkW2luZGV4KytdID0gYXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZic0Jsb2IobWVyZ2VkLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGxvYWREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFfO1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBPYmplY3QgcmVzdWx0aW5nIGZyb20gcGFyc2luZyB0aGUgZ2l2ZW4gSlNPTiwgb3IgbnVsbCBpZiB0aGVcclxuICogZ2l2ZW4gc3RyaW5nIGRvZXMgbm90IHJlcHJlc2VudCBhIEpTT04gb2JqZWN0LlxyXG4gKi9cclxuZnVuY3Rpb24ganNvbk9iamVjdE9yTnVsbChzKSB7XHJcbiAgICBsZXQgb2JqO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBvYmogPSBKU09OLnBhcnNlKHMpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmIChpc05vbkFycmF5T2JqZWN0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgQ29udGFpbnMgaGVscGVyIG1ldGhvZHMgZm9yIG1hbmlwdWxhdGluZyBwYXRocy5cclxuICovXHJcbi8qKlxyXG4gKiBAcmV0dXJuIE51bGwgaWYgdGhlIHBhdGggaXMgYWxyZWFkeSBhdCB0aGUgcm9vdC5cclxuICovXHJcbmZ1bmN0aW9uIHBhcmVudChwYXRoKSB7XHJcbiAgICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGluZGV4ID0gcGF0aC5sYXN0SW5kZXhPZignLycpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1BhdGggPSBwYXRoLnNsaWNlKDAsIGluZGV4KTtcclxuICAgIHJldHVybiBuZXdQYXRoO1xyXG59XHJcbmZ1bmN0aW9uIGNoaWxkKHBhdGgsIGNoaWxkUGF0aCkge1xyXG4gICAgY29uc3QgY2Fub25pY2FsQ2hpbGRQYXRoID0gY2hpbGRQYXRoXHJcbiAgICAgICAgLnNwbGl0KCcvJylcclxuICAgICAgICAuZmlsdGVyKGNvbXBvbmVudCA9PiBjb21wb25lbnQubGVuZ3RoID4gMClcclxuICAgICAgICAuam9pbignLycpO1xyXG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbm9uaWNhbENoaWxkUGF0aDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nICsgY2Fub25pY2FsQ2hpbGRQYXRoO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBsYXN0IGNvbXBvbmVudCBvZiBhIHBhdGguXHJcbiAqICcvZm9vL2JhcicgLT4gJ2JhcidcclxuICogJy9mb28vYmFyL2Jhei8nIC0+ICdiYXovJ1xyXG4gKiAnL2EnIC0+ICdhJ1xyXG4gKi9cclxuZnVuY3Rpb24gbGFzdENvbXBvbmVudChwYXRoKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHBhdGgubGFzdEluZGV4T2YoJy8nLCBwYXRoLmxlbmd0aCAtIDIpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGguc2xpY2UoaW5kZXggKyAxKTtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBub1hmb3JtXyhtZXRhZGF0YSwgdmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5jbGFzcyBNYXBwaW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKHNlcnZlciwgbG9jYWwsIHdyaXRhYmxlLCB4Zm9ybSkge1xyXG4gICAgICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xyXG4gICAgICAgIHRoaXMubG9jYWwgPSBsb2NhbCB8fCBzZXJ2ZXI7XHJcbiAgICAgICAgdGhpcy53cml0YWJsZSA9ICEhd3JpdGFibGU7XHJcbiAgICAgICAgdGhpcy54Zm9ybSA9IHhmb3JtIHx8IG5vWGZvcm1fO1xyXG4gICAgfVxyXG59XHJcbmxldCBtYXBwaW5nc18gPSBudWxsO1xyXG5mdW5jdGlvbiB4Zm9ybVBhdGgoZnVsbFBhdGgpIHtcclxuICAgIGlmICghaXNTdHJpbmcoZnVsbFBhdGgpIHx8IGZ1bGxQYXRoLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICByZXR1cm4gZnVsbFBhdGg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbGFzdENvbXBvbmVudChmdWxsUGF0aCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0TWFwcGluZ3MoKSB7XHJcbiAgICBpZiAobWFwcGluZ3NfKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hcHBpbmdzXztcclxuICAgIH1cclxuICAgIGNvbnN0IG1hcHBpbmdzID0gW107XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdidWNrZXQnKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCdnZW5lcmF0aW9uJykpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnbWV0YWdlbmVyYXRpb24nKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCduYW1lJywgJ2Z1bGxQYXRoJywgdHJ1ZSkpO1xyXG4gICAgZnVuY3Rpb24gbWFwcGluZ3NYZm9ybVBhdGgoX21ldGFkYXRhLCBmdWxsUGF0aCkge1xyXG4gICAgICAgIHJldHVybiB4Zm9ybVBhdGgoZnVsbFBhdGgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmFtZU1hcHBpbmcgPSBuZXcgTWFwcGluZygnbmFtZScpO1xyXG4gICAgbmFtZU1hcHBpbmcueGZvcm0gPSBtYXBwaW5nc1hmb3JtUGF0aDtcclxuICAgIG1hcHBpbmdzLnB1c2gobmFtZU1hcHBpbmcpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb2VyY2VzIHRoZSBzZWNvbmQgcGFyYW0gdG8gYSBudW1iZXIsIGlmIGl0IGlzIGRlZmluZWQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHhmb3JtU2l6ZShfbWV0YWRhdGEsIHNpemUpIHtcclxuICAgICAgICBpZiAoc2l6ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoc2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc2l6ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBzaXplTWFwcGluZyA9IG5ldyBNYXBwaW5nKCdzaXplJyk7XHJcbiAgICBzaXplTWFwcGluZy54Zm9ybSA9IHhmb3JtU2l6ZTtcclxuICAgIG1hcHBpbmdzLnB1c2goc2l6ZU1hcHBpbmcpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygndGltZUNyZWF0ZWQnKSk7XHJcbiAgICBtYXBwaW5ncy5wdXNoKG5ldyBNYXBwaW5nKCd1cGRhdGVkJykpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnbWQ1SGFzaCcsIG51bGwsIHRydWUpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2NhY2hlQ29udHJvbCcsIG51bGwsIHRydWUpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2NvbnRlbnREaXNwb3NpdGlvbicsIG51bGwsIHRydWUpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2NvbnRlbnRFbmNvZGluZycsIG51bGwsIHRydWUpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2NvbnRlbnRMYW5ndWFnZScsIG51bGwsIHRydWUpKTtcclxuICAgIG1hcHBpbmdzLnB1c2gobmV3IE1hcHBpbmcoJ2NvbnRlbnRUeXBlJywgbnVsbCwgdHJ1ZSkpO1xyXG4gICAgbWFwcGluZ3MucHVzaChuZXcgTWFwcGluZygnbWV0YWRhdGEnLCAnY3VzdG9tTWV0YWRhdGEnLCB0cnVlKSk7XHJcbiAgICBtYXBwaW5nc18gPSBtYXBwaW5ncztcclxuICAgIHJldHVybiBtYXBwaW5nc187XHJcbn1cclxuZnVuY3Rpb24gYWRkUmVmKG1ldGFkYXRhLCBzZXJ2aWNlKSB7XHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJlZigpIHtcclxuICAgICAgICBjb25zdCBidWNrZXQgPSBtZXRhZGF0YVsnYnVja2V0J107XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IG1ldGFkYXRhWydmdWxsUGF0aCddO1xyXG4gICAgICAgIGNvbnN0IGxvYyA9IG5ldyBMb2NhdGlvbihidWNrZXQsIHBhdGgpO1xyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlLl9tYWtlU3RvcmFnZVJlZmVyZW5jZShsb2MpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1ldGFkYXRhLCAncmVmJywgeyBnZXQ6IGdlbmVyYXRlUmVmIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGZyb21SZXNvdXJjZShzZXJ2aWNlLCByZXNvdXJjZSwgbWFwcGluZ3MpIHtcclxuICAgIGNvbnN0IG1ldGFkYXRhID0ge307XHJcbiAgICBtZXRhZGF0YVsndHlwZSddID0gJ2ZpbGUnO1xyXG4gICAgY29uc3QgbGVuID0gbWFwcGluZ3MubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG1hcHBpbmcgPSBtYXBwaW5nc1tpXTtcclxuICAgICAgICBtZXRhZGF0YVttYXBwaW5nLmxvY2FsXSA9IG1hcHBpbmcueGZvcm0obWV0YWRhdGEsIHJlc291cmNlW21hcHBpbmcuc2VydmVyXSk7XHJcbiAgICB9XHJcbiAgICBhZGRSZWYobWV0YWRhdGEsIHNlcnZpY2UpO1xyXG4gICAgcmV0dXJuIG1ldGFkYXRhO1xyXG59XHJcbmZ1bmN0aW9uIGZyb21SZXNvdXJjZVN0cmluZyhzZXJ2aWNlLCByZXNvdXJjZVN0cmluZywgbWFwcGluZ3MpIHtcclxuICAgIGNvbnN0IG9iaiA9IGpzb25PYmplY3RPck51bGwocmVzb3VyY2VTdHJpbmcpO1xyXG4gICAgaWYgKG9iaiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzb3VyY2UgPSBvYmo7XHJcbiAgICByZXR1cm4gZnJvbVJlc291cmNlKHNlcnZpY2UsIHJlc291cmNlLCBtYXBwaW5ncyk7XHJcbn1cclxuZnVuY3Rpb24gZG93bmxvYWRVcmxGcm9tUmVzb3VyY2VTdHJpbmcobWV0YWRhdGEsIHJlc291cmNlU3RyaW5nLCBob3N0LCBwcm90b2NvbCkge1xyXG4gICAgY29uc3Qgb2JqID0ganNvbk9iamVjdE9yTnVsbChyZXNvdXJjZVN0cmluZyk7XHJcbiAgICBpZiAob2JqID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzU3RyaW5nKG9ialsnZG93bmxvYWRUb2tlbnMnXSkpIHtcclxuICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgb2JqZWN0cyBhcmUgdXBsb2FkZWQgdGhyb3VnaCBHQ1MgYW5kIHJldHJpZXZlZFxyXG4gICAgICAgIC8vIHRocm91Z2ggbGlzdCwgc28gd2UgZG9uJ3Qgd2FudCB0byB0aHJvdyBhbiBFcnJvci5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHRva2VucyA9IG9ialsnZG93bmxvYWRUb2tlbnMnXTtcclxuICAgIGlmICh0b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XHJcbiAgICBjb25zdCB0b2tlbnNMaXN0ID0gdG9rZW5zLnNwbGl0KCcsJyk7XHJcbiAgICBjb25zdCB1cmxzID0gdG9rZW5zTGlzdC5tYXAoKHRva2VuKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnVja2V0ID0gbWV0YWRhdGFbJ2J1Y2tldCddO1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSBtZXRhZGF0YVsnZnVsbFBhdGgnXTtcclxuICAgICAgICBjb25zdCB1cmxQYXJ0ID0gJy9iLycgKyBlbmNvZGUoYnVja2V0KSArICcvby8nICsgZW5jb2RlKHBhdGgpO1xyXG4gICAgICAgIGNvbnN0IGJhc2UgPSBtYWtlVXJsKHVybFBhcnQsIGhvc3QsIHByb3RvY29sKTtcclxuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IG1ha2VRdWVyeVN0cmluZyh7XHJcbiAgICAgICAgICAgIGFsdDogJ21lZGlhJyxcclxuICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYmFzZSArIHF1ZXJ5U3RyaW5nO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdXJsc1swXTtcclxufVxyXG5mdW5jdGlvbiB0b1Jlc291cmNlU3RyaW5nKG1ldGFkYXRhLCBtYXBwaW5ncykge1xyXG4gICAgY29uc3QgcmVzb3VyY2UgPSB7fTtcclxuICAgIGNvbnN0IGxlbiA9IG1hcHBpbmdzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBjb25zdCBtYXBwaW5nID0gbWFwcGluZ3NbaV07XHJcbiAgICAgICAgaWYgKG1hcHBpbmcud3JpdGFibGUpIHtcclxuICAgICAgICAgICAgcmVzb3VyY2VbbWFwcGluZy5zZXJ2ZXJdID0gbWV0YWRhdGFbbWFwcGluZy5sb2NhbF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc291cmNlKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBQUkVGSVhFU19LRVkgPSAncHJlZml4ZXMnO1xyXG5jb25zdCBJVEVNU19LRVkgPSAnaXRlbXMnO1xyXG5mdW5jdGlvbiBmcm9tQmFja2VuZFJlc3BvbnNlKHNlcnZpY2UsIGJ1Y2tldCwgcmVzb3VyY2UpIHtcclxuICAgIGNvbnN0IGxpc3RSZXN1bHQgPSB7XHJcbiAgICAgICAgcHJlZml4ZXM6IFtdLFxyXG4gICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICBuZXh0UGFnZVRva2VuOiByZXNvdXJjZVsnbmV4dFBhZ2VUb2tlbiddXHJcbiAgICB9O1xyXG4gICAgaWYgKHJlc291cmNlW1BSRUZJWEVTX0tFWV0pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHBhdGggb2YgcmVzb3VyY2VbUFJFRklYRVNfS0VZXSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXRoV2l0aG91dFRyYWlsaW5nU2xhc2ggPSBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNlcnZpY2UuX21ha2VTdG9yYWdlUmVmZXJlbmNlKG5ldyBMb2NhdGlvbihidWNrZXQsIHBhdGhXaXRob3V0VHJhaWxpbmdTbGFzaCkpO1xyXG4gICAgICAgICAgICBsaXN0UmVzdWx0LnByZWZpeGVzLnB1c2gocmVmZXJlbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocmVzb3VyY2VbSVRFTVNfS0VZXSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiByZXNvdXJjZVtJVEVNU19LRVldKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNlcnZpY2UuX21ha2VTdG9yYWdlUmVmZXJlbmNlKG5ldyBMb2NhdGlvbihidWNrZXQsIGl0ZW1bJ25hbWUnXSkpO1xyXG4gICAgICAgICAgICBsaXN0UmVzdWx0Lml0ZW1zLnB1c2gocmVmZXJlbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGlzdFJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBmcm9tUmVzcG9uc2VTdHJpbmcoc2VydmljZSwgYnVja2V0LCByZXNvdXJjZVN0cmluZykge1xyXG4gICAgY29uc3Qgb2JqID0ganNvbk9iamVjdE9yTnVsbChyZXNvdXJjZVN0cmluZyk7XHJcbiAgICBpZiAob2JqID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXNvdXJjZSA9IG9iajtcclxuICAgIHJldHVybiBmcm9tQmFja2VuZFJlc3BvbnNlKHNlcnZpY2UsIGJ1Y2tldCwgcmVzb3VyY2UpO1xyXG59XG5cbi8qKlxyXG4gKiBDb250YWlucyBhIGZ1bGx5IHNwZWNpZmllZCByZXF1ZXN0LlxyXG4gKlxyXG4gKiBAcGFyYW0gSSAtIHRoZSB0eXBlIG9mIHRoZSBiYWNrZW5kJ3MgbmV0d29yayByZXNwb25zZS5cclxuICogQHBhcmFtIE8gLSB0aGUgb3V0cHV0IHJlc3BvbnNlIHR5cGUgdXNlZCBieSB0aGUgcmVzdCBvZiB0aGUgU0RLLlxyXG4gKi9cclxuY2xhc3MgUmVxdWVzdEluZm8ge1xyXG4gICAgY29uc3RydWN0b3IodXJsLCBtZXRob2QsIFxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSB3aXRoIHdoaWNoIHRvIHJlc29sdmUgdGhlIHJlcXVlc3QncyBwcm9taXNlLiBPbmx5IGNhbGxlZFxyXG4gICAgICogaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bC4gVGhyb3cgZnJvbSB0aGlzIGZ1bmN0aW9uIHRvIHJlamVjdCB0aGVcclxuICAgICAqIHJldHVybmVkIFJlcXVlc3QncyBwcm9taXNlIHdpdGggdGhlIHRocm93biBlcnJvci5cclxuICAgICAqIE5vdGU6IFRoZSBYaHJJbyBwYXNzZWQgdG8gdGhpcyBmdW5jdGlvbiBtYXkgYmUgcmV1c2VkIGFmdGVyIHRoaXMgY2FsbGJhY2tcclxuICAgICAqIHJldHVybnMuIERvIG5vdCBrZWVwIGEgcmVmZXJlbmNlIHRvIGl0IGluIGFueSB3YXkuXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZXIsIHRpbWVvdXQpIHtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICB0aGlzLm1ldGhvZCA9IG1ldGhvZDtcclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy51cmxQYXJhbXMgPSB7fTtcclxuICAgICAgICB0aGlzLmhlYWRlcnMgPSB7fTtcclxuICAgICAgICB0aGlzLmJvZHkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYWxsZWQgd2l0aCB0aGUgY3VycmVudCBudW1iZXIgb2YgYnl0ZXMgdXBsb2FkZWQgYW5kIHRvdGFsIHNpemUgKC0xIGlmIG5vdFxyXG4gICAgICAgICAqIGNvbXB1dGFibGUpIG9mIHRoZSByZXF1ZXN0IGJvZHkgKGkuZS4gdXNlZCB0byByZXBvcnQgdXBsb2FkIHByb2dyZXNzKS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnByb2dyZXNzQ2FsbGJhY2sgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc3VjY2Vzc0NvZGVzID0gWzIwMF07XHJcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsUmV0cnlDb2RlcyA9IFtdO1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUaHJvd3MgdGhlIFVOS05PV04gU3RvcmFnZUVycm9yIGlmIGNuZG4gaXMgZmFsc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVyQ2hlY2soY25kbikge1xyXG4gICAgaWYgKCFjbmRuKSB7XHJcbiAgICAgICAgdGhyb3cgdW5rbm93bigpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG1ldGFkYXRhSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncykge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlcih4aHIsIHRleHQpIHtcclxuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGZyb21SZXNvdXJjZVN0cmluZyhzZXJ2aWNlLCB0ZXh0LCBtYXBwaW5ncyk7XHJcbiAgICAgICAgaGFuZGxlckNoZWNrKG1ldGFkYXRhICE9PSBudWxsKTtcclxuICAgICAgICByZXR1cm4gbWV0YWRhdGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFuZGxlcjtcclxufVxyXG5mdW5jdGlvbiBsaXN0SGFuZGxlcihzZXJ2aWNlLCBidWNrZXQpIHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoeGhyLCB0ZXh0KSB7XHJcbiAgICAgICAgY29uc3QgbGlzdFJlc3VsdCA9IGZyb21SZXNwb25zZVN0cmluZyhzZXJ2aWNlLCBidWNrZXQsIHRleHQpO1xyXG4gICAgICAgIGhhbmRsZXJDaGVjayhsaXN0UmVzdWx0ICE9PSBudWxsKTtcclxuICAgICAgICByZXR1cm4gbGlzdFJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBoYW5kbGVyO1xyXG59XHJcbmZ1bmN0aW9uIGRvd25sb2FkVXJsSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncykge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlcih4aHIsIHRleHQpIHtcclxuICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGZyb21SZXNvdXJjZVN0cmluZyhzZXJ2aWNlLCB0ZXh0LCBtYXBwaW5ncyk7XHJcbiAgICAgICAgaGFuZGxlckNoZWNrKG1ldGFkYXRhICE9PSBudWxsKTtcclxuICAgICAgICByZXR1cm4gZG93bmxvYWRVcmxGcm9tUmVzb3VyY2VTdHJpbmcobWV0YWRhdGEsIHRleHQsIHNlcnZpY2UuaG9zdCwgc2VydmljZS5fcHJvdG9jb2wpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhhbmRsZXI7XHJcbn1cclxuZnVuY3Rpb24gc2hhcmVkRXJyb3JIYW5kbGVyKGxvY2F0aW9uKSB7XHJcbiAgICBmdW5jdGlvbiBlcnJvckhhbmRsZXIoeGhyLCBlcnIpIHtcclxuICAgICAgICBsZXQgbmV3RXJyO1xyXG4gICAgICAgIGlmICh4aHIuZ2V0U3RhdHVzKCkgPT09IDQwMSkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIC8vIFRoaXMgZXhhY3QgbWVzc2FnZSBzdHJpbmcgaXMgdGhlIG9ubHkgY29uc2lzdGVudCBwYXJ0IG9mIHRoZVxyXG4gICAgICAgICAgICAvLyBzZXJ2ZXIncyBlcnJvciByZXNwb25zZSB0aGF0IGlkZW50aWZpZXMgaXQgYXMgYW4gQXBwIENoZWNrIGVycm9yLlxyXG4gICAgICAgICAgICB4aHIuZ2V0RXJyb3JUZXh0KCkuaW5jbHVkZXMoJ0ZpcmViYXNlIEFwcCBDaGVjayB0b2tlbiBpcyBpbnZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIG5ld0VyciA9IHVuYXV0aG9yaXplZEFwcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmV3RXJyID0gdW5hdXRoZW50aWNhdGVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIuZ2V0U3RhdHVzKCkgPT09IDQwMikge1xyXG4gICAgICAgICAgICAgICAgbmV3RXJyID0gcXVvdGFFeGNlZWRlZChsb2NhdGlvbi5idWNrZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5nZXRTdGF0dXMoKSA9PT0gNDAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RXJyID0gdW5hdXRob3JpemVkKGxvY2F0aW9uLnBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RXJyID0gZXJyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0Vyci5zZXJ2ZXJSZXNwb25zZSA9IGVyci5zZXJ2ZXJSZXNwb25zZTtcclxuICAgICAgICByZXR1cm4gbmV3RXJyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9ySGFuZGxlcjtcclxufVxyXG5mdW5jdGlvbiBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pIHtcclxuICAgIGNvbnN0IHNoYXJlZCA9IHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICBmdW5jdGlvbiBlcnJvckhhbmRsZXIoeGhyLCBlcnIpIHtcclxuICAgICAgICBsZXQgbmV3RXJyID0gc2hhcmVkKHhociwgZXJyKTtcclxuICAgICAgICBpZiAoeGhyLmdldFN0YXR1cygpID09PSA0MDQpIHtcclxuICAgICAgICAgICAgbmV3RXJyID0gb2JqZWN0Tm90Rm91bmQobG9jYXRpb24ucGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0Vyci5zZXJ2ZXJSZXNwb25zZSA9IGVyci5zZXJ2ZXJSZXNwb25zZTtcclxuICAgICAgICByZXR1cm4gbmV3RXJyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9ySGFuZGxlcjtcclxufVxyXG5mdW5jdGlvbiBnZXRNZXRhZGF0YSQyKHNlcnZpY2UsIGxvY2F0aW9uLCBtYXBwaW5ncykge1xyXG4gICAgY29uc3QgdXJsUGFydCA9IGxvY2F0aW9uLmZ1bGxTZXJ2ZXJVcmwoKTtcclxuICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodXJsUGFydCwgc2VydmljZS5ob3N0LCBzZXJ2aWNlLl9wcm90b2NvbCk7XHJcbiAgICBjb25zdCBtZXRob2QgPSAnR0VUJztcclxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXJ2aWNlLm1heE9wZXJhdGlvblJldHJ5VGltZTtcclxuICAgIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBtZXRhZGF0YUhhbmRsZXIoc2VydmljZSwgbWFwcGluZ3MpLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuZnVuY3Rpb24gbGlzdCQyKHNlcnZpY2UsIGxvY2F0aW9uLCBkZWxpbWl0ZXIsIHBhZ2VUb2tlbiwgbWF4UmVzdWx0cykge1xyXG4gICAgY29uc3QgdXJsUGFyYW1zID0ge307XHJcbiAgICBpZiAobG9jYXRpb24uaXNSb290KSB7XHJcbiAgICAgICAgdXJsUGFyYW1zWydwcmVmaXgnXSA9ICcnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdXJsUGFyYW1zWydwcmVmaXgnXSA9IGxvY2F0aW9uLnBhdGggKyAnLyc7XHJcbiAgICB9XHJcbiAgICBpZiAoZGVsaW1pdGVyICYmIGRlbGltaXRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdXJsUGFyYW1zWydkZWxpbWl0ZXInXSA9IGRlbGltaXRlcjtcclxuICAgIH1cclxuICAgIGlmIChwYWdlVG9rZW4pIHtcclxuICAgICAgICB1cmxQYXJhbXNbJ3BhZ2VUb2tlbiddID0gcGFnZVRva2VuO1xyXG4gICAgfVxyXG4gICAgaWYgKG1heFJlc3VsdHMpIHtcclxuICAgICAgICB1cmxQYXJhbXNbJ21heFJlc3VsdHMnXSA9IG1heFJlc3VsdHM7XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmxQYXJ0ID0gbG9jYXRpb24uYnVja2V0T25seVNlcnZlclVybCgpO1xyXG4gICAgY29uc3QgdXJsID0gbWFrZVVybCh1cmxQYXJ0LCBzZXJ2aWNlLmhvc3QsIHNlcnZpY2UuX3Byb3RvY29sKTtcclxuICAgIGNvbnN0IG1ldGhvZCA9ICdHRVQnO1xyXG4gICAgY29uc3QgdGltZW91dCA9IHNlcnZpY2UubWF4T3BlcmF0aW9uUmV0cnlUaW1lO1xyXG4gICAgY29uc3QgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIGxpc3RIYW5kbGVyKHNlcnZpY2UsIGxvY2F0aW9uLmJ1Y2tldCksIHRpbWVvdXQpO1xyXG4gICAgcmVxdWVzdEluZm8udXJsUGFyYW1zID0gdXJsUGFyYW1zO1xyXG4gICAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gc2hhcmVkRXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcclxuICAgIHJldHVybiByZXF1ZXN0SW5mbztcclxufVxyXG5mdW5jdGlvbiBnZXRCeXRlcyQxKHNlcnZpY2UsIGxvY2F0aW9uLCBtYXhEb3dubG9hZFNpemVCeXRlcykge1xyXG4gICAgY29uc3QgdXJsUGFydCA9IGxvY2F0aW9uLmZ1bGxTZXJ2ZXJVcmwoKTtcclxuICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodXJsUGFydCwgc2VydmljZS5ob3N0LCBzZXJ2aWNlLl9wcm90b2NvbCkgKyAnP2FsdD1tZWRpYSc7XHJcbiAgICBjb25zdCBtZXRob2QgPSAnR0VUJztcclxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXJ2aWNlLm1heE9wZXJhdGlvblJldHJ5VGltZTtcclxuICAgIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCAoXywgZGF0YSkgPT4gZGF0YSwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgaWYgKG1heERvd25sb2FkU2l6ZUJ5dGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXF1ZXN0SW5mby5oZWFkZXJzWydSYW5nZSddID0gYGJ5dGVzPTAtJHttYXhEb3dubG9hZFNpemVCeXRlc31gO1xyXG4gICAgICAgIHJlcXVlc3RJbmZvLnN1Y2Nlc3NDb2RlcyA9IFsyMDAgLyogT0sgKi8sIDIwNiAvKiBQYXJ0aWFsIENvbnRlbnQgKi9dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XHJcbmZ1bmN0aW9uIGdldERvd25sb2FkVXJsKHNlcnZpY2UsIGxvY2F0aW9uLCBtYXBwaW5ncykge1xyXG4gICAgY29uc3QgdXJsUGFydCA9IGxvY2F0aW9uLmZ1bGxTZXJ2ZXJVcmwoKTtcclxuICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodXJsUGFydCwgc2VydmljZS5ob3N0LCBzZXJ2aWNlLl9wcm90b2NvbCk7XHJcbiAgICBjb25zdCBtZXRob2QgPSAnR0VUJztcclxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXJ2aWNlLm1heE9wZXJhdGlvblJldHJ5VGltZTtcclxuICAgIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBkb3dubG9hZFVybEhhbmRsZXIoc2VydmljZSwgbWFwcGluZ3MpLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlTWV0YWRhdGEkMihzZXJ2aWNlLCBsb2NhdGlvbiwgbWV0YWRhdGEsIG1hcHBpbmdzKSB7XHJcbiAgICBjb25zdCB1cmxQYXJ0ID0gbG9jYXRpb24uZnVsbFNlcnZlclVybCgpO1xyXG4gICAgY29uc3QgdXJsID0gbWFrZVVybCh1cmxQYXJ0LCBzZXJ2aWNlLmhvc3QsIHNlcnZpY2UuX3Byb3RvY29sKTtcclxuICAgIGNvbnN0IG1ldGhvZCA9ICdQQVRDSCc7XHJcbiAgICBjb25zdCBib2R5ID0gdG9SZXNvdXJjZVN0cmluZyhtZXRhZGF0YSwgbWFwcGluZ3MpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyB9O1xyXG4gICAgY29uc3QgdGltZW91dCA9IHNlcnZpY2UubWF4T3BlcmF0aW9uUmV0cnlUaW1lO1xyXG4gICAgY29uc3QgcmVxdWVzdEluZm8gPSBuZXcgUmVxdWVzdEluZm8odXJsLCBtZXRob2QsIG1ldGFkYXRhSGFuZGxlcihzZXJ2aWNlLCBtYXBwaW5ncyksIHRpbWVvdXQpO1xyXG4gICAgcmVxdWVzdEluZm8uaGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgICByZXF1ZXN0SW5mby5ib2R5ID0gYm9keTtcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IG9iamVjdEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlT2JqZWN0JDIoc2VydmljZSwgbG9jYXRpb24pIHtcclxuICAgIGNvbnN0IHVybFBhcnQgPSBsb2NhdGlvbi5mdWxsU2VydmVyVXJsKCk7XHJcbiAgICBjb25zdCB1cmwgPSBtYWtlVXJsKHVybFBhcnQsIHNlcnZpY2UuaG9zdCwgc2VydmljZS5fcHJvdG9jb2wpO1xyXG4gICAgY29uc3QgbWV0aG9kID0gJ0RFTEVURSc7XHJcbiAgICBjb25zdCB0aW1lb3V0ID0gc2VydmljZS5tYXhPcGVyYXRpb25SZXRyeVRpbWU7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKF94aHIsIF90ZXh0KSB7IH1cclxuICAgIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBoYW5kbGVyLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLnN1Y2Nlc3NDb2RlcyA9IFsyMDAsIDIwNF07XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBvYmplY3RFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XHJcbmZ1bmN0aW9uIGRldGVybWluZUNvbnRlbnRUeXBlXyhtZXRhZGF0YSwgYmxvYikge1xyXG4gICAgcmV0dXJuICgobWV0YWRhdGEgJiYgbWV0YWRhdGFbJ2NvbnRlbnRUeXBlJ10pIHx8XHJcbiAgICAgICAgKGJsb2IgJiYgYmxvYi50eXBlKCkpIHx8XHJcbiAgICAgICAgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpO1xyXG59XHJcbmZ1bmN0aW9uIG1ldGFkYXRhRm9yVXBsb2FkXyhsb2NhdGlvbiwgYmxvYiwgbWV0YWRhdGEpIHtcclxuICAgIGNvbnN0IG1ldGFkYXRhQ2xvbmUgPSBPYmplY3QuYXNzaWduKHt9LCBtZXRhZGF0YSk7XHJcbiAgICBtZXRhZGF0YUNsb25lWydmdWxsUGF0aCddID0gbG9jYXRpb24ucGF0aDtcclxuICAgIG1ldGFkYXRhQ2xvbmVbJ3NpemUnXSA9IGJsb2Iuc2l6ZSgpO1xyXG4gICAgaWYgKCFtZXRhZGF0YUNsb25lWydjb250ZW50VHlwZSddKSB7XHJcbiAgICAgICAgbWV0YWRhdGFDbG9uZVsnY29udGVudFR5cGUnXSA9IGRldGVybWluZUNvbnRlbnRUeXBlXyhudWxsLCBibG9iKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtZXRhZGF0YUNsb25lO1xyXG59XHJcbi8qKlxyXG4gKiBQcmVwYXJlIFJlcXVlc3RJbmZvIGZvciB1cGxvYWRzIGFzIENvbnRlbnQtVHlwZTogbXVsdGlwYXJ0LlxyXG4gKi9cclxuZnVuY3Rpb24gbXVsdGlwYXJ0VXBsb2FkKHNlcnZpY2UsIGxvY2F0aW9uLCBtYXBwaW5ncywgYmxvYiwgbWV0YWRhdGEpIHtcclxuICAgIGNvbnN0IHVybFBhcnQgPSBsb2NhdGlvbi5idWNrZXRPbmx5U2VydmVyVXJsKCk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgICdYLUdvb2ctVXBsb2FkLVByb3RvY29sJzogJ211bHRpcGFydCdcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBnZW5Cb3VuZGFyeSgpIHtcclxuICAgICAgICBsZXQgc3RyID0gJyc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICAgICAgc3RyID0gc3RyICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNsaWNlKDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYm91bmRhcnkgPSBnZW5Cb3VuZGFyeSgpO1xyXG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnbXVsdGlwYXJ0L3JlbGF0ZWQ7IGJvdW5kYXJ5PScgKyBib3VuZGFyeTtcclxuICAgIGNvbnN0IG1ldGFkYXRhXyA9IG1ldGFkYXRhRm9yVXBsb2FkXyhsb2NhdGlvbiwgYmxvYiwgbWV0YWRhdGEpO1xyXG4gICAgY29uc3QgbWV0YWRhdGFTdHJpbmcgPSB0b1Jlc291cmNlU3RyaW5nKG1ldGFkYXRhXywgbWFwcGluZ3MpO1xyXG4gICAgY29uc3QgcHJlQmxvYlBhcnQgPSAnLS0nICtcclxuICAgICAgICBib3VuZGFyeSArXHJcbiAgICAgICAgJ1xcclxcbicgK1xyXG4gICAgICAgICdDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcXHJcXG5cXHJcXG4nICtcclxuICAgICAgICBtZXRhZGF0YVN0cmluZyArXHJcbiAgICAgICAgJ1xcclxcbi0tJyArXHJcbiAgICAgICAgYm91bmRhcnkgK1xyXG4gICAgICAgICdcXHJcXG4nICtcclxuICAgICAgICAnQ29udGVudC1UeXBlOiAnICtcclxuICAgICAgICBtZXRhZGF0YV9bJ2NvbnRlbnRUeXBlJ10gK1xyXG4gICAgICAgICdcXHJcXG5cXHJcXG4nO1xyXG4gICAgY29uc3QgcG9zdEJsb2JQYXJ0ID0gJ1xcclxcbi0tJyArIGJvdW5kYXJ5ICsgJy0tJztcclxuICAgIGNvbnN0IGJvZHkgPSBGYnNCbG9iLmdldEJsb2IocHJlQmxvYlBhcnQsIGJsb2IsIHBvc3RCbG9iUGFydCk7XHJcbiAgICBpZiAoYm9keSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IGNhbm5vdFNsaWNlQmxvYigpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXJsUGFyYW1zID0geyBuYW1lOiBtZXRhZGF0YV9bJ2Z1bGxQYXRoJ10gfTtcclxuICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodXJsUGFydCwgc2VydmljZS5ob3N0LCBzZXJ2aWNlLl9wcm90b2NvbCk7XHJcbiAgICBjb25zdCBtZXRob2QgPSAnUE9TVCc7XHJcbiAgICBjb25zdCB0aW1lb3V0ID0gc2VydmljZS5tYXhVcGxvYWRSZXRyeVRpbWU7XHJcbiAgICBjb25zdCByZXF1ZXN0SW5mbyA9IG5ldyBSZXF1ZXN0SW5mbyh1cmwsIG1ldGhvZCwgbWV0YWRhdGFIYW5kbGVyKHNlcnZpY2UsIG1hcHBpbmdzKSwgdGltZW91dCk7XHJcbiAgICByZXF1ZXN0SW5mby51cmxQYXJhbXMgPSB1cmxQYXJhbXM7XHJcbiAgICByZXF1ZXN0SW5mby5oZWFkZXJzID0gaGVhZGVycztcclxuICAgIHJlcXVlc3RJbmZvLmJvZHkgPSBib2R5LnVwbG9hZERhdGEoKTtcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cclxuLyoqXHJcbiAqIEBwYXJhbSBjdXJyZW50IFRoZSBudW1iZXIgb2YgYnl0ZXMgdGhhdCBoYXZlIGJlZW4gdXBsb2FkZWQgc28gZmFyLlxyXG4gKiBAcGFyYW0gdG90YWwgVGhlIHRvdGFsIG51bWJlciBvZiBieXRlcyBpbiB0aGUgdXBsb2FkLlxyXG4gKiBAcGFyYW0gb3B0X2ZpbmFsaXplZCBUcnVlIGlmIHRoZSBzZXJ2ZXIgaGFzIGZpbmlzaGVkIHRoZSB1cGxvYWQuXHJcbiAqIEBwYXJhbSBvcHRfbWV0YWRhdGEgVGhlIHVwbG9hZCBtZXRhZGF0YSwgc2hvdWxkXHJcbiAqICAgICBvbmx5IGJlIHBhc3NlZCBpZiBvcHRfZmluYWxpemVkIGlzIHRydWUuXHJcbiAqL1xyXG5jbGFzcyBSZXN1bWFibGVVcGxvYWRTdGF0dXMge1xyXG4gICAgY29uc3RydWN0b3IoY3VycmVudCwgdG90YWwsIGZpbmFsaXplZCwgbWV0YWRhdGEpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xyXG4gICAgICAgIHRoaXMudG90YWwgPSB0b3RhbDtcclxuICAgICAgICB0aGlzLmZpbmFsaXplZCA9ICEhZmluYWxpemVkO1xyXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YSB8fCBudWxsO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNoZWNrUmVzdW1lSGVhZGVyXyh4aHIsIGFsbG93ZWQpIHtcclxuICAgIGxldCBzdGF0dXMgPSBudWxsO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdGF0dXMgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtR29vZy1VcGxvYWQtU3RhdHVzJyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGhhbmRsZXJDaGVjayhmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhbGxvd2VkU3RhdHVzID0gYWxsb3dlZCB8fCBbJ2FjdGl2ZSddO1xyXG4gICAgaGFuZGxlckNoZWNrKCEhc3RhdHVzICYmIGFsbG93ZWRTdGF0dXMuaW5kZXhPZihzdGF0dXMpICE9PSAtMSk7XHJcbiAgICByZXR1cm4gc3RhdHVzO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVJlc3VtYWJsZVVwbG9hZChzZXJ2aWNlLCBsb2NhdGlvbiwgbWFwcGluZ3MsIGJsb2IsIG1ldGFkYXRhKSB7XHJcbiAgICBjb25zdCB1cmxQYXJ0ID0gbG9jYXRpb24uYnVja2V0T25seVNlcnZlclVybCgpO1xyXG4gICAgY29uc3QgbWV0YWRhdGFGb3JVcGxvYWQgPSBtZXRhZGF0YUZvclVwbG9hZF8obG9jYXRpb24sIGJsb2IsIG1ldGFkYXRhKTtcclxuICAgIGNvbnN0IHVybFBhcmFtcyA9IHsgbmFtZTogbWV0YWRhdGFGb3JVcGxvYWRbJ2Z1bGxQYXRoJ10gfTtcclxuICAgIGNvbnN0IHVybCA9IG1ha2VVcmwodXJsUGFydCwgc2VydmljZS5ob3N0LCBzZXJ2aWNlLl9wcm90b2NvbCk7XHJcbiAgICBjb25zdCBtZXRob2QgPSAnUE9TVCc7XHJcbiAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgICdYLUdvb2ctVXBsb2FkLVByb3RvY29sJzogJ3Jlc3VtYWJsZScsXHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtQ29tbWFuZCc6ICdzdGFydCcsXHJcbiAgICAgICAgJ1gtR29vZy1VcGxvYWQtSGVhZGVyLUNvbnRlbnQtTGVuZ3RoJzogYCR7YmxvYi5zaXplKCl9YCxcclxuICAgICAgICAnWC1Hb29nLVVwbG9hZC1IZWFkZXItQ29udGVudC1UeXBlJzogbWV0YWRhdGFGb3JVcGxvYWRbJ2NvbnRlbnRUeXBlJ10sXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGJvZHkgPSB0b1Jlc291cmNlU3RyaW5nKG1ldGFkYXRhRm9yVXBsb2FkLCBtYXBwaW5ncyk7XHJcbiAgICBjb25zdCB0aW1lb3V0ID0gc2VydmljZS5tYXhVcGxvYWRSZXRyeVRpbWU7XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKHhocikge1xyXG4gICAgICAgIGNoZWNrUmVzdW1lSGVhZGVyXyh4aHIpO1xyXG4gICAgICAgIGxldCB1cmw7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdXJsID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdYLUdvb2ctVXBsb2FkLVVSTCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyQ2hlY2soZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVyQ2hlY2soaXNTdHJpbmcodXJsKSk7XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBoYW5kbGVyLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLnVybFBhcmFtcyA9IHVybFBhcmFtcztcclxuICAgIHJlcXVlc3RJbmZvLmhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgcmVxdWVzdEluZm8uYm9keSA9IGJvZHk7XHJcbiAgICByZXF1ZXN0SW5mby5lcnJvckhhbmRsZXIgPSBzaGFyZWRFcnJvckhhbmRsZXIobG9jYXRpb24pO1xyXG4gICAgcmV0dXJuIHJlcXVlc3RJbmZvO1xyXG59XHJcbi8qKlxyXG4gKiBAcGFyYW0gdXJsIEZyb20gYSBjYWxsIHRvIGZicy5yZXF1ZXN0cy5jcmVhdGVSZXN1bWFibGVVcGxvYWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRSZXN1bWFibGVVcGxvYWRTdGF0dXMoc2VydmljZSwgbG9jYXRpb24sIHVybCwgYmxvYikge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHsgJ1gtR29vZy1VcGxvYWQtQ29tbWFuZCc6ICdxdWVyeScgfTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoeGhyKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gY2hlY2tSZXN1bWVIZWFkZXJfKHhociwgWydhY3RpdmUnLCAnZmluYWwnXSk7XHJcbiAgICAgICAgbGV0IHNpemVTdHJpbmcgPSBudWxsO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHNpemVTdHJpbmcgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtR29vZy1VcGxvYWQtU2l6ZS1SZWNlaXZlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyQ2hlY2soZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNpemVTdHJpbmcpIHtcclxuICAgICAgICAgICAgLy8gbnVsbCBvciBlbXB0eSBzdHJpbmdcclxuICAgICAgICAgICAgaGFuZGxlckNoZWNrKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IE51bWJlcihzaXplU3RyaW5nKTtcclxuICAgICAgICBoYW5kbGVyQ2hlY2soIWlzTmFOKHNpemUpKTtcclxuICAgICAgICByZXR1cm4gbmV3IFJlc3VtYWJsZVVwbG9hZFN0YXR1cyhzaXplLCBibG9iLnNpemUoKSwgc3RhdHVzID09PSAnZmluYWwnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGhvZCA9ICdQT1NUJztcclxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXJ2aWNlLm1heFVwbG9hZFJldHJ5VGltZTtcclxuICAgIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBoYW5kbGVyLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLmhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgcmVxdWVzdEluZm8uZXJyb3JIYW5kbGVyID0gc2hhcmVkRXJyb3JIYW5kbGVyKGxvY2F0aW9uKTtcclxuICAgIHJldHVybiByZXF1ZXN0SW5mbztcclxufVxyXG4vKipcclxuICogQW55IHVwbG9hZHMgdmlhIHRoZSByZXN1bWFibGUgdXBsb2FkIEFQSSBtdXN0IHRyYW5zZmVyIGEgbnVtYmVyIG9mIGJ5dGVzXHJcbiAqIHRoYXQgaXMgYSBtdWx0aXBsZSBvZiB0aGlzIG51bWJlci5cclxuICovXHJcbmNvbnN0IFJFU1VNQUJMRV9VUExPQURfQ0hVTktfU0laRSA9IDI1NiAqIDEwMjQ7XHJcbi8qKlxyXG4gKiBAcGFyYW0gdXJsIEZyb20gYSBjYWxsIHRvIGZicy5yZXF1ZXN0cy5jcmVhdGVSZXN1bWFibGVVcGxvYWQuXHJcbiAqIEBwYXJhbSBjaHVua1NpemUgTnVtYmVyIG9mIGJ5dGVzIHRvIHVwbG9hZC5cclxuICogQHBhcmFtIHN0YXR1cyBUaGUgcHJldmlvdXMgc3RhdHVzLlxyXG4gKiAgICAgSWYgbm90IHBhc3NlZCBvciBudWxsLCB3ZSBzdGFydCBmcm9tIHRoZSBiZWdpbm5pbmcuXHJcbiAqIEB0aHJvd3MgZmJzLkVycm9yIElmIHRoZSB1cGxvYWQgaXMgYWxyZWFkeSBjb21wbGV0ZSwgdGhlIHBhc3NlZCBpbiBzdGF0dXNcclxuICogICAgIGhhcyBhIGZpbmFsIHNpemUgaW5jb25zaXN0ZW50IHdpdGggdGhlIGJsb2IsIG9yIHRoZSBibG9iIGNhbm5vdCBiZSBzbGljZWRcclxuICogICAgIGZvciB1cGxvYWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb250aW51ZVJlc3VtYWJsZVVwbG9hZChsb2NhdGlvbiwgc2VydmljZSwgdXJsLCBibG9iLCBjaHVua1NpemUsIG1hcHBpbmdzLCBzdGF0dXMsIHByb2dyZXNzQ2FsbGJhY2spIHtcclxuICAgIC8vIFRPRE8oYW5keXNvdG8pOiBzdGFuZGFyZGl6ZSBvbiBpbnRlcm5hbCBhc3NlcnRzXHJcbiAgICAvLyBhc3NlcnQoIShvcHRfc3RhdHVzICYmIG9wdF9zdGF0dXMuZmluYWxpemVkKSk7XHJcbiAgICBjb25zdCBzdGF0dXNfID0gbmV3IFJlc3VtYWJsZVVwbG9hZFN0YXR1cygwLCAwKTtcclxuICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgICBzdGF0dXNfLmN1cnJlbnQgPSBzdGF0dXMuY3VycmVudDtcclxuICAgICAgICBzdGF0dXNfLnRvdGFsID0gc3RhdHVzLnRvdGFsO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3RhdHVzXy5jdXJyZW50ID0gMDtcclxuICAgICAgICBzdGF0dXNfLnRvdGFsID0gYmxvYi5zaXplKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoYmxvYi5zaXplKCkgIT09IHN0YXR1c18udG90YWwpIHtcclxuICAgICAgICB0aHJvdyBzZXJ2ZXJGaWxlV3JvbmdTaXplKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBieXRlc0xlZnQgPSBzdGF0dXNfLnRvdGFsIC0gc3RhdHVzXy5jdXJyZW50O1xyXG4gICAgbGV0IGJ5dGVzVG9VcGxvYWQgPSBieXRlc0xlZnQ7XHJcbiAgICBpZiAoY2h1bmtTaXplID4gMCkge1xyXG4gICAgICAgIGJ5dGVzVG9VcGxvYWQgPSBNYXRoLm1pbihieXRlc1RvVXBsb2FkLCBjaHVua1NpemUpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RhcnRCeXRlID0gc3RhdHVzXy5jdXJyZW50O1xyXG4gICAgY29uc3QgZW5kQnl0ZSA9IHN0YXJ0Qnl0ZSArIGJ5dGVzVG9VcGxvYWQ7XHJcbiAgICBjb25zdCB1cGxvYWRDb21tYW5kID0gYnl0ZXNUb1VwbG9hZCA9PT0gYnl0ZXNMZWZ0ID8gJ3VwbG9hZCwgZmluYWxpemUnIDogJ3VwbG9hZCc7XHJcbiAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgICdYLUdvb2ctVXBsb2FkLUNvbW1hbmQnOiB1cGxvYWRDb21tYW5kLFxyXG4gICAgICAgICdYLUdvb2ctVXBsb2FkLU9mZnNldCc6IGAke3N0YXR1c18uY3VycmVudH1gXHJcbiAgICB9O1xyXG4gICAgY29uc3QgYm9keSA9IGJsb2Iuc2xpY2Uoc3RhcnRCeXRlLCBlbmRCeXRlKTtcclxuICAgIGlmIChib2R5ID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgY2Fubm90U2xpY2VCbG9iKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKHhociwgdGV4dCkge1xyXG4gICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOiBWZXJpZnkgdGhlIE1ENSBvZiBlYWNoIHVwbG9hZGVkIHJhbmdlOlxyXG4gICAgICAgIC8vIHRoZSAneC1yYW5nZS1tZDUnIGhlYWRlciBjb21lcyBiYWNrIHdpdGggc3RhdHVzIGNvZGUgMzA4IHJlc3BvbnNlcy5cclxuICAgICAgICAvLyBXZSdsbCBvbmx5IGJlIGFibGUgdG8gYmFpbCBvdXQgdGhvdWdoLCBiZWNhdXNlIHlvdSBjYW4ndCByZS11cGxvYWQgYVxyXG4gICAgICAgIC8vIHJhbmdlIHRoYXQgeW91IHByZXZpb3VzbHkgdXBsb2FkZWQuXHJcbiAgICAgICAgY29uc3QgdXBsb2FkU3RhdHVzID0gY2hlY2tSZXN1bWVIZWFkZXJfKHhociwgWydhY3RpdmUnLCAnZmluYWwnXSk7XHJcbiAgICAgICAgY29uc3QgbmV3Q3VycmVudCA9IHN0YXR1c18uY3VycmVudCArIGJ5dGVzVG9VcGxvYWQ7XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGJsb2Iuc2l6ZSgpO1xyXG4gICAgICAgIGxldCBtZXRhZGF0YTtcclxuICAgICAgICBpZiAodXBsb2FkU3RhdHVzID09PSAnZmluYWwnKSB7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhID0gbWV0YWRhdGFIYW5kbGVyKHNlcnZpY2UsIG1hcHBpbmdzKSh4aHIsIHRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbWV0YWRhdGEgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFJlc3VtYWJsZVVwbG9hZFN0YXR1cyhuZXdDdXJyZW50LCBzaXplLCB1cGxvYWRTdGF0dXMgPT09ICdmaW5hbCcsIG1ldGFkYXRhKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1ldGhvZCA9ICdQT1NUJztcclxuICAgIGNvbnN0IHRpbWVvdXQgPSBzZXJ2aWNlLm1heFVwbG9hZFJldHJ5VGltZTtcclxuICAgIGNvbnN0IHJlcXVlc3RJbmZvID0gbmV3IFJlcXVlc3RJbmZvKHVybCwgbWV0aG9kLCBoYW5kbGVyLCB0aW1lb3V0KTtcclxuICAgIHJlcXVlc3RJbmZvLmhlYWRlcnMgPSBoZWFkZXJzO1xyXG4gICAgcmVxdWVzdEluZm8uYm9keSA9IGJvZHkudXBsb2FkRGF0YSgpO1xyXG4gICAgcmVxdWVzdEluZm8ucHJvZ3Jlc3NDYWxsYmFjayA9IHByb2dyZXNzQ2FsbGJhY2sgfHwgbnVsbDtcclxuICAgIHJlcXVlc3RJbmZvLmVycm9ySGFuZGxlciA9IHNoYXJlZEVycm9ySGFuZGxlcihsb2NhdGlvbik7XHJcbiAgICByZXR1cm4gcmVxdWVzdEluZm87XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEFuIGV2ZW50IHRoYXQgaXMgdHJpZ2dlcmVkIG9uIGEgdGFzay5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG5jb25zdCBUYXNrRXZlbnQgPSB7XHJcbiAgICAvKipcclxuICAgICAqIEZvciB0aGlzIGV2ZW50LFxyXG4gICAgICogPHVsPlxyXG4gICAgICogICA8bGk+VGhlIGBuZXh0YCBmdW5jdGlvbiBpcyB0cmlnZ2VyZWQgb24gcHJvZ3Jlc3MgdXBkYXRlcyBhbmQgd2hlbiB0aGVcclxuICAgICAqICAgICAgIHRhc2sgaXMgcGF1c2VkL3Jlc3VtZWQgd2l0aCBhbiBgVXBsb2FkVGFza1NuYXBzaG90YCBhcyB0aGUgZmlyc3RcclxuICAgICAqICAgICAgIGFyZ3VtZW50LjwvbGk+XHJcbiAgICAgKiAgIDxsaT5UaGUgYGVycm9yYCBmdW5jdGlvbiBpcyB0cmlnZ2VyZWQgaWYgdGhlIHVwbG9hZCBpcyBjYW5jZWxlZCBvciBmYWlsc1xyXG4gICAgICogICAgICAgZm9yIGFub3RoZXIgcmVhc29uLjwvbGk+XHJcbiAgICAgKiAgIDxsaT5UaGUgYGNvbXBsZXRlYCBmdW5jdGlvbiBpcyB0cmlnZ2VyZWQgaWYgdGhlIHVwbG9hZCBjb21wbGV0ZXNcclxuICAgICAqICAgICAgIHN1Y2Nlc3NmdWxseS48L2xpPlxyXG4gICAgICogPC91bD5cclxuICAgICAqL1xyXG4gICAgU1RBVEVfQ0hBTkdFRDogJ3N0YXRlX2NoYW5nZWQnXHJcbn07XHJcbi8vIHR5cGUga2V5cyA9IGtleW9mIFRhc2tTdGF0ZVxyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZSBvZiBhIHJ1bm5pbmcgdXBsb2FkLlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmNvbnN0IFRhc2tTdGF0ZSA9IHtcclxuICAgIC8qKiBUaGUgdGFzayBpcyBjdXJyZW50bHkgdHJhbnNmZXJyaW5nIGRhdGEuICovXHJcbiAgICBSVU5OSU5HOiAncnVubmluZycsXHJcbiAgICAvKiogVGhlIHRhc2sgd2FzIHBhdXNlZCBieSB0aGUgdXNlci4gKi9cclxuICAgIFBBVVNFRDogJ3BhdXNlZCcsXHJcbiAgICAvKiogVGhlIHRhc2sgY29tcGxldGVkIHN1Y2Nlc3NmdWxseS4gKi9cclxuICAgIFNVQ0NFU1M6ICdzdWNjZXNzJyxcclxuICAgIC8qKiBUaGUgdGFzayB3YXMgY2FuY2VsZWQuICovXHJcbiAgICBDQU5DRUxFRDogJ2NhbmNlbGVkJyxcclxuICAgIC8qKiBUaGUgdGFzayBmYWlsZWQgd2l0aCBhbiBlcnJvci4gKi9cclxuICAgIEVSUk9SOiAnZXJyb3InXHJcbn07XHJcbmZ1bmN0aW9uIHRhc2tTdGF0ZUZyb21JbnRlcm5hbFRhc2tTdGF0ZShzdGF0ZSkge1xyXG4gICAgc3dpdGNoIChzdGF0ZSkge1xyXG4gICAgICAgIGNhc2UgXCJydW5uaW5nXCIgLyogUlVOTklORyAqLzpcclxuICAgICAgICBjYXNlIFwicGF1c2luZ1wiIC8qIFBBVVNJTkcgKi86XHJcbiAgICAgICAgY2FzZSBcImNhbmNlbGluZ1wiIC8qIENBTkNFTElORyAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5SVU5OSU5HO1xyXG4gICAgICAgIGNhc2UgXCJwYXVzZWRcIiAvKiBQQVVTRUQgKi86XHJcbiAgICAgICAgICAgIHJldHVybiBUYXNrU3RhdGUuUEFVU0VEO1xyXG4gICAgICAgIGNhc2UgXCJzdWNjZXNzXCIgLyogU1VDQ0VTUyAqLzpcclxuICAgICAgICAgICAgcmV0dXJuIFRhc2tTdGF0ZS5TVUNDRVNTO1xyXG4gICAgICAgIGNhc2UgXCJjYW5jZWxlZFwiIC8qIENBTkNFTEVEICovOlxyXG4gICAgICAgICAgICByZXR1cm4gVGFza1N0YXRlLkNBTkNFTEVEO1xyXG4gICAgICAgIGNhc2UgXCJlcnJvclwiIC8qIEVSUk9SICovOlxyXG4gICAgICAgICAgICByZXR1cm4gVGFza1N0YXRlLkVSUk9SO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOiBhc3NlcnQoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gVGFza1N0YXRlLkVSUk9SO1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmNsYXNzIE9ic2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcclxuICAgICAgICBjb25zdCBhc0Z1bmN0aW9ucyA9IGlzRnVuY3Rpb24obmV4dE9yT2JzZXJ2ZXIpIHx8IGVycm9yICE9IG51bGwgfHwgY29tcGxldGUgIT0gbnVsbDtcclxuICAgICAgICBpZiAoYXNGdW5jdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0ID0gbmV4dE9yT2JzZXJ2ZXI7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvciAhPT0gbnVsbCAmJiBlcnJvciAhPT0gdm9pZCAwID8gZXJyb3IgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZSAhPT0gbnVsbCAmJiBjb21wbGV0ZSAhPT0gdm9pZCAwID8gY29tcGxldGUgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5leHRPck9ic2VydmVyO1xyXG4gICAgICAgICAgICB0aGlzLm5leHQgPSBvYnNlcnZlci5uZXh0O1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gb2JzZXJ2ZXIuZXJyb3I7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGUgPSBvYnNlcnZlci5jb21wbGV0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgZiB3aXRoIGl0cyBhcmd1bWVudHMgYXN5bmNocm9ub3VzbHkgYXMgYVxyXG4gKiBtaWNyb3Rhc2ssIGkuZS4gYXMgc29vbiBhcyBwb3NzaWJsZSBhZnRlciB0aGUgY3VycmVudCBzY3JpcHQgcmV0dXJucyBiYWNrXHJcbiAqIGludG8gYnJvd3NlciBjb2RlLlxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcclxuZnVuY3Rpb24gYXN5bmMoZikge1xyXG4gICAgcmV0dXJuICguLi5hcmdzVG9Gb3J3YXJkKSA9PiB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gZiguLi5hcmdzVG9Gb3J3YXJkKSk7XHJcbiAgICB9O1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKiBBbiBvdmVycmlkZSBmb3IgdGhlIHRleHQtYmFzZWQgQ29ubmVjdGlvbi4gVXNlZCBpbiB0ZXN0cy4gKi9cclxubGV0IHRleHRGYWN0b3J5T3ZlcnJpZGUgPSBudWxsO1xyXG4vKipcclxuICogTmV0d29yayBsYXllciBmb3IgYnJvd3NlcnMuIFdlIHVzZSB0aGlzIGluc3RlYWQgb2YgZ29vZy5uZXQuWGhySW8gYmVjYXVzZVxyXG4gKiBnb29nLm5ldC5YaHJJbyBpcyBoeXV1dXVnZSBhbmQgZG9lc24ndCB3b3JrIGluIFJlYWN0IE5hdGl2ZSBvbiBBbmRyb2lkLlxyXG4gKi9cclxuY2xhc3MgWGhyQ29ubmVjdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNlbnRfID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy54aHJfID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgdGhpcy5pbml0WGhyKCk7XHJcbiAgICAgICAgdGhpcy5lcnJvckNvZGVfID0gRXJyb3JDb2RlLk5PX0VSUk9SO1xyXG4gICAgICAgIHRoaXMuc2VuZFByb21pc2VfID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMueGhyXy5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDb2RlXyA9IEVycm9yQ29kZS5BQk9SVDtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMueGhyXy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JDb2RlXyA9IEVycm9yQ29kZS5ORVRXT1JLX0VSUk9SO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy54aHJfLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2VuZCh1cmwsIG1ldGhvZCwgYm9keSwgaGVhZGVycykge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbnRfKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuc2VuZCgpIG1vcmUgdGhhbiBvbmNlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VudF8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMueGhyXy5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuICAgICAgICBpZiAoaGVhZGVycyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoZWFkZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnhocl8uc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9keSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMueGhyXy5zZW5kKGJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54aHJfLnNlbmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZFByb21pc2VfO1xyXG4gICAgfVxyXG4gICAgZ2V0RXJyb3JDb2RlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZW50Xykge1xyXG4gICAgICAgICAgICB0aHJvdyBpbnRlcm5hbEVycm9yKCdjYW5ub3QgLmdldEVycm9yQ29kZSgpIGJlZm9yZSBzZW5kaW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmVycm9yQ29kZV87XHJcbiAgICB9XHJcbiAgICBnZXRTdGF0dXMoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbnRfKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuZ2V0U3RhdHVzKCkgYmVmb3JlIHNlbmRpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueGhyXy5zdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRSZXNwb25zZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VudF8pIHtcclxuICAgICAgICAgICAgdGhyb3cgaW50ZXJuYWxFcnJvcignY2Fubm90IC5nZXRSZXNwb25zZSgpIGJlZm9yZSBzZW5kaW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnhocl8ucmVzcG9uc2U7XHJcbiAgICB9XHJcbiAgICBnZXRFcnJvclRleHQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbnRfKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludGVybmFsRXJyb3IoJ2Nhbm5vdCAuZ2V0RXJyb3JUZXh0KCkgYmVmb3JlIHNlbmRpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueGhyXy5zdGF0dXNUZXh0O1xyXG4gICAgfVxyXG4gICAgLyoqIEFib3J0cyB0aGUgcmVxdWVzdC4gKi9cclxuICAgIGFib3J0KCkge1xyXG4gICAgICAgIHRoaXMueGhyXy5hYm9ydCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0UmVzcG9uc2VIZWFkZXIoaGVhZGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueGhyXy5nZXRSZXNwb25zZUhlYWRlcihoZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgYWRkVXBsb2FkUHJvZ3Jlc3NMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIGlmICh0aGlzLnhocl8udXBsb2FkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy54aHJfLnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGxpc3RlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVVcGxvYWRQcm9ncmVzc0xpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueGhyXy51cGxvYWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnhocl8udXBsb2FkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgbGlzdGVuZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jbGFzcyBYaHJUZXh0Q29ubmVjdGlvbiBleHRlbmRzIFhockNvbm5lY3Rpb24ge1xyXG4gICAgaW5pdFhocigpIHtcclxuICAgICAgICB0aGlzLnhocl8ucmVzcG9uc2VUeXBlID0gJ3RleHQnO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG5ld1RleHRDb25uZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRleHRGYWN0b3J5T3ZlcnJpZGUgPyB0ZXh0RmFjdG9yeU92ZXJyaWRlKCkgOiBuZXcgWGhyVGV4dENvbm5lY3Rpb24oKTtcclxufVxyXG5jbGFzcyBYaHJCeXRlc0Nvbm5lY3Rpb24gZXh0ZW5kcyBYaHJDb25uZWN0aW9uIHtcclxuICAgIGluaXRYaHIoKSB7XHJcbiAgICAgICAgdGhpcy54aHJfLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbmV3Qnl0ZXNDb25uZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIG5ldyBYaHJCeXRlc0Nvbm5lY3Rpb24oKTtcclxufVxyXG5jbGFzcyBYaHJCbG9iQ29ubmVjdGlvbiBleHRlbmRzIFhockNvbm5lY3Rpb24ge1xyXG4gICAgaW5pdFhocigpIHtcclxuICAgICAgICB0aGlzLnhocl8ucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG5ld0Jsb2JDb25uZWN0aW9uKCkge1xyXG4gICAgcmV0dXJuIG5ldyBYaHJCbG9iQ29ubmVjdGlvbigpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgYmxvYiBiZWluZyB1cGxvYWRlZC4gQ2FuIGJlIHVzZWQgdG8gcGF1c2UvcmVzdW1lL2NhbmNlbCB0aGVcclxuICogdXBsb2FkIGFuZCBtYW5hZ2UgY2FsbGJhY2tzIGZvciB2YXJpb3VzIGV2ZW50cy5cclxuICogQGludGVybmFsXHJcbiAqL1xyXG5jbGFzcyBVcGxvYWRUYXNrIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHJlZiAtIFRoZSBmaXJlYmFzZVN0b3JhZ2UuUmVmZXJlbmNlIG9iamVjdCB0aGlzIHRhc2sgY2FtZVxyXG4gICAgICogICAgIGZyb20sIHVudHlwZWQgdG8gYXZvaWQgY3ljbGljIGRlcGVuZGVuY2llcy5cclxuICAgICAqIEBwYXJhbSBibG9iIC0gVGhlIGJsb2IgdG8gdXBsb2FkLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihyZWYsIGJsb2IsIG1ldGFkYXRhID0gbnVsbCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE51bWJlciBvZiBieXRlcyB0cmFuc2ZlcnJlZCBzbyBmYXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJyZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuX25lZWRUb0ZldGNoU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fbmVlZFRvRmV0Y2hNZXRhZGF0YSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX29ic2VydmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX3VwbG9hZFVybCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuX2NodW5rTXVsdGlwbGllciA9IDE7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLl9yZWplY3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5fcmVmID0gcmVmO1xyXG4gICAgICAgIHRoaXMuX2Jsb2IgPSBibG9iO1xyXG4gICAgICAgIHRoaXMuX21ldGFkYXRhID0gbWV0YWRhdGE7XHJcbiAgICAgICAgdGhpcy5fbWFwcGluZ3MgPSBnZXRNYXBwaW5ncygpO1xyXG4gICAgICAgIHRoaXMuX3Jlc3VtYWJsZSA9IHRoaXMuX3Nob3VsZERvUmVzdW1hYmxlKHRoaXMuX2Jsb2IpO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gXCJydW5uaW5nXCIgLyogUlVOTklORyAqLztcclxuICAgICAgICB0aGlzLl9lcnJvckhhbmRsZXIgPSBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVlc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2NodW5rTXVsdGlwbGllciA9IDE7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5fY29kZUVxdWFscyhcImNhbmNlbGVkXCIgLyogQ0FOQ0VMRUQgKi8pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9uZWVkVG9GZXRjaFN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlVHJhbnNpdGlvbnNfKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbihcImVycm9yXCIgLyogRVJST1IgKi8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9tZXRhZGF0YUVycm9ySGFuZGxlciA9IGVycm9yID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWVzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKGVycm9yLl9jb2RlRXF1YWxzKFwiY2FuY2VsZWRcIiAvKiBDQU5DRUxFRCAqLykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uKFwiZXJyb3JcIiAvKiBFUlJPUiAqLyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgICAgICB0aGlzLl9yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gUHJldmVudCB1bmNhdWdodCByZWplY3Rpb25zIG9uIHRoZSBpbnRlcm5hbCBwcm9taXNlIGZyb20gYnViYmxpbmcgb3V0XHJcbiAgICAgICAgLy8gdG8gdGhlIHRvcCBsZXZlbCB3aXRoIGEgZHVtbXkgaGFuZGxlci5cclxuICAgICAgICB0aGlzLl9wcm9taXNlLnRoZW4obnVsbCwgKCkgPT4geyB9KTtcclxuICAgIH1cclxuICAgIF9tYWtlUHJvZ3Jlc3NDYWxsYmFjaygpIHtcclxuICAgICAgICBjb25zdCBzaXplQmVmb3JlID0gdGhpcy5fdHJhbnNmZXJyZWQ7XHJcbiAgICAgICAgcmV0dXJuIGxvYWRlZCA9PiB0aGlzLl91cGRhdGVQcm9ncmVzcyhzaXplQmVmb3JlICsgbG9hZGVkKTtcclxuICAgIH1cclxuICAgIF9zaG91bGREb1Jlc3VtYWJsZShibG9iKSB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2Iuc2l6ZSgpID4gMjU2ICogMTAyNDtcclxuICAgIH1cclxuICAgIF9zdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhdGUgIT09IFwicnVubmluZ1wiIC8qIFJVTk5JTkcgKi8pIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHNvbWVvbmUgcGF1c2VzIHVzIGluIGEgcmVzdW1lIGNhbGxiYWNrLCBmb3IgZXhhbXBsZS5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fcmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3Jlc3VtYWJsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdXBsb2FkVXJsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVJlc3VtYWJsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX25lZWRUb0ZldGNoU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmV0Y2hTdGF0dXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9uZWVkVG9GZXRjaE1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhcHBlbnMgaWYgd2UgbWlzcyB0aGUgbWV0YWRhdGEgb24gdXBsb2FkIGNvbXBsZXRpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZldGNoTWV0YWRhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRpbnVlVXBsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9vbmVTaG90VXBsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3Jlc29sdmVUb2tlbihjYWxsYmFjaykge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIHRoaXMuX3JlZi5zdG9yYWdlLl9nZXRBdXRoVG9rZW4oKSxcclxuICAgICAgICAgICAgdGhpcy5fcmVmLnN0b3JhZ2UuX2dldEFwcENoZWNrVG9rZW4oKVxyXG4gICAgICAgIF0pLnRoZW4oKFthdXRoVG9rZW4sIGFwcENoZWNrVG9rZW5dKSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJydW5uaW5nXCIgLyogUlVOTklORyAqLzpcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhhdXRoVG9rZW4sIGFwcENoZWNrVG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImNhbmNlbGluZ1wiIC8qIENBTkNFTElORyAqLzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uKFwiY2FuY2VsZWRcIiAvKiBDQU5DRUxFRCAqLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicGF1c2luZ1wiIC8qIFBBVVNJTkcgKi86XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbihcInBhdXNlZFwiIC8qIFBBVVNFRCAqLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIFRPRE8oYW5keXNvdG8pOiBhc3NlcnQgZmFsc2VcclxuICAgIF9jcmVhdGVSZXN1bWFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZVRva2VuKChhdXRoVG9rZW4sIGFwcENoZWNrVG9rZW4pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdEluZm8gPSBjcmVhdGVSZXN1bWFibGVVcGxvYWQodGhpcy5fcmVmLnN0b3JhZ2UsIHRoaXMuX3JlZi5fbG9jYXRpb24sIHRoaXMuX21hcHBpbmdzLCB0aGlzLl9ibG9iLCB0aGlzLl9tZXRhZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVJlcXVlc3QgPSB0aGlzLl9yZWYuc3RvcmFnZS5fbWFrZVJlcXVlc3QocmVxdWVzdEluZm8sIG5ld1RleHRDb25uZWN0aW9uLCBhdXRoVG9rZW4sIGFwcENoZWNrVG9rZW4pO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXF1ZXN0ID0gY3JlYXRlUmVxdWVzdDtcclxuICAgICAgICAgICAgY3JlYXRlUmVxdWVzdC5nZXRQcm9taXNlKCkudGhlbigodXJsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXF1ZXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBsb2FkVXJsID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbmVlZFRvRmV0Y2hTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5fZXJyb3JIYW5kbGVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9mZXRjaFN0YXR1cygpIHtcclxuICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KHRoaXMudXBsb2FkVXJsXyAhPT0gbnVsbCk7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fdXBsb2FkVXJsO1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdmVUb2tlbigoYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RJbmZvID0gZ2V0UmVzdW1hYmxlVXBsb2FkU3RhdHVzKHRoaXMuX3JlZi5zdG9yYWdlLCB0aGlzLl9yZWYuX2xvY2F0aW9uLCB1cmwsIHRoaXMuX2Jsb2IpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0dXNSZXF1ZXN0ID0gdGhpcy5fcmVmLnN0b3JhZ2UuX21ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBuZXdUZXh0Q29ubmVjdGlvbiwgYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWVzdCA9IHN0YXR1c1JlcXVlc3Q7XHJcbiAgICAgICAgICAgIHN0YXR1c1JlcXVlc3QuZ2V0UHJvbWlzZSgpLnRoZW4oc3RhdHVzID0+IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVlc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVQcm9ncmVzcyhzdGF0dXMuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9uZWVkVG9GZXRjaFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9uZWVkVG9GZXRjaE1ldGFkYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5fZXJyb3JIYW5kbGVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9jb250aW51ZVVwbG9hZCgpIHtcclxuICAgICAgICBjb25zdCBjaHVua1NpemUgPSBSRVNVTUFCTEVfVVBMT0FEX0NIVU5LX1NJWkUgKiB0aGlzLl9jaHVua011bHRpcGxpZXI7XHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gbmV3IFJlc3VtYWJsZVVwbG9hZFN0YXR1cyh0aGlzLl90cmFuc2ZlcnJlZCwgdGhpcy5fYmxvYi5zaXplKCkpO1xyXG4gICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOiBhc3NlcnQodGhpcy51cGxvYWRVcmxfICE9PSBudWxsKTtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl91cGxvYWRVcmw7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZVRva2VuKChhdXRoVG9rZW4sIGFwcENoZWNrVG9rZW4pID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3RJbmZvO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEluZm8gPSBjb250aW51ZVJlc3VtYWJsZVVwbG9hZCh0aGlzLl9yZWYuX2xvY2F0aW9uLCB0aGlzLl9yZWYuc3RvcmFnZSwgdXJsLCB0aGlzLl9ibG9iLCBjaHVua1NpemUsIHRoaXMuX21hcHBpbmdzLCBzdGF0dXMsIHRoaXMuX21ha2VQcm9ncmVzc0NhbGxiYWNrKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uKFwiZXJyb3JcIiAvKiBFUlJPUiAqLyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdXBsb2FkUmVxdWVzdCA9IHRoaXMuX3JlZi5zdG9yYWdlLl9tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgbmV3VGV4dENvbm5lY3Rpb24sIGF1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbik7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVlc3QgPSB1cGxvYWRSZXF1ZXN0O1xyXG4gICAgICAgICAgICB1cGxvYWRSZXF1ZXN0LmdldFByb21pc2UoKS50aGVuKChuZXdTdGF0dXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luY3JlYXNlTXVsdGlwbGllcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVxdWVzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzKG5ld1N0YXR1cy5jdXJyZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdTdGF0dXMuZmluYWxpemVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGEgPSBuZXdTdGF0dXMubWV0YWRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbihcInN1Y2Nlc3NcIiAvKiBTVUNDRVNTICovKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVUcmFuc2l0aW9uc18oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgdGhpcy5fZXJyb3JIYW5kbGVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9pbmNyZWFzZU11bHRpcGxpZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNpemUgPSBSRVNVTUFCTEVfVVBMT0FEX0NIVU5LX1NJWkUgKiB0aGlzLl9jaHVua011bHRpcGxpZXI7XHJcbiAgICAgICAgLy8gTWF4IGNodW5rIHNpemUgaXMgMzJNLlxyXG4gICAgICAgIGlmIChjdXJyZW50U2l6ZSA8IDMyICogMTAyNCAqIDEwMjQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2h1bmtNdWx0aXBsaWVyICo9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2ZldGNoTWV0YWRhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVzb2x2ZVRva2VuKChhdXRoVG9rZW4sIGFwcENoZWNrVG9rZW4pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdEluZm8gPSBnZXRNZXRhZGF0YSQyKHRoaXMuX3JlZi5zdG9yYWdlLCB0aGlzLl9yZWYuX2xvY2F0aW9uLCB0aGlzLl9tYXBwaW5ncyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhUmVxdWVzdCA9IHRoaXMuX3JlZi5zdG9yYWdlLl9tYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgbmV3VGV4dENvbm5lY3Rpb24sIGF1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbik7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVlc3QgPSBtZXRhZGF0YVJlcXVlc3Q7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhUmVxdWVzdC5nZXRQcm9taXNlKCkudGhlbihtZXRhZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXF1ZXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWV0YWRhdGEgPSBtZXRhZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24oXCJzdWNjZXNzXCIgLyogU1VDQ0VTUyAqLyk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMuX21ldGFkYXRhRXJyb3JIYW5kbGVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9vbmVTaG90VXBsb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3Jlc29sdmVUb2tlbigoYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RJbmZvID0gbXVsdGlwYXJ0VXBsb2FkKHRoaXMuX3JlZi5zdG9yYWdlLCB0aGlzLl9yZWYuX2xvY2F0aW9uLCB0aGlzLl9tYXBwaW5ncywgdGhpcy5fYmxvYiwgdGhpcy5fbWV0YWRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCBtdWx0aXBhcnRSZXF1ZXN0ID0gdGhpcy5fcmVmLnN0b3JhZ2UuX21ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCBuZXdUZXh0Q29ubmVjdGlvbiwgYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWVzdCA9IG11bHRpcGFydFJlcXVlc3Q7XHJcbiAgICAgICAgICAgIG11bHRpcGFydFJlcXVlc3QuZ2V0UHJvbWlzZSgpLnRoZW4obWV0YWRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVxdWVzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21ldGFkYXRhID0gbWV0YWRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVQcm9ncmVzcyh0aGlzLl9ibG9iLnNpemUoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uKFwic3VjY2Vzc1wiIC8qIFNVQ0NFU1MgKi8pO1xyXG4gICAgICAgICAgICB9LCB0aGlzLl9lcnJvckhhbmRsZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3VwZGF0ZVByb2dyZXNzKHRyYW5zZmVycmVkKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkID0gdGhpcy5fdHJhbnNmZXJyZWQ7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJyZWQgPSB0cmFuc2ZlcnJlZDtcclxuICAgICAgICAvLyBBIHByb2dyZXNzIHVwZGF0ZSBjYW4gbWFrZSB0aGUgXCJ0cmFuc2ZlcnJlZFwiIHZhbHVlIHNtYWxsZXIgKGUuZy4gYVxyXG4gICAgICAgIC8vIHBhcnRpYWwgdXBsb2FkIG5vdCBjb21wbGV0ZWQgYnkgc2VydmVyLCBhZnRlciB3aGljaCB0aGUgXCJ0cmFuc2ZlcnJlZFwiXHJcbiAgICAgICAgLy8gdmFsdWUgbWF5IHJlc2V0IHRvIHRoZSB2YWx1ZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSByZXF1ZXN0KS5cclxuICAgICAgICBpZiAodGhpcy5fdHJhbnNmZXJyZWQgIT09IG9sZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ub3RpZnlPYnNlcnZlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfdHJhbnNpdGlvbihzdGF0ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gc3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjYW5jZWxpbmdcIiAvKiBDQU5DRUxJTkcgKi86XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCh0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyB8fFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmVxdWVzdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVxdWVzdC5jYW5jZWwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGF1c2luZ1wiIC8qIFBBVVNJTkcgKi86XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTpcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCh0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUlVOTklORyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3JlcXVlc3QgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlcXVlc3QuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJ1bm5pbmdcIiAvKiBSVU5OSU5HICovOlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNFRCB8fFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5QQVVTSU5HKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdhc1BhdXNlZCA9IHRoaXMuX3N0YXRlID09PSBcInBhdXNlZFwiIC8qIFBBVVNFRCAqLztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBpZiAod2FzUGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm90aWZ5T2JzZXJ2ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGF1c2VkXCIgLyogUEFVU0VEICovOlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjYW5jZWxlZFwiIC8qIENBTkNFTEVEICovOlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNFRCB8fFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBjYW5jZWxlZCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJlcnJvclwiIC8qIEVSUk9SICovOlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyhhbmR5c290byk6XHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQodGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlJVTk5JTkcgfHxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuUEFVU0lORyB8fFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5DQU5DRUxJTkcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVycygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdWNjZXNzXCIgLyogU1VDQ0VTUyAqLzpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8oYW5keXNvdG8pOlxyXG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0KHRoaXMuc3RhdGVfID09PSBJbnRlcm5hbFRhc2tTdGF0ZS5SVU5OSU5HIHx8XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgdGhpcy5zdGF0ZV8gPT09IEludGVybmFsVGFza1N0YXRlLlBBVVNJTkcgfHxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICB0aGlzLnN0YXRlXyA9PT0gSW50ZXJuYWxUYXNrU3RhdGUuQ0FOQ0VMSU5HKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ub3RpZnlPYnNlcnZlcnMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBsZXRlVHJhbnNpdGlvbnNfKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInBhdXNpbmdcIiAvKiBQQVVTSU5HICovOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbihcInBhdXNlZFwiIC8qIFBBVVNFRCAqLyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNhbmNlbGluZ1wiIC8qIENBTkNFTElORyAqLzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24oXCJjYW5jZWxlZFwiIC8qIENBTkNFTEVEICovKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicnVubmluZ1wiIC8qIFJVTk5JTkcgKi86XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBIHNuYXBzaG90IG9mIHRoZSBjdXJyZW50IHRhc2sgc3RhdGUuXHJcbiAgICAgKi9cclxuICAgIGdldCBzbmFwc2hvdCgpIHtcclxuICAgICAgICBjb25zdCBleHRlcm5hbFN0YXRlID0gdGFza1N0YXRlRnJvbUludGVybmFsVGFza1N0YXRlKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBieXRlc1RyYW5zZmVycmVkOiB0aGlzLl90cmFuc2ZlcnJlZCxcclxuICAgICAgICAgICAgdG90YWxCeXRlczogdGhpcy5fYmxvYi5zaXplKCksXHJcbiAgICAgICAgICAgIHN0YXRlOiBleHRlcm5hbFN0YXRlLFxyXG4gICAgICAgICAgICBtZXRhZGF0YTogdGhpcy5fbWV0YWRhdGEsXHJcbiAgICAgICAgICAgIHRhc2s6IHRoaXMsXHJcbiAgICAgICAgICAgIHJlZjogdGhpcy5fcmVmXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIGNhbGxiYWNrIGZvciBhbiBldmVudC5cclxuICAgICAqIEBwYXJhbSB0eXBlIC0gVGhlIHR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvci5cclxuICAgICAqIEBwYXJhbSBuZXh0T3JPYnNlcnZlciAtXHJcbiAgICAgKiAgICAgVGhlIGBuZXh0YCBmdW5jdGlvbiwgd2hpY2ggZ2V0cyBjYWxsZWQgZm9yIGVhY2ggaXRlbSBpblxyXG4gICAgICogICAgIHRoZSBldmVudCBzdHJlYW0sIG9yIGFuIG9ic2VydmVyIG9iamVjdCB3aXRoIHNvbWUgb3IgYWxsIG9mIHRoZXNlIHRocmVlXHJcbiAgICAgKiAgICAgcHJvcGVydGllcyAoYG5leHRgLCBgZXJyb3JgLCBgY29tcGxldGVgKS5cclxuICAgICAqIEBwYXJhbSBlcnJvciAtIEEgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCB3aXRoIGEgYFN0b3JhZ2VFcnJvcmBcclxuICAgICAqICAgICBpZiB0aGUgZXZlbnQgc3RyZWFtIGVuZHMgZHVlIHRvIGFuIGVycm9yLlxyXG4gICAgICogQHBhcmFtIGNvbXBsZXRlZCAtIEEgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBpZiB0aGVcclxuICAgICAqICAgICBldmVudCBzdHJlYW0gZW5kcyBub3JtYWxseS5cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiAgICAgSWYgb25seSB0aGUgZXZlbnQgYXJndW1lbnQgaXMgcGFzc2VkLCByZXR1cm5zIGEgZnVuY3Rpb24geW91IGNhbiB1c2UgdG9cclxuICAgICAqICAgICBhZGQgY2FsbGJhY2tzIChzZWUgdGhlIGV4YW1wbGVzIGFib3ZlKS4gSWYgbW9yZSB0aGFuIGp1c3QgdGhlIGV2ZW50XHJcbiAgICAgKiAgICAgYXJndW1lbnQgaXMgcGFzc2VkLCByZXR1cm5zIGEgZnVuY3Rpb24geW91IGNhbiBjYWxsIHRvIHVucmVnaXN0ZXIgdGhlXHJcbiAgICAgKiAgICAgY2FsbGJhY2tzLlxyXG4gICAgICovXHJcbiAgICBvbih0eXBlLCBuZXh0T3JPYnNlcnZlciwgZXJyb3IsIGNvbXBsZXRlZCkge1xyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE9ic2VydmVyKG5leHRPck9ic2VydmVyIHx8IHVuZGVmaW5lZCwgZXJyb3IgfHwgdW5kZWZpbmVkLCBjb21wbGV0ZWQgfHwgdW5kZWZpbmVkKTtcclxuICAgICAgICB0aGlzLl9hZGRPYnNlcnZlcihvYnNlcnZlcik7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgb2JqZWN0IGJlaGF2ZXMgbGlrZSBhIFByb21pc2UsIGFuZCByZXNvbHZlcyB3aXRoIGl0cyBzbmFwc2hvdCBkYXRhXHJcbiAgICAgKiB3aGVuIHRoZSB1cGxvYWQgY29tcGxldGVzLlxyXG4gICAgICogQHBhcmFtIG9uRnVsZmlsbGVkIC0gVGhlIGZ1bGZpbGxtZW50IGNhbGxiYWNrLiBQcm9taXNlIGNoYWluaW5nIHdvcmtzIGFzIG5vcm1hbC5cclxuICAgICAqIEBwYXJhbSBvblJlamVjdGVkIC0gVGhlIHJlamVjdGlvbiBjYWxsYmFjay5cclxuICAgICAqL1xyXG4gICAgdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xyXG4gICAgICAgIC8vIFRoZXNlIGNhc3RzIGFyZSBuZWVkZWQgc28gdGhhdCBUeXBlU2NyaXB0IGNhbiBpbmZlciB0aGUgdHlwZXMgb2YgdGhlXHJcbiAgICAgICAgLy8gcmVzdWx0aW5nIFByb21pc2UuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2UudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEVxdWl2YWxlbnQgdG8gY2FsbGluZyBgdGhlbihudWxsLCBvblJlamVjdGVkKWAuXHJcbiAgICAgKi9cclxuICAgIGNhdGNoKG9uUmVqZWN0ZWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHRoZSBnaXZlbiBvYnNlcnZlci5cclxuICAgICAqL1xyXG4gICAgX2FkZE9ic2VydmVyKG9ic2VydmVyKSB7XHJcbiAgICAgICAgdGhpcy5fb2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIHRoaXMuX25vdGlmeU9ic2VydmVyKG9ic2VydmVyKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gb2JzZXJ2ZXIuXHJcbiAgICAgKi9cclxuICAgIF9yZW1vdmVPYnNlcnZlcihvYnNlcnZlcikge1xyXG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLl9vYnNlcnZlcnMuaW5kZXhPZihvYnNlcnZlcik7XHJcbiAgICAgICAgaWYgKGkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29ic2VydmVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX25vdGlmeU9ic2VydmVycygpIHtcclxuICAgICAgICB0aGlzLl9maW5pc2hQcm9taXNlKCk7XHJcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXJzID0gdGhpcy5fb2JzZXJ2ZXJzLnNsaWNlKCk7XHJcbiAgICAgICAgb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9ub3RpZnlPYnNlcnZlcihvYnNlcnZlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfZmluaXNoUHJvbWlzZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fcmVzb2x2ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCB0cmlnZ2VyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRhc2tTdGF0ZUZyb21JbnRlcm5hbFRhc2tTdGF0ZSh0aGlzLl9zdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLlNVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmModGhpcy5fcmVzb2x2ZS5iaW5kKG51bGwsIHRoaXMuc25hcHNob3QpKSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBUYXNrU3RhdGUuQ0FOQ0VMRUQ6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFRhc2tTdGF0ZS5FUlJPUjpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b0NhbGwgPSB0aGlzLl9yZWplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmModG9DYWxsLmJpbmQobnVsbCwgdGhpcy5fZXJyb3IpKSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHJpZ2dlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNvbHZlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVqZWN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX25vdGlmeU9ic2VydmVyKG9ic2VydmVyKSB7XHJcbiAgICAgICAgY29uc3QgZXh0ZXJuYWxTdGF0ZSA9IHRhc2tTdGF0ZUZyb21JbnRlcm5hbFRhc2tTdGF0ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgc3dpdGNoIChleHRlcm5hbFN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLlJVTk5JTkc6XHJcbiAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLlBBVVNFRDpcclxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMob2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyLCB0aGlzLnNuYXBzaG90KSkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFRhc2tTdGF0ZS5TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmVyLmNvbXBsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMob2JzZXJ2ZXIuY29tcGxldGUuYmluZChvYnNlcnZlcikpKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBUYXNrU3RhdGUuQ0FOQ0VMRUQ6XHJcbiAgICAgICAgICAgIGNhc2UgVGFza1N0YXRlLkVSUk9SOlxyXG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmVyLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMob2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlciwgdGhpcy5fZXJyb3IpKSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGFuZHlzb3RvKTogYXNzZXJ0KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChvYnNlcnZlci5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jKG9ic2VydmVyLmVycm9yLmJpbmQob2JzZXJ2ZXIsIHRoaXMuX2Vycm9yKSkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlc3VtZXMgYSBwYXVzZWQgdGFzay4gSGFzIG5vIGVmZmVjdCBvbiBhIGN1cnJlbnRseSBydW5uaW5nIG9yIGZhaWxlZCB0YXNrLlxyXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb3BlcmF0aW9uIHRvb2sgZWZmZWN0LCBmYWxzZSBpZiBpZ25vcmVkLlxyXG4gICAgICovXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWQgPSB0aGlzLl9zdGF0ZSA9PT0gXCJwYXVzZWRcIiAvKiBQQVVTRUQgKi8gfHxcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPT09IFwicGF1c2luZ1wiIC8qIFBBVVNJTkcgKi87XHJcbiAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24oXCJydW5uaW5nXCIgLyogUlVOTklORyAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUGF1c2VzIGEgY3VycmVudGx5IHJ1bm5pbmcgdGFzay4gSGFzIG5vIGVmZmVjdCBvbiBhIHBhdXNlZCBvciBmYWlsZWQgdGFzay5cclxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIG9wZXJhdGlvbiB0b29rIGVmZmVjdCwgZmFsc2UgaWYgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgcGF1c2UoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWQgPSB0aGlzLl9zdGF0ZSA9PT0gXCJydW5uaW5nXCIgLyogUlVOTklORyAqLztcclxuICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbihcInBhdXNpbmdcIiAvKiBQQVVTSU5HICovKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYW5jZWxzIGEgY3VycmVudGx5IHJ1bm5pbmcgb3IgcGF1c2VkIHRhc2suIEhhcyBubyBlZmZlY3Qgb24gYSBjb21wbGV0ZSBvclxyXG4gICAgICogZmFpbGVkIHRhc2suXHJcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvcGVyYXRpb24gdG9vayBlZmZlY3QsIGZhbHNlIGlmIGlnbm9yZWQuXHJcbiAgICAgKi9cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICBjb25zdCB2YWxpZCA9IHRoaXMuX3N0YXRlID09PSBcInJ1bm5pbmdcIiAvKiBSVU5OSU5HICovIHx8XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID09PSBcInBhdXNpbmdcIiAvKiBQQVVTSU5HICovO1xyXG4gICAgICAgIGlmICh2YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uKFwiY2FuY2VsaW5nXCIgLyogQ0FOQ0VMSU5HICovKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBtZXRob2RzIHRvIGludGVyYWN0IHdpdGggYSBidWNrZXQgaW4gdGhlIEZpcmViYXNlIFN0b3JhZ2Ugc2VydmljZS5cclxuICogQGludGVybmFsXHJcbiAqIEBwYXJhbSBfbG9jYXRpb24gLSBBbiBmYnMubG9jYXRpb24sIG9yIHRoZSBVUkwgYXRcclxuICogICAgIHdoaWNoIHRvIGJhc2UgdGhpcyBvYmplY3QsIGluIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1zOlxyXG4gKiAgICAgICAgIGdzOi8vPGJ1Y2tldD4vPG9iamVjdC1wYXRoPlxyXG4gKiAgICAgICAgIGh0dHBbc106Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vXHJcbiAqICAgICAgICAgICAgICAgICAgICAgPGFwaS12ZXJzaW9uPi9iLzxidWNrZXQ+L28vPG9iamVjdC1wYXRoPlxyXG4gKiAgICAgQW55IHF1ZXJ5IG9yIGZyYWdtZW50IHN0cmluZ3Mgd2lsbCBiZSBpZ25vcmVkIGluIHRoZSBodHRwW3NdXHJcbiAqICAgICBmb3JtYXQuIElmIG5vIHZhbHVlIGlzIHBhc3NlZCwgdGhlIHN0b3JhZ2Ugb2JqZWN0IHdpbGwgdXNlIGEgVVJMIGJhc2VkIG9uXHJcbiAqICAgICB0aGUgcHJvamVjdCBJRCBvZiB0aGUgYmFzZSBmaXJlYmFzZS5BcHAgaW5zdGFuY2UuXHJcbiAqL1xyXG5jbGFzcyBSZWZlcmVuY2Uge1xyXG4gICAgY29uc3RydWN0b3IoX3NlcnZpY2UsIGxvY2F0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZSA9IF9zZXJ2aWNlO1xyXG4gICAgICAgIGlmIChsb2NhdGlvbiBpbnN0YW5jZW9mIExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2NhdGlvbiA9IExvY2F0aW9uLm1ha2VGcm9tVXJsKGxvY2F0aW9uLCBfc2VydmljZS5ob3N0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIFVSTCBmb3IgdGhlIGJ1Y2tldCBhbmQgcGF0aCB0aGlzIG9iamVjdCByZWZlcmVuY2VzLFxyXG4gICAgICogICAgIGluIHRoZSBmb3JtIGdzOi8vPGJ1Y2tldD4vPG9iamVjdC1wYXRoPlxyXG4gICAgICogQG92ZXJyaWRlXHJcbiAgICAgKi9cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiAnZ3M6Ly8nICsgdGhpcy5fbG9jYXRpb24uYnVja2V0ICsgJy8nICsgdGhpcy5fbG9jYXRpb24ucGF0aDtcclxuICAgIH1cclxuICAgIF9uZXdSZWYoc2VydmljZSwgbG9jYXRpb24pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlZmVyZW5jZShzZXJ2aWNlLCBsb2NhdGlvbik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSByb290IG9mIHRoaXMgb2JqZWN0J3MgYnVja2V0LlxyXG4gICAgICovXHJcbiAgICBnZXQgcm9vdCgpIHtcclxuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbih0aGlzLl9sb2NhdGlvbi5idWNrZXQsICcnKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmV3UmVmKHRoaXMuX3NlcnZpY2UsIGxvY2F0aW9uKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIGJ1Y2tldCBjb250YWluaW5nIHRoaXMgcmVmZXJlbmNlJ3Mgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBnZXQgYnVja2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbi5idWNrZXQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmdWxsIHBhdGggb2YgdGhpcyBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIGdldCBmdWxsUGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9jYXRpb24ucGF0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhlIHNob3J0IG5hbWUgb2YgdGhpcyBvYmplY3QsIHdoaWNoIGlzIHRoZSBsYXN0IGNvbXBvbmVudCBvZiB0aGUgZnVsbCBwYXRoLlxyXG4gICAgICogRm9yIGV4YW1wbGUsIGlmIGZ1bGxQYXRoIGlzICdmdWxsL3BhdGgvaW1hZ2UucG5nJywgbmFtZSBpcyAnaW1hZ2UucG5nJy5cclxuICAgICAqL1xyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxhc3RDb21wb25lbnQodGhpcy5fbG9jYXRpb24ucGF0aCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBgU3RvcmFnZVNlcnZpY2VgIGluc3RhbmNlIHRoaXMgYFN0b3JhZ2VSZWZlcmVuY2VgIGlzIGFzc29jaWF0ZWQgd2l0aC5cclxuICAgICAqL1xyXG4gICAgZ2V0IHN0b3JhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEEgYFN0b3JhZ2VSZWZlcmVuY2VgIHBvaW50aW5nIHRvIHRoZSBwYXJlbnQgbG9jYXRpb24gb2YgdGhpcyBgU3RvcmFnZVJlZmVyZW5jZWAsIG9yIG51bGwgaWZcclxuICAgICAqIHRoaXMgcmVmZXJlbmNlIGlzIHRoZSByb290LlxyXG4gICAgICovXHJcbiAgICBnZXQgcGFyZW50KCkge1xyXG4gICAgICAgIGNvbnN0IG5ld1BhdGggPSBwYXJlbnQodGhpcy5fbG9jYXRpb24ucGF0aCk7XHJcbiAgICAgICAgaWYgKG5ld1BhdGggPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gbmV3IExvY2F0aW9uKHRoaXMuX2xvY2F0aW9uLmJ1Y2tldCwgbmV3UGF0aCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWZlcmVuY2UodGhpcy5fc2VydmljZSwgbG9jYXRpb24pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIHRocm93IGFuIGVycm9yIGluIG1ldGhvZHMgdGhhdCBkbyBub3QgYWNjZXB0IGEgcm9vdCByZWZlcmVuY2UuXHJcbiAgICAgKi9cclxuICAgIF90aHJvd0lmUm9vdChuYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xvY2F0aW9uLnBhdGggPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHRocm93IGludmFsaWRSb290T3BlcmF0aW9uKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vKipcclxuICogRG93bmxvYWQgdGhlIGJ5dGVzIGF0IHRoZSBvYmplY3QncyBsb2NhdGlvbi5cclxuICogQHJldHVybnMgQSBQcm9taXNlIGNvbnRhaW5pbmcgdGhlIGRvd25sb2FkZWQgYnl0ZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRCeXRlc0ludGVybmFsKHJlZiwgbWF4RG93bmxvYWRTaXplQnl0ZXMpIHtcclxuICAgIHJlZi5fdGhyb3dJZlJvb3QoJ2dldEJ5dGVzJyk7XHJcbiAgICBjb25zdCByZXF1ZXN0SW5mbyA9IGdldEJ5dGVzJDEocmVmLnN0b3JhZ2UsIHJlZi5fbG9jYXRpb24sIG1heERvd25sb2FkU2l6ZUJ5dGVzKTtcclxuICAgIHJldHVybiByZWYuc3RvcmFnZVxyXG4gICAgICAgIC5tYWtlUmVxdWVzdFdpdGhUb2tlbnMocmVxdWVzdEluZm8sIG5ld0J5dGVzQ29ubmVjdGlvbilcclxuICAgICAgICAudGhlbihieXRlcyA9PiBtYXhEb3dubG9hZFNpemVCeXRlcyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyAvLyBHQ1MgbWF5IG5vdCBob25vciB0aGUgUmFuZ2UgaGVhZGVyIGZvciBzbWFsbCBmaWxlc1xyXG4gICAgICAgICAgICBieXRlcy5zbGljZSgwLCBtYXhEb3dubG9hZFNpemVCeXRlcylcclxuICAgICAgICA6IGJ5dGVzKTtcclxufVxyXG4vKipcclxuICogRG93bmxvYWQgdGhlIGJ5dGVzIGF0IHRoZSBvYmplY3QncyBsb2NhdGlvbi5cclxuICogQHJldHVybnMgQSBQcm9taXNlIGNvbnRhaW5pbmcgdGhlIGRvd25sb2FkZWQgYmxvYi5cclxuICovXHJcbmZ1bmN0aW9uIGdldEJsb2JJbnRlcm5hbChyZWYsIG1heERvd25sb2FkU2l6ZUJ5dGVzKSB7XHJcbiAgICByZWYuX3Rocm93SWZSb290KCdnZXRCbG9iJyk7XHJcbiAgICBjb25zdCByZXF1ZXN0SW5mbyA9IGdldEJ5dGVzJDEocmVmLnN0b3JhZ2UsIHJlZi5fbG9jYXRpb24sIG1heERvd25sb2FkU2l6ZUJ5dGVzKTtcclxuICAgIHJldHVybiByZWYuc3RvcmFnZVxyXG4gICAgICAgIC5tYWtlUmVxdWVzdFdpdGhUb2tlbnMocmVxdWVzdEluZm8sIG5ld0Jsb2JDb25uZWN0aW9uKVxyXG4gICAgICAgIC50aGVuKGJsb2IgPT4gbWF4RG93bmxvYWRTaXplQnl0ZXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gLy8gR0NTIG1heSBub3QgaG9ub3IgdGhlIFJhbmdlIGhlYWRlciBmb3Igc21hbGwgZmlsZXNcclxuICAgICAgICAgICAgYmxvYi5zbGljZSgwLCBtYXhEb3dubG9hZFNpemVCeXRlcylcclxuICAgICAgICA6IGJsb2IpO1xyXG59XHJcbi8qKlxyXG4gKiBVcGxvYWRzIGRhdGEgdG8gdGhpcyBvYmplY3QncyBsb2NhdGlvbi5cclxuICogVGhlIHVwbG9hZCBpcyBub3QgcmVzdW1hYmxlLlxyXG4gKlxyXG4gKiBAcGFyYW0gcmVmIC0gU3RvcmFnZVJlZmVyZW5jZSB3aGVyZSBkYXRhIHNob3VsZCBiZSB1cGxvYWRlZC5cclxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSB0byB1cGxvYWQuXHJcbiAqIEBwYXJhbSBtZXRhZGF0YSAtIE1ldGFkYXRhIGZvciB0aGUgbmV3bHkgdXBsb2FkZWQgZGF0YS5cclxuICogQHJldHVybnMgQSBQcm9taXNlIGNvbnRhaW5pbmcgYW4gVXBsb2FkUmVzdWx0XHJcbiAqL1xyXG5mdW5jdGlvbiB1cGxvYWRCeXRlcyQxKHJlZiwgZGF0YSwgbWV0YWRhdGEpIHtcclxuICAgIHJlZi5fdGhyb3dJZlJvb3QoJ3VwbG9hZEJ5dGVzJyk7XHJcbiAgICBjb25zdCByZXF1ZXN0SW5mbyA9IG11bHRpcGFydFVwbG9hZChyZWYuc3RvcmFnZSwgcmVmLl9sb2NhdGlvbiwgZ2V0TWFwcGluZ3MoKSwgbmV3IEZic0Jsb2IoZGF0YSwgdHJ1ZSksIG1ldGFkYXRhKTtcclxuICAgIHJldHVybiByZWYuc3RvcmFnZVxyXG4gICAgICAgIC5tYWtlUmVxdWVzdFdpdGhUb2tlbnMocmVxdWVzdEluZm8sIG5ld1RleHRDb25uZWN0aW9uKVxyXG4gICAgICAgIC50aGVuKGZpbmFsTWV0YWRhdGEgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhOiBmaW5hbE1ldGFkYXRhLFxyXG4gICAgICAgICAgICByZWZcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuLyoqXHJcbiAqIFVwbG9hZHMgZGF0YSB0byB0aGlzIG9iamVjdCdzIGxvY2F0aW9uLlxyXG4gKiBUaGUgdXBsb2FkIGNhbiBiZSBwYXVzZWQgYW5kIHJlc3VtZWQsIGFuZCBleHBvc2VzIHByb2dyZXNzIHVwZGF0ZXMuXHJcbiAqIEBwdWJsaWNcclxuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2Ugd2hlcmUgZGF0YSBzaG91bGQgYmUgdXBsb2FkZWQuXHJcbiAqIEBwYXJhbSBkYXRhIC0gVGhlIGRhdGEgdG8gdXBsb2FkLlxyXG4gKiBAcGFyYW0gbWV0YWRhdGEgLSBNZXRhZGF0YSBmb3IgdGhlIG5ld2x5IHVwbG9hZGVkIGRhdGEuXHJcbiAqIEByZXR1cm5zIEFuIFVwbG9hZFRhc2tcclxuICovXHJcbmZ1bmN0aW9uIHVwbG9hZEJ5dGVzUmVzdW1hYmxlJDEocmVmLCBkYXRhLCBtZXRhZGF0YSkge1xyXG4gICAgcmVmLl90aHJvd0lmUm9vdCgndXBsb2FkQnl0ZXNSZXN1bWFibGUnKTtcclxuICAgIHJldHVybiBuZXcgVXBsb2FkVGFzayhyZWYsIG5ldyBGYnNCbG9iKGRhdGEpLCBtZXRhZGF0YSk7XHJcbn1cclxuLyoqXHJcbiAqIFVwbG9hZHMgYSBzdHJpbmcgdG8gdGhpcyBvYmplY3QncyBsb2NhdGlvbi5cclxuICogVGhlIHVwbG9hZCBpcyBub3QgcmVzdW1hYmxlLlxyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIHdoZXJlIHN0cmluZyBzaG91bGQgYmUgdXBsb2FkZWQuXHJcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSBzdHJpbmcgdG8gdXBsb2FkLlxyXG4gKiBAcGFyYW0gZm9ybWF0IC0gVGhlIGZvcm1hdCBvZiB0aGUgc3RyaW5nIHRvIHVwbG9hZC5cclxuICogQHBhcmFtIG1ldGFkYXRhIC0gTWV0YWRhdGEgZm9yIHRoZSBuZXdseSB1cGxvYWRlZCBzdHJpbmcuXHJcbiAqIEByZXR1cm5zIEEgUHJvbWlzZSBjb250YWluaW5nIGFuIFVwbG9hZFJlc3VsdFxyXG4gKi9cclxuZnVuY3Rpb24gdXBsb2FkU3RyaW5nJDEocmVmLCB2YWx1ZSwgZm9ybWF0ID0gU3RyaW5nRm9ybWF0LlJBVywgbWV0YWRhdGEpIHtcclxuICAgIHJlZi5fdGhyb3dJZlJvb3QoJ3VwbG9hZFN0cmluZycpO1xyXG4gICAgY29uc3QgZGF0YSA9IGRhdGFGcm9tU3RyaW5nKGZvcm1hdCwgdmFsdWUpO1xyXG4gICAgY29uc3QgbWV0YWRhdGFDbG9uZSA9IE9iamVjdC5hc3NpZ24oe30sIG1ldGFkYXRhKTtcclxuICAgIGlmIChtZXRhZGF0YUNsb25lWydjb250ZW50VHlwZSddID09IG51bGwgJiYgZGF0YS5jb250ZW50VHlwZSAhPSBudWxsKSB7XHJcbiAgICAgICAgbWV0YWRhdGFDbG9uZVsnY29udGVudFR5cGUnXSA9IGRhdGEuY29udGVudFR5cGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXBsb2FkQnl0ZXMkMShyZWYsIGRhdGEuZGF0YSwgbWV0YWRhdGFDbG9uZSk7XHJcbn1cclxuLyoqXHJcbiAqIExpc3QgYWxsIGl0ZW1zIChmaWxlcykgYW5kIHByZWZpeGVzIChmb2xkZXJzKSB1bmRlciB0aGlzIHN0b3JhZ2UgcmVmZXJlbmNlLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGEgaGVscGVyIG1ldGhvZCBmb3IgY2FsbGluZyBsaXN0KCkgcmVwZWF0ZWRseSB1bnRpbCB0aGVyZSBhcmVcclxuICogbm8gbW9yZSByZXN1bHRzLiBUaGUgZGVmYXVsdCBwYWdpbmF0aW9uIHNpemUgaXMgMTAwMC5cclxuICpcclxuICogTm90ZTogVGhlIHJlc3VsdHMgbWF5IG5vdCBiZSBjb25zaXN0ZW50IGlmIG9iamVjdHMgYXJlIGNoYW5nZWQgd2hpbGUgdGhpc1xyXG4gKiBvcGVyYXRpb24gaXMgcnVubmluZy5cclxuICpcclxuICogV2FybmluZzogbGlzdEFsbCBtYXkgcG90ZW50aWFsbHkgY29uc3VtZSB0b28gbWFueSByZXNvdXJjZXMgaWYgdGhlcmUgYXJlXHJcbiAqIHRvbyBtYW55IHJlc3VsdHMuXHJcbiAqIEBwdWJsaWNcclxuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2UgdG8gZ2V0IGxpc3QgZnJvbS5cclxuICpcclxuICogQHJldHVybnMgQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbGwgdGhlIGl0ZW1zIGFuZCBwcmVmaXhlcyB1bmRlclxyXG4gKiAgICAgIHRoZSBjdXJyZW50IHN0b3JhZ2UgcmVmZXJlbmNlLiBgcHJlZml4ZXNgIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG9cclxuICogICAgICBzdWItZGlyZWN0b3JpZXMgYW5kIGBpdGVtc2AgY29udGFpbnMgcmVmZXJlbmNlcyB0byBvYmplY3RzIGluIHRoaXNcclxuICogICAgICBmb2xkZXIuIGBuZXh0UGFnZVRva2VuYCBpcyBuZXZlciByZXR1cm5lZC5cclxuICovXHJcbmZ1bmN0aW9uIGxpc3RBbGwkMShyZWYpIHtcclxuICAgIGNvbnN0IGFjY3VtdWxhdG9yID0ge1xyXG4gICAgICAgIHByZWZpeGVzOiBbXSxcclxuICAgICAgICBpdGVtczogW11cclxuICAgIH07XHJcbiAgICByZXR1cm4gbGlzdEFsbEhlbHBlcihyZWYsIGFjY3VtdWxhdG9yKS50aGVuKCgpID0+IGFjY3VtdWxhdG9yKTtcclxufVxyXG4vKipcclxuICogU2VwYXJhdGVkIGZyb20gbGlzdEFsbCBiZWNhdXNlIGFzeW5jIGZ1bmN0aW9ucyBjYW4ndCB1c2UgXCJhcmd1bWVudHNcIi5cclxuICogQHBhcmFtIHJlZlxyXG4gKiBAcGFyYW0gYWNjdW11bGF0b3JcclxuICogQHBhcmFtIHBhZ2VUb2tlblxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbGlzdEFsbEhlbHBlcihyZWYsIGFjY3VtdWxhdG9yLCBwYWdlVG9rZW4pIHtcclxuICAgIGNvbnN0IG9wdCA9IHtcclxuICAgICAgICAvLyBtYXhSZXN1bHRzIGlzIDEwMDAgYnkgZGVmYXVsdC5cclxuICAgICAgICBwYWdlVG9rZW5cclxuICAgIH07XHJcbiAgICBjb25zdCBuZXh0UGFnZSA9IGF3YWl0IGxpc3QkMShyZWYsIG9wdCk7XHJcbiAgICBhY2N1bXVsYXRvci5wcmVmaXhlcy5wdXNoKC4uLm5leHRQYWdlLnByZWZpeGVzKTtcclxuICAgIGFjY3VtdWxhdG9yLml0ZW1zLnB1c2goLi4ubmV4dFBhZ2UuaXRlbXMpO1xyXG4gICAgaWYgKG5leHRQYWdlLm5leHRQYWdlVG9rZW4gIT0gbnVsbCkge1xyXG4gICAgICAgIGF3YWl0IGxpc3RBbGxIZWxwZXIocmVmLCBhY2N1bXVsYXRvciwgbmV4dFBhZ2UubmV4dFBhZ2VUb2tlbik7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIExpc3QgaXRlbXMgKGZpbGVzKSBhbmQgcHJlZml4ZXMgKGZvbGRlcnMpIHVuZGVyIHRoaXMgc3RvcmFnZSByZWZlcmVuY2UuXHJcbiAqXHJcbiAqIExpc3QgQVBJIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBGaXJlYmFzZSBSdWxlcyBWZXJzaW9uIDIuXHJcbiAqXHJcbiAqIEdDUyBpcyBhIGtleS1ibG9iIHN0b3JlLiBGaXJlYmFzZSBTdG9yYWdlIGltcG9zZXMgdGhlIHNlbWFudGljIG9mICcvJ1xyXG4gKiBkZWxpbWl0ZWQgZm9sZGVyIHN0cnVjdHVyZS5cclxuICogUmVmZXIgdG8gR0NTJ3MgTGlzdCBBUEkgaWYgeW91IHdhbnQgdG8gbGVhcm4gbW9yZS5cclxuICpcclxuICogVG8gYWRoZXJlIHRvIEZpcmViYXNlIFJ1bGVzJ3MgU2VtYW50aWNzLCBGaXJlYmFzZSBTdG9yYWdlIGRvZXMgbm90XHJcbiAqIHN1cHBvcnQgb2JqZWN0cyB3aG9zZSBwYXRocyBlbmQgd2l0aCBcIi9cIiBvciBjb250YWluIHR3byBjb25zZWN1dGl2ZVxyXG4gKiBcIi9cInMuIEZpcmViYXNlIFN0b3JhZ2UgTGlzdCBBUEkgd2lsbCBmaWx0ZXIgdGhlc2UgdW5zdXBwb3J0ZWQgb2JqZWN0cy5cclxuICogbGlzdCgpIG1heSBmYWlsIGlmIHRoZXJlIGFyZSB0b28gbWFueSB1bnN1cHBvcnRlZCBvYmplY3RzIGluIHRoZSBidWNrZXQuXHJcbiAqIEBwdWJsaWNcclxuICpcclxuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2UgdG8gZ2V0IGxpc3QgZnJvbS5cclxuICogQHBhcmFtIG9wdGlvbnMgLSBTZWUgTGlzdE9wdGlvbnMgZm9yIGRldGFpbHMuXHJcbiAqIEByZXR1cm5zIEEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGl0ZW1zIGFuZCBwcmVmaXhlcy5cclxuICogICAgICBgcHJlZml4ZXNgIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gc3ViLWZvbGRlcnMgYW5kIGBpdGVtc2BcclxuICogICAgICBjb250YWlucyByZWZlcmVuY2VzIHRvIG9iamVjdHMgaW4gdGhpcyBmb2xkZXIuIGBuZXh0UGFnZVRva2VuYFxyXG4gKiAgICAgIGNhbiBiZSB1c2VkIHRvIGdldCB0aGUgcmVzdCBvZiB0aGUgcmVzdWx0cy5cclxuICovXHJcbmZ1bmN0aW9uIGxpc3QkMShyZWYsIG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zICE9IG51bGwpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMubWF4UmVzdWx0cyA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGVOdW1iZXIoJ29wdGlvbnMubWF4UmVzdWx0cycsIFxyXG4gICAgICAgICAgICAvKiBtaW5WYWx1ZT0gKi8gMSwgXHJcbiAgICAgICAgICAgIC8qIG1heFZhbHVlPSAqLyAxMDAwLCBvcHRpb25zLm1heFJlc3VsdHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG9wID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIGNvbnN0IHJlcXVlc3RJbmZvID0gbGlzdCQyKHJlZi5zdG9yYWdlLCByZWYuX2xvY2F0aW9uLCBcclxuICAgIC8qZGVsaW1pdGVyPSAqLyAnLycsIG9wLnBhZ2VUb2tlbiwgb3AubWF4UmVzdWx0cyk7XHJcbiAgICByZXR1cm4gcmVmLnN0b3JhZ2UubWFrZVJlcXVlc3RXaXRoVG9rZW5zKHJlcXVlc3RJbmZvLCBuZXdUZXh0Q29ubmVjdGlvbik7XHJcbn1cclxuLyoqXHJcbiAqIEEgYFByb21pc2VgIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbWV0YWRhdGEgZm9yIHRoaXMgb2JqZWN0LiBJZiB0aGlzXHJcbiAqIG9iamVjdCBkb2Vzbid0IGV4aXN0IG9yIG1ldGFkYXRhIGNhbm5vdCBiZSByZXRyZWl2ZWQsIHRoZSBwcm9taXNlIGlzXHJcbiAqIHJlamVjdGVkLlxyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIHRvIGdldCBtZXRhZGF0YSBmcm9tLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TWV0YWRhdGEkMShyZWYpIHtcclxuICAgIHJlZi5fdGhyb3dJZlJvb3QoJ2dldE1ldGFkYXRhJyk7XHJcbiAgICBjb25zdCByZXF1ZXN0SW5mbyA9IGdldE1ldGFkYXRhJDIocmVmLnN0b3JhZ2UsIHJlZi5fbG9jYXRpb24sIGdldE1hcHBpbmdzKCkpO1xyXG4gICAgcmV0dXJuIHJlZi5zdG9yYWdlLm1ha2VSZXF1ZXN0V2l0aFRva2VucyhyZXF1ZXN0SW5mbywgbmV3VGV4dENvbm5lY3Rpb24pO1xyXG59XHJcbi8qKlxyXG4gKiBVcGRhdGVzIHRoZSBtZXRhZGF0YSBmb3IgdGhpcyBvYmplY3QuXHJcbiAqIEBwdWJsaWNcclxuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2UgdG8gdXBkYXRlIG1ldGFkYXRhIGZvci5cclxuICogQHBhcmFtIG1ldGFkYXRhIC0gVGhlIG5ldyBtZXRhZGF0YSBmb3IgdGhlIG9iamVjdC5cclxuICogICAgIE9ubHkgdmFsdWVzIHRoYXQgaGF2ZSBiZWVuIGV4cGxpY2l0bHkgc2V0IHdpbGwgYmUgY2hhbmdlZC4gRXhwbGljaXRseVxyXG4gKiAgICAgc2V0dGluZyBhIHZhbHVlIHRvIG51bGwgd2lsbCByZW1vdmUgdGhlIG1ldGFkYXRhLlxyXG4gKiBAcmV0dXJucyBBIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzXHJcbiAqICAgICB3aXRoIHRoZSBuZXcgbWV0YWRhdGEgZm9yIHRoaXMgb2JqZWN0LlxyXG4gKiAgICAgU2VlIGBmaXJlYmFzZVN0b3JhZ2UuUmVmZXJlbmNlLnByb3RvdHlwZS5nZXRNZXRhZGF0YWBcclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZU1ldGFkYXRhJDEocmVmLCBtZXRhZGF0YSkge1xyXG4gICAgcmVmLl90aHJvd0lmUm9vdCgndXBkYXRlTWV0YWRhdGEnKTtcclxuICAgIGNvbnN0IHJlcXVlc3RJbmZvID0gdXBkYXRlTWV0YWRhdGEkMihyZWYuc3RvcmFnZSwgcmVmLl9sb2NhdGlvbiwgbWV0YWRhdGEsIGdldE1hcHBpbmdzKCkpO1xyXG4gICAgcmV0dXJuIHJlZi5zdG9yYWdlLm1ha2VSZXF1ZXN0V2l0aFRva2VucyhyZXF1ZXN0SW5mbywgbmV3VGV4dENvbm5lY3Rpb24pO1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkb3dubG9hZCBVUkwgZm9yIHRoZSBnaXZlbiBSZWZlcmVuY2UuXHJcbiAqIEBwdWJsaWNcclxuICogQHJldHVybnMgQSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBkb3dubG9hZFxyXG4gKiAgICAgVVJMIGZvciB0aGlzIG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIGdldERvd25sb2FkVVJMJDEocmVmKSB7XHJcbiAgICByZWYuX3Rocm93SWZSb290KCdnZXREb3dubG9hZFVSTCcpO1xyXG4gICAgY29uc3QgcmVxdWVzdEluZm8gPSBnZXREb3dubG9hZFVybChyZWYuc3RvcmFnZSwgcmVmLl9sb2NhdGlvbiwgZ2V0TWFwcGluZ3MoKSk7XHJcbiAgICByZXR1cm4gcmVmLnN0b3JhZ2VcclxuICAgICAgICAubWFrZVJlcXVlc3RXaXRoVG9rZW5zKHJlcXVlc3RJbmZvLCBuZXdUZXh0Q29ubmVjdGlvbilcclxuICAgICAgICAudGhlbih1cmwgPT4ge1xyXG4gICAgICAgIGlmICh1cmwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbm9Eb3dubG9hZFVSTCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfSk7XHJcbn1cclxuLyoqXHJcbiAqIERlbGV0ZXMgdGhlIG9iamVjdCBhdCB0aGlzIGxvY2F0aW9uLlxyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIGZvciBvYmplY3QgdG8gZGVsZXRlLlxyXG4gKiBAcmV0dXJucyBBIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIGlmIHRoZSBkZWxldGlvbiBzdWNjZWVkcy5cclxuICovXHJcbmZ1bmN0aW9uIGRlbGV0ZU9iamVjdCQxKHJlZikge1xyXG4gICAgcmVmLl90aHJvd0lmUm9vdCgnZGVsZXRlT2JqZWN0Jyk7XHJcbiAgICBjb25zdCByZXF1ZXN0SW5mbyA9IGRlbGV0ZU9iamVjdCQyKHJlZi5zdG9yYWdlLCByZWYuX2xvY2F0aW9uKTtcclxuICAgIHJldHVybiByZWYuc3RvcmFnZS5tYWtlUmVxdWVzdFdpdGhUb2tlbnMocmVxdWVzdEluZm8sIG5ld1RleHRDb25uZWN0aW9uKTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyByZWZlcmVuY2UgZm9yIG9iamVjdCBvYnRhaW5lZCBieSBhcHBlbmRpbmcgYGNoaWxkUGF0aGAgdG8gYHJlZmAuXHJcbiAqXHJcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIHRvIGdldCBjaGlsZCBvZi5cclxuICogQHBhcmFtIGNoaWxkUGF0aCAtIENoaWxkIHBhdGggZnJvbSBwcm92aWRlZCByZWYuXHJcbiAqIEByZXR1cm5zIEEgcmVmZXJlbmNlIHRvIHRoZSBvYmplY3Qgb2J0YWluZWQgYnlcclxuICogYXBwZW5kaW5nIGNoaWxkUGF0aCwgcmVtb3ZpbmcgYW55IGR1cGxpY2F0ZSwgYmVnaW5uaW5nLCBvciB0cmFpbGluZ1xyXG4gKiBzbGFzaGVzLlxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gX2dldENoaWxkJDEocmVmLCBjaGlsZFBhdGgpIHtcclxuICAgIGNvbnN0IG5ld1BhdGggPSBjaGlsZChyZWYuX2xvY2F0aW9uLnBhdGgsIGNoaWxkUGF0aCk7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IG5ldyBMb2NhdGlvbihyZWYuX2xvY2F0aW9uLmJ1Y2tldCwgbmV3UGF0aCk7XHJcbiAgICByZXR1cm4gbmV3IFJlZmVyZW5jZShyZWYuc3RvcmFnZSwgbG9jYXRpb24pO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGlzVXJsKHBhdGgpIHtcclxuICAgIHJldHVybiAvXltBLVphLXpdKzpcXC9cXC8vLnRlc3QocGF0aCk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmaXJlYmFzZVN0b3JhZ2UuUmVmZXJlbmNlIGZvciB0aGUgZ2l2ZW4gdXJsLlxyXG4gKi9cclxuZnVuY3Rpb24gcmVmRnJvbVVSTChzZXJ2aWNlLCB1cmwpIHtcclxuICAgIHJldHVybiBuZXcgUmVmZXJlbmNlKHNlcnZpY2UsIHVybCk7XHJcbn1cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmaXJlYmFzZVN0b3JhZ2UuUmVmZXJlbmNlIGZvciB0aGUgZ2l2ZW4gcGF0aCBpbiB0aGUgZGVmYXVsdFxyXG4gKiBidWNrZXQuXHJcbiAqL1xyXG5mdW5jdGlvbiByZWZGcm9tUGF0aChyZWYsIHBhdGgpIHtcclxuICAgIGlmIChyZWYgaW5zdGFuY2VvZiBGaXJlYmFzZVN0b3JhZ2VJbXBsKSB7XHJcbiAgICAgICAgY29uc3Qgc2VydmljZSA9IHJlZjtcclxuICAgICAgICBpZiAoc2VydmljZS5fYnVja2V0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbm9EZWZhdWx0QnVja2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2Uoc2VydmljZSwgc2VydmljZS5fYnVja2V0KTtcclxuICAgICAgICBpZiAocGF0aCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWZGcm9tUGF0aChyZWZlcmVuY2UsIHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZmVyZW5jZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyByZWYgaXMgYSBSZWZlcmVuY2VcclxuICAgICAgICBpZiAocGF0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfZ2V0Q2hpbGQkMShyZWYsIHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVmJDEoc2VydmljZU9yUmVmLCBwYXRoT3JVcmwpIHtcclxuICAgIGlmIChwYXRoT3JVcmwgJiYgaXNVcmwocGF0aE9yVXJsKSkge1xyXG4gICAgICAgIGlmIChzZXJ2aWNlT3JSZWYgaW5zdGFuY2VvZiBGaXJlYmFzZVN0b3JhZ2VJbXBsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWZGcm9tVVJMKHNlcnZpY2VPclJlZiwgcGF0aE9yVXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IGludmFsaWRBcmd1bWVudCgnVG8gdXNlIHJlZihzZXJ2aWNlLCB1cmwpLCB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIFN0b3JhZ2UgaW5zdGFuY2UuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlZkZyb21QYXRoKHNlcnZpY2VPclJlZiwgcGF0aE9yVXJsKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBleHRyYWN0QnVja2V0KGhvc3QsIGNvbmZpZykge1xyXG4gICAgY29uc3QgYnVja2V0U3RyaW5nID0gY29uZmlnID09PSBudWxsIHx8IGNvbmZpZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29uZmlnW0NPTkZJR19TVE9SQUdFX0JVQ0tFVF9LRVldO1xyXG4gICAgaWYgKGJ1Y2tldFN0cmluZyA9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTG9jYXRpb24ubWFrZUZyb21CdWNrZXRTcGVjKGJ1Y2tldFN0cmluZywgaG9zdCk7XHJcbn1cclxuZnVuY3Rpb24gY29ubmVjdFN0b3JhZ2VFbXVsYXRvciQxKHN0b3JhZ2UsIGhvc3QsIHBvcnQsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgc3RvcmFnZS5ob3N0ID0gYCR7aG9zdH06JHtwb3J0fWA7XHJcbiAgICBzdG9yYWdlLl9wcm90b2NvbCA9ICdodHRwJztcclxuICAgIGNvbnN0IHsgbW9ja1VzZXJUb2tlbiB9ID0gb3B0aW9ucztcclxuICAgIGlmIChtb2NrVXNlclRva2VuKSB7XHJcbiAgICAgICAgc3RvcmFnZS5fb3ZlcnJpZGVBdXRoVG9rZW4gPVxyXG4gICAgICAgICAgICB0eXBlb2YgbW9ja1VzZXJUb2tlbiA9PT0gJ3N0cmluZydcclxuICAgICAgICAgICAgICAgID8gbW9ja1VzZXJUb2tlblxyXG4gICAgICAgICAgICAgICAgOiBjcmVhdGVNb2NrVXNlclRva2VuKG1vY2tVc2VyVG9rZW4sIHN0b3JhZ2UuYXBwLm9wdGlvbnMucHJvamVjdElkKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQSBzZXJ2aWNlIHRoYXQgcHJvdmlkZXMgRmlyZWJhc2UgU3RvcmFnZSBSZWZlcmVuY2UgaW5zdGFuY2VzLlxyXG4gKiBAcGFyYW0gb3B0X3VybCAtIGdzOi8vIHVybCB0byBhIGN1c3RvbSBTdG9yYWdlIEJ1Y2tldFxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmNsYXNzIEZpcmViYXNlU3RvcmFnZUltcGwge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKipcclxuICAgICAqIEZpcmViYXNlQXBwIGFzc29jaWF0ZWQgd2l0aCB0aGlzIFN0b3JhZ2VTZXJ2aWNlIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBhcHAsIF9hdXRoUHJvdmlkZXIsIFxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgX2FwcENoZWNrUHJvdmlkZXIsIFxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW50ZXJuYWxcclxuICAgICAqL1xyXG4gICAgX3VybCwgX2ZpcmViYXNlVmVyc2lvbikge1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIHRoaXMuX2F1dGhQcm92aWRlciA9IF9hdXRoUHJvdmlkZXI7XHJcbiAgICAgICAgdGhpcy5fYXBwQ2hlY2tQcm92aWRlciA9IF9hcHBDaGVja1Byb3ZpZGVyO1xyXG4gICAgICAgIHRoaXMuX3VybCA9IF91cmw7XHJcbiAgICAgICAgdGhpcy5fZmlyZWJhc2VWZXJzaW9uID0gX2ZpcmViYXNlVmVyc2lvbjtcclxuICAgICAgICB0aGlzLl9idWNrZXQgPSBudWxsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgc3RyaW5nIGNhbiBiZSBpbiB0aGUgZm9ybWF0czpcclxuICAgICAgICAgKiAtIGhvc3RcclxuICAgICAgICAgKiAtIGhvc3Q6cG9ydFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2hvc3QgPSBERUZBVUxUX0hPU1Q7XHJcbiAgICAgICAgdGhpcy5fcHJvdG9jb2wgPSAnaHR0cHMnO1xyXG4gICAgICAgIHRoaXMuX2FwcElkID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9kZWxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fbWF4T3BlcmF0aW9uUmV0cnlUaW1lID0gREVGQVVMVF9NQVhfT1BFUkFUSU9OX1JFVFJZX1RJTUU7XHJcbiAgICAgICAgdGhpcy5fbWF4VXBsb2FkUmV0cnlUaW1lID0gREVGQVVMVF9NQVhfVVBMT0FEX1JFVFJZX1RJTUU7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgaWYgKF91cmwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWNrZXQgPSBMb2NhdGlvbi5tYWtlRnJvbUJ1Y2tldFNwZWMoX3VybCwgdGhpcy5faG9zdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9idWNrZXQgPSBleHRyYWN0QnVja2V0KHRoaXMuX2hvc3QsIHRoaXMuYXBwLm9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGhvc3Qgc3RyaW5nIGZvciB0aGlzIHNlcnZpY2UsIGluIHRoZSBmb3JtIG9mIGBob3N0YCBvclxyXG4gICAgICogYGhvc3Q6cG9ydGAuXHJcbiAgICAgKi9cclxuICAgIGdldCBob3N0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ob3N0O1xyXG4gICAgfVxyXG4gICAgc2V0IGhvc3QoaG9zdCkge1xyXG4gICAgICAgIHRoaXMuX2hvc3QgPSBob3N0O1xyXG4gICAgICAgIGlmICh0aGlzLl91cmwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9idWNrZXQgPSBMb2NhdGlvbi5tYWtlRnJvbUJ1Y2tldFNwZWModGhpcy5fdXJsLCBob3N0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2J1Y2tldCA9IGV4dHJhY3RCdWNrZXQoaG9zdCwgdGhpcy5hcHAub3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgbWF4aW11bSB0aW1lIHRvIHJldHJ5IHVwbG9hZHMgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAgICovXHJcbiAgICBnZXQgbWF4VXBsb2FkUmV0cnlUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhVcGxvYWRSZXRyeVRpbWU7XHJcbiAgICB9XHJcbiAgICBzZXQgbWF4VXBsb2FkUmV0cnlUaW1lKHRpbWUpIHtcclxuICAgICAgICB2YWxpZGF0ZU51bWJlcigndGltZScsIFxyXG4gICAgICAgIC8qIG1pblZhbHVlPSovIDAsIFxyXG4gICAgICAgIC8qIG1heFZhbHVlPSAqLyBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksIHRpbWUpO1xyXG4gICAgICAgIHRoaXMuX21heFVwbG9hZFJldHJ5VGltZSA9IHRpbWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBtYXhpbXVtIHRpbWUgdG8gcmV0cnkgb3BlcmF0aW9ucyBvdGhlciB0aGFuIHVwbG9hZHMgb3IgZG93bmxvYWRzIGluXHJcbiAgICAgKiBtaWxsaXNlY29uZHMuXHJcbiAgICAgKi9cclxuICAgIGdldCBtYXhPcGVyYXRpb25SZXRyeVRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heE9wZXJhdGlvblJldHJ5VGltZTtcclxuICAgIH1cclxuICAgIHNldCBtYXhPcGVyYXRpb25SZXRyeVRpbWUodGltZSkge1xyXG4gICAgICAgIHZhbGlkYXRlTnVtYmVyKCd0aW1lJywgXHJcbiAgICAgICAgLyogbWluVmFsdWU9Ki8gMCwgXHJcbiAgICAgICAgLyogbWF4VmFsdWU9ICovIE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgdGltZSk7XHJcbiAgICAgICAgdGhpcy5fbWF4T3BlcmF0aW9uUmV0cnlUaW1lID0gdGltZTtcclxuICAgIH1cclxuICAgIGFzeW5jIF9nZXRBdXRoVG9rZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX292ZXJyaWRlQXV0aFRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vdmVycmlkZUF1dGhUb2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXV0aCA9IHRoaXMuX2F1dGhQcm92aWRlci5nZXRJbW1lZGlhdGUoeyBvcHRpb25hbDogdHJ1ZSB9KTtcclxuICAgICAgICBpZiAoYXV0aCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbkRhdGEgPSBhd2FpdCBhdXRoLmdldFRva2VuKCk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbkRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbkRhdGEuYWNjZXNzVG9rZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBhc3luYyBfZ2V0QXBwQ2hlY2tUb2tlbigpIHtcclxuICAgICAgICBjb25zdCBhcHBDaGVjayA9IHRoaXMuX2FwcENoZWNrUHJvdmlkZXIuZ2V0SW1tZWRpYXRlKHsgb3B0aW9uYWw6IHRydWUgfSk7XHJcbiAgICAgICAgaWYgKGFwcENoZWNrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwcENoZWNrLmdldFRva2VuKCk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFdoYXQgZG8gd2Ugd2FudCB0byBkbyBpZiB0aGVyZSBpcyBhbiBlcnJvciBnZXR0aW5nIHRoZSB0b2tlbj9cclxuICAgICAgICAgICAgLy8gQ29udGV4dDogYXBwQ2hlY2suZ2V0VG9rZW4oKSB3aWxsIG5ldmVyIHRocm93IGV2ZW4gaWYgYW4gZXJyb3IgaGFwcGVuZWQuIEluIHRoZSBlcnJvciBjYXNlLCBhIGR1bW15IHRva2VuIHdpbGwgYmVcclxuICAgICAgICAgICAgLy8gcmV0dXJuZWQgYWxvbmcgd2l0aCBhbiBlcnJvciBmaWVsZCBkZXNjcmliaW5nIHRoZSBlcnJvci4gSW4gZ2VuZXJhbCwgd2Ugc2hvdWxkbid0IGNhcmUgYWJvdXQgdGhlIGVycm9yIGNvbmRpdGlvbiBhbmQganVzdCB1c2VcclxuICAgICAgICAgICAgLy8gdGhlIHRva2VuIChhY3R1YWwgb3IgZHVtbXkpIHRvIHNlbmQgcmVxdWVzdHMuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQudG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTdG9wIHJ1bm5pbmcgcmVxdWVzdHMgYW5kIHByZXZlbnQgbW9yZSBmcm9tIGJlaW5nIGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIF9kZWxldGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9kZWxldGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXF1ZXN0cy5mb3JFYWNoKHJlcXVlc3QgPT4gcmVxdWVzdC5jYW5jZWwoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVlc3RzLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIG5ldyBmaXJlYmFzZVN0b3JhZ2UuUmVmZXJlbmNlIG9iamVjdCByZWZlcmVuY2luZyB0aGlzIFN0b3JhZ2VTZXJ2aWNlXHJcbiAgICAgKiBhdCB0aGUgZ2l2ZW4gTG9jYXRpb24uXHJcbiAgICAgKi9cclxuICAgIF9tYWtlU3RvcmFnZVJlZmVyZW5jZShsb2MpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlZmVyZW5jZSh0aGlzLCBsb2MpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcmVxdWVzdEluZm8gLSBIVFRQIFJlcXVlc3RJbmZvIG9iamVjdFxyXG4gICAgICogQHBhcmFtIGF1dGhUb2tlbiAtIEZpcmViYXNlIGF1dGggdG9rZW5cclxuICAgICAqL1xyXG4gICAgX21ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCByZXF1ZXN0RmFjdG9yeSwgYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9kZWxldGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBtYWtlUmVxdWVzdChyZXF1ZXN0SW5mbywgdGhpcy5fYXBwSWQsIGF1dGhUb2tlbiwgYXBwQ2hlY2tUb2tlbiwgcmVxdWVzdEZhY3RvcnksIHRoaXMuX2ZpcmViYXNlVmVyc2lvbik7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlcXVlc3RzLmFkZChyZXF1ZXN0KTtcclxuICAgICAgICAgICAgLy8gUmVxdWVzdCByZW1vdmVzIGl0c2VsZiBmcm9tIHNldCB3aGVuIGNvbXBsZXRlLlxyXG4gICAgICAgICAgICByZXF1ZXN0LmdldFByb21pc2UoKS50aGVuKCgpID0+IHRoaXMuX3JlcXVlc3RzLmRlbGV0ZShyZXF1ZXN0KSwgKCkgPT4gdGhpcy5fcmVxdWVzdHMuZGVsZXRlKHJlcXVlc3QpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZhaWxSZXF1ZXN0KGFwcERlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgbWFrZVJlcXVlc3RXaXRoVG9rZW5zKHJlcXVlc3RJbmZvLCByZXF1ZXN0RmFjdG9yeSkge1xyXG4gICAgICAgIGNvbnN0IFthdXRoVG9rZW4sIGFwcENoZWNrVG9rZW5dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICB0aGlzLl9nZXRBdXRoVG9rZW4oKSxcclxuICAgICAgICAgICAgdGhpcy5fZ2V0QXBwQ2hlY2tUb2tlbigpXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ha2VSZXF1ZXN0KHJlcXVlc3RJbmZvLCByZXF1ZXN0RmFjdG9yeSwgYXV0aFRva2VuLCBhcHBDaGVja1Rva2VuKS5nZXRQcm9taXNlKCk7XHJcbiAgICB9XHJcbn1cblxuY29uc3QgbmFtZSA9IFwiQGZpcmViYXNlL3N0b3JhZ2VcIjtcbmNvbnN0IHZlcnNpb24gPSBcIjAuOS41XCI7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUeXBlIGNvbnN0YW50IGZvciBGaXJlYmFzZSBTdG9yYWdlLlxyXG4gKi9cclxuY29uc3QgU1RPUkFHRV9UWVBFID0gJ3N0b3JhZ2UnO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRG93bmxvYWRzIHRoZSBkYXRhIGF0IHRoZSBvYmplY3QncyBsb2NhdGlvbi4gUmV0dXJucyBhbiBlcnJvciBpZiB0aGUgb2JqZWN0XHJcbiAqIGlzIG5vdCBmb3VuZC5cclxuICpcclxuICogVG8gdXNlIHRoaXMgZnVuY3Rpb25hbGl0eSwgeW91IGhhdmUgdG8gd2hpdGVsaXN0IHlvdXIgYXBwJ3Mgb3JpZ2luIGluIHlvdXJcclxuICogQ2xvdWQgU3RvcmFnZSBidWNrZXQuIFNlZSBhbHNvXHJcbiAqIGh0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9zdG9yYWdlL2RvY3MvY29uZmlndXJpbmctY29yc1xyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSByZWYgLSBTdG9yYWdlUmVmZXJlbmNlIHdoZXJlIGRhdGEgc2hvdWxkIGJlIGRvd25sb2FkZWQuXHJcbiAqIEBwYXJhbSBtYXhEb3dubG9hZFNpemVCeXRlcyAtIElmIHNldCwgdGhlIG1heGltdW0gYWxsb3dlZCBzaXplIGluIGJ5dGVzIHRvXHJcbiAqIHJldHJpZXZlLlxyXG4gKiBAcmV0dXJucyBBIFByb21pc2UgY29udGFpbmluZyB0aGUgb2JqZWN0J3MgYnl0ZXNcclxuICovXHJcbmZ1bmN0aW9uIGdldEJ5dGVzKHJlZiwgbWF4RG93bmxvYWRTaXplQnl0ZXMpIHtcclxuICAgIHJlZiA9IGdldE1vZHVsYXJJbnN0YW5jZShyZWYpO1xyXG4gICAgcmV0dXJuIGdldEJ5dGVzSW50ZXJuYWwocmVmLCBtYXhEb3dubG9hZFNpemVCeXRlcyk7XHJcbn1cclxuLyoqXHJcbiAqIFVwbG9hZHMgZGF0YSB0byB0aGlzIG9iamVjdCdzIGxvY2F0aW9uLlxyXG4gKiBUaGUgdXBsb2FkIGlzIG5vdCByZXN1bWFibGUuXHJcbiAqIEBwdWJsaWNcclxuICogQHBhcmFtIHJlZiAtIHtAbGluayBTdG9yYWdlUmVmZXJlbmNlfSB3aGVyZSBkYXRhIHNob3VsZCBiZSB1cGxvYWRlZC5cclxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSB0byB1cGxvYWQuXHJcbiAqIEBwYXJhbSBtZXRhZGF0YSAtIE1ldGFkYXRhIGZvciB0aGUgZGF0YSB0byB1cGxvYWQuXHJcbiAqIEByZXR1cm5zIEEgUHJvbWlzZSBjb250YWluaW5nIGFuIFVwbG9hZFJlc3VsdFxyXG4gKi9cclxuZnVuY3Rpb24gdXBsb2FkQnl0ZXMocmVmLCBkYXRhLCBtZXRhZGF0YSkge1xyXG4gICAgcmVmID0gZ2V0TW9kdWxhckluc3RhbmNlKHJlZik7XHJcbiAgICByZXR1cm4gdXBsb2FkQnl0ZXMkMShyZWYsIGRhdGEsIG1ldGFkYXRhKTtcclxufVxyXG4vKipcclxuICogVXBsb2FkcyBhIHN0cmluZyB0byB0aGlzIG9iamVjdCdzIGxvY2F0aW9uLlxyXG4gKiBUaGUgdXBsb2FkIGlzIG5vdCByZXN1bWFibGUuXHJcbiAqIEBwdWJsaWNcclxuICogQHBhcmFtIHJlZiAtIHtAbGluayBTdG9yYWdlUmVmZXJlbmNlfSB3aGVyZSBzdHJpbmcgc2hvdWxkIGJlIHVwbG9hZGVkLlxyXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgc3RyaW5nIHRvIHVwbG9hZC5cclxuICogQHBhcmFtIGZvcm1hdCAtIFRoZSBmb3JtYXQgb2YgdGhlIHN0cmluZyB0byB1cGxvYWQuXHJcbiAqIEBwYXJhbSBtZXRhZGF0YSAtIE1ldGFkYXRhIGZvciB0aGUgc3RyaW5nIHRvIHVwbG9hZC5cclxuICogQHJldHVybnMgQSBQcm9taXNlIGNvbnRhaW5pbmcgYW4gVXBsb2FkUmVzdWx0XHJcbiAqL1xyXG5mdW5jdGlvbiB1cGxvYWRTdHJpbmcocmVmLCB2YWx1ZSwgZm9ybWF0LCBtZXRhZGF0YSkge1xyXG4gICAgcmVmID0gZ2V0TW9kdWxhckluc3RhbmNlKHJlZik7XHJcbiAgICByZXR1cm4gdXBsb2FkU3RyaW5nJDEocmVmLCB2YWx1ZSwgZm9ybWF0LCBtZXRhZGF0YSk7XHJcbn1cclxuLyoqXHJcbiAqIFVwbG9hZHMgZGF0YSB0byB0aGlzIG9iamVjdCdzIGxvY2F0aW9uLlxyXG4gKiBUaGUgdXBsb2FkIGNhbiBiZSBwYXVzZWQgYW5kIHJlc3VtZWQsIGFuZCBleHBvc2VzIHByb2dyZXNzIHVwZGF0ZXMuXHJcbiAqIEBwdWJsaWNcclxuICogQHBhcmFtIHJlZiAtIHtAbGluayBTdG9yYWdlUmVmZXJlbmNlfSB3aGVyZSBkYXRhIHNob3VsZCBiZSB1cGxvYWRlZC5cclxuICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSB0byB1cGxvYWQuXHJcbiAqIEBwYXJhbSBtZXRhZGF0YSAtIE1ldGFkYXRhIGZvciB0aGUgZGF0YSB0byB1cGxvYWQuXHJcbiAqIEByZXR1cm5zIEFuIFVwbG9hZFRhc2tcclxuICovXHJcbmZ1bmN0aW9uIHVwbG9hZEJ5dGVzUmVzdW1hYmxlKHJlZiwgZGF0YSwgbWV0YWRhdGEpIHtcclxuICAgIHJlZiA9IGdldE1vZHVsYXJJbnN0YW5jZShyZWYpO1xyXG4gICAgcmV0dXJuIHVwbG9hZEJ5dGVzUmVzdW1hYmxlJDEocmVmLCBkYXRhLCBtZXRhZGF0YSk7XHJcbn1cclxuLyoqXHJcbiAqIEEgYFByb21pc2VgIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbWV0YWRhdGEgZm9yIHRoaXMgb2JqZWN0LiBJZiB0aGlzXHJcbiAqIG9iamVjdCBkb2Vzbid0IGV4aXN0IG9yIG1ldGFkYXRhIGNhbm5vdCBiZSByZXRyZWl2ZWQsIHRoZSBwcm9taXNlIGlzXHJcbiAqIHJlamVjdGVkLlxyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSByZWYgLSB7QGxpbmsgU3RvcmFnZVJlZmVyZW5jZX0gdG8gZ2V0IG1ldGFkYXRhIGZyb20uXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRNZXRhZGF0YShyZWYpIHtcclxuICAgIHJlZiA9IGdldE1vZHVsYXJJbnN0YW5jZShyZWYpO1xyXG4gICAgcmV0dXJuIGdldE1ldGFkYXRhJDEocmVmKTtcclxufVxyXG4vKipcclxuICogVXBkYXRlcyB0aGUgbWV0YWRhdGEgZm9yIHRoaXMgb2JqZWN0LlxyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSByZWYgLSB7QGxpbmsgU3RvcmFnZVJlZmVyZW5jZX0gdG8gdXBkYXRlIG1ldGFkYXRhIGZvci5cclxuICogQHBhcmFtIG1ldGFkYXRhIC0gVGhlIG5ldyBtZXRhZGF0YSBmb3IgdGhlIG9iamVjdC5cclxuICogICAgIE9ubHkgdmFsdWVzIHRoYXQgaGF2ZSBiZWVuIGV4cGxpY2l0bHkgc2V0IHdpbGwgYmUgY2hhbmdlZC4gRXhwbGljaXRseVxyXG4gKiAgICAgc2V0dGluZyBhIHZhbHVlIHRvIG51bGwgd2lsbCByZW1vdmUgdGhlIG1ldGFkYXRhLlxyXG4gKiBAcmV0dXJucyBBIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIHdpdGggdGhlIG5ldyBtZXRhZGF0YSBmb3IgdGhpcyBvYmplY3QuXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVNZXRhZGF0YShyZWYsIG1ldGFkYXRhKSB7XHJcbiAgICByZWYgPSBnZXRNb2R1bGFySW5zdGFuY2UocmVmKTtcclxuICAgIHJldHVybiB1cGRhdGVNZXRhZGF0YSQxKHJlZiwgbWV0YWRhdGEpO1xyXG59XHJcbi8qKlxyXG4gKiBMaXN0IGl0ZW1zIChmaWxlcykgYW5kIHByZWZpeGVzIChmb2xkZXJzKSB1bmRlciB0aGlzIHN0b3JhZ2UgcmVmZXJlbmNlLlxyXG4gKlxyXG4gKiBMaXN0IEFQSSBpcyBvbmx5IGF2YWlsYWJsZSBmb3IgRmlyZWJhc2UgUnVsZXMgVmVyc2lvbiAyLlxyXG4gKlxyXG4gKiBHQ1MgaXMgYSBrZXktYmxvYiBzdG9yZS4gRmlyZWJhc2UgU3RvcmFnZSBpbXBvc2VzIHRoZSBzZW1hbnRpYyBvZiAnLydcclxuICogZGVsaW1pdGVkIGZvbGRlciBzdHJ1Y3R1cmUuXHJcbiAqIFJlZmVyIHRvIEdDUydzIExpc3QgQVBJIGlmIHlvdSB3YW50IHRvIGxlYXJuIG1vcmUuXHJcbiAqXHJcbiAqIFRvIGFkaGVyZSB0byBGaXJlYmFzZSBSdWxlcydzIFNlbWFudGljcywgRmlyZWJhc2UgU3RvcmFnZSBkb2VzIG5vdFxyXG4gKiBzdXBwb3J0IG9iamVjdHMgd2hvc2UgcGF0aHMgZW5kIHdpdGggXCIvXCIgb3IgY29udGFpbiB0d28gY29uc2VjdXRpdmVcclxuICogXCIvXCJzLiBGaXJlYmFzZSBTdG9yYWdlIExpc3QgQVBJIHdpbGwgZmlsdGVyIHRoZXNlIHVuc3VwcG9ydGVkIG9iamVjdHMuXHJcbiAqIGxpc3QoKSBtYXkgZmFpbCBpZiB0aGVyZSBhcmUgdG9vIG1hbnkgdW5zdXBwb3J0ZWQgb2JqZWN0cyBpbiB0aGUgYnVja2V0LlxyXG4gKiBAcHVibGljXHJcbiAqXHJcbiAqIEBwYXJhbSByZWYgLSB7QGxpbmsgU3RvcmFnZVJlZmVyZW5jZX0gdG8gZ2V0IGxpc3QgZnJvbS5cclxuICogQHBhcmFtIG9wdGlvbnMgLSBTZWUge0BsaW5rIExpc3RPcHRpb25zfSBmb3IgZGV0YWlscy5cclxuICogQHJldHVybnMgQSBgUHJvbWlzZWAgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBpdGVtcyBhbmQgcHJlZml4ZXMuXHJcbiAqICAgICAgYHByZWZpeGVzYCBjb250YWlucyByZWZlcmVuY2VzIHRvIHN1Yi1mb2xkZXJzIGFuZCBgaXRlbXNgXHJcbiAqICAgICAgY29udGFpbnMgcmVmZXJlbmNlcyB0byBvYmplY3RzIGluIHRoaXMgZm9sZGVyLiBgbmV4dFBhZ2VUb2tlbmBcclxuICogICAgICBjYW4gYmUgdXNlZCB0byBnZXQgdGhlIHJlc3Qgb2YgdGhlIHJlc3VsdHMuXHJcbiAqL1xyXG5mdW5jdGlvbiBsaXN0KHJlZiwgb3B0aW9ucykge1xyXG4gICAgcmVmID0gZ2V0TW9kdWxhckluc3RhbmNlKHJlZik7XHJcbiAgICByZXR1cm4gbGlzdCQxKHJlZiwgb3B0aW9ucyk7XHJcbn1cclxuLyoqXHJcbiAqIExpc3QgYWxsIGl0ZW1zIChmaWxlcykgYW5kIHByZWZpeGVzIChmb2xkZXJzKSB1bmRlciB0aGlzIHN0b3JhZ2UgcmVmZXJlbmNlLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGEgaGVscGVyIG1ldGhvZCBmb3IgY2FsbGluZyBsaXN0KCkgcmVwZWF0ZWRseSB1bnRpbCB0aGVyZSBhcmVcclxuICogbm8gbW9yZSByZXN1bHRzLiBUaGUgZGVmYXVsdCBwYWdpbmF0aW9uIHNpemUgaXMgMTAwMC5cclxuICpcclxuICogTm90ZTogVGhlIHJlc3VsdHMgbWF5IG5vdCBiZSBjb25zaXN0ZW50IGlmIG9iamVjdHMgYXJlIGNoYW5nZWQgd2hpbGUgdGhpc1xyXG4gKiBvcGVyYXRpb24gaXMgcnVubmluZy5cclxuICpcclxuICogV2FybmluZzogYGxpc3RBbGxgIG1heSBwb3RlbnRpYWxseSBjb25zdW1lIHRvbyBtYW55IHJlc291cmNlcyBpZiB0aGVyZSBhcmVcclxuICogdG9vIG1hbnkgcmVzdWx0cy5cclxuICogQHB1YmxpY1xyXG4gKiBAcGFyYW0gcmVmIC0ge0BsaW5rIFN0b3JhZ2VSZWZlcmVuY2V9IHRvIGdldCBsaXN0IGZyb20uXHJcbiAqXHJcbiAqIEByZXR1cm5zIEEgYFByb21pc2VgIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbGwgdGhlIGl0ZW1zIGFuZCBwcmVmaXhlcyB1bmRlclxyXG4gKiAgICAgIHRoZSBjdXJyZW50IHN0b3JhZ2UgcmVmZXJlbmNlLiBgcHJlZml4ZXNgIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG9cclxuICogICAgICBzdWItZGlyZWN0b3JpZXMgYW5kIGBpdGVtc2AgY29udGFpbnMgcmVmZXJlbmNlcyB0byBvYmplY3RzIGluIHRoaXNcclxuICogICAgICBmb2xkZXIuIGBuZXh0UGFnZVRva2VuYCBpcyBuZXZlciByZXR1cm5lZC5cclxuICovXHJcbmZ1bmN0aW9uIGxpc3RBbGwocmVmKSB7XHJcbiAgICByZWYgPSBnZXRNb2R1bGFySW5zdGFuY2UocmVmKTtcclxuICAgIHJldHVybiBsaXN0QWxsJDEocmVmKTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyB0aGUgZG93bmxvYWQgVVJMIGZvciB0aGUgZ2l2ZW4ge0BsaW5rIFN0b3JhZ2VSZWZlcmVuY2V9LlxyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSByZWYgLSB7QGxpbmsgU3RvcmFnZVJlZmVyZW5jZX0gdG8gZ2V0IHRoZSBkb3dubG9hZCBVUkwgZm9yLlxyXG4gKiBAcmV0dXJucyBBIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGRvd25sb2FkXHJcbiAqICAgICBVUkwgZm9yIHRoaXMgb2JqZWN0LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RG93bmxvYWRVUkwocmVmKSB7XHJcbiAgICByZWYgPSBnZXRNb2R1bGFySW5zdGFuY2UocmVmKTtcclxuICAgIHJldHVybiBnZXREb3dubG9hZFVSTCQxKHJlZik7XHJcbn1cclxuLyoqXHJcbiAqIERlbGV0ZXMgdGhlIG9iamVjdCBhdCB0aGlzIGxvY2F0aW9uLlxyXG4gKiBAcHVibGljXHJcbiAqIEBwYXJhbSByZWYgLSB7QGxpbmsgU3RvcmFnZVJlZmVyZW5jZX0gZm9yIG9iamVjdCB0byBkZWxldGUuXHJcbiAqIEByZXR1cm5zIEEgYFByb21pc2VgIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGRlbGV0aW9uIHN1Y2NlZWRzLlxyXG4gKi9cclxuZnVuY3Rpb24gZGVsZXRlT2JqZWN0KHJlZikge1xyXG4gICAgcmVmID0gZ2V0TW9kdWxhckluc3RhbmNlKHJlZik7XHJcbiAgICByZXR1cm4gZGVsZXRlT2JqZWN0JDEocmVmKTtcclxufVxyXG5mdW5jdGlvbiByZWYoc2VydmljZU9yUmVmLCBwYXRoT3JVcmwpIHtcclxuICAgIHNlcnZpY2VPclJlZiA9IGdldE1vZHVsYXJJbnN0YW5jZShzZXJ2aWNlT3JSZWYpO1xyXG4gICAgcmV0dXJuIHJlZiQxKHNlcnZpY2VPclJlZiwgcGF0aE9yVXJsKTtcclxufVxyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBfZ2V0Q2hpbGQocmVmLCBjaGlsZFBhdGgpIHtcclxuICAgIHJldHVybiBfZ2V0Q2hpbGQkMShyZWYsIGNoaWxkUGF0aCk7XHJcbn1cclxuLyoqXHJcbiAqIEdldHMgYSB7QGxpbmsgRmlyZWJhc2VTdG9yYWdlfSBpbnN0YW5jZSBmb3IgdGhlIGdpdmVuIEZpcmViYXNlIGFwcC5cclxuICogQHB1YmxpY1xyXG4gKiBAcGFyYW0gYXBwIC0gRmlyZWJhc2UgYXBwIHRvIGdldCB7QGxpbmsgRmlyZWJhc2VTdG9yYWdlfSBpbnN0YW5jZSBmb3IuXHJcbiAqIEBwYXJhbSBidWNrZXRVcmwgLSBUaGUgZ3M6Ly8gdXJsIHRvIHlvdXIgRmlyZWJhc2UgU3RvcmFnZSBCdWNrZXQuXHJcbiAqIElmIG5vdCBwYXNzZWQsIHVzZXMgdGhlIGFwcCdzIGRlZmF1bHQgU3RvcmFnZSBCdWNrZXQuXHJcbiAqIEByZXR1cm5zIEEge0BsaW5rIEZpcmViYXNlU3RvcmFnZX0gaW5zdGFuY2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRTdG9yYWdlKGFwcCA9IGdldEFwcCgpLCBidWNrZXRVcmwpIHtcclxuICAgIGFwcCA9IGdldE1vZHVsYXJJbnN0YW5jZShhcHApO1xyXG4gICAgY29uc3Qgc3RvcmFnZVByb3ZpZGVyID0gX2dldFByb3ZpZGVyKGFwcCwgU1RPUkFHRV9UWVBFKTtcclxuICAgIGNvbnN0IHN0b3JhZ2VJbnN0YW5jZSA9IHN0b3JhZ2VQcm92aWRlci5nZXRJbW1lZGlhdGUoe1xyXG4gICAgICAgIGlkZW50aWZpZXI6IGJ1Y2tldFVybFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gc3RvcmFnZUluc3RhbmNlO1xyXG59XHJcbi8qKlxyXG4gKiBNb2RpZnkgdGhpcyB7QGxpbmsgRmlyZWJhc2VTdG9yYWdlfSBpbnN0YW5jZSB0byBjb21tdW5pY2F0ZSB3aXRoIHRoZSBDbG91ZCBTdG9yYWdlIGVtdWxhdG9yLlxyXG4gKlxyXG4gKiBAcGFyYW0gc3RvcmFnZSAtIFRoZSB7QGxpbmsgRmlyZWJhc2VTdG9yYWdlfSBpbnN0YW5jZVxyXG4gKiBAcGFyYW0gaG9zdCAtIFRoZSBlbXVsYXRvciBob3N0IChleDogbG9jYWxob3N0KVxyXG4gKiBAcGFyYW0gcG9ydCAtIFRoZSBlbXVsYXRvciBwb3J0IChleDogNTAwMSlcclxuICogQHBhcmFtIG9wdGlvbnMgLSBFbXVsYXRvciBvcHRpb25zLiBgb3B0aW9ucy5tb2NrVXNlclRva2VuYCBpcyB0aGUgbW9jayBhdXRoXHJcbiAqIHRva2VuIHRvIHVzZSBmb3IgdW5pdCB0ZXN0aW5nIFNlY3VyaXR5IFJ1bGVzLlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBjb25uZWN0U3RvcmFnZUVtdWxhdG9yKHN0b3JhZ2UsIGhvc3QsIHBvcnQsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgY29ubmVjdFN0b3JhZ2VFbXVsYXRvciQxKHN0b3JhZ2UsIGhvc3QsIHBvcnQsIG9wdGlvbnMpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBEb3dubG9hZHMgdGhlIGRhdGEgYXQgdGhlIG9iamVjdCdzIGxvY2F0aW9uLiBSZXR1cm5zIGFuIGVycm9yIGlmIHRoZSBvYmplY3RcclxuICogaXMgbm90IGZvdW5kLlxyXG4gKlxyXG4gKiBUbyB1c2UgdGhpcyBmdW5jdGlvbmFsaXR5LCB5b3UgaGF2ZSB0byB3aGl0ZWxpc3QgeW91ciBhcHAncyBvcmlnaW4gaW4geW91clxyXG4gKiBDbG91ZCBTdG9yYWdlIGJ1Y2tldC4gU2VlIGFsc29cclxuICogaHR0cHM6Ly9jbG91ZC5nb29nbGUuY29tL3N0b3JhZ2UvZG9jcy9jb25maWd1cmluZy1jb3JzXHJcbiAqXHJcbiAqIFRoaXMgQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4gTm9kZS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKiBAcGFyYW0gcmVmIC0gU3RvcmFnZVJlZmVyZW5jZSB3aGVyZSBkYXRhIHNob3VsZCBiZSBkb3dubG9hZGVkLlxyXG4gKiBAcGFyYW0gbWF4RG93bmxvYWRTaXplQnl0ZXMgLSBJZiBzZXQsIHRoZSBtYXhpbXVtIGFsbG93ZWQgc2l6ZSBpbiBieXRlcyB0b1xyXG4gKiByZXRyaWV2ZS5cclxuICogQHJldHVybnMgQSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIEJsb2IgY29udGFpbmluZyB0aGUgb2JqZWN0J3MgYnl0ZXNcclxuICovXHJcbmZ1bmN0aW9uIGdldEJsb2IocmVmLCBtYXhEb3dubG9hZFNpemVCeXRlcykge1xyXG4gICAgcmVmID0gZ2V0TW9kdWxhckluc3RhbmNlKHJlZik7XHJcbiAgICByZXR1cm4gZ2V0QmxvYkludGVybmFsKHJlZiwgbWF4RG93bmxvYWRTaXplQnl0ZXMpO1xyXG59XHJcbi8qKlxyXG4gKiBEb3dubG9hZHMgdGhlIGRhdGEgYXQgdGhlIG9iamVjdCdzIGxvY2F0aW9uLiBSYWlzZXMgYW4gZXJyb3IgZXZlbnQgaWYgdGhlXHJcbiAqIG9iamVjdCBpcyBub3QgZm91bmQuXHJcbiAqXHJcbiAqIFRoaXMgQVBJIGlzIG9ubHkgYXZhaWxhYmxlIGluIE5vZGUuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICogQHBhcmFtIHJlZiAtIFN0b3JhZ2VSZWZlcmVuY2Ugd2hlcmUgZGF0YSBzaG91bGQgYmUgZG93bmxvYWRlZC5cclxuICogQHBhcmFtIG1heERvd25sb2FkU2l6ZUJ5dGVzIC0gSWYgc2V0LCB0aGUgbWF4aW11bSBhbGxvd2VkIHNpemUgaW4gYnl0ZXMgdG9cclxuICogcmV0cmlldmUuXHJcbiAqIEByZXR1cm5zIEEgc3RyZWFtIHdpdGggdGhlIG9iamVjdCdzIGRhdGEgYXMgYnl0ZXNcclxuICovXHJcbmZ1bmN0aW9uIGdldFN0cmVhbShyZWYsIG1heERvd25sb2FkU2l6ZUJ5dGVzKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2dldFN0cmVhbSgpIGlzIG9ubHkgc3VwcG9ydGVkIGJ5IE5vZGVKUyBidWlsZHMnKTtcclxufVxuXG4vKipcclxuICogQ2xvdWQgU3RvcmFnZSBmb3IgRmlyZWJhc2VcclxuICpcclxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBmYWN0b3J5KGNvbnRhaW5lciwgeyBpbnN0YW5jZUlkZW50aWZpZXI6IHVybCB9KSB7XHJcbiAgICBjb25zdCBhcHAgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgY29uc3QgYXV0aFByb3ZpZGVyID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhdXRoLWludGVybmFsJyk7XHJcbiAgICBjb25zdCBhcHBDaGVja1Byb3ZpZGVyID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAtY2hlY2staW50ZXJuYWwnKTtcclxuICAgIHJldHVybiBuZXcgRmlyZWJhc2VTdG9yYWdlSW1wbChhcHAsIGF1dGhQcm92aWRlciwgYXBwQ2hlY2tQcm92aWRlciwgdXJsLCBTREtfVkVSU0lPTik7XHJcbn1cclxuZnVuY3Rpb24gcmVnaXN0ZXJTdG9yYWdlKCkge1xyXG4gICAgX3JlZ2lzdGVyQ29tcG9uZW50KG5ldyBDb21wb25lbnQoU1RPUkFHRV9UWVBFLCBmYWN0b3J5LCBcIlBVQkxJQ1wiIC8qIFBVQkxJQyAqLykuc2V0TXVsdGlwbGVJbnN0YW5jZXModHJ1ZSkpO1xyXG4gICAgLy9SVU5USU1FX0VOViB3aWxsIGJlIHJlcGxhY2VkIGR1cmluZyB0aGUgY29tcGlsYXRpb24gdG8gXCJub2RlXCIgZm9yIG5vZGVqcyBhbmQgYW4gZW1wdHkgc3RyaW5nIGZvciBicm93c2VyXHJcbiAgICByZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJycpO1xyXG4gICAgLy8gQlVJTERfVEFSR0VUIHdpbGwgYmUgcmVwbGFjZWQgYnkgdmFsdWVzIGxpa2UgZXNtNSwgZXNtMjAxNywgY2pzNSwgZXRjIGR1cmluZyB0aGUgY29tcGlsYXRpb25cclxuICAgIHJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnZXNtMjAxNycpO1xyXG59XHJcbnJlZ2lzdGVyU3RvcmFnZSgpO1xuXG5leHBvcnQgeyBTdHJpbmdGb3JtYXQsIEZic0Jsb2IgYXMgX0Zic0Jsb2IsIExvY2F0aW9uIGFzIF9Mb2NhdGlvbiwgVGFza0V2ZW50IGFzIF9UYXNrRXZlbnQsIFRhc2tTdGF0ZSBhcyBfVGFza1N0YXRlLCBVcGxvYWRUYXNrIGFzIF9VcGxvYWRUYXNrLCBkYXRhRnJvbVN0cmluZyBhcyBfZGF0YUZyb21TdHJpbmcsIF9nZXRDaGlsZCwgaW52YWxpZEFyZ3VtZW50IGFzIF9pbnZhbGlkQXJndW1lbnQsIGludmFsaWRSb290T3BlcmF0aW9uIGFzIF9pbnZhbGlkUm9vdE9wZXJhdGlvbiwgY29ubmVjdFN0b3JhZ2VFbXVsYXRvciwgZGVsZXRlT2JqZWN0LCBnZXRCbG9iLCBnZXRCeXRlcywgZ2V0RG93bmxvYWRVUkwsIGdldE1ldGFkYXRhLCBnZXRTdG9yYWdlLCBnZXRTdHJlYW0sIGxpc3QsIGxpc3RBbGwsIHJlZiwgdXBkYXRlTWV0YWRhdGEsIHVwbG9hZEJ5dGVzLCB1cGxvYWRCeXRlc1Jlc3VtYWJsZSwgdXBsb2FkU3RyaW5nIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20yMDE3LmpzLm1hcFxuIiwiZXhwb3J0ICogZnJvbSAnQGZpcmViYXNlL3N0b3JhZ2UnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==