webpackHotUpdate_N_E("pages/employees-management/users/AddUser",{

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/_asciiWords.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_asciiWords.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyOf.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_basePropertyOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createCaseFirst.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(/*! ./_castSlice */ "./node_modules/lodash/_castSlice.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "./node_modules/lodash/_stringToArray.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),

/***/ "./node_modules/lodash/_createCompounder.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createCompounder.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/lodash/_arrayReduce.js"),
    deburr = __webpack_require__(/*! ./deburr */ "./node_modules/lodash/deburr.js"),
    words = __webpack_require__(/*! ./words */ "./node_modules/lodash/words.js");

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),

/***/ "./node_modules/lodash/_deburrLetter.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_deburrLetter.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(/*! ./_basePropertyOf */ "./node_modules/lodash/_basePropertyOf.js");

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicodeWord.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_hasUnicodeWord.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_unicodeWords.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_unicodeWords.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),

/***/ "./node_modules/lodash/camelCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/camelCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var capitalize = __webpack_require__(/*! ./capitalize */ "./node_modules/lodash/capitalize.js"),
    createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js");

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

module.exports = camelCase;


/***/ }),

/***/ "./node_modules/lodash/capitalize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/capitalize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    upperFirst = __webpack_require__(/*! ./upperFirst */ "./node_modules/lodash/upperFirst.js");

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;


/***/ }),

/***/ "./node_modules/lodash/deburr.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/deburr.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(/*! ./_deburrLetter */ "./node_modules/lodash/_deburrLetter.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/has.js":
/*!************************************!*\
  !*** ./node_modules/lodash/has.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHas = __webpack_require__(/*! ./_baseHas */ "./node_modules/lodash/_baseHas.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/mapKeys.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/mapKeys.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js");

/**
 * The opposite of `_.mapValues`; this method creates an object with the
 * same values as `object` and keys generated by running each own enumerable
 * string keyed property of `object` thru `iteratee`. The iteratee is invoked
 * with three arguments: (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapValues
 * @example
 *
 * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
 *   return key + value;
 * });
 * // => { 'a1': 1, 'b2': 2 }
 */
function mapKeys(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, iteratee(value, key, object), value);
  });
  return result;
}

module.exports = mapKeys;


/***/ }),

/***/ "./node_modules/lodash/mapValues.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/mapValues.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js");

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/snakeCase.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/snakeCase.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(/*! ./_createCompounder */ "./node_modules/lodash/_createCompounder.js");

/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * _.snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * _.snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * _.snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */
var snakeCase = createCompounder(function(result, word, index) {
  return result + (index ? '_' : '') + word.toLowerCase();
});

module.exports = snakeCase;


/***/ }),

/***/ "./node_modules/lodash/upperFirst.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/upperFirst.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ "./node_modules/lodash/_createCaseFirst.js");

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),

/***/ "./node_modules/lodash/words.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/words.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(/*! ./_asciiWords */ "./node_modules/lodash/_asciiWords.js"),
    hasUnicodeWord = __webpack_require__(/*! ./_hasUnicodeWord */ "./node_modules/lodash/_hasUnicodeWord.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js"),
    unicodeWords = __webpack_require__(/*! ./_unicodeWords */ "./node_modules/lodash/_unicodeWords.js");

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),

/***/ "./node_modules/nanoclone/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/nanoclone/src/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clone; });
// ES6 Map
var map
try {
  map = Map
} catch (_) { }
var set

// ES6 Set
try {
  set = Set
} catch (_) { }

function baseClone (src, circulars, clones) {
  // Null/undefined/functions/etc
  if (!src || typeof src !== 'object' || typeof src === 'function') {
    return src
  }

  // DOM Node
  if (src.nodeType && 'cloneNode' in src) {
    return src.cloneNode(true)
  }

  // Date
  if (src instanceof Date) {
    return new Date(src.getTime())
  }

  // RegExp
  if (src instanceof RegExp) {
    return new RegExp(src)
  }

  // Arrays
  if (Array.isArray(src)) {
    return src.map(clone)
  }

  // ES6 Maps
  if (map && src instanceof map) {
    return new Map(Array.from(src.entries()))
  }

  // ES6 Sets
  if (set && src instanceof set) {
    return new Set(Array.from(src.values()))
  }

  // Object
  if (src instanceof Object) {
    circulars.push(src)
    var obj = Object.create(src)
    clones.push(obj)
    for (var key in src) {
      var idx = circulars.findIndex(function (i) {
        return i === src[key]
      })
      obj[key] = idx > -1 ? clones[idx] : baseClone(src[key], circulars, clones)
    }
    return obj
  }

  // ???
  return src
}

function clone (src) {
  return baseClone(src, [], [])
}


/***/ }),

/***/ "./node_modules/property-expr/index.js":
/*!*********************************************!*\
  !*** ./node_modules/property-expr/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Based on Kendo UI Core expression code <https://github.com/telerik/kendo-ui-core#license-information>
 */


function Cache(maxSize) {
  this._maxSize = maxSize
  this.clear()
}
Cache.prototype.clear = function () {
  this._size = 0
  this._values = Object.create(null)
}
Cache.prototype.get = function (key) {
  return this._values[key]
}
Cache.prototype.set = function (key, value) {
  this._size >= this._maxSize && this.clear()
  if (!(key in this._values)) this._size++

  return (this._values[key] = value)
}

var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
  DIGIT_REGEX = /^\d+$/,
  LEAD_DIGIT_REGEX = /^\d/,
  SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
  CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/,
  MAX_CACHE_SIZE = 512

var pathCache = new Cache(MAX_CACHE_SIZE),
  setCache = new Cache(MAX_CACHE_SIZE),
  getCache = new Cache(MAX_CACHE_SIZE)

var config

module.exports = {
  Cache: Cache,

  split: split,

  normalizePath: normalizePath,

  setter: function (path) {
    var parts = normalizePath(path)

    return (
      setCache.get(path) ||
      setCache.set(path, function setter(obj, value) {
        var index = 0
        var len = parts.length
        var data = obj

        while (index < len - 1) {
          var part = parts[index]
          if (
            part === '__proto__' ||
            part === 'constructor' ||
            part === 'prototype'
          ) {
            return obj
          }

          data = data[parts[index++]]
        }
        data[parts[index]] = value
      })
    )
  },

  getter: function (path, safe) {
    var parts = normalizePath(path)
    return (
      getCache.get(path) ||
      getCache.set(path, function getter(data) {
        var index = 0,
          len = parts.length
        while (index < len) {
          if (data != null || !safe) data = data[parts[index++]]
          else return
        }
        return data
      })
    )
  },

  join: function (segments) {
    return segments.reduce(function (path, part) {
      return (
        path +
        (isQuoted(part) || DIGIT_REGEX.test(part)
          ? '[' + part + ']'
          : (path ? '.' : '') + part)
      )
    }, '')
  },

  forEach: function (path, cb, thisArg) {
    forEach(Array.isArray(path) ? path : split(path), cb, thisArg)
  },
}

function normalizePath(path) {
  return (
    pathCache.get(path) ||
    pathCache.set(
      path,
      split(path).map(function (part) {
        return part.replace(CLEAN_QUOTES_REGEX, '$2')
      })
    )
  )
}

function split(path) {
  return path.match(SPLIT_REGEX) || ['']
}

function forEach(parts, iter, thisArg) {
  var len = parts.length,
    part,
    idx,
    isArray,
    isBracket

  for (idx = 0; idx < len; idx++) {
    part = parts[idx]

    if (part) {
      if (shouldBeQuoted(part)) {
        part = '"' + part + '"'
      }

      isBracket = isQuoted(part)
      isArray = !isBracket && /^\d+$/.test(part)

      iter.call(thisArg, part, isBracket, isArray, idx, parts)
    }
  }
}

function isQuoted(str) {
  return (
    typeof str === 'string' && str && ["'", '"'].indexOf(str.charAt(0)) !== -1
  )
}

function hasLeadingNumber(part) {
  return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX)
}

function hasSpecialChars(part) {
  return SPEC_CHAR_REGEX.test(part)
}

function shouldBeQuoted(part) {
  return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part))
}


/***/ }),

/***/ "./node_modules/toposort/index.js":
/*!****************************************!*\
  !*** ./node_modules/toposort/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Topological sorting function
 *
 * @param {Array} edges
 * @returns {Array}
 */

module.exports = function(edges) {
  return toposort(uniqueNodes(edges), edges)
}

module.exports.array = toposort

function toposort(nodes, edges) {
  var cursor = nodes.length
    , sorted = new Array(cursor)
    , visited = {}
    , i = cursor
    // Better data structures make algorithm much faster.
    , outgoingEdges = makeOutgoingEdges(edges)
    , nodesHash = makeNodesHash(nodes)

  // check for unknown nodes
  edges.forEach(function(edge) {
    if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
      throw new Error('Unknown node. There is an unknown node in the supplied edges.')
    }
  })

  while (i--) {
    if (!visited[i]) visit(nodes[i], i, new Set())
  }

  return sorted

  function visit(node, i, predecessors) {
    if(predecessors.has(node)) {
      var nodeRep
      try {
        nodeRep = ", node was:" + JSON.stringify(node)
      } catch(e) {
        nodeRep = ""
      }
      throw new Error('Cyclic dependency' + nodeRep)
    }

    if (!nodesHash.has(node)) {
      throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: '+JSON.stringify(node))
    }

    if (visited[i]) return;
    visited[i] = true

    var outgoing = outgoingEdges.get(node) || new Set()
    outgoing = Array.from(outgoing)

    if (i = outgoing.length) {
      predecessors.add(node)
      do {
        var child = outgoing[--i]
        visit(child, nodesHash.get(child), predecessors)
      } while (i)
      predecessors.delete(node)
    }

    sorted[--cursor] = node
  }
}

function uniqueNodes(arr){
  var res = new Set()
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i]
    res.add(edge[0])
    res.add(edge[1])
  }
  return Array.from(res)
}

function makeOutgoingEdges(arr){
  var edges = new Map()
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i]
    if (!edges.has(edge[0])) edges.set(edge[0], new Set())
    if (!edges.has(edge[1])) edges.set(edge[1], new Set())
    edges.get(edge[0]).add(edge[1])
  }
  return edges
}

function makeNodesHash(arr){
  var res = new Map()
  for (var i = 0, len = arr.length; i < len; i++) {
    res.set(arr[i], i)
  }
  return res
}


/***/ }),

/***/ "./node_modules/yup/es/Condition.js":
/*!******************************************!*\
  !*** ./node_modules/yup/es/Condition.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_isSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isSchema */ "./node_modules/yup/es/util/isSchema.js");



class Condition {
  constructor(refs, options) {
    this.fn = void 0;
    this.refs = refs;
    this.refs = refs;

    if (typeof options === 'function') {
      this.fn = options;
      return;
    }

    if (!lodash_has__WEBPACK_IMPORTED_MODULE_0___default()(options, 'is')) throw new TypeError('`is:` is required for `when()` conditions');
    if (!options.then && !options.otherwise) throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
    let {
      is,
      then,
      otherwise
    } = options;
    let check = typeof is === 'function' ? is : (...values) => values.every(value => value === is);

    this.fn = function (...args) {
      let options = args.pop();
      let schema = args.pop();
      let branch = check(...args) ? then : otherwise;
      if (!branch) return undefined;
      if (typeof branch === 'function') return branch(schema);
      return schema.concat(branch.resolve(options));
    };
  }

  resolve(base, options) {
    let values = this.refs.map(ref => ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context));
    let schema = this.fn.apply(base, values.concat(base, options));
    if (schema === undefined || schema === base) return base;
    if (!Object(_util_isSchema__WEBPACK_IMPORTED_MODULE_1__["default"])(schema)) throw new TypeError('conditions must return a schema object');
    return schema.resolve(options);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Condition);

/***/ }),

/***/ "./node_modules/yup/es/Lazy.js":
/*!*************************************!*\
  !*** ./node_modules/yup/es/Lazy.js ***!
  \*************************************/
/*! exports provided: create, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _util_isSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isSchema */ "./node_modules/yup/es/util/isSchema.js");

function create(builder) {
  return new Lazy(builder);
}

class Lazy {
  constructor(builder) {
    this.type = 'lazy';
    this.__isYupSchema__ = true;
    this.__inputType = void 0;
    this.__outputType = void 0;

    this._resolve = (value, options = {}) => {
      let schema = this.builder(value, options);
      if (!Object(_util_isSchema__WEBPACK_IMPORTED_MODULE_0__["default"])(schema)) throw new TypeError('lazy() functions must return a valid schema');
      return schema.resolve(options);
    };

    this.builder = builder;
  }

  resolve(options) {
    return this._resolve(options.value, options);
  }

  cast(value, options) {
    return this._resolve(value, options).cast(value, options);
  }

  validate(value, options, maybeCb) {
    // @ts-expect-error missing public callback on type
    return this._resolve(value, options).validate(value, options, maybeCb);
  }

  validateSync(value, options) {
    return this._resolve(value, options).validateSync(value, options);
  }

  validateAt(path, value, options) {
    return this._resolve(value, options).validateAt(path, value, options);
  }

  validateSyncAt(path, value, options) {
    return this._resolve(value, options).validateSyncAt(path, value, options);
  }

  describe() {
    return null;
  }

  isValid(value, options) {
    return this._resolve(value, options).isValid(value, options);
  }

  isValidSync(value, options) {
    return this._resolve(value, options).isValidSync(value, options);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Lazy);

/***/ }),

/***/ "./node_modules/yup/es/Reference.js":
/*!******************************************!*\
  !*** ./node_modules/yup/es/Reference.js ***!
  \******************************************/
/*! exports provided: create, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reference; });
/* harmony import */ var property_expr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! property-expr */ "./node_modules/property-expr/index.js");
/* harmony import */ var property_expr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(property_expr__WEBPACK_IMPORTED_MODULE_0__);

const prefixes = {
  context: '$',
  value: '.'
};
function create(key, options) {
  return new Reference(key, options);
}
class Reference {
  constructor(key, options = {}) {
    this.key = void 0;
    this.isContext = void 0;
    this.isValue = void 0;
    this.isSibling = void 0;
    this.path = void 0;
    this.getter = void 0;
    this.map = void 0;
    if (typeof key !== 'string') throw new TypeError('ref must be a string, got: ' + key);
    this.key = key.trim();
    if (key === '') throw new TypeError('ref must be a non-empty string');
    this.isContext = this.key[0] === prefixes.context;
    this.isValue = this.key[0] === prefixes.value;
    this.isSibling = !this.isContext && !this.isValue;
    let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : '';
    this.path = this.key.slice(prefix.length);
    this.getter = this.path && Object(property_expr__WEBPACK_IMPORTED_MODULE_0__["getter"])(this.path, true);
    this.map = options.map;
  }

  getValue(value, parent, context) {
    let result = this.isContext ? context : this.isValue ? value : parent;
    if (this.getter) result = this.getter(result || {});
    if (this.map) result = this.map(result);
    return result;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */


  cast(value, options) {
    return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
  }

  resolve() {
    return this;
  }

  describe() {
    return {
      type: 'ref',
      key: this.key
    };
  }

  toString() {
    return `Ref(${this.key})`;
  }

  static isRef(value) {
    return value && value.__isYupRef;
  }

} // @ts-ignore

Reference.prototype.__isYupRef = true;

/***/ }),

/***/ "./node_modules/yup/es/ValidationError.js":
/*!************************************************!*\
  !*** ./node_modules/yup/es/ValidationError.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ValidationError; });
/* harmony import */ var _util_printValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/printValue */ "./node_modules/yup/es/util/printValue.js");
/* harmony import */ var _util_toArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/toArray */ "./node_modules/yup/es/util/toArray.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



let strReg = /\$\{\s*(\w+)\s*\}/g;
class ValidationError extends Error {
  static formatError(message, params) {
    const path = params.label || params.path || 'this';
    if (path !== params.path) params = _extends({}, params, {
      path
    });
    if (typeof message === 'string') return message.replace(strReg, (_, key) => Object(_util_printValue__WEBPACK_IMPORTED_MODULE_0__["default"])(params[key]));
    if (typeof message === 'function') return message(params);
    return message;
  }

  static isError(err) {
    return err && err.name === 'ValidationError';
  }

  constructor(errorOrErrors, value, field, type) {
    super();
    this.value = void 0;
    this.path = void 0;
    this.type = void 0;
    this.errors = void 0;
    this.params = void 0;
    this.inner = void 0;
    this.name = 'ValidationError';
    this.value = value;
    this.path = field;
    this.type = type;
    this.errors = [];
    this.inner = [];
    Object(_util_toArray__WEBPACK_IMPORTED_MODULE_1__["default"])(errorOrErrors).forEach(err => {
      if (ValidationError.isError(err)) {
        this.errors.push(...err.errors);
        this.inner = this.inner.concat(err.inner.length ? err.inner : err);
      } else {
        this.errors.push(err);
      }
    });
    this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    if (Error.captureStackTrace) Error.captureStackTrace(this, ValidationError);
  }

}

/***/ }),

/***/ "./node_modules/yup/es/array.js":
/*!**************************************!*\
  !*** ./node_modules/yup/es/array.js ***!
  \**************************************/
/*! exports provided: create, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArraySchema; });
/* harmony import */ var _util_isAbsent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isAbsent */ "./node_modules/yup/es/util/isAbsent.js");
/* harmony import */ var _util_isSchema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isSchema */ "./node_modules/yup/es/util/isSchema.js");
/* harmony import */ var _util_printValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/printValue */ "./node_modules/yup/es/util/printValue.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locale */ "./node_modules/yup/es/locale.js");
/* harmony import */ var _util_runTests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/runTests */ "./node_modules/yup/es/util/runTests.js");
/* harmony import */ var _ValidationError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ValidationError */ "./node_modules/yup/es/ValidationError.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schema */ "./node_modules/yup/es/schema.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function create(type) {
  return new ArraySchema(type);
}
class ArraySchema extends _schema__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor(type) {
    super({
      type: 'array'
    }); // `undefined` specifically means uninitialized, as opposed to
    // "no subtype"

    this.innerType = void 0;
    this.innerType = type;
    this.withMutation(() => {
      this.transform(function (values) {
        if (typeof values === 'string') try {
          values = JSON.parse(values);
        } catch (err) {
          values = null;
        }
        return this.isType(values) ? values : null;
      });
    });
  }

  _typeCheck(v) {
    return Array.isArray(v);
  }

  get _subType() {
    return this.innerType;
  }

  _cast(_value, _opts) {
    const value = super._cast(_value, _opts); //should ignore nulls here


    if (!this._typeCheck(value) || !this.innerType) return value;
    let isChanged = false;
    const castArray = value.map((v, idx) => {
      const castElement = this.innerType.cast(v, _extends({}, _opts, {
        path: `${_opts.path || ''}[${idx}]`
      }));

      if (castElement !== v) {
        isChanged = true;
      }

      return castElement;
    });
    return isChanged ? castArray : value;
  }

  _validate(_value, options = {}, callback) {
    var _options$abortEarly, _options$recursive;

    let errors = [];
    let sync = options.sync;
    let path = options.path;
    let innerType = this.innerType;
    let endEarly = (_options$abortEarly = options.abortEarly) != null ? _options$abortEarly : this.spec.abortEarly;
    let recursive = (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive;
    let originalValue = options.originalValue != null ? options.originalValue : _value;

    super._validate(_value, options, (err, value) => {
      if (err) {
        if (!_ValidationError__WEBPACK_IMPORTED_MODULE_5__["default"].isError(err) || endEarly) {
          return void callback(err, value);
        }

        errors.push(err);
      }

      if (!recursive || !innerType || !this._typeCheck(value)) {
        callback(errors[0] || null, value);
        return;
      }

      originalValue = originalValue || value; // #950 Ensure that sparse array empty slots are validated

      let tests = new Array(value.length);

      for (let idx = 0; idx < value.length; idx++) {
        let item = value[idx];
        let path = `${options.path || ''}[${idx}]`; // object._validate note for isStrict explanation

        let innerOptions = _extends({}, options, {
          path,
          strict: true,
          parent: value,
          index: idx,
          originalValue: originalValue[idx]
        });

        tests[idx] = (_, cb) => innerType.validate(item, innerOptions, cb);
      }

      Object(_util_runTests__WEBPACK_IMPORTED_MODULE_4__["default"])({
        sync,
        path,
        value,
        errors,
        endEarly,
        tests
      }, callback);
    });
  }

  clone(spec) {
    const next = super.clone(spec);
    next.innerType = this.innerType;
    return next;
  }

  concat(schema) {
    let next = super.concat(schema);
    next.innerType = this.innerType;
    if (schema.innerType) next.innerType = next.innerType ? // @ts-expect-error Lazy doesn't have concat()
    next.innerType.concat(schema.innerType) : schema.innerType;
    return next;
  }

  of(schema) {
    // FIXME: this should return a new instance of array without the default to be
    let next = this.clone();
    if (!Object(_util_isSchema__WEBPACK_IMPORTED_MODULE_1__["default"])(schema)) throw new TypeError('`array.of()` sub-schema must be a valid yup schema not: ' + Object(_util_printValue__WEBPACK_IMPORTED_MODULE_2__["default"])(schema)); // FIXME(ts):

    next.innerType = schema;
    return next;
  }

  length(length, message = _locale__WEBPACK_IMPORTED_MODULE_3__["array"].length) {
    return this.test({
      message,
      name: 'length',
      exclusive: true,
      params: {
        length
      },

      test(value) {
        return Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || value.length === this.resolve(length);
      }

    });
  }

  min(min, message) {
    message = message || _locale__WEBPACK_IMPORTED_MODULE_3__["array"].min;
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        min
      },

      // FIXME(ts): Array<typeof T>
      test(value) {
        return Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || value.length >= this.resolve(min);
      }

    });
  }

  max(max, message) {
    message = message || _locale__WEBPACK_IMPORTED_MODULE_3__["array"].max;
    return this.test({
      message,
      name: 'max',
      exclusive: true,
      params: {
        max
      },

      test(value) {
        return Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || value.length <= this.resolve(max);
      }

    });
  }

  ensure() {
    return this.default(() => []).transform((val, original) => {
      // We don't want to return `null` for nullable schema
      if (this._typeCheck(val)) return val;
      return original == null ? [] : [].concat(original);
    });
  }

  compact(rejector) {
    let reject = !rejector ? v => !!v : (v, i, a) => !rejector(v, i, a);
    return this.transform(values => values != null ? values.filter(reject) : values);
  }

  describe() {
    let base = super.describe();
    if (this.innerType) base.innerType = this.innerType.describe();
    return base;
  }

  nullable(isNullable = true) {
    return super.nullable(isNullable);
  }

  defined() {
    return super.defined();
  }

  required(msg) {
    return super.required(msg);
  }

}
create.prototype = ArraySchema.prototype; //
// Interfaces
//

/***/ }),

/***/ "./node_modules/yup/es/boolean.js":
/*!****************************************!*\
  !*** ./node_modules/yup/es/boolean.js ***!
  \****************************************/
/*! exports provided: create, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BooleanSchema; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./node_modules/yup/es/schema.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale */ "./node_modules/yup/es/locale.js");
/* harmony import */ var _util_isAbsent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isAbsent */ "./node_modules/yup/es/util/isAbsent.js");



function create() {
  return new BooleanSchema();
}
class BooleanSchema extends _schema__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super({
      type: 'boolean'
    });
    this.withMutation(() => {
      this.transform(function (value) {
        if (!this.isType(value)) {
          if (/^(true|1)$/i.test(String(value))) return true;
          if (/^(false|0)$/i.test(String(value))) return false;
        }

        return value;
      });
    });
  }

  _typeCheck(v) {
    if (v instanceof Boolean) v = v.valueOf();
    return typeof v === 'boolean';
  }

  isTrue(message = _locale__WEBPACK_IMPORTED_MODULE_1__["boolean"].isValue) {
    return this.test({
      message,
      name: 'is-value',
      exclusive: true,
      params: {
        value: 'true'
      },

      test(value) {
        return Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || value === true;
      }

    });
  }

  isFalse(message = _locale__WEBPACK_IMPORTED_MODULE_1__["boolean"].isValue) {
    return this.test({
      message,
      name: 'is-value',
      exclusive: true,
      params: {
        value: 'false'
      },

      test(value) {
        return Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || value === false;
      }

    });
  }

}
create.prototype = BooleanSchema.prototype;

/***/ }),

/***/ "./node_modules/yup/es/date.js":
/*!*************************************!*\
  !*** ./node_modules/yup/es/date.js ***!
  \*************************************/
/*! exports provided: create, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateSchema; });
/* harmony import */ var _util_isodate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isodate */ "./node_modules/yup/es/util/isodate.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale */ "./node_modules/yup/es/locale.js");
/* harmony import */ var _util_isAbsent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isAbsent */ "./node_modules/yup/es/util/isAbsent.js");
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reference */ "./node_modules/yup/es/Reference.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schema */ "./node_modules/yup/es/schema.js");
// @ts-ignore





let invalidDate = new Date('');

let isDate = obj => Object.prototype.toString.call(obj) === '[object Date]';

function create() {
  return new DateSchema();
}
class DateSchema extends _schema__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor() {
    super({
      type: 'date'
    });
    this.withMutation(() => {
      this.transform(function (value) {
        if (this.isType(value)) return value;
        value = Object(_util_isodate__WEBPACK_IMPORTED_MODULE_0__["default"])(value); // 0 is a valid timestamp equivalent to 1970-01-01T00:00:00Z(unix epoch) or before.

        return !isNaN(value) ? new Date(value) : invalidDate;
      });
    });
  }

  _typeCheck(v) {
    return isDate(v) && !isNaN(v.getTime());
  }

  prepareParam(ref, name) {
    let param;

    if (!_Reference__WEBPACK_IMPORTED_MODULE_3__["default"].isRef(ref)) {
      let cast = this.cast(ref);
      if (!this._typeCheck(cast)) throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
      param = cast;
    } else {
      param = ref;
    }

    return param;
  }

  min(min, message = _locale__WEBPACK_IMPORTED_MODULE_1__["date"].min) {
    let limit = this.prepareParam(min, 'min');
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        min
      },

      test(value) {
        return Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || value >= this.resolve(limit);
      }

    });
  }

  max(max, message = _locale__WEBPACK_IMPORTED_MODULE_1__["date"].max) {
    let limit = this.prepareParam(max, 'max');
    return this.test({
      message,
      name: 'max',
      exclusive: true,
      params: {
        max
      },

      test(value) {
        return Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_2__["default"])(value) || value <= this.resolve(limit);
      }

    });
  }

}
DateSchema.INVALID_DATE = invalidDate;
create.prototype = DateSchema.prototype;
create.INVALID_DATE = invalidDate;

/***/ }),

/***/ "./node_modules/yup/es/index.js":
/*!**************************************!*\
  !*** ./node_modules/yup/es/index.js ***!
  \**************************************/
/*! exports provided: mixed, bool, boolean, string, number, date, object, array, ref, lazy, reach, isSchema, addMethod, setLocale, ValidationError, BaseSchema, MixedSchema, BooleanSchema, StringSchema, NumberSchema, DateSchema, ObjectSchema, ArraySchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMethod", function() { return addMethod; });
/* harmony import */ var _mixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixed */ "./node_modules/yup/es/mixed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixed", function() { return _mixed__WEBPACK_IMPORTED_MODULE_0__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MixedSchema", function() { return _mixed__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _boolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boolean */ "./node_modules/yup/es/boolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bool", function() { return _boolean__WEBPACK_IMPORTED_MODULE_1__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "boolean", function() { return _boolean__WEBPACK_IMPORTED_MODULE_1__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanSchema", function() { return _boolean__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./string */ "./node_modules/yup/es/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "string", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringSchema", function() { return _string__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number */ "./node_modules/yup/es/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "number", function() { return _number__WEBPACK_IMPORTED_MODULE_3__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberSchema", function() { return _number__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date */ "./node_modules/yup/es/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "date", function() { return _date__WEBPACK_IMPORTED_MODULE_4__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateSchema", function() { return _date__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object */ "./node_modules/yup/es/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _object__WEBPACK_IMPORTED_MODULE_5__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectSchema", function() { return _object__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array */ "./node_modules/yup/es/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "array", function() { return _array__WEBPACK_IMPORTED_MODULE_6__["create"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArraySchema", function() { return _array__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Reference */ "./node_modules/yup/es/Reference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return _Reference__WEBPACK_IMPORTED_MODULE_7__["create"]; });

/* harmony import */ var _Lazy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Lazy */ "./node_modules/yup/es/Lazy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return _Lazy__WEBPACK_IMPORTED_MODULE_8__["create"]; });

/* harmony import */ var _ValidationError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ValidationError */ "./node_modules/yup/es/ValidationError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationError", function() { return _ValidationError__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _util_reach__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/reach */ "./node_modules/yup/es/util/reach.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reach", function() { return _util_reach__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _util_isSchema__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/isSchema */ "./node_modules/yup/es/util/isSchema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSchema", function() { return _util_isSchema__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _setLocale__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./setLocale */ "./node_modules/yup/es/setLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLocale", function() { return _setLocale__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./schema */ "./node_modules/yup/es/schema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSchema", function() { return _schema__WEBPACK_IMPORTED_MODULE_13__["default"]; });
















function addMethod(schemaType, name, fn) {
  if (!schemaType || !Object(_util_isSchema__WEBPACK_IMPORTED_MODULE_11__["default"])(schemaType.prototype)) throw new TypeError('You must provide a yup schema constructor function');
  if (typeof name !== 'string') throw new TypeError('A Method name must be provided');
  if (typeof fn !== 'function') throw new TypeError('Method function must be provided');
  schemaType.prototype[name] = fn;
}




/***/ }),

/***/ "./node_modules/yup/es/locale.js":
/*!***************************************!*\
  !*** ./node_modules/yup/es/locale.js ***!
  \***************************************/
/*! exports provided: mixed, string, number, date, boolean, object, array, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixed", function() { return mixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boolean", function() { return boolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array", function() { return array; });
/* harmony import */ var _util_printValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/printValue */ "./node_modules/yup/es/util/printValue.js");

let mixed = {
  default: '${path} is invalid',
  required: '${path} is a required field',
  oneOf: '${path} must be one of the following values: ${values}',
  notOneOf: '${path} must not be one of the following values: ${values}',
  notType: ({
    path,
    type,
    value,
    originalValue
  }) => {
    let isCast = originalValue != null && originalValue !== value;
    let msg = `${path} must be a \`${type}\` type, ` + `but the final value was: \`${Object(_util_printValue__WEBPACK_IMPORTED_MODULE_0__["default"])(value, true)}\`` + (isCast ? ` (cast from the value \`${Object(_util_printValue__WEBPACK_IMPORTED_MODULE_0__["default"])(originalValue, true)}\`).` : '.');

    if (value === null) {
      msg += `\n If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``;
    }

    return msg;
  },
  defined: '${path} must be defined'
};
let string = {
  length: '${path} must be exactly ${length} characters',
  min: '${path} must be at least ${min} characters',
  max: '${path} must be at most ${max} characters',
  matches: '${path} must match the following: "${regex}"',
  email: '${path} must be a valid email',
  url: '${path} must be a valid URL',
  uuid: '${path} must be a valid UUID',
  trim: '${path} must be a trimmed string',
  lowercase: '${path} must be a lowercase string',
  uppercase: '${path} must be a upper case string'
};
let number = {
  min: '${path} must be greater than or equal to ${min}',
  max: '${path} must be less than or equal to ${max}',
  lessThan: '${path} must be less than ${less}',
  moreThan: '${path} must be greater than ${more}',
  positive: '${path} must be a positive number',
  negative: '${path} must be a negative number',
  integer: '${path} must be an integer'
};
let date = {
  min: '${path} field must be later than ${min}',
  max: '${path} field must be at earlier than ${max}'
};
let boolean = {
  isValue: '${path} field must be ${value}'
};
let object = {
  noUnknown: '${path} field has unspecified keys: ${unknown}'
};
let array = {
  min: '${path} field must have at least ${min} items',
  max: '${path} field must have less than or equal to ${max} items',
  length: '${path} must have ${length} items'
};
/* harmony default export */ __webpack_exports__["default"] = (Object.assign(Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean
}));

/***/ }),

/***/ "./node_modules/yup/es/mixed.js":
/*!**************************************!*\
  !*** ./node_modules/yup/es/mixed.js ***!
  \**************************************/
/*! exports provided: default, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema */ "./node_modules/yup/es/schema.js");

const Mixed = _schema__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Mixed);
function create() {
  return new Mixed();
} // XXX: this is using the Base schema so that `addMethod(mixed)` works as a base class

create.prototype = Mixed.prototype;

/***/ }),

/***/ "./node_modules/yup/es/number.js":
/*!***************************************!*\
  !*** ./node_modules/yup/es/number.js ***!
  \***************************************/
/*! exports provided: create, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumberSchema; });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale */ "./node_modules/yup/es/locale.js");
/* harmony import */ var _util_isAbsent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isAbsent */ "./node_modules/yup/es/util/isAbsent.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "./node_modules/yup/es/schema.js");




let isNaN = value => value != +value;

function create() {
  return new NumberSchema();
}
class NumberSchema extends _schema__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super({
      type: 'number'
    });
    this.withMutation(() => {
      this.transform(function (value) {
        let parsed = value;

        if (typeof parsed === 'string') {
          parsed = parsed.replace(/\s/g, '');
          if (parsed === '') return NaN; // don't use parseFloat to avoid positives on alpha-numeric strings

          parsed = +parsed;
        }

        if (this.isType(parsed)) return parsed;
        return parseFloat(parsed);
      });
    });
  }

  _typeCheck(value) {
    if (value instanceof Number) value = value.valueOf();
    return typeof value === 'number' && !isNaN(value);
  }

  min(min, message = _locale__WEBPACK_IMPORTED_MODULE_0__["number"].min) {
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        min
      },

      test(value) {
        return Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || value >= this.resolve(min);
      }

    });
  }

  max(max, message = _locale__WEBPACK_IMPORTED_MODULE_0__["number"].max) {
    return this.test({
      message,
      name: 'max',
      exclusive: true,
      params: {
        max
      },

      test(value) {
        return Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || value <= this.resolve(max);
      }

    });
  }

  lessThan(less, message = _locale__WEBPACK_IMPORTED_MODULE_0__["number"].lessThan) {
    return this.test({
      message,
      name: 'max',
      exclusive: true,
      params: {
        less
      },

      test(value) {
        return Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || value < this.resolve(less);
      }

    });
  }

  moreThan(more, message = _locale__WEBPACK_IMPORTED_MODULE_0__["number"].moreThan) {
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        more
      },

      test(value) {
        return Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || value > this.resolve(more);
      }

    });
  }

  positive(msg = _locale__WEBPACK_IMPORTED_MODULE_0__["number"].positive) {
    return this.moreThan(0, msg);
  }

  negative(msg = _locale__WEBPACK_IMPORTED_MODULE_0__["number"].negative) {
    return this.lessThan(0, msg);
  }

  integer(message = _locale__WEBPACK_IMPORTED_MODULE_0__["number"].integer) {
    return this.test({
      name: 'integer',
      message,
      test: val => Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(val) || Number.isInteger(val)
    });
  }

  truncate() {
    return this.transform(value => !Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? value | 0 : value);
  }

  round(method) {
    var _method;

    let avail = ['ceil', 'floor', 'round', 'trunc'];
    method = ((_method = method) == null ? void 0 : _method.toLowerCase()) || 'round'; // this exists for symemtry with the new Math.trunc

    if (method === 'trunc') return this.truncate();
    if (avail.indexOf(method.toLowerCase()) === -1) throw new TypeError('Only valid options for round() are: ' + avail.join(', '));
    return this.transform(value => !Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? Math[method](value) : value);
  }

}
create.prototype = NumberSchema.prototype; //
// Number Interfaces
//

/***/ }),

/***/ "./node_modules/yup/es/object.js":
/*!***************************************!*\
  !*** ./node_modules/yup/es/object.js ***!
  \***************************************/
/*! exports provided: default, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_snakeCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/snakeCase */ "./node_modules/lodash/snakeCase.js");
/* harmony import */ var lodash_snakeCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_snakeCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_mapKeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/mapKeys */ "./node_modules/lodash/mapKeys.js");
/* harmony import */ var lodash_mapKeys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_mapKeys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var property_expr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! property-expr */ "./node_modules/property-expr/index.js");
/* harmony import */ var property_expr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(property_expr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./locale */ "./node_modules/yup/es/locale.js");
/* harmony import */ var _util_sortFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/sortFields */ "./node_modules/yup/es/util/sortFields.js");
/* harmony import */ var _util_sortByKeyOrder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/sortByKeyOrder */ "./node_modules/yup/es/util/sortByKeyOrder.js");
/* harmony import */ var _util_runTests__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/runTests */ "./node_modules/yup/es/util/runTests.js");
/* harmony import */ var _ValidationError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ValidationError */ "./node_modules/yup/es/ValidationError.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./schema */ "./node_modules/yup/es/schema.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














let isObject = obj => Object.prototype.toString.call(obj) === '[object Object]';

function unknown(ctx, value) {
  let known = Object.keys(ctx.fields);
  return Object.keys(value).filter(key => known.indexOf(key) === -1);
}

const defaultSort = Object(_util_sortByKeyOrder__WEBPACK_IMPORTED_MODULE_8__["default"])([]);
class ObjectSchema extends _schema__WEBPACK_IMPORTED_MODULE_11__["default"] {
  constructor(spec) {
    super({
      type: 'object'
    });
    this.fields = Object.create(null);
    this._sortErrors = defaultSort;
    this._nodes = [];
    this._excludedEdges = [];
    this.withMutation(() => {
      this.transform(function coerce(value) {
        if (typeof value === 'string') {
          try {
            value = JSON.parse(value);
          } catch (err) {
            value = null;
          }
        }

        if (this.isType(value)) return value;
        return null;
      });

      if (spec) {
        this.shape(spec);
      }
    });
  }

  _typeCheck(value) {
    return isObject(value) || typeof value === 'function';
  }

  _cast(_value, options = {}) {
    var _options$stripUnknown;

    let value = super._cast(_value, options); //should ignore nulls here


    if (value === undefined) return this.getDefault();
    if (!this._typeCheck(value)) return value;
    let fields = this.fields;
    let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;

    let props = this._nodes.concat(Object.keys(value).filter(v => this._nodes.indexOf(v) === -1));

    let intermediateValue = {}; // is filled during the transform below

    let innerOptions = _extends({}, options, {
      parent: intermediateValue,
      __validating: options.__validating || false
    });

    let isChanged = false;

    for (const prop of props) {
      let field = fields[prop];
      let exists = lodash_has__WEBPACK_IMPORTED_MODULE_0___default()(value, prop);

      if (field) {
        let fieldValue;
        let inputValue = value[prop]; // safe to mutate since this is fired in sequence

        innerOptions.path = (options.path ? `${options.path}.` : '') + prop; // innerOptions.value = value[prop];

        field = field.resolve({
          value: inputValue,
          context: options.context,
          parent: intermediateValue
        });
        let fieldSpec = 'spec' in field ? field.spec : undefined;
        let strict = fieldSpec == null ? void 0 : fieldSpec.strict;

        if (fieldSpec == null ? void 0 : fieldSpec.strip) {
          isChanged = isChanged || prop in value;
          continue;
        }

        fieldValue = !options.__validating || !strict ? // TODO: use _cast, this is double resolving
        field.cast(value[prop], innerOptions) : value[prop];

        if (fieldValue !== undefined) {
          intermediateValue[prop] = fieldValue;
        }
      } else if (exists && !strip) {
        intermediateValue[prop] = value[prop];
      }

      if (intermediateValue[prop] !== value[prop]) {
        isChanged = true;
      }
    }

    return isChanged ? intermediateValue : value;
  }

  _validate(_value, opts = {}, callback) {
    let errors = [];
    let {
      sync,
      from = [],
      originalValue = _value,
      abortEarly = this.spec.abortEarly,
      recursive = this.spec.recursive
    } = opts;
    from = [{
      schema: this,
      value: originalValue
    }, ...from]; // this flag is needed for handling `strict` correctly in the context of
    // validation vs just casting. e.g strict() on a field is only used when validating

    opts.__validating = true;
    opts.originalValue = originalValue;
    opts.from = from;

    super._validate(_value, opts, (err, value) => {
      if (err) {
        if (!_ValidationError__WEBPACK_IMPORTED_MODULE_10__["default"].isError(err) || abortEarly) {
          return void callback(err, value);
        }

        errors.push(err);
      }

      if (!recursive || !isObject(value)) {
        callback(errors[0] || null, value);
        return;
      }

      originalValue = originalValue || value;

      let tests = this._nodes.map(key => (_, cb) => {
        let path = key.indexOf('.') === -1 ? (opts.path ? `${opts.path}.` : '') + key : `${opts.path || ''}["${key}"]`;
        let field = this.fields[key];

        if (field && 'validate' in field) {
          field.validate(value[key], _extends({}, opts, {
            // @ts-ignore
            path,
            from,
            // inner fields are always strict:
            // 1. this isn't strict so the casting will also have cast inner values
            // 2. this is strict in which case the nested values weren't cast either
            strict: true,
            parent: value,
            originalValue: originalValue[key]
          }), cb);
          return;
        }

        cb(null);
      });

      Object(_util_runTests__WEBPACK_IMPORTED_MODULE_9__["default"])({
        sync,
        tests,
        value,
        errors,
        endEarly: abortEarly,
        sort: this._sortErrors,
        path: opts.path
      }, callback);
    });
  }

  clone(spec) {
    const next = super.clone(spec);
    next.fields = _extends({}, this.fields);
    next._nodes = this._nodes;
    next._excludedEdges = this._excludedEdges;
    next._sortErrors = this._sortErrors;
    return next;
  }

  concat(schema) {
    let next = super.concat(schema);
    let nextFields = next.fields;

    for (let [field, schemaOrRef] of Object.entries(this.fields)) {
      const target = nextFields[field];

      if (target === undefined) {
        nextFields[field] = schemaOrRef;
      } else if (target instanceof _schema__WEBPACK_IMPORTED_MODULE_11__["default"] && schemaOrRef instanceof _schema__WEBPACK_IMPORTED_MODULE_11__["default"]) {
        nextFields[field] = schemaOrRef.concat(target);
      }
    }

    return next.withMutation(() => next.shape(nextFields, this._excludedEdges));
  }

  getDefaultFromShape() {
    let dft = {};

    this._nodes.forEach(key => {
      const field = this.fields[key];
      dft[key] = 'default' in field ? field.getDefault() : undefined;
    });

    return dft;
  }

  _getDefault() {
    if ('default' in this.spec) {
      return super._getDefault();
    } // if there is no default set invent one


    if (!this._nodes.length) {
      return undefined;
    }

    return this.getDefaultFromShape();
  }

  shape(additions, excludes = []) {
    let next = this.clone();
    let fields = Object.assign(next.fields, additions);
    next.fields = fields;
    next._sortErrors = Object(_util_sortByKeyOrder__WEBPACK_IMPORTED_MODULE_8__["default"])(Object.keys(fields));

    if (excludes.length) {
      // this is a convenience for when users only supply a single pair
      if (!Array.isArray(excludes[0])) excludes = [excludes];
      next._excludedEdges = [...next._excludedEdges, ...excludes];
    }

    next._nodes = Object(_util_sortFields__WEBPACK_IMPORTED_MODULE_7__["default"])(fields, next._excludedEdges);
    return next;
  }

  pick(keys) {
    const picked = {};

    for (const key of keys) {
      if (this.fields[key]) picked[key] = this.fields[key];
    }

    return this.clone().withMutation(next => {
      next.fields = {};
      return next.shape(picked);
    });
  }

  omit(keys) {
    const next = this.clone();
    const fields = next.fields;
    next.fields = {};

    for (const key of keys) {
      delete fields[key];
    }

    return next.withMutation(() => next.shape(fields));
  }

  from(from, to, alias) {
    let fromGetter = Object(property_expr__WEBPACK_IMPORTED_MODULE_5__["getter"])(from, true);
    return this.transform(obj => {
      if (obj == null) return obj;
      let newObj = obj;

      if (lodash_has__WEBPACK_IMPORTED_MODULE_0___default()(obj, from)) {
        newObj = _extends({}, obj);
        if (!alias) delete newObj[from];
        newObj[to] = fromGetter(obj);
      }

      return newObj;
    });
  }

  noUnknown(noAllow = true, message = _locale__WEBPACK_IMPORTED_MODULE_6__["object"].noUnknown) {
    if (typeof noAllow === 'string') {
      message = noAllow;
      noAllow = true;
    }

    let next = this.test({
      name: 'noUnknown',
      exclusive: true,
      message: message,

      test(value) {
        if (value == null) return true;
        const unknownKeys = unknown(this.schema, value);
        return !noAllow || unknownKeys.length === 0 || this.createError({
          params: {
            unknown: unknownKeys.join(', ')
          }
        });
      }

    });
    next.spec.noUnknown = noAllow;
    return next;
  }

  unknown(allow = true, message = _locale__WEBPACK_IMPORTED_MODULE_6__["object"].noUnknown) {
    return this.noUnknown(!allow, message);
  }

  transformKeys(fn) {
    return this.transform(obj => obj && lodash_mapKeys__WEBPACK_IMPORTED_MODULE_3___default()(obj, (_, key) => fn(key)));
  }

  camelCase() {
    return this.transformKeys(lodash_camelCase__WEBPACK_IMPORTED_MODULE_2___default.a);
  }

  snakeCase() {
    return this.transformKeys(lodash_snakeCase__WEBPACK_IMPORTED_MODULE_1___default.a);
  }

  constantCase() {
    return this.transformKeys(key => lodash_snakeCase__WEBPACK_IMPORTED_MODULE_1___default()(key).toUpperCase());
  }

  describe() {
    let base = super.describe();
    base.fields = lodash_mapValues__WEBPACK_IMPORTED_MODULE_4___default()(this.fields, value => value.describe());
    return base;
  }

}
function create(spec) {
  return new ObjectSchema(spec);
}
create.prototype = ObjectSchema.prototype;

/***/ }),

/***/ "./node_modules/yup/es/schema.js":
/*!***************************************!*\
  !*** ./node_modules/yup/es/schema.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseSchema; });
/* harmony import */ var nanoclone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoclone */ "./node_modules/nanoclone/src/index.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale */ "./node_modules/yup/es/locale.js");
/* harmony import */ var _Condition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Condition */ "./node_modules/yup/es/Condition.js");
/* harmony import */ var _util_runTests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/runTests */ "./node_modules/yup/es/util/runTests.js");
/* harmony import */ var _util_createValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/createValidation */ "./node_modules/yup/es/util/createValidation.js");
/* harmony import */ var _util_printValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/printValue */ "./node_modules/yup/es/util/printValue.js");
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Reference */ "./node_modules/yup/es/Reference.js");
/* harmony import */ var _util_reach__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/reach */ "./node_modules/yup/es/util/reach.js");
/* harmony import */ var _ValidationError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValidationError */ "./node_modules/yup/es/ValidationError.js");
/* harmony import */ var _util_ReferenceSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/ReferenceSet */ "./node_modules/yup/es/util/ReferenceSet.js");
/* harmony import */ var _util_toArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/toArray */ "./node_modules/yup/es/util/toArray.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// @ts-ignore










 // const UNSET = 'unset' as const;

class BaseSchema {
  constructor(options) {
    this.deps = [];
    this.tests = void 0;
    this.transforms = void 0;
    this.conditions = [];
    this._mutate = void 0;
    this._typeError = void 0;
    this._whitelist = new _util_ReferenceSet__WEBPACK_IMPORTED_MODULE_9__["default"]();
    this._blacklist = new _util_ReferenceSet__WEBPACK_IMPORTED_MODULE_9__["default"]();
    this.exclusiveTests = Object.create(null);
    this.spec = void 0;
    this.tests = [];
    this.transforms = [];
    this.withMutation(() => {
      this.typeError(_locale__WEBPACK_IMPORTED_MODULE_1__["mixed"].notType);
    });
    this.type = (options == null ? void 0 : options.type) || 'mixed';
    this.spec = _extends({
      strip: false,
      strict: false,
      abortEarly: true,
      recursive: true,
      nullable: false,
      presence: 'optional'
    }, options == null ? void 0 : options.spec);
  } // TODO: remove


  get _type() {
    return this.type;
  }

  _typeCheck(_value) {
    return true;
  }

  clone(spec) {
    if (this._mutate) {
      if (spec) Object.assign(this.spec, spec);
      return this;
    } // if the nested value is a schema we can skip cloning, since
    // they are already immutable


    const next = Object.create(Object.getPrototypeOf(this)); // @ts-expect-error this is readonly

    next.type = this.type;
    next._typeError = this._typeError;
    next._whitelistError = this._whitelistError;
    next._blacklistError = this._blacklistError;
    next._whitelist = this._whitelist.clone();
    next._blacklist = this._blacklist.clone();
    next.exclusiveTests = _extends({}, this.exclusiveTests); // @ts-expect-error this is readonly

    next.deps = [...this.deps];
    next.conditions = [...this.conditions];
    next.tests = [...this.tests];
    next.transforms = [...this.transforms];
    next.spec = Object(nanoclone__WEBPACK_IMPORTED_MODULE_0__["default"])(_extends({}, this.spec, spec));
    return next;
  }

  label(label) {
    let next = this.clone();
    next.spec.label = label;
    return next;
  }

  meta(...args) {
    if (args.length === 0) return this.spec.meta;
    let next = this.clone();
    next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
    return next;
  } // withContext<TContext extends AnyObject>(): BaseSchema<
  //   TCast,
  //   TContext,
  //   TOutput
  // > {
  //   return this as any;
  // }


  withMutation(fn) {
    let before = this._mutate;
    this._mutate = true;
    let result = fn(this);
    this._mutate = before;
    return result;
  }

  concat(schema) {
    if (!schema || schema === this) return this;
    if (schema.type !== this.type && this.type !== 'mixed') throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
    let base = this;
    let combined = schema.clone();

    const mergedSpec = _extends({}, base.spec, combined.spec); // if (combined.spec.nullable === UNSET)
    //   mergedSpec.nullable = base.spec.nullable;
    // if (combined.spec.presence === UNSET)
    //   mergedSpec.presence = base.spec.presence;


    combined.spec = mergedSpec;
    combined._typeError || (combined._typeError = base._typeError);
    combined._whitelistError || (combined._whitelistError = base._whitelistError);
    combined._blacklistError || (combined._blacklistError = base._blacklistError); // manually merge the blacklist/whitelist (the other `schema` takes
    // precedence in case of conflicts)

    combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
    combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist); // start with the current tests

    combined.tests = base.tests;
    combined.exclusiveTests = base.exclusiveTests; // manually add the new tests to ensure
    // the deduping logic is consistent

    combined.withMutation(next => {
      schema.tests.forEach(fn => {
        next.test(fn.OPTIONS);
      });
    });
    combined.transforms = [...base.transforms, ...combined.transforms];
    return combined;
  }

  isType(v) {
    if (this.spec.nullable && v === null) return true;
    return this._typeCheck(v);
  }

  resolve(options) {
    let schema = this;

    if (schema.conditions.length) {
      let conditions = schema.conditions;
      schema = schema.clone();
      schema.conditions = [];
      schema = conditions.reduce((schema, condition) => condition.resolve(schema, options), schema);
      schema = schema.resolve(options);
    }

    return schema;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {*=} options.parent
   * @param {*=} options.context
   */


  cast(value, options = {}) {
    let resolvedSchema = this.resolve(_extends({
      value
    }, options));

    let result = resolvedSchema._cast(value, options);

    if (value !== undefined && options.assert !== false && resolvedSchema.isType(result) !== true) {
      let formattedValue = Object(_util_printValue__WEBPACK_IMPORTED_MODULE_5__["default"])(value);
      let formattedResult = Object(_util_printValue__WEBPACK_IMPORTED_MODULE_5__["default"])(result);
      throw new TypeError(`The value of ${options.path || 'field'} could not be cast to a value ` + `that satisfies the schema type: "${resolvedSchema._type}". \n\n` + `attempted value: ${formattedValue} \n` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ''));
    }

    return result;
  }

  _cast(rawValue, _options) {
    let value = rawValue === undefined ? rawValue : this.transforms.reduce((value, fn) => fn.call(this, value, rawValue, this), rawValue);

    if (value === undefined) {
      value = this.getDefault();
    }

    return value;
  }

  _validate(_value, options = {}, cb) {
    let {
      sync,
      path,
      from = [],
      originalValue = _value,
      strict = this.spec.strict,
      abortEarly = this.spec.abortEarly
    } = options;
    let value = _value;

    if (!strict) {
      // this._validating = true;
      value = this._cast(value, _extends({
        assert: false
      }, options)); // this._validating = false;
    } // value is cast, we can check if it meets type requirements


    let args = {
      value,
      path,
      options,
      originalValue,
      schema: this,
      label: this.spec.label,
      sync,
      from
    };
    let initialTests = [];
    if (this._typeError) initialTests.push(this._typeError);
    let finalTests = [];
    if (this._whitelistError) finalTests.push(this._whitelistError);
    if (this._blacklistError) finalTests.push(this._blacklistError);
    Object(_util_runTests__WEBPACK_IMPORTED_MODULE_3__["default"])({
      args,
      value,
      path,
      sync,
      tests: initialTests,
      endEarly: abortEarly
    }, err => {
      if (err) return void cb(err, value);
      Object(_util_runTests__WEBPACK_IMPORTED_MODULE_3__["default"])({
        tests: this.tests.concat(finalTests),
        args,
        path,
        sync,
        value,
        endEarly: abortEarly
      }, cb);
    });
  }

  validate(value, options, maybeCb) {
    let schema = this.resolve(_extends({}, options, {
      value
    })); // callback case is for nested validations

    return typeof maybeCb === 'function' ? schema._validate(value, options, maybeCb) : new Promise((resolve, reject) => schema._validate(value, options, (err, value) => {
      if (err) reject(err);else resolve(value);
    }));
  }

  validateSync(value, options) {
    let schema = this.resolve(_extends({}, options, {
      value
    }));
    let result;

    schema._validate(value, _extends({}, options, {
      sync: true
    }), (err, value) => {
      if (err) throw err;
      result = value;
    });

    return result;
  }

  isValid(value, options) {
    return this.validate(value, options).then(() => true, err => {
      if (_ValidationError__WEBPACK_IMPORTED_MODULE_8__["default"].isError(err)) return false;
      throw err;
    });
  }

  isValidSync(value, options) {
    try {
      this.validateSync(value, options);
      return true;
    } catch (err) {
      if (_ValidationError__WEBPACK_IMPORTED_MODULE_8__["default"].isError(err)) return false;
      throw err;
    }
  }

  _getDefault() {
    let defaultValue = this.spec.default;

    if (defaultValue == null) {
      return defaultValue;
    }

    return typeof defaultValue === 'function' ? defaultValue.call(this) : Object(nanoclone__WEBPACK_IMPORTED_MODULE_0__["default"])(defaultValue);
  }

  getDefault(options) {
    let schema = this.resolve(options || {});
    return schema._getDefault();
  }

  default(def) {
    if (arguments.length === 0) {
      return this._getDefault();
    }

    let next = this.clone({
      default: def
    });
    return next;
  }

  strict(isStrict = true) {
    let next = this.clone();
    next.spec.strict = isStrict;
    return next;
  }

  _isPresent(value) {
    return value != null;
  }

  defined(message = _locale__WEBPACK_IMPORTED_MODULE_1__["mixed"].defined) {
    return this.test({
      message,
      name: 'defined',
      exclusive: true,

      test(value) {
        return value !== undefined;
      }

    });
  }

  required(message = _locale__WEBPACK_IMPORTED_MODULE_1__["mixed"].required) {
    return this.clone({
      presence: 'required'
    }).withMutation(s => s.test({
      message,
      name: 'required',
      exclusive: true,

      test(value) {
        return this.schema._isPresent(value);
      }

    }));
  }

  notRequired() {
    let next = this.clone({
      presence: 'optional'
    });
    next.tests = next.tests.filter(test => test.OPTIONS.name !== 'required');
    return next;
  }

  nullable(isNullable = true) {
    let next = this.clone({
      nullable: isNullable !== false
    });
    return next;
  }

  transform(fn) {
    let next = this.clone();
    next.transforms.push(fn);
    return next;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */


  test(...args) {
    let opts;

    if (args.length === 1) {
      if (typeof args[0] === 'function') {
        opts = {
          test: args[0]
        };
      } else {
        opts = args[0];
      }
    } else if (args.length === 2) {
      opts = {
        name: args[0],
        test: args[1]
      };
    } else {
      opts = {
        name: args[0],
        message: args[1],
        test: args[2]
      };
    }

    if (opts.message === undefined) opts.message = _locale__WEBPACK_IMPORTED_MODULE_1__["mixed"].default;
    if (typeof opts.test !== 'function') throw new TypeError('`test` is a required parameters');
    let next = this.clone();
    let validate = Object(_util_createValidation__WEBPACK_IMPORTED_MODULE_4__["default"])(opts);
    let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;

    if (opts.exclusive) {
      if (!opts.name) throw new TypeError('Exclusive tests must provide a unique `name` identifying the test');
    }

    if (opts.name) next.exclusiveTests[opts.name] = !!opts.exclusive;
    next.tests = next.tests.filter(fn => {
      if (fn.OPTIONS.name === opts.name) {
        if (isExclusive) return false;
        if (fn.OPTIONS.test === validate.OPTIONS.test) return false;
      }

      return true;
    });
    next.tests.push(validate);
    return next;
  }

  when(keys, options) {
    if (!Array.isArray(keys) && typeof keys !== 'string') {
      options = keys;
      keys = '.';
    }

    let next = this.clone();
    let deps = Object(_util_toArray__WEBPACK_IMPORTED_MODULE_10__["default"])(keys).map(key => new _Reference__WEBPACK_IMPORTED_MODULE_6__["default"](key));
    deps.forEach(dep => {
      // @ts-ignore
      if (dep.isSibling) next.deps.push(dep.key);
    });
    next.conditions.push(new _Condition__WEBPACK_IMPORTED_MODULE_2__["default"](deps, options));
    return next;
  }

  typeError(message) {
    let next = this.clone();
    next._typeError = Object(_util_createValidation__WEBPACK_IMPORTED_MODULE_4__["default"])({
      message,
      name: 'typeError',

      test(value) {
        if (value !== undefined && !this.schema.isType(value)) return this.createError({
          params: {
            type: this.schema._type
          }
        });
        return true;
      }

    });
    return next;
  }

  oneOf(enums, message = _locale__WEBPACK_IMPORTED_MODULE_1__["mixed"].oneOf) {
    let next = this.clone();
    enums.forEach(val => {
      next._whitelist.add(val);

      next._blacklist.delete(val);
    });
    next._whitelistError = Object(_util_createValidation__WEBPACK_IMPORTED_MODULE_4__["default"])({
      message,
      name: 'oneOf',

      test(value) {
        if (value === undefined) return true;
        let valids = this.schema._whitelist;
        let resolved = valids.resolveAll(this.resolve);
        return resolved.includes(value) ? true : this.createError({
          params: {
            values: valids.toArray().join(', '),
            resolved
          }
        });
      }

    });
    return next;
  }

  notOneOf(enums, message = _locale__WEBPACK_IMPORTED_MODULE_1__["mixed"].notOneOf) {
    let next = this.clone();
    enums.forEach(val => {
      next._blacklist.add(val);

      next._whitelist.delete(val);
    });
    next._blacklistError = Object(_util_createValidation__WEBPACK_IMPORTED_MODULE_4__["default"])({
      message,
      name: 'notOneOf',

      test(value) {
        let invalids = this.schema._blacklist;
        let resolved = invalids.resolveAll(this.resolve);
        if (resolved.includes(value)) return this.createError({
          params: {
            values: invalids.toArray().join(', '),
            resolved
          }
        });
        return true;
      }

    });
    return next;
  }

  strip(strip = true) {
    let next = this.clone();
    next.spec.strip = strip;
    return next;
  }

  describe() {
    const next = this.clone();
    const {
      label,
      meta
    } = next.spec;
    const description = {
      meta,
      label,
      type: next.type,
      oneOf: next._whitelist.describe(),
      notOneOf: next._blacklist.describe(),
      tests: next.tests.map(fn => ({
        name: fn.OPTIONS.name,
        params: fn.OPTIONS.params
      })).filter((n, idx, list) => list.findIndex(c => c.name === n.name) === idx)
    };
    return description;
  }

} // eslint-disable-next-line @typescript-eslint/no-unused-vars

// @ts-expect-error
BaseSchema.prototype.__isYupSchema__ = true;

for (const method of ['validate', 'validateSync']) BaseSchema.prototype[`${method}At`] = function (path, value, options = {}) {
  const {
    parent,
    parentPath,
    schema
  } = Object(_util_reach__WEBPACK_IMPORTED_MODULE_7__["getIn"])(this, path, value, options.context);
  return schema[method](parent && parent[parentPath], _extends({}, options, {
    parent,
    path
  }));
};

for (const alias of ['equals', 'is']) BaseSchema.prototype[alias] = BaseSchema.prototype.oneOf;

for (const alias of ['not', 'nope']) BaseSchema.prototype[alias] = BaseSchema.prototype.notOneOf;

BaseSchema.prototype.optional = BaseSchema.prototype.notRequired;

/***/ }),

/***/ "./node_modules/yup/es/setLocale.js":
/*!******************************************!*\
  !*** ./node_modules/yup/es/setLocale.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setLocale; });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale */ "./node_modules/yup/es/locale.js");

function setLocale(custom) {
  Object.keys(custom).forEach(type => {
    // @ts-ignore
    Object.keys(custom[type]).forEach(method => {
      // @ts-ignore
      _locale__WEBPACK_IMPORTED_MODULE_0__["default"][type][method] = custom[type][method];
    });
  });
}

/***/ }),

/***/ "./node_modules/yup/es/string.js":
/*!***************************************!*\
  !*** ./node_modules/yup/es/string.js ***!
  \***************************************/
/*! exports provided: create, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StringSchema; });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale */ "./node_modules/yup/es/locale.js");
/* harmony import */ var _util_isAbsent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isAbsent */ "./node_modules/yup/es/util/isAbsent.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "./node_modules/yup/es/schema.js");


 // eslint-disable-next-line

let rEmail = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i; // eslint-disable-next-line

let rUrl = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i; // eslint-disable-next-line

let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

let isTrimmed = value => Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || value === value.trim();

let objStringTag = {}.toString();
function create() {
  return new StringSchema();
}
class StringSchema extends _schema__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super({
      type: 'string'
    });
    this.withMutation(() => {
      this.transform(function (value) {
        if (this.isType(value)) return value;
        if (Array.isArray(value)) return value;
        const strValue = value != null && value.toString ? value.toString() : value;
        if (strValue === objStringTag) return value;
        return strValue;
      });
    });
  }

  _typeCheck(value) {
    if (value instanceof String) value = value.valueOf();
    return typeof value === 'string';
  }

  _isPresent(value) {
    return super._isPresent(value) && !!value.length;
  }

  length(length, message = _locale__WEBPACK_IMPORTED_MODULE_0__["string"].length) {
    return this.test({
      message,
      name: 'length',
      exclusive: true,
      params: {
        length
      },

      test(value) {
        return Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || value.length === this.resolve(length);
      }

    });
  }

  min(min, message = _locale__WEBPACK_IMPORTED_MODULE_0__["string"].min) {
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        min
      },

      test(value) {
        return Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || value.length >= this.resolve(min);
      }

    });
  }

  max(max, message = _locale__WEBPACK_IMPORTED_MODULE_0__["string"].max) {
    return this.test({
      name: 'max',
      exclusive: true,
      message,
      params: {
        max
      },

      test(value) {
        return Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || value.length <= this.resolve(max);
      }

    });
  }

  matches(regex, options) {
    let excludeEmptyString = false;
    let message;
    let name;

    if (options) {
      if (typeof options === 'object') {
        ({
          excludeEmptyString = false,
          message,
          name
        } = options);
      } else {
        message = options;
      }
    }

    return this.test({
      name: name || 'matches',
      message: message || _locale__WEBPACK_IMPORTED_MODULE_0__["string"].matches,
      params: {
        regex
      },
      test: value => Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || value === '' && excludeEmptyString || value.search(regex) !== -1
    });
  }

  email(message = _locale__WEBPACK_IMPORTED_MODULE_0__["string"].email) {
    return this.matches(rEmail, {
      name: 'email',
      message,
      excludeEmptyString: true
    });
  }

  url(message = _locale__WEBPACK_IMPORTED_MODULE_0__["string"].url) {
    return this.matches(rUrl, {
      name: 'url',
      message,
      excludeEmptyString: true
    });
  }

  uuid(message = _locale__WEBPACK_IMPORTED_MODULE_0__["string"].uuid) {
    return this.matches(rUUID, {
      name: 'uuid',
      message,
      excludeEmptyString: false
    });
  } //-- transforms --


  ensure() {
    return this.default('').transform(val => val === null ? '' : val);
  }

  trim(message = _locale__WEBPACK_IMPORTED_MODULE_0__["string"].trim) {
    return this.transform(val => val != null ? val.trim() : val).test({
      message,
      name: 'trim',
      test: isTrimmed
    });
  }

  lowercase(message = _locale__WEBPACK_IMPORTED_MODULE_0__["string"].lowercase) {
    return this.transform(value => !Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? value.toLowerCase() : value).test({
      message,
      name: 'string_case',
      exclusive: true,
      test: value => Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || value === value.toLowerCase()
    });
  }

  uppercase(message = _locale__WEBPACK_IMPORTED_MODULE_0__["string"].uppercase) {
    return this.transform(value => !Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) ? value.toUpperCase() : value).test({
      message,
      name: 'string_case',
      exclusive: true,
      test: value => Object(_util_isAbsent__WEBPACK_IMPORTED_MODULE_1__["default"])(value) || value === value.toUpperCase()
    });
  }

}
create.prototype = StringSchema.prototype; //
// String Interfaces
//

/***/ }),

/***/ "./node_modules/yup/es/util/ReferenceSet.js":
/*!**************************************************!*\
  !*** ./node_modules/yup/es/util/ReferenceSet.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReferenceSet; });
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Reference */ "./node_modules/yup/es/Reference.js");

class ReferenceSet {
  constructor() {
    this.list = void 0;
    this.refs = void 0;
    this.list = new Set();
    this.refs = new Map();
  }

  get size() {
    return this.list.size + this.refs.size;
  }

  describe() {
    const description = [];

    for (const item of this.list) description.push(item);

    for (const [, ref] of this.refs) description.push(ref.describe());

    return description;
  }

  toArray() {
    return Array.from(this.list).concat(Array.from(this.refs.values()));
  }

  resolveAll(resolve) {
    return this.toArray().reduce((acc, e) => acc.concat(_Reference__WEBPACK_IMPORTED_MODULE_0__["default"].isRef(e) ? resolve(e) : e), []);
  }

  add(value) {
    _Reference__WEBPACK_IMPORTED_MODULE_0__["default"].isRef(value) ? this.refs.set(value.key, value) : this.list.add(value);
  }

  delete(value) {
    _Reference__WEBPACK_IMPORTED_MODULE_0__["default"].isRef(value) ? this.refs.delete(value.key) : this.list.delete(value);
  }

  clone() {
    const next = new ReferenceSet();
    next.list = new Set(this.list);
    next.refs = new Map(this.refs);
    return next;
  }

  merge(newItems, removeItems) {
    const next = this.clone();
    newItems.list.forEach(value => next.add(value));
    newItems.refs.forEach(value => next.add(value));
    removeItems.list.forEach(value => next.delete(value));
    removeItems.refs.forEach(value => next.delete(value));
    return next;
  }

}

/***/ }),

/***/ "./node_modules/yup/es/util/createValidation.js":
/*!******************************************************!*\
  !*** ./node_modules/yup/es/util/createValidation.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createValidation; });
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/mapValues */ "./node_modules/lodash/mapValues.js");
/* harmony import */ var lodash_mapValues__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_mapValues__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ValidationError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ValidationError */ "./node_modules/yup/es/ValidationError.js");
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Reference */ "./node_modules/yup/es/Reference.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function createValidation(config) {
  function validate(_ref, cb) {
    let {
      value,
      path = '',
      label,
      options,
      originalValue,
      sync
    } = _ref,
        rest = _objectWithoutPropertiesLoose(_ref, ["value", "path", "label", "options", "originalValue", "sync"]);

    const {
      name,
      test,
      params,
      message
    } = config;
    let {
      parent,
      context
    } = options;

    function resolve(item) {
      return _Reference__WEBPACK_IMPORTED_MODULE_2__["default"].isRef(item) ? item.getValue(value, parent, context) : item;
    }

    function createError(overrides = {}) {
      const nextParams = lodash_mapValues__WEBPACK_IMPORTED_MODULE_0___default()(_extends({
        value,
        originalValue,
        label,
        path: overrides.path || path
      }, params, overrides.params), resolve);
      const error = new _ValidationError__WEBPACK_IMPORTED_MODULE_1__["default"](_ValidationError__WEBPACK_IMPORTED_MODULE_1__["default"].formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name);
      error.params = nextParams;
      return error;
    }

    let ctx = _extends({
      path,
      parent,
      type: name,
      createError,
      resolve,
      options,
      originalValue
    }, rest);

    if (!sync) {
      try {
        Promise.resolve(test.call(ctx, value, ctx)).then(validOrError => {
          if (_ValidationError__WEBPACK_IMPORTED_MODULE_1__["default"].isError(validOrError)) cb(validOrError);else if (!validOrError) cb(createError());else cb(null, validOrError);
        }).catch(cb);
      } catch (err) {
        cb(err);
      }

      return;
    }

    let result;

    try {
      var _ref2;

      result = test.call(ctx, value, ctx);

      if (typeof ((_ref2 = result) == null ? void 0 : _ref2.then) === 'function') {
        throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. ` + `This test will finish after the validate call has returned`);
      }
    } catch (err) {
      cb(err);
      return;
    }

    if (_ValidationError__WEBPACK_IMPORTED_MODULE_1__["default"].isError(result)) cb(result);else if (!result) cb(createError());else cb(null, result);
  }

  validate.OPTIONS = config;
  return validate;
}

/***/ }),

/***/ "./node_modules/yup/es/util/isAbsent.js":
/*!**********************************************!*\
  !*** ./node_modules/yup/es/util/isAbsent.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isAbsent = value => value == null;

/* harmony default export */ __webpack_exports__["default"] = (isAbsent);

/***/ }),

/***/ "./node_modules/yup/es/util/isSchema.js":
/*!**********************************************!*\
  !*** ./node_modules/yup/es/util/isSchema.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const isSchema = obj => obj && obj.__isYupSchema__;

/* harmony default export */ __webpack_exports__["default"] = (isSchema);

/***/ }),

/***/ "./node_modules/yup/es/util/isodate.js":
/*!*********************************************!*\
  !*** ./node_modules/yup/es/util/isodate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseIsoDate; });
/* eslint-disable */

/**
 *
 * Date.parse with progressive enhancement for ISO 8601 <https://github.com/csnover/js-iso8601>
 * NON-CONFORMANT EDITION.
 * © 2011 Colin Snover <http://zetafleet.com>
 * Released under MIT license.
 */
//              1 YYYY                 2 MM        3 DD              4 HH     5 mm        6 ss            7 msec         8 Z 9 ±    10 tzHH    11 tzmm
var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date) {
  var numericKeys = [1, 4, 5, 6, 7, 10, 11],
      minutesOffset = 0,
      timestamp,
      struct;

  if (struct = isoReg.exec(date)) {
    // avoid NaN timestamps caused by “undefined” values being passed to Date.UTC
    for (var i = 0, k; k = numericKeys[i]; ++i) struct[k] = +struct[k] || 0; // allow undefined days and months


    struct[2] = (+struct[2] || 1) - 1;
    struct[3] = +struct[3] || 1; // allow arbitrary sub-second precision beyond milliseconds

    struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0; // timestamps without timezone identifiers should be considered local time

    if ((struct[8] === undefined || struct[8] === '') && (struct[9] === undefined || struct[9] === '')) timestamp = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);else {
      if (struct[8] !== 'Z' && struct[9] !== undefined) {
        minutesOffset = struct[10] * 60 + struct[11];
        if (struct[9] === '+') minutesOffset = 0 - minutesOffset;
      }

      timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
    }
  } else timestamp = Date.parse ? Date.parse(date) : NaN;

  return timestamp;
}

/***/ }),

/***/ "./node_modules/yup/es/util/printValue.js":
/*!************************************************!*\
  !*** ./node_modules/yup/es/util/printValue.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printValue; });
const toString = Object.prototype.toString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString = typeof Symbol !== 'undefined' ? Symbol.prototype.toString : () => '';
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;

function printNumber(val) {
  if (val != +val) return 'NaN';
  const isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? '-0' : '' + val;
}

function printSimpleValue(val, quoteStrings = false) {
  if (val == null || val === true || val === false) return '' + val;
  const typeOf = typeof val;
  if (typeOf === 'number') return printNumber(val);
  if (typeOf === 'string') return quoteStrings ? `"${val}"` : val;
  if (typeOf === 'function') return '[Function ' + (val.name || 'anonymous') + ']';
  if (typeOf === 'symbol') return symbolToString.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
  const tag = toString.call(val).slice(8, -1);
  if (tag === 'Date') return isNaN(val.getTime()) ? '' + val : val.toISOString(val);
  if (tag === 'Error' || val instanceof Error) return '[' + errorToString.call(val) + ']';
  if (tag === 'RegExp') return regExpToString.call(val);
  return null;
}

function printValue(value, quoteStrings) {
  let result = printSimpleValue(value, quoteStrings);
  if (result !== null) return result;
  return JSON.stringify(value, function (key, value) {
    let result = printSimpleValue(this[key], quoteStrings);
    if (result !== null) return result;
    return value;
  }, 2);
}

/***/ }),

/***/ "./node_modules/yup/es/util/reach.js":
/*!*******************************************!*\
  !*** ./node_modules/yup/es/util/reach.js ***!
  \*******************************************/
/*! exports provided: getIn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony import */ var property_expr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! property-expr */ "./node_modules/property-expr/index.js");
/* harmony import */ var property_expr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(property_expr__WEBPACK_IMPORTED_MODULE_0__);


let trim = part => part.substr(0, part.length - 1).substr(1);

function getIn(schema, path, value, context = value) {
  let parent, lastPart, lastPartDebug; // root path: ''

  if (!path) return {
    parent,
    parentPath: path,
    schema
  };
  Object(property_expr__WEBPACK_IMPORTED_MODULE_0__["forEach"])(path, (_part, isBracket, isArray) => {
    let part = isBracket ? trim(_part) : _part;
    schema = schema.resolve({
      context,
      parent,
      value
    });

    if (schema.innerType) {
      let idx = isArray ? parseInt(part, 10) : 0;

      if (value && idx >= value.length) {
        throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. ` + `because there is no value at that index. `);
      }

      parent = value;
      value = value && value[idx];
      schema = schema.innerType;
    } // sometimes the array index part of a path doesn't exist: "nested.arr.child"
    // in these cases the current part is the next schema and should be processed
    // in this iteration. For cases where the index signature is included this
    // check will fail and we'll handle the `child` part on the next iteration like normal


    if (!isArray) {
      if (!schema.fields || !schema.fields[part]) throw new Error(`The schema does not contain the path: ${path}. ` + `(failed at: ${lastPartDebug} which is a type: "${schema._type}")`);
      parent = value;
      value = value && value[part];
      schema = schema.fields[part];
    }

    lastPart = part;
    lastPartDebug = isBracket ? '[' + _part + ']' : '.' + _part;
  });
  return {
    schema,
    parent,
    parentPath: lastPart
  };
}

const reach = (obj, path, value, context) => getIn(obj, path, value, context).schema;

/* harmony default export */ __webpack_exports__["default"] = (reach);

/***/ }),

/***/ "./node_modules/yup/es/util/runTests.js":
/*!**********************************************!*\
  !*** ./node_modules/yup/es/util/runTests.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return runTests; });
/* harmony import */ var _ValidationError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ValidationError */ "./node_modules/yup/es/ValidationError.js");


const once = cb => {
  let fired = false;
  return (...args) => {
    if (fired) return;
    fired = true;
    cb(...args);
  };
};

function runTests(options, cb) {
  let {
    endEarly,
    tests,
    args,
    value,
    errors,
    sort,
    path
  } = options;
  let callback = once(cb);
  let count = tests.length;
  const nestedErrors = [];
  errors = errors ? errors : [];
  if (!count) return errors.length ? callback(new _ValidationError__WEBPACK_IMPORTED_MODULE_0__["default"](errors, value, path)) : callback(null, value);

  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    test(args, function finishTestRun(err) {
      if (err) {
        // always return early for non validation errors
        if (!_ValidationError__WEBPACK_IMPORTED_MODULE_0__["default"].isError(err)) {
          return callback(err, value);
        }

        if (endEarly) {
          err.value = value;
          return callback(err, value);
        }

        nestedErrors.push(err);
      }

      if (--count <= 0) {
        if (nestedErrors.length) {
          if (sort) nestedErrors.sort(sort); //show parent errors after the nested ones: name.first, name

          if (errors.length) nestedErrors.push(...errors);
          errors = nestedErrors;
        }

        if (errors.length) {
          callback(new _ValidationError__WEBPACK_IMPORTED_MODULE_0__["default"](errors, value, path), value);
          return;
        }

        callback(null, value);
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/yup/es/util/sortByKeyOrder.js":
/*!****************************************************!*\
  !*** ./node_modules/yup/es/util/sortByKeyOrder.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortByKeyOrder; });
function findIndex(arr, err) {
  let idx = Infinity;
  arr.some((key, ii) => {
    var _err$path;

    if (((_err$path = err.path) == null ? void 0 : _err$path.indexOf(key)) !== -1) {
      idx = ii;
      return true;
    }
  });
  return idx;
}

function sortByKeyOrder(keys) {
  return (a, b) => {
    return findIndex(keys, a) - findIndex(keys, b);
  };
}

/***/ }),

/***/ "./node_modules/yup/es/util/sortFields.js":
/*!************************************************!*\
  !*** ./node_modules/yup/es/util/sortFields.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortFields; });
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var toposort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toposort */ "./node_modules/toposort/index.js");
/* harmony import */ var toposort__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(toposort__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var property_expr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! property-expr */ "./node_modules/property-expr/index.js");
/* harmony import */ var property_expr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(property_expr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Reference */ "./node_modules/yup/es/Reference.js");
/* harmony import */ var _isSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isSchema */ "./node_modules/yup/es/util/isSchema.js");
 // @ts-expect-error





function sortFields(fields, excludedEdges = []) {
  let edges = [];
  let nodes = new Set();
  let excludes = new Set(excludedEdges.map(([a, b]) => `${a}-${b}`));

  function addNode(depPath, key) {
    let node = Object(property_expr__WEBPACK_IMPORTED_MODULE_2__["split"])(depPath)[0];
    nodes.add(node);
    if (!excludes.has(`${key}-${node}`)) edges.push([key, node]);
  }

  for (const key in fields) if (lodash_has__WEBPACK_IMPORTED_MODULE_0___default()(fields, key)) {
    let value = fields[key];
    nodes.add(key);
    if (_Reference__WEBPACK_IMPORTED_MODULE_3__["default"].isRef(value) && value.isSibling) addNode(value.path, key);else if (Object(_isSchema__WEBPACK_IMPORTED_MODULE_4__["default"])(value) && 'deps' in value) value.deps.forEach(path => addNode(path, key));
  }

  return toposort__WEBPACK_IMPORTED_MODULE_1___default.a.array(Array.from(nodes), edges).reverse();
}

/***/ }),

/***/ "./node_modules/yup/es/util/toArray.js":
/*!*********************************************!*\
  !*** ./node_modules/yup/es/util/toArray.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toArray; });
function toArray(value) {
  return value == null ? [] : [].concat(value);
}

/***/ }),

/***/ "./pages/employees-management/users/FormikForm.jsx":
/*!*********************************************************!*\
  !*** ./pages/employees-management/users/FormikForm.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _FormFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormFields */ "./pages/employees-management/users/FormFields.jsx");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");



var _jsxFileName = "E:\\FYP\\admin-dashboard\\martfury-admin-react\\pages\\employees-management\\users\\FormikForm.jsx",
    _this = undefined;






var index = function index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
      initialValues: {
        fullName: "",
        email: "",
        mobileNo: "",
        cnicNo: "",
        city: "",
        status: "",
        address: ""
      },
      children: function children(formik) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "my-4 font-weight-bold-display-4",
            children: ["Add New Employee", console.log(formik.values)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "Full Name",
                  name: "fullName",
                  type: "text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "Email",
                  name: "email",
                  type: "email"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "Mobile no",
                  name: "monbileNo",
                  type: "tel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "CNIC no",
                  name: "cnicNo",
                  type: "tel"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "City",
                  name: "city",
                  type: "text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-6",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "Status",
                  name: "status",
                  type: "text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-md-12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  label: "Address",
                  name: "address",
                  type: "text"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  type: "submit",
                  className: "btn btn-primary",
                  style: {
                    padding: "10px 20px",
                    fontSize: "15px",
                    marginTop: "20px"
                  },
                  children: "Submit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlSZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FzY2lpV29yZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZvck93bi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUhhcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUhhc0luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlTWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5RGVlcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5T2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RQYXRoLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVCYXNlRm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVDYXNlRmlyc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNvbXBvdW5kZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlYnVyckxldHRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzUGF0aC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzVW5pY29kZVdvcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvS2V5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL191bmljb2RlV29yZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2FtZWxDYXNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2NhcGl0YWxpemUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVidXJyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2dldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9oYXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaGFzSW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWFwS2V5cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9tYXBWYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zbmFrZUNhc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdXBwZXJGaXJzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC93b3Jkcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25hbm9jbG9uZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1leHByL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdG9wb3NvcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy95dXAvZXMvQ29uZGl0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveXVwL2VzL0xhenkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy95dXAvZXMvUmVmZXJlbmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveXVwL2VzL1ZhbGlkYXRpb25FcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3l1cC9lcy9hcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3l1cC9lcy9ib29sZWFuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveXVwL2VzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy95dXAvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy95dXAvZXMvbG9jYWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveXVwL2VzL21peGVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveXVwL2VzL251bWJlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3l1cC9lcy9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy95dXAvZXMvc2NoZW1hLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveXVwL2VzL3NldExvY2FsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3l1cC9lcy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy95dXAvZXMvdXRpbC9SZWZlcmVuY2VTZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy95dXAvZXMvdXRpbC9jcmVhdGVWYWxpZGF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveXVwL2VzL3V0aWwvaXNBYnNlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy95dXAvZXMvdXRpbC9pc1NjaGVtYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3l1cC9lcy91dGlsL2lzb2RhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy95dXAvZXMvdXRpbC9wcmludFZhbHVlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveXVwL2VzL3V0aWwvcmVhY2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy95dXAvZXMvdXRpbC9ydW5UZXN0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3l1cC9lcy91dGlsL3NvcnRCeUtleU9yZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveXVwL2VzL3V0aWwvc29ydEZpZWxkcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3l1cC9lcy91dGlsL3RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2VtcGxveWVlcy1tYW5hZ2VtZW50L3VzZXJzL0Zvcm1pa0Zvcm0uanN4Il0sIm5hbWVzIjpbImluZGV4IiwiZnVsbE5hbWUiLCJlbWFpbCIsIm1vYmlsZU5vIiwiY25pY05vIiwiY2l0eSIsInN0YXR1cyIsImFkZHJlc3MiLCJmb3JtaWsiLCJjb25zb2xlIiwibG9nIiwidmFsdWVzIiwicGFkZGluZyIsImZvbnRTaXplIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2RBLHFCQUFxQixtQkFBTyxDQUFDLG1FQUFtQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN4QkEsb0JBQW9CLG1CQUFPLENBQUMsaUVBQWtCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDZkEsY0FBYyxtQkFBTyxDQUFDLHFEQUFZO0FBQ2xDLFdBQVcsbUJBQU8sQ0FBQyw2Q0FBUTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDZkEsZUFBZSxtQkFBTyxDQUFDLHVEQUFhO0FBQ3BDLFlBQVksbUJBQU8sQ0FBQyxpREFBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsYUFBYTtBQUN4QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ1pBLFlBQVksbUJBQU8sQ0FBQyxpREFBVTtBQUM5QixrQkFBa0IsbUJBQU8sQ0FBQyw2REFBZ0I7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDN0RBLGtCQUFrQixtQkFBTyxDQUFDLDZEQUFnQjtBQUMxQywwQkFBMEIsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDMUQsZUFBZSxtQkFBTyxDQUFDLHFEQUFZO0FBQ25DLGNBQWMsbUJBQU8sQ0FBQyxtREFBVztBQUNqQyxlQUFlLG1CQUFPLENBQUMscURBQVk7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzlCQSxrQkFBa0IsbUJBQU8sQ0FBQyw2REFBZ0I7QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMsK0RBQWlCO0FBQzVDLDhCQUE4QixtQkFBTyxDQUFDLHFGQUE0Qjs7QUFFbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNyQkEsa0JBQWtCLG1CQUFPLENBQUMsNkRBQWdCO0FBQzFDLFVBQVUsbUJBQU8sQ0FBQywyQ0FBTztBQUN6QixZQUFZLG1CQUFPLENBQUMsK0NBQVM7QUFDN0IsWUFBWSxtQkFBTyxDQUFDLGlEQUFVO0FBQzlCLHlCQUF5QixtQkFBTyxDQUFDLDJFQUF1QjtBQUN4RCw4QkFBOEIsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDbEUsWUFBWSxtQkFBTyxDQUFDLGlEQUFVOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDaENBLGNBQWMsbUJBQU8sQ0FBQyxxREFBWTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDYkEsY0FBYyxtQkFBTyxDQUFDLG1EQUFXO0FBQ2pDLFlBQVksbUJBQU8sQ0FBQyxpREFBVTtBQUM5QixtQkFBbUIsbUJBQU8sQ0FBQywrREFBaUI7QUFDNUMsZUFBZSxtQkFBTyxDQUFDLHFEQUFZOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN4QkEsZ0JBQWdCLG1CQUFPLENBQUMseURBQWM7QUFDdEMsaUJBQWlCLG1CQUFPLENBQUMsMkRBQWU7QUFDeEMsb0JBQW9CLG1CQUFPLENBQUMsaUVBQWtCO0FBQzlDLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDaENBLGtCQUFrQixtQkFBTyxDQUFDLDZEQUFnQjtBQUMxQyxhQUFhLG1CQUFPLENBQUMsaURBQVU7QUFDL0IsWUFBWSxtQkFBTyxDQUFDLCtDQUFTOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDdkJBLHFCQUFxQixtQkFBTyxDQUFDLG1FQUFtQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3RFQSxnQkFBZ0IsbUJBQU8sQ0FBQyx5REFBYzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7OztBQ1ZBLHlCQUF5QixtQkFBTyxDQUFDLDJFQUF1QjtBQUN4RCxXQUFXLG1CQUFPLENBQUMsNkNBQVE7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3ZCQSxlQUFlLG1CQUFPLENBQUMsdURBQWE7QUFDcEMsa0JBQWtCLG1CQUFPLENBQUMsMkRBQWU7QUFDekMsY0FBYyxtQkFBTyxDQUFDLG1EQUFXO0FBQ2pDLGNBQWMsbUJBQU8sQ0FBQyxxREFBWTtBQUNsQyxlQUFlLG1CQUFPLENBQUMscURBQVk7QUFDbkMsWUFBWSxtQkFBTyxDQUFDLGlEQUFVOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBLHlDQUF5QyxFQUFFOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2RBLGNBQWMsbUJBQU8sQ0FBQyxtREFBVztBQUNqQyxlQUFlLG1CQUFPLENBQUMscURBQVk7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzVCQSxlQUFlLG1CQUFPLENBQUMscURBQVk7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNuQkEsY0FBYyxtQkFBTyxDQUFDLG1EQUFXOztBQUVqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3pCQSxvQkFBb0IsbUJBQU8sQ0FBQyxpRUFBa0I7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7OztBQzFCQSxlQUFlLG1CQUFPLENBQUMscURBQVk7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLEVBQUU7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDcEVBLGlCQUFpQixtQkFBTyxDQUFDLHlEQUFjO0FBQ3ZDLHVCQUF1QixtQkFBTyxDQUFDLHVFQUFxQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7QUM1QkEsZUFBZSxtQkFBTyxDQUFDLHFEQUFZO0FBQ25DLGlCQUFpQixtQkFBTyxDQUFDLHlEQUFjOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN0QkEsbUJBQW1CLG1CQUFPLENBQUMsK0RBQWlCO0FBQzVDLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzVDQSxjQUFjLG1CQUFPLENBQUMscURBQVk7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUSxPQUFPLFNBQVMsRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNoQ0EsY0FBYyxtQkFBTyxDQUFDLHFEQUFZO0FBQ2xDLGNBQWMsbUJBQU8sQ0FBQyxxREFBWTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCLE9BQU8sU0FBUztBQUNqQyx5QkFBeUIsZ0JBQWdCLFNBQVMsR0FBRztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbENBLGdCQUFnQixtQkFBTyxDQUFDLHlEQUFjO0FBQ3RDLGNBQWMsbUJBQU8sQ0FBQyxxREFBWTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixTQUFTLEdBQUc7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3BCQSxzQkFBc0IsbUJBQU8sQ0FBQyxxRUFBb0I7QUFDbEQsaUJBQWlCLG1CQUFPLENBQUMsMkRBQWU7QUFDeEMsbUJBQW1CLG1CQUFPLENBQUMsK0RBQWlCOztBQUU1QztBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsY0FBYyxpQkFBaUI7QUFDL0I7QUFDQSxJQUFJO0FBQ0osVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbkNBLHNCQUFzQixtQkFBTyxDQUFDLHFFQUFvQjtBQUNsRCxpQkFBaUIsbUJBQU8sQ0FBQywyREFBZTtBQUN4QyxtQkFBbUIsbUJBQU8sQ0FBQywrREFBaUI7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0JBQStCO0FBQ2hELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsbUNBQW1DLGNBQWMsRUFBRTtBQUNuRCxVQUFVLDJCQUEyQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxVQUFVLDJCQUEyQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzFDQSxlQUFlLG1CQUFPLENBQUMsdURBQWE7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3hFQSxtQkFBbUIsbUJBQU8sQ0FBQywrREFBaUI7QUFDNUMsdUJBQXVCLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3BELFlBQVksbUJBQU8sQ0FBQyxpREFBVTtBQUM5QixZQUFZLG1CQUFPLENBQUMsaURBQVU7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxNQUFNLE9BQU8sU0FBUyxFQUFFO0FBQ3hCLE1BQU0sT0FBTyxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQy9CQSx1QkFBdUIsbUJBQU8sQ0FBQyx1RUFBcUI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7O0FDM0JBLHNCQUFzQixtQkFBTyxDQUFDLHFFQUFvQjs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDckJBLGlCQUFpQixtQkFBTyxDQUFDLDJEQUFlO0FBQ3hDLHFCQUFxQixtQkFBTyxDQUFDLG1FQUFtQjtBQUNoRCxlQUFlLG1CQUFPLENBQUMscURBQVk7QUFDbkMsbUJBQW1CLG1CQUFPLENBQUMsK0RBQWlCOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGNBQWM7QUFDekIsWUFBWSxPQUFPO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxZQUFZO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxZQUFZOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsSUFBSTtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxXQUFXO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFrRUQsQ0FuRUQ7O0FBcUVlZCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lbXBsb3llZXMtbWFuYWdlbWVudC91c2Vycy9BZGRVc2VyLmY0MDNkZmY4ODU3YzlkYTc2MDgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlSZWR1Y2U7XG4iLCIvKiogVXNlZCB0byBtYXRjaCB3b3JkcyBjb21wb3NlZCBvZiBhbHBoYW51bWVyaWMgY2hhcmFjdGVycy4gKi9cbnZhciByZUFzY2lpV29yZCA9IC9bXlxceDAwLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceDdmXSsvZztcblxuLyoqXG4gKiBTcGxpdHMgYW4gQVNDSUkgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICovXG5mdW5jdGlvbiBhc2NpaVdvcmRzKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlQXNjaWlXb3JkKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc2NpaVdvcmRzO1xuIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduVmFsdWU7XG4iLCJ2YXIgY3JlYXRlQmFzZUZvciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUJhc2VGb3InKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgb2JqZWN0YFxuICogcHJvcGVydGllcyByZXR1cm5lZCBieSBga2V5c0Z1bmNgIGFuZCBpbnZva2VzIGBpdGVyYXRlZWAgZm9yIGVhY2ggcHJvcGVydHkuXG4gKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3I7XG4iLCJ2YXIgYmFzZUZvciA9IHJlcXVpcmUoJy4vX2Jhc2VGb3InKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yT3duYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZvck93bihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgYmFzZUZvcihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yT3duO1xuIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaGFzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSGFzKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSGFzO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhc0luO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hdGNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoRGF0YSBUaGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gbWF0Y2hEYXRhLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IGluZGV4LFxuICAgICAgbm9DdXN0b21pemVyID0gIWN1c3RvbWl6ZXI7XG5cbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGg7XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pXG4gICAgICAgICAgPyBkYXRhWzFdICE9PSBvYmplY3RbZGF0YVswXV1cbiAgICAgICAgICA6ICEoZGF0YVswXSBpbiBvYmplY3QpXG4gICAgICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIHZhciBrZXkgPSBkYXRhWzBdLFxuICAgICAgICBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBzcmNWYWx1ZSA9IGRhdGFbMV07XG5cbiAgICBpZiAobm9DdXN0b21pemVyICYmIGRhdGFbMl0pIHtcbiAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhY2sgPSBuZXcgU3RhY2s7XG4gICAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgICAgIDogcmVzdWx0XG4gICAgICAgICAgKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hdGNoO1xuIiwidmFyIGJhc2VNYXRjaGVzID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXMnKSxcbiAgICBiYXNlTWF0Y2hlc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXNQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBwcm9wZXJ0eSA9IHJlcXVpcmUoJy4vcHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pdGVyYXRlZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGFuIGl0ZXJhdGVlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBpdGVyYXRlZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlKSB7XG4gIC8vIERvbid0IHN0b3JlIHRoZSBgdHlwZW9mYCByZXN1bHQgaW4gYSB2YXJpYWJsZSB0byBhdm9pZCBhIEpJVCBidWcgaW4gU2FmYXJpIDkuXG4gIC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2MDM0IGZvciBtb3JlIGRldGFpbHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICA/IGJhc2VNYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKVxuICAgICAgOiBiYXNlTWF0Y2hlcyh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXRlcmF0ZWU7XG4iLCJ2YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL19iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hdGNoRGF0YScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzYCB3aGljaCBkb2Vzbid0IGNsb25lIGBzb3VyY2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgaWYgKG1hdGNoRGF0YS5sZW5ndGggPT0gMSAmJiBtYXRjaERhdGFbMF1bMl0pIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUobWF0Y2hEYXRhWzBdWzBdLCBtYXRjaERhdGFbMF1bMV0pO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09PSBzb3VyY2UgfHwgYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG4iLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpLFxuICAgIGdldCA9IHJlcXVpcmUoJy4vZ2V0JyksXG4gICAgaGFzSW4gPSByZXF1aXJlKCcuL2hhc0luJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzUHJvcGVydHlgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNyY1ZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICBpZiAoaXNLZXkocGF0aCkgJiYgaXNTdHJpY3RDb21wYXJhYmxlKHNyY1ZhbHVlKSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSh0b0tleShwYXRoKSwgc3JjVmFsdWUpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIgb2JqVmFsdWUgPSBnZXQob2JqZWN0LCBwYXRoKTtcbiAgICByZXR1cm4gKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgb2JqVmFsdWUgPT09IHNyY1ZhbHVlKVxuICAgICAgPyBoYXNJbihvYmplY3QsIHBhdGgpXG4gICAgICA6IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlc1Byb3BlcnR5O1xuIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5T2ZgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eU9mKG9iamVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5T2Y7XG4iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VGb3I7XG4iLCJ2YXIgY2FzdFNsaWNlID0gcmVxdWlyZSgnLi9fY2FzdFNsaWNlJyksXG4gICAgaGFzVW5pY29kZSA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGUnKSxcbiAgICBzdHJpbmdUb0FycmF5ID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9BcnJheScpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmxvd2VyRmlyc3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZSBUaGUgbmFtZSBvZiB0aGUgYFN0cmluZ2AgY2FzZSBtZXRob2QgdG8gdXNlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FzZUZpcnN0KG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG5cbiAgICB2YXIgc3RyU3ltYm9scyA9IGhhc1VuaWNvZGUoc3RyaW5nKVxuICAgICAgPyBzdHJpbmdUb0FycmF5KHN0cmluZylcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgdmFyIGNociA9IHN0clN5bWJvbHNcbiAgICAgID8gc3RyU3ltYm9sc1swXVxuICAgICAgOiBzdHJpbmcuY2hhckF0KDApO1xuXG4gICAgdmFyIHRyYWlsaW5nID0gc3RyU3ltYm9sc1xuICAgICAgPyBjYXN0U2xpY2Uoc3RyU3ltYm9scywgMSkuam9pbignJylcbiAgICAgIDogc3RyaW5nLnNsaWNlKDEpO1xuXG4gICAgcmV0dXJuIGNoclttZXRob2ROYW1lXSgpICsgdHJhaWxpbmc7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ2FzZUZpcnN0O1xuIiwidmFyIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBkZWJ1cnIgPSByZXF1aXJlKCcuL2RlYnVycicpLFxuICAgIHdvcmRzID0gcmVxdWlyZSgnLi93b3JkcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBcG9zID0gXCJbJ1xcdTIwMTldXCI7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGFwb3N0cm9waGVzLiAqL1xudmFyIHJlQXBvcyA9IFJlZ0V4cChyc0Fwb3MsICdnJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uY2FtZWxDYXNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNvbWJpbmUgZWFjaCB3b3JkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29tcG91bmRlciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG91bmRlcihjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFycmF5UmVkdWNlKHdvcmRzKGRlYnVycihzdHJpbmcpLnJlcGxhY2UocmVBcG9zLCAnJykpLCBjYWxsYmFjaywgJycpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBvdW5kZXI7XG4iLCJ2YXIgYmFzZVByb3BlcnR5T2YgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlPZicpO1xuXG4vKiogVXNlZCB0byBtYXAgTGF0aW4gVW5pY29kZSBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMuICovXG52YXIgZGVidXJyZWRMZXR0ZXJzID0ge1xuICAvLyBMYXRpbi0xIFN1cHBsZW1lbnQgYmxvY2suXG4gICdcXHhjMCc6ICdBJywgICdcXHhjMSc6ICdBJywgJ1xceGMyJzogJ0EnLCAnXFx4YzMnOiAnQScsICdcXHhjNCc6ICdBJywgJ1xceGM1JzogJ0EnLFxuICAnXFx4ZTAnOiAnYScsICAnXFx4ZTEnOiAnYScsICdcXHhlMic6ICdhJywgJ1xceGUzJzogJ2EnLCAnXFx4ZTQnOiAnYScsICdcXHhlNSc6ICdhJyxcbiAgJ1xceGM3JzogJ0MnLCAgJ1xceGU3JzogJ2MnLFxuICAnXFx4ZDAnOiAnRCcsICAnXFx4ZjAnOiAnZCcsXG4gICdcXHhjOCc6ICdFJywgICdcXHhjOSc6ICdFJywgJ1xceGNhJzogJ0UnLCAnXFx4Y2InOiAnRScsXG4gICdcXHhlOCc6ICdlJywgICdcXHhlOSc6ICdlJywgJ1xceGVhJzogJ2UnLCAnXFx4ZWInOiAnZScsXG4gICdcXHhjYyc6ICdJJywgICdcXHhjZCc6ICdJJywgJ1xceGNlJzogJ0knLCAnXFx4Y2YnOiAnSScsXG4gICdcXHhlYyc6ICdpJywgICdcXHhlZCc6ICdpJywgJ1xceGVlJzogJ2knLCAnXFx4ZWYnOiAnaScsXG4gICdcXHhkMSc6ICdOJywgICdcXHhmMSc6ICduJyxcbiAgJ1xceGQyJzogJ08nLCAgJ1xceGQzJzogJ08nLCAnXFx4ZDQnOiAnTycsICdcXHhkNSc6ICdPJywgJ1xceGQ2JzogJ08nLCAnXFx4ZDgnOiAnTycsXG4gICdcXHhmMic6ICdvJywgICdcXHhmMyc6ICdvJywgJ1xceGY0JzogJ28nLCAnXFx4ZjUnOiAnbycsICdcXHhmNic6ICdvJywgJ1xceGY4JzogJ28nLFxuICAnXFx4ZDknOiAnVScsICAnXFx4ZGEnOiAnVScsICdcXHhkYic6ICdVJywgJ1xceGRjJzogJ1UnLFxuICAnXFx4ZjknOiAndScsICAnXFx4ZmEnOiAndScsICdcXHhmYic6ICd1JywgJ1xceGZjJzogJ3UnLFxuICAnXFx4ZGQnOiAnWScsICAnXFx4ZmQnOiAneScsICdcXHhmZic6ICd5JyxcbiAgJ1xceGM2JzogJ0FlJywgJ1xceGU2JzogJ2FlJyxcbiAgJ1xceGRlJzogJ1RoJywgJ1xceGZlJzogJ3RoJyxcbiAgJ1xceGRmJzogJ3NzJyxcbiAgLy8gTGF0aW4gRXh0ZW5kZWQtQSBibG9jay5cbiAgJ1xcdTAxMDAnOiAnQScsICAnXFx1MDEwMic6ICdBJywgJ1xcdTAxMDQnOiAnQScsXG4gICdcXHUwMTAxJzogJ2EnLCAgJ1xcdTAxMDMnOiAnYScsICdcXHUwMTA1JzogJ2EnLFxuICAnXFx1MDEwNic6ICdDJywgICdcXHUwMTA4JzogJ0MnLCAnXFx1MDEwYSc6ICdDJywgJ1xcdTAxMGMnOiAnQycsXG4gICdcXHUwMTA3JzogJ2MnLCAgJ1xcdTAxMDknOiAnYycsICdcXHUwMTBiJzogJ2MnLCAnXFx1MDEwZCc6ICdjJyxcbiAgJ1xcdTAxMGUnOiAnRCcsICAnXFx1MDExMCc6ICdEJywgJ1xcdTAxMGYnOiAnZCcsICdcXHUwMTExJzogJ2QnLFxuICAnXFx1MDExMic6ICdFJywgICdcXHUwMTE0JzogJ0UnLCAnXFx1MDExNic6ICdFJywgJ1xcdTAxMTgnOiAnRScsICdcXHUwMTFhJzogJ0UnLFxuICAnXFx1MDExMyc6ICdlJywgICdcXHUwMTE1JzogJ2UnLCAnXFx1MDExNyc6ICdlJywgJ1xcdTAxMTknOiAnZScsICdcXHUwMTFiJzogJ2UnLFxuICAnXFx1MDExYyc6ICdHJywgICdcXHUwMTFlJzogJ0cnLCAnXFx1MDEyMCc6ICdHJywgJ1xcdTAxMjInOiAnRycsXG4gICdcXHUwMTFkJzogJ2cnLCAgJ1xcdTAxMWYnOiAnZycsICdcXHUwMTIxJzogJ2cnLCAnXFx1MDEyMyc6ICdnJyxcbiAgJ1xcdTAxMjQnOiAnSCcsICAnXFx1MDEyNic6ICdIJywgJ1xcdTAxMjUnOiAnaCcsICdcXHUwMTI3JzogJ2gnLFxuICAnXFx1MDEyOCc6ICdJJywgICdcXHUwMTJhJzogJ0knLCAnXFx1MDEyYyc6ICdJJywgJ1xcdTAxMmUnOiAnSScsICdcXHUwMTMwJzogJ0knLFxuICAnXFx1MDEyOSc6ICdpJywgICdcXHUwMTJiJzogJ2knLCAnXFx1MDEyZCc6ICdpJywgJ1xcdTAxMmYnOiAnaScsICdcXHUwMTMxJzogJ2knLFxuICAnXFx1MDEzNCc6ICdKJywgICdcXHUwMTM1JzogJ2onLFxuICAnXFx1MDEzNic6ICdLJywgICdcXHUwMTM3JzogJ2snLCAnXFx1MDEzOCc6ICdrJyxcbiAgJ1xcdTAxMzknOiAnTCcsICAnXFx1MDEzYic6ICdMJywgJ1xcdTAxM2QnOiAnTCcsICdcXHUwMTNmJzogJ0wnLCAnXFx1MDE0MSc6ICdMJyxcbiAgJ1xcdTAxM2EnOiAnbCcsICAnXFx1MDEzYyc6ICdsJywgJ1xcdTAxM2UnOiAnbCcsICdcXHUwMTQwJzogJ2wnLCAnXFx1MDE0Mic6ICdsJyxcbiAgJ1xcdTAxNDMnOiAnTicsICAnXFx1MDE0NSc6ICdOJywgJ1xcdTAxNDcnOiAnTicsICdcXHUwMTRhJzogJ04nLFxuICAnXFx1MDE0NCc6ICduJywgICdcXHUwMTQ2JzogJ24nLCAnXFx1MDE0OCc6ICduJywgJ1xcdTAxNGInOiAnbicsXG4gICdcXHUwMTRjJzogJ08nLCAgJ1xcdTAxNGUnOiAnTycsICdcXHUwMTUwJzogJ08nLFxuICAnXFx1MDE0ZCc6ICdvJywgICdcXHUwMTRmJzogJ28nLCAnXFx1MDE1MSc6ICdvJyxcbiAgJ1xcdTAxNTQnOiAnUicsICAnXFx1MDE1Nic6ICdSJywgJ1xcdTAxNTgnOiAnUicsXG4gICdcXHUwMTU1JzogJ3InLCAgJ1xcdTAxNTcnOiAncicsICdcXHUwMTU5JzogJ3InLFxuICAnXFx1MDE1YSc6ICdTJywgICdcXHUwMTVjJzogJ1MnLCAnXFx1MDE1ZSc6ICdTJywgJ1xcdTAxNjAnOiAnUycsXG4gICdcXHUwMTViJzogJ3MnLCAgJ1xcdTAxNWQnOiAncycsICdcXHUwMTVmJzogJ3MnLCAnXFx1MDE2MSc6ICdzJyxcbiAgJ1xcdTAxNjInOiAnVCcsICAnXFx1MDE2NCc6ICdUJywgJ1xcdTAxNjYnOiAnVCcsXG4gICdcXHUwMTYzJzogJ3QnLCAgJ1xcdTAxNjUnOiAndCcsICdcXHUwMTY3JzogJ3QnLFxuICAnXFx1MDE2OCc6ICdVJywgICdcXHUwMTZhJzogJ1UnLCAnXFx1MDE2Yyc6ICdVJywgJ1xcdTAxNmUnOiAnVScsICdcXHUwMTcwJzogJ1UnLCAnXFx1MDE3Mic6ICdVJyxcbiAgJ1xcdTAxNjknOiAndScsICAnXFx1MDE2Yic6ICd1JywgJ1xcdTAxNmQnOiAndScsICdcXHUwMTZmJzogJ3UnLCAnXFx1MDE3MSc6ICd1JywgJ1xcdTAxNzMnOiAndScsXG4gICdcXHUwMTc0JzogJ1cnLCAgJ1xcdTAxNzUnOiAndycsXG4gICdcXHUwMTc2JzogJ1knLCAgJ1xcdTAxNzcnOiAneScsICdcXHUwMTc4JzogJ1knLFxuICAnXFx1MDE3OSc6ICdaJywgICdcXHUwMTdiJzogJ1onLCAnXFx1MDE3ZCc6ICdaJyxcbiAgJ1xcdTAxN2EnOiAneicsICAnXFx1MDE3Yyc6ICd6JywgJ1xcdTAxN2UnOiAneicsXG4gICdcXHUwMTMyJzogJ0lKJywgJ1xcdTAxMzMnOiAnaWonLFxuICAnXFx1MDE1Mic6ICdPZScsICdcXHUwMTUzJzogJ29lJyxcbiAgJ1xcdTAxNDknOiBcIiduXCIsICdcXHUwMTdmJzogJ3MnXG59O1xuXG4vKipcbiAqIFVzZWQgYnkgYF8uZGVidXJyYCB0byBjb252ZXJ0IExhdGluLTEgU3VwcGxlbWVudCBhbmQgTGF0aW4gRXh0ZW5kZWQtQVxuICogbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbGV0dGVyIFRoZSBtYXRjaGVkIGxldHRlciB0byBkZWJ1cnIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBkZWJ1cnJlZCBsZXR0ZXIuXG4gKi9cbnZhciBkZWJ1cnJMZXR0ZXIgPSBiYXNlUHJvcGVydHlPZihkZWJ1cnJlZExldHRlcnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVyckxldHRlcjtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG4iLCJ2YXIgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIEdldHMgdGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXMob2JqZWN0KSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdmFyIGtleSA9IHJlc3VsdFtsZW5ndGhdLFxuICAgICAgICB2YWx1ZSA9IG9iamVjdFtrZXldO1xuXG4gICAgcmVzdWx0W2xlbmd0aF0gPSBba2V5LCB2YWx1ZSwgaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXRjaERhdGE7XG4iLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGV4aXN0cyBvbiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYXNGdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjayBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKTtcbiAgICBpZiAoIShyZXN1bHQgPSBvYmplY3QgIT0gbnVsbCAmJiBoYXNGdW5jKG9iamVjdCwga2V5KSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgfVxuICBpZiAocmVzdWx0IHx8ICsraW5kZXggIT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBsZW5ndGggPSBvYmplY3QgPT0gbnVsbCA/IDAgOiBvYmplY3QubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUGF0aDtcbiIsIi8qKiBVc2VkIHRvIGRldGVjdCBzdHJpbmdzIHRoYXQgbmVlZCBhIG1vcmUgcm9idXN0IHJlZ2V4cCB0byBtYXRjaCB3b3Jkcy4gKi9cbnZhciByZUhhc1VuaWNvZGVXb3JkID0gL1thLXpdW0EtWl18W0EtWl17Mn1bYS16XXxbMC05XVthLXpBLVpdfFthLXpBLVpdWzAtOV18W15hLXpBLVowLTkgXS87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIGNvbnRhaW5zIGEgd29yZCBjb21wb3NlZCBvZiBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgd29yZCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlV29yZChzdHJpbmcpIHtcbiAgcmV0dXJuIHJlSGFzVW5pY29kZVdvcmQudGVzdChzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1VuaWNvZGVXb3JkO1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYG1hdGNoZXNQcm9wZXJ0eWAgZm9yIHNvdXJjZSB2YWx1ZXMgc3VpdGFibGVcbiAqIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShrZXksIHNyY1ZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSBzcmNWYWx1ZSAmJlxuICAgICAgKHNyY1ZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiBPYmplY3Qob2JqZWN0KSkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlO1xuIiwidmFyIG1lbW9pemUgPSByZXF1aXJlKCcuL21lbW9pemUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIG1heGltdW0gbWVtb2l6ZSBjYWNoZSBzaXplLiAqL1xudmFyIE1BWF9NRU1PSVpFX1NJWkUgPSA1MDA7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1lbW9pemVgIHdoaWNoIGNsZWFycyB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24nc1xuICogY2FjaGUgd2hlbiBpdCBleGNlZWRzIGBNQVhfTUVNT0laRV9TSVpFYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1lbW9pemVDYXBwZWQoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gbWVtb2l6ZShmdW5jLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoY2FjaGUuc2l6ZSA9PT0gTUFYX01FTU9JWkVfU0laRSkge1xuICAgICAgY2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleTtcbiAgfSk7XG5cbiAgdmFyIGNhY2hlID0gcmVzdWx0LmNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemVDYXBwZWQ7XG4iLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDYgLyogLiAqLykge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3ViU3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdWJTdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcbiIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG4iLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNEaW5nYmF0UmFuZ2UgPSAnXFxcXHUyNzAwLVxcXFx1MjdiZicsXG4gICAgcnNMb3dlclJhbmdlID0gJ2EtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZicsXG4gICAgcnNNYXRoT3BSYW5nZSA9ICdcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3JyxcbiAgICByc05vbkNoYXJSYW5nZSA9ICdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmYnLFxuICAgIHJzUHVuY3R1YXRpb25SYW5nZSA9ICdcXFxcdTIwMDAtXFxcXHUyMDZmJyxcbiAgICByc1NwYWNlUmFuZ2UgPSAnIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDAnLFxuICAgIHJzVXBwZXJSYW5nZSA9ICdBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGUnLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJyxcbiAgICByc0JyZWFrUmFuZ2UgPSByc01hdGhPcFJhbmdlICsgcnNOb25DaGFyUmFuZ2UgKyByc1B1bmN0dWF0aW9uUmFuZ2UgKyByc1NwYWNlUmFuZ2U7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0Fwb3MgPSBcIlsnXFx1MjAxOV1cIixcbiAgICByc0JyZWFrID0gJ1snICsgcnNCcmVha1JhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXScsXG4gICAgcnNEaWdpdHMgPSAnXFxcXGQrJyxcbiAgICByc0RpbmdiYXQgPSAnWycgKyByc0RpbmdiYXRSYW5nZSArICddJyxcbiAgICByc0xvd2VyID0gJ1snICsgcnNMb3dlclJhbmdlICsgJ10nLFxuICAgIHJzTWlzYyA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgcnNCcmVha1JhbmdlICsgcnNEaWdpdHMgKyByc0RpbmdiYXRSYW5nZSArIHJzTG93ZXJSYW5nZSArIHJzVXBwZXJSYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNVcHBlciA9ICdbJyArIHJzVXBwZXJSYW5nZSArICddJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByc01pc2NMb3dlciA9ICcoPzonICsgcnNMb3dlciArICd8JyArIHJzTWlzYyArICcpJyxcbiAgICByc01pc2NVcHBlciA9ICcoPzonICsgcnNVcHBlciArICd8JyArIHJzTWlzYyArICcpJyxcbiAgICByc09wdENvbnRyTG93ZXIgPSAnKD86JyArIHJzQXBvcyArICcoPzpkfGxsfG18cmV8c3x0fHZlKSk/JyxcbiAgICByc09wdENvbnRyVXBwZXIgPSAnKD86JyArIHJzQXBvcyArICcoPzpEfExMfE18UkV8U3xUfFZFKSk/JyxcbiAgICByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzT3JkTG93ZXIgPSAnXFxcXGQqKD86MXN0fDJuZHwzcmR8KD8hWzEyM10pXFxcXGR0aCkoPz1cXFxcYnxbQS1aX10pJyxcbiAgICByc09yZFVwcGVyID0gJ1xcXFxkKig/OjFTVHwyTkR8M1JEfCg/IVsxMjNdKVxcXFxkVEgpKD89XFxcXGJ8W2Etel9dKScsXG4gICAgcnNTZXEgPSByc09wdFZhciArIHJlT3B0TW9kICsgcnNPcHRKb2luLFxuICAgIHJzRW1vamkgPSAnKD86JyArIFtyc0RpbmdiYXQsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzU2VxO1xuXG4vKiogVXNlZCB0byBtYXRjaCBjb21wbGV4IG9yIGNvbXBvdW5kIHdvcmRzLiAqL1xudmFyIHJlVW5pY29kZVdvcmQgPSBSZWdFeHAoW1xuICByc1VwcGVyICsgJz8nICsgcnNMb3dlciArICcrJyArIHJzT3B0Q29udHJMb3dlciArICcoPz0nICsgW3JzQnJlYWssIHJzVXBwZXIsICckJ10uam9pbignfCcpICsgJyknLFxuICByc01pc2NVcHBlciArICcrJyArIHJzT3B0Q29udHJVcHBlciArICcoPz0nICsgW3JzQnJlYWssIHJzVXBwZXIgKyByc01pc2NMb3dlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzVXBwZXIgKyAnPycgKyByc01pc2NMb3dlciArICcrJyArIHJzT3B0Q29udHJMb3dlcixcbiAgcnNVcHBlciArICcrJyArIHJzT3B0Q29udHJVcHBlcixcbiAgcnNPcmRVcHBlcixcbiAgcnNPcmRMb3dlcixcbiAgcnNEaWdpdHMsXG4gIHJzRW1vamlcbl0uam9pbignfCcpLCAnZycpO1xuXG4vKipcbiAqIFNwbGl0cyBhIFVuaWNvZGUgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICovXG5mdW5jdGlvbiB1bmljb2RlV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVVbmljb2RlV29yZCkgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pY29kZVdvcmRzO1xuIiwidmFyIGNhcGl0YWxpemUgPSByZXF1aXJlKCcuL2NhcGl0YWxpemUnKSxcbiAgICBjcmVhdGVDb21wb3VuZGVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQ29tcG91bmRlcicpO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIFtjYW1lbCBjYXNlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DYW1lbENhc2UpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjYW1lbCBjYXNlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uY2FtZWxDYXNlKCdGb28gQmFyJyk7XG4gKiAvLyA9PiAnZm9vQmFyJ1xuICpcbiAqIF8uY2FtZWxDYXNlKCctLWZvby1iYXItLScpO1xuICogLy8gPT4gJ2Zvb0JhcidcbiAqXG4gKiBfLmNhbWVsQ2FzZSgnX19GT09fQkFSX18nKTtcbiAqIC8vID0+ICdmb29CYXInXG4gKi9cbnZhciBjYW1lbENhc2UgPSBjcmVhdGVDb21wb3VuZGVyKGZ1bmN0aW9uKHJlc3VsdCwgd29yZCwgaW5kZXgpIHtcbiAgd29yZCA9IHdvcmQudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIHJlc3VsdCArIChpbmRleCA/IGNhcGl0YWxpemUod29yZCkgOiB3b3JkKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbWVsQ2FzZTtcbiIsInZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKSxcbiAgICB1cHBlckZpcnN0ID0gcmVxdWlyZSgnLi91cHBlckZpcnN0Jyk7XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc3RyaW5nYCB0byB1cHBlciBjYXNlIGFuZCB0aGUgcmVtYWluaW5nXG4gKiB0byBsb3dlciBjYXNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNhcGl0YWxpemUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjYXBpdGFsaXplZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uY2FwaXRhbGl6ZSgnRlJFRCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiB1cHBlckZpcnN0KHRvU3RyaW5nKHN0cmluZykudG9Mb3dlckNhc2UoKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FwaXRhbGl6ZTtcbiIsInZhciBkZWJ1cnJMZXR0ZXIgPSByZXF1aXJlKCcuL19kZWJ1cnJMZXR0ZXInKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggTGF0aW4gVW5pY29kZSBsZXR0ZXJzIChleGNsdWRpbmcgbWF0aGVtYXRpY2FsIG9wZXJhdG9ycykuICovXG52YXIgcmVMYXRpbiA9IC9bXFx4YzAtXFx4ZDZcXHhkOC1cXHhmNlxceGY4LVxceGZmXFx1MDEwMC1cXHUwMTdmXS9nO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykgYW5kXG4gKiBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzIGZvciBzeW1ib2xzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3NfZm9yX1N5bWJvbHMpLlxuICovXG52YXIgcmVDb21ib01hcmsgPSBSZWdFeHAocnNDb21ibywgJ2cnKTtcblxuLyoqXG4gKiBEZWJ1cnJzIGBzdHJpbmdgIGJ5IGNvbnZlcnRpbmdcbiAqIFtMYXRpbi0xIFN1cHBsZW1lbnRdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xhdGluLTFfU3VwcGxlbWVudF8oVW5pY29kZV9ibG9jaykjQ2hhcmFjdGVyX3RhYmxlKVxuICogYW5kIFtMYXRpbiBFeHRlbmRlZC1BXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbl9FeHRlbmRlZC1BKVxuICogbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzIGFuZCByZW1vdmluZ1xuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBkZWJ1cnIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBkZWJ1cnJlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVidXJyKCdkw6lqw6AgdnUnKTtcbiAqIC8vID0+ICdkZWphIHZ1J1xuICovXG5mdW5jdGlvbiBkZWJ1cnIoc3RyaW5nKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHJldHVybiBzdHJpbmcgJiYgc3RyaW5nLnJlcGxhY2UocmVMYXRpbiwgZGVidXJyTGV0dGVyKS5yZXBsYWNlKHJlQ29tYm9NYXJrLCAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVidXJyO1xuIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGBvYmplY3RgLiBJZiB0aGUgcmVzb2x2ZWQgdmFsdWUgaXNcbiAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy43LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IFtkZWZhdWx0VmFsdWVdIFRoZSB2YWx1ZSByZXR1cm5lZCBmb3IgYHVuZGVmaW5lZGAgcmVzb2x2ZWQgdmFsdWVzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2FbMF0uYi5jJyk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCBbJ2EnLCAnMCcsICdiJywgJ2MnXSk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5nZXQob2JqZWN0LCAnYS5iLmMnLCAnZGVmYXVsdCcpO1xuICogLy8gPT4gJ2RlZmF1bHQnXG4gKi9cbmZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgsIGRlZmF1bHRWYWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXQ7XG4iLCJ2YXIgYmFzZUhhcyA9IHJlcXVpcmUoJy4vX2Jhc2VIYXMnKSxcbiAgICBoYXNQYXRoID0gcmVxdWlyZSgnLi9faGFzUGF0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcGF0aGAgaXMgYSBkaXJlY3QgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IHsgJ2InOiAyIH0gfTtcbiAqIHZhciBvdGhlciA9IF8uY3JlYXRlKHsgJ2EnOiBfLmNyZWF0ZSh7ICdiJzogMiB9KSB9KTtcbiAqXG4gKiBfLmhhcyhvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXMob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXMob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhcyhvdGhlciwgJ2EnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGhhcyhvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXM7XG4iLCJ2YXIgYmFzZUhhc0luID0gcmVxdWlyZSgnLi9fYmFzZUhhc0luJyksXG4gICAgaGFzUGF0aCA9IHJlcXVpcmUoJy4vX2hhc1BhdGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IG9yIGluaGVyaXRlZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNJbihvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0luO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9fYmFzZUZvck93bicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpO1xuXG4vKipcbiAqIFRoZSBvcHBvc2l0ZSBvZiBgXy5tYXBWYWx1ZXNgOyB0aGlzIG1ldGhvZCBjcmVhdGVzIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSB2YWx1ZXMgYXMgYG9iamVjdGAgYW5kIGtleXMgZ2VuZXJhdGVkIGJ5IHJ1bm5pbmcgZWFjaCBvd24gZW51bWVyYWJsZVxuICogc3RyaW5nIGtleWVkIHByb3BlcnR5IG9mIGBvYmplY3RgIHRocnUgYGl0ZXJhdGVlYC4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWRcbiAqIHdpdGggdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIGtleSwgb2JqZWN0KS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuOC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIG9iamVjdC5cbiAqIEBzZWUgXy5tYXBWYWx1ZXNcbiAqIEBleGFtcGxlXG4gKlxuICogXy5tYXBLZXlzKHsgJ2EnOiAxLCAnYic6IDIgfSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICogICByZXR1cm4ga2V5ICsgdmFsdWU7XG4gKiB9KTtcbiAqIC8vID0+IHsgJ2ExJzogMSwgJ2IyJzogMiB9XG4gKi9cbmZ1bmN0aW9uIG1hcEtleXMob2JqZWN0LCBpdGVyYXRlZSkge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGl0ZXJhdGVlID0gYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAzKTtcblxuICBiYXNlRm9yT3duKG9iamVjdCwgZnVuY3Rpb24odmFsdWUsIGtleSwgb2JqZWN0KSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKHJlc3VsdCwgaXRlcmF0ZWUodmFsdWUsIGtleSwgb2JqZWN0KSwgdmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBLZXlzO1xuIiwidmFyIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VGb3JPd24gPSByZXF1aXJlKCcuL19iYXNlRm9yT3duJyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBrZXlzIGFzIGBvYmplY3RgIGFuZCB2YWx1ZXMgZ2VuZXJhdGVkXG4gKiBieSBydW5uaW5nIGVhY2ggb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnR5IG9mIGBvYmplY3RgIHRocnVcbiAqIGBpdGVyYXRlZWAuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICogKHZhbHVlLCBrZXksIG9iamVjdCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBvYmplY3QuXG4gKiBAc2VlIF8ubWFwS2V5c1xuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgdXNlcnMgPSB7XG4gKiAgICdmcmVkJzogICAgeyAndXNlcic6ICdmcmVkJywgICAgJ2FnZSc6IDQwIH0sXG4gKiAgICdwZWJibGVzJzogeyAndXNlcic6ICdwZWJibGVzJywgJ2FnZSc6IDEgfVxuICogfTtcbiAqXG4gKiBfLm1hcFZhbHVlcyh1c2VycywgZnVuY3Rpb24obykgeyByZXR1cm4gby5hZ2U7IH0pO1xuICogLy8gPT4geyAnZnJlZCc6IDQwLCAncGViYmxlcyc6IDEgfSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5tYXBWYWx1ZXModXNlcnMsICdhZ2UnKTtcbiAqIC8vID0+IHsgJ2ZyZWQnOiA0MCwgJ3BlYmJsZXMnOiAxIH0gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24gbWFwVmFsdWVzKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpdGVyYXRlZSA9IGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMyk7XG5cbiAgYmFzZUZvck93bihvYmplY3QsIGZ1bmN0aW9uKHZhbHVlLCBrZXksIG9iamVjdCkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgaXRlcmF0ZWUodmFsdWUsIGtleSwgb2JqZWN0KSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFZhbHVlcztcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuIiwidmFyIGNyZWF0ZUNvbXBvdW5kZXIgPSByZXF1aXJlKCcuL19jcmVhdGVDb21wb3VuZGVyJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG9cbiAqIFtzbmFrZSBjYXNlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TbmFrZV9jYXNlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc25ha2UgY2FzZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnNuYWtlQ2FzZSgnRm9vIEJhcicpO1xuICogLy8gPT4gJ2Zvb19iYXInXG4gKlxuICogXy5zbmFrZUNhc2UoJ2Zvb0JhcicpO1xuICogLy8gPT4gJ2Zvb19iYXInXG4gKlxuICogXy5zbmFrZUNhc2UoJy0tRk9PLUJBUi0tJyk7XG4gKiAvLyA9PiAnZm9vX2JhcidcbiAqL1xudmFyIHNuYWtlQ2FzZSA9IGNyZWF0ZUNvbXBvdW5kZXIoZnVuY3Rpb24ocmVzdWx0LCB3b3JkLCBpbmRleCkge1xuICByZXR1cm4gcmVzdWx0ICsgKGluZGV4ID8gJ18nIDogJycpICsgd29yZC50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc25ha2VDYXNlO1xuIiwidmFyIGNyZWF0ZUNhc2VGaXJzdCA9IHJlcXVpcmUoJy4vX2NyZWF0ZUNhc2VGaXJzdCcpO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AgdG8gdXBwZXIgY2FzZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy51cHBlckZpcnN0KCdmcmVkJyk7XG4gKiAvLyA9PiAnRnJlZCdcbiAqXG4gKiBfLnVwcGVyRmlyc3QoJ0ZSRUQnKTtcbiAqIC8vID0+ICdGUkVEJ1xuICovXG52YXIgdXBwZXJGaXJzdCA9IGNyZWF0ZUNhc2VGaXJzdCgndG9VcHBlckNhc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1cHBlckZpcnN0O1xuIiwidmFyIGFzY2lpV29yZHMgPSByZXF1aXJlKCcuL19hc2NpaVdvcmRzJyksXG4gICAgaGFzVW5pY29kZVdvcmQgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlV29yZCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpLFxuICAgIHVuaWNvZGVXb3JkcyA9IHJlcXVpcmUoJy4vX3VuaWNvZGVXb3JkcycpO1xuXG4vKipcbiAqIFNwbGl0cyBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtSZWdFeHB8c3RyaW5nfSBbcGF0dGVybl0gVGhlIHBhdHRlcm4gdG8gbWF0Y2ggd29yZHMuXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIG1ldGhvZHMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy53b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnKTtcbiAqIC8vID0+IFsnZnJlZCcsICdiYXJuZXknLCAncGViYmxlcyddXG4gKlxuICogXy53b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnLCAvW14sIF0rL2cpO1xuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICcmJywgJ3BlYmJsZXMnXVxuICovXG5mdW5jdGlvbiB3b3JkcyhzdHJpbmcsIHBhdHRlcm4sIGd1YXJkKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHBhdHRlcm4gPSBndWFyZCA/IHVuZGVmaW5lZCA6IHBhdHRlcm47XG5cbiAgaWYgKHBhdHRlcm4gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBoYXNVbmljb2RlV29yZChzdHJpbmcpID8gdW5pY29kZVdvcmRzKHN0cmluZykgOiBhc2NpaVdvcmRzKHN0cmluZyk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5tYXRjaChwYXR0ZXJuKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3b3JkcztcbiIsIi8vIEVTNiBNYXBcbnZhciBtYXBcbnRyeSB7XG4gIG1hcCA9IE1hcFxufSBjYXRjaCAoXykgeyB9XG52YXIgc2V0XG5cbi8vIEVTNiBTZXRcbnRyeSB7XG4gIHNldCA9IFNldFxufSBjYXRjaCAoXykgeyB9XG5cbmZ1bmN0aW9uIGJhc2VDbG9uZSAoc3JjLCBjaXJjdWxhcnMsIGNsb25lcykge1xuICAvLyBOdWxsL3VuZGVmaW5lZC9mdW5jdGlvbnMvZXRjXG4gIGlmICghc3JjIHx8IHR5cGVvZiBzcmMgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBzcmMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc3JjXG4gIH1cblxuICAvLyBET00gTm9kZVxuICBpZiAoc3JjLm5vZGVUeXBlICYmICdjbG9uZU5vZGUnIGluIHNyYykge1xuICAgIHJldHVybiBzcmMuY2xvbmVOb2RlKHRydWUpXG4gIH1cblxuICAvLyBEYXRlXG4gIGlmIChzcmMgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHNyYy5nZXRUaW1lKCkpXG4gIH1cblxuICAvLyBSZWdFeHBcbiAgaWYgKHNyYyBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKHNyYylcbiAgfVxuXG4gIC8vIEFycmF5c1xuICBpZiAoQXJyYXkuaXNBcnJheShzcmMpKSB7XG4gICAgcmV0dXJuIHNyYy5tYXAoY2xvbmUpXG4gIH1cblxuICAvLyBFUzYgTWFwc1xuICBpZiAobWFwICYmIHNyYyBpbnN0YW5jZW9mIG1hcCkge1xuICAgIHJldHVybiBuZXcgTWFwKEFycmF5LmZyb20oc3JjLmVudHJpZXMoKSkpXG4gIH1cblxuICAvLyBFUzYgU2V0c1xuICBpZiAoc2V0ICYmIHNyYyBpbnN0YW5jZW9mIHNldCkge1xuICAgIHJldHVybiBuZXcgU2V0KEFycmF5LmZyb20oc3JjLnZhbHVlcygpKSlcbiAgfVxuXG4gIC8vIE9iamVjdFxuICBpZiAoc3JjIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgY2lyY3VsYXJzLnB1c2goc3JjKVxuICAgIHZhciBvYmogPSBPYmplY3QuY3JlYXRlKHNyYylcbiAgICBjbG9uZXMucHVzaChvYmopXG4gICAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgICAgdmFyIGlkeCA9IGNpcmN1bGFycy5maW5kSW5kZXgoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIGkgPT09IHNyY1trZXldXG4gICAgICB9KVxuICAgICAgb2JqW2tleV0gPSBpZHggPiAtMSA/IGNsb25lc1tpZHhdIDogYmFzZUNsb25lKHNyY1trZXldLCBjaXJjdWxhcnMsIGNsb25lcylcbiAgICB9XG4gICAgcmV0dXJuIG9ialxuICB9XG5cbiAgLy8gPz8/XG4gIHJldHVybiBzcmNcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmUgKHNyYykge1xuICByZXR1cm4gYmFzZUNsb25lKHNyYywgW10sIFtdKVxufVxuIiwiLyoqXG4gKiBCYXNlZCBvbiBLZW5kbyBVSSBDb3JlIGV4cHJlc3Npb24gY29kZSA8aHR0cHM6Ly9naXRodWIuY29tL3RlbGVyaWsva2VuZG8tdWktY29yZSNsaWNlbnNlLWluZm9ybWF0aW9uPlxuICovXG4ndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gQ2FjaGUobWF4U2l6ZSkge1xuICB0aGlzLl9tYXhTaXplID0gbWF4U2l6ZVxuICB0aGlzLmNsZWFyKClcbn1cbkNhY2hlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fc2l6ZSA9IDBcbiAgdGhpcy5fdmFsdWVzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxufVxuQ2FjaGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX3ZhbHVlc1trZXldXG59XG5DYWNoZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdGhpcy5fc2l6ZSA+PSB0aGlzLl9tYXhTaXplICYmIHRoaXMuY2xlYXIoKVxuICBpZiAoIShrZXkgaW4gdGhpcy5fdmFsdWVzKSkgdGhpcy5fc2l6ZSsrXG5cbiAgcmV0dXJuICh0aGlzLl92YWx1ZXNba2V5XSA9IHZhbHVlKVxufVxuXG52YXIgU1BMSVRfUkVHRVggPSAvW14uXlxcXV5bXSt8KD89XFxbXFxdfFxcLlxcLikvZyxcbiAgRElHSVRfUkVHRVggPSAvXlxcZCskLyxcbiAgTEVBRF9ESUdJVF9SRUdFWCA9IC9eXFxkLyxcbiAgU1BFQ19DSEFSX1JFR0VYID0gL1t+YCEjJCVcXF4mKis9XFwtXFxbXFxdXFxcXCc7LC97fXxcXFxcXCI6PD5cXD9dL2csXG4gIENMRUFOX1FVT1RFU19SRUdFWCA9IC9eXFxzKihbJ1wiXT8pKC4qPykoXFwxKVxccyokLyxcbiAgTUFYX0NBQ0hFX1NJWkUgPSA1MTJcblxudmFyIHBhdGhDYWNoZSA9IG5ldyBDYWNoZShNQVhfQ0FDSEVfU0laRSksXG4gIHNldENhY2hlID0gbmV3IENhY2hlKE1BWF9DQUNIRV9TSVpFKSxcbiAgZ2V0Q2FjaGUgPSBuZXcgQ2FjaGUoTUFYX0NBQ0hFX1NJWkUpXG5cbnZhciBjb25maWdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENhY2hlOiBDYWNoZSxcblxuICBzcGxpdDogc3BsaXQsXG5cbiAgbm9ybWFsaXplUGF0aDogbm9ybWFsaXplUGF0aCxcblxuICBzZXR0ZXI6IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgdmFyIHBhcnRzID0gbm9ybWFsaXplUGF0aChwYXRoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHNldENhY2hlLmdldChwYXRoKSB8fFxuICAgICAgc2V0Q2FjaGUuc2V0KHBhdGgsIGZ1bmN0aW9uIHNldHRlcihvYmosIHZhbHVlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IDBcbiAgICAgICAgdmFyIGxlbiA9IHBhcnRzLmxlbmd0aFxuICAgICAgICB2YXIgZGF0YSA9IG9ialxuXG4gICAgICAgIHdoaWxlIChpbmRleCA8IGxlbiAtIDEpIHtcbiAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2luZGV4XVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBhcnQgPT09ICdfX3Byb3RvX18nIHx8XG4gICAgICAgICAgICBwYXJ0ID09PSAnY29uc3RydWN0b3InIHx8XG4gICAgICAgICAgICBwYXJ0ID09PSAncHJvdG90eXBlJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRhdGEgPSBkYXRhW3BhcnRzW2luZGV4KytdXVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbcGFydHNbaW5kZXhdXSA9IHZhbHVlXG4gICAgICB9KVxuICAgIClcbiAgfSxcblxuICBnZXR0ZXI6IGZ1bmN0aW9uIChwYXRoLCBzYWZlKSB7XG4gICAgdmFyIHBhcnRzID0gbm9ybWFsaXplUGF0aChwYXRoKVxuICAgIHJldHVybiAoXG4gICAgICBnZXRDYWNoZS5nZXQocGF0aCkgfHxcbiAgICAgIGdldENhY2hlLnNldChwYXRoLCBmdW5jdGlvbiBnZXR0ZXIoZGF0YSkge1xuICAgICAgICB2YXIgaW5kZXggPSAwLFxuICAgICAgICAgIGxlbiA9IHBhcnRzLmxlbmd0aFxuICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW4pIHtcbiAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsIHx8ICFzYWZlKSBkYXRhID0gZGF0YVtwYXJ0c1tpbmRleCsrXV1cbiAgICAgICAgICBlbHNlIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgIClcbiAgfSxcblxuICBqb2luOiBmdW5jdGlvbiAoc2VnbWVudHMpIHtcbiAgICByZXR1cm4gc2VnbWVudHMucmVkdWNlKGZ1bmN0aW9uIChwYXRoLCBwYXJ0KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBwYXRoICtcbiAgICAgICAgKGlzUXVvdGVkKHBhcnQpIHx8IERJR0lUX1JFR0VYLnRlc3QocGFydClcbiAgICAgICAgICA/ICdbJyArIHBhcnQgKyAnXSdcbiAgICAgICAgICA6IChwYXRoID8gJy4nIDogJycpICsgcGFydClcbiAgICAgIClcbiAgICB9LCAnJylcbiAgfSxcblxuICBmb3JFYWNoOiBmdW5jdGlvbiAocGF0aCwgY2IsIHRoaXNBcmcpIHtcbiAgICBmb3JFYWNoKEFycmF5LmlzQXJyYXkocGF0aCkgPyBwYXRoIDogc3BsaXQocGF0aCksIGNiLCB0aGlzQXJnKVxuICB9LFxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIChcbiAgICBwYXRoQ2FjaGUuZ2V0KHBhdGgpIHx8XG4gICAgcGF0aENhY2hlLnNldChcbiAgICAgIHBhdGgsXG4gICAgICBzcGxpdChwYXRoKS5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnQucmVwbGFjZShDTEVBTl9RVU9URVNfUkVHRVgsICckMicpXG4gICAgICB9KVxuICAgIClcbiAgKVxufVxuXG5mdW5jdGlvbiBzcGxpdChwYXRoKSB7XG4gIHJldHVybiBwYXRoLm1hdGNoKFNQTElUX1JFR0VYKSB8fCBbJyddXG59XG5cbmZ1bmN0aW9uIGZvckVhY2gocGFydHMsIGl0ZXIsIHRoaXNBcmcpIHtcbiAgdmFyIGxlbiA9IHBhcnRzLmxlbmd0aCxcbiAgICBwYXJ0LFxuICAgIGlkeCxcbiAgICBpc0FycmF5LFxuICAgIGlzQnJhY2tldFxuXG4gIGZvciAoaWR4ID0gMDsgaWR4IDwgbGVuOyBpZHgrKykge1xuICAgIHBhcnQgPSBwYXJ0c1tpZHhdXG5cbiAgICBpZiAocGFydCkge1xuICAgICAgaWYgKHNob3VsZEJlUXVvdGVkKHBhcnQpKSB7XG4gICAgICAgIHBhcnQgPSAnXCInICsgcGFydCArICdcIidcbiAgICAgIH1cblxuICAgICAgaXNCcmFja2V0ID0gaXNRdW90ZWQocGFydClcbiAgICAgIGlzQXJyYXkgPSAhaXNCcmFja2V0ICYmIC9eXFxkKyQvLnRlc3QocGFydClcblxuICAgICAgaXRlci5jYWxsKHRoaXNBcmcsIHBhcnQsIGlzQnJhY2tldCwgaXNBcnJheSwgaWR4LCBwYXJ0cylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNRdW90ZWQoc3RyKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycgJiYgc3RyICYmIFtcIidcIiwgJ1wiJ10uaW5kZXhPZihzdHIuY2hhckF0KDApKSAhPT0gLTFcbiAgKVxufVxuXG5mdW5jdGlvbiBoYXNMZWFkaW5nTnVtYmVyKHBhcnQpIHtcbiAgcmV0dXJuIHBhcnQubWF0Y2goTEVBRF9ESUdJVF9SRUdFWCkgJiYgIXBhcnQubWF0Y2goRElHSVRfUkVHRVgpXG59XG5cbmZ1bmN0aW9uIGhhc1NwZWNpYWxDaGFycyhwYXJ0KSB7XG4gIHJldHVybiBTUEVDX0NIQVJfUkVHRVgudGVzdChwYXJ0KVxufVxuXG5mdW5jdGlvbiBzaG91bGRCZVF1b3RlZChwYXJ0KSB7XG4gIHJldHVybiAhaXNRdW90ZWQocGFydCkgJiYgKGhhc0xlYWRpbmdOdW1iZXIocGFydCkgfHwgaGFzU3BlY2lhbENoYXJzKHBhcnQpKVxufVxuIiwiXG4vKipcbiAqIFRvcG9sb2dpY2FsIHNvcnRpbmcgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBlZGdlc1xuICogQHJldHVybnMge0FycmF5fVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWRnZXMpIHtcbiAgcmV0dXJuIHRvcG9zb3J0KHVuaXF1ZU5vZGVzKGVkZ2VzKSwgZWRnZXMpXG59XG5cbm1vZHVsZS5leHBvcnRzLmFycmF5ID0gdG9wb3NvcnRcblxuZnVuY3Rpb24gdG9wb3NvcnQobm9kZXMsIGVkZ2VzKSB7XG4gIHZhciBjdXJzb3IgPSBub2Rlcy5sZW5ndGhcbiAgICAsIHNvcnRlZCA9IG5ldyBBcnJheShjdXJzb3IpXG4gICAgLCB2aXNpdGVkID0ge31cbiAgICAsIGkgPSBjdXJzb3JcbiAgICAvLyBCZXR0ZXIgZGF0YSBzdHJ1Y3R1cmVzIG1ha2UgYWxnb3JpdGhtIG11Y2ggZmFzdGVyLlxuICAgICwgb3V0Z29pbmdFZGdlcyA9IG1ha2VPdXRnb2luZ0VkZ2VzKGVkZ2VzKVxuICAgICwgbm9kZXNIYXNoID0gbWFrZU5vZGVzSGFzaChub2RlcylcblxuICAvLyBjaGVjayBmb3IgdW5rbm93biBub2Rlc1xuICBlZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICBpZiAoIW5vZGVzSGFzaC5oYXMoZWRnZVswXSkgfHwgIW5vZGVzSGFzaC5oYXMoZWRnZVsxXSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBub2RlLiBUaGVyZSBpcyBhbiB1bmtub3duIG5vZGUgaW4gdGhlIHN1cHBsaWVkIGVkZ2VzLicpXG4gICAgfVxuICB9KVxuXG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAoIXZpc2l0ZWRbaV0pIHZpc2l0KG5vZGVzW2ldLCBpLCBuZXcgU2V0KCkpXG4gIH1cblxuICByZXR1cm4gc29ydGVkXG5cbiAgZnVuY3Rpb24gdmlzaXQobm9kZSwgaSwgcHJlZGVjZXNzb3JzKSB7XG4gICAgaWYocHJlZGVjZXNzb3JzLmhhcyhub2RlKSkge1xuICAgICAgdmFyIG5vZGVSZXBcbiAgICAgIHRyeSB7XG4gICAgICAgIG5vZGVSZXAgPSBcIiwgbm9kZSB3YXM6XCIgKyBKU09OLnN0cmluZ2lmeShub2RlKVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIG5vZGVSZXAgPSBcIlwiXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0N5Y2xpYyBkZXBlbmRlbmN5JyArIG5vZGVSZXApXG4gICAgfVxuXG4gICAgaWYgKCFub2Rlc0hhc2guaGFzKG5vZGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIHVua25vd24gbm9kZS4gTWFrZSBzdXJlIHRvIHByb3ZpZGVkIGFsbCBpbnZvbHZlZCBub2Rlcy4gVW5rbm93biBub2RlOiAnK0pTT04uc3RyaW5naWZ5KG5vZGUpKVxuICAgIH1cblxuICAgIGlmICh2aXNpdGVkW2ldKSByZXR1cm47XG4gICAgdmlzaXRlZFtpXSA9IHRydWVcblxuICAgIHZhciBvdXRnb2luZyA9IG91dGdvaW5nRWRnZXMuZ2V0KG5vZGUpIHx8IG5ldyBTZXQoKVxuICAgIG91dGdvaW5nID0gQXJyYXkuZnJvbShvdXRnb2luZylcblxuICAgIGlmIChpID0gb3V0Z29pbmcubGVuZ3RoKSB7XG4gICAgICBwcmVkZWNlc3NvcnMuYWRkKG5vZGUpXG4gICAgICBkbyB7XG4gICAgICAgIHZhciBjaGlsZCA9IG91dGdvaW5nWy0taV1cbiAgICAgICAgdmlzaXQoY2hpbGQsIG5vZGVzSGFzaC5nZXQoY2hpbGQpLCBwcmVkZWNlc3NvcnMpXG4gICAgICB9IHdoaWxlIChpKVxuICAgICAgcHJlZGVjZXNzb3JzLmRlbGV0ZShub2RlKVxuICAgIH1cblxuICAgIHNvcnRlZFstLWN1cnNvcl0gPSBub2RlXG4gIH1cbn1cblxuZnVuY3Rpb24gdW5pcXVlTm9kZXMoYXJyKXtcbiAgdmFyIHJlcyA9IG5ldyBTZXQoKVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGVkZ2UgPSBhcnJbaV1cbiAgICByZXMuYWRkKGVkZ2VbMF0pXG4gICAgcmVzLmFkZChlZGdlWzFdKVxuICB9XG4gIHJldHVybiBBcnJheS5mcm9tKHJlcylcbn1cblxuZnVuY3Rpb24gbWFrZU91dGdvaW5nRWRnZXMoYXJyKXtcbiAgdmFyIGVkZ2VzID0gbmV3IE1hcCgpXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgZWRnZSA9IGFycltpXVxuICAgIGlmICghZWRnZXMuaGFzKGVkZ2VbMF0pKSBlZGdlcy5zZXQoZWRnZVswXSwgbmV3IFNldCgpKVxuICAgIGlmICghZWRnZXMuaGFzKGVkZ2VbMV0pKSBlZGdlcy5zZXQoZWRnZVsxXSwgbmV3IFNldCgpKVxuICAgIGVkZ2VzLmdldChlZGdlWzBdKS5hZGQoZWRnZVsxXSlcbiAgfVxuICByZXR1cm4gZWRnZXNcbn1cblxuZnVuY3Rpb24gbWFrZU5vZGVzSGFzaChhcnIpe1xuICB2YXIgcmVzID0gbmV3IE1hcCgpXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICByZXMuc2V0KGFycltpXSwgaSlcbiAgfVxuICByZXR1cm4gcmVzXG59XG4iLCJpbXBvcnQgaGFzIGZyb20gJ2xvZGFzaC9oYXMnO1xuaW1wb3J0IGlzU2NoZW1hIGZyb20gJy4vdXRpbC9pc1NjaGVtYSc7XG5cbmNsYXNzIENvbmRpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJlZnMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmZuID0gdm9pZCAwO1xuICAgIHRoaXMucmVmcyA9IHJlZnM7XG4gICAgdGhpcy5yZWZzID0gcmVmcztcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5mbiA9IG9wdGlvbnM7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFoYXMob3B0aW9ucywgJ2lzJykpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2BpczpgIGlzIHJlcXVpcmVkIGZvciBgd2hlbigpYCBjb25kaXRpb25zJyk7XG4gICAgaWYgKCFvcHRpb25zLnRoZW4gJiYgIW9wdGlvbnMub3RoZXJ3aXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdlaXRoZXIgYHRoZW46YCBvciBgb3RoZXJ3aXNlOmAgaXMgcmVxdWlyZWQgZm9yIGB3aGVuKClgIGNvbmRpdGlvbnMnKTtcbiAgICBsZXQge1xuICAgICAgaXMsXG4gICAgICB0aGVuLFxuICAgICAgb3RoZXJ3aXNlXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgbGV0IGNoZWNrID0gdHlwZW9mIGlzID09PSAnZnVuY3Rpb24nID8gaXMgOiAoLi4udmFsdWVzKSA9PiB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdmFsdWUgPT09IGlzKTtcblxuICAgIHRoaXMuZm4gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgbGV0IG9wdGlvbnMgPSBhcmdzLnBvcCgpO1xuICAgICAgbGV0IHNjaGVtYSA9IGFyZ3MucG9wKCk7XG4gICAgICBsZXQgYnJhbmNoID0gY2hlY2soLi4uYXJncykgPyB0aGVuIDogb3RoZXJ3aXNlO1xuICAgICAgaWYgKCFicmFuY2gpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICBpZiAodHlwZW9mIGJyYW5jaCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGJyYW5jaChzY2hlbWEpO1xuICAgICAgcmV0dXJuIHNjaGVtYS5jb25jYXQoYnJhbmNoLnJlc29sdmUob3B0aW9ucykpO1xuICAgIH07XG4gIH1cblxuICByZXNvbHZlKGJhc2UsIG9wdGlvbnMpIHtcbiAgICBsZXQgdmFsdWVzID0gdGhpcy5yZWZzLm1hcChyZWYgPT4gcmVmLmdldFZhbHVlKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMudmFsdWUsIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucGFyZW50LCBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmNvbnRleHQpKTtcbiAgICBsZXQgc2NoZW1hID0gdGhpcy5mbi5hcHBseShiYXNlLCB2YWx1ZXMuY29uY2F0KGJhc2UsIG9wdGlvbnMpKTtcbiAgICBpZiAoc2NoZW1hID09PSB1bmRlZmluZWQgfHwgc2NoZW1hID09PSBiYXNlKSByZXR1cm4gYmFzZTtcbiAgICBpZiAoIWlzU2NoZW1hKHNjaGVtYSkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NvbmRpdGlvbnMgbXVzdCByZXR1cm4gYSBzY2hlbWEgb2JqZWN0Jyk7XG4gICAgcmV0dXJuIHNjaGVtYS5yZXNvbHZlKG9wdGlvbnMpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uOyIsImltcG9ydCBpc1NjaGVtYSBmcm9tICcuL3V0aWwvaXNTY2hlbWEnO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShidWlsZGVyKSB7XG4gIHJldHVybiBuZXcgTGF6eShidWlsZGVyKTtcbn1cblxuY2xhc3MgTGF6eSB7XG4gIGNvbnN0cnVjdG9yKGJ1aWxkZXIpIHtcbiAgICB0aGlzLnR5cGUgPSAnbGF6eSc7XG4gICAgdGhpcy5fX2lzWXVwU2NoZW1hX18gPSB0cnVlO1xuICAgIHRoaXMuX19pbnB1dFR5cGUgPSB2b2lkIDA7XG4gICAgdGhpcy5fX291dHB1dFR5cGUgPSB2b2lkIDA7XG5cbiAgICB0aGlzLl9yZXNvbHZlID0gKHZhbHVlLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgIGxldCBzY2hlbWEgPSB0aGlzLmJ1aWxkZXIodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgaWYgKCFpc1NjaGVtYShzY2hlbWEpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdsYXp5KCkgZnVuY3Rpb25zIG11c3QgcmV0dXJuIGEgdmFsaWQgc2NoZW1hJyk7XG4gICAgICByZXR1cm4gc2NoZW1hLnJlc29sdmUob3B0aW9ucyk7XG4gICAgfTtcblxuICAgIHRoaXMuYnVpbGRlciA9IGJ1aWxkZXI7XG4gIH1cblxuICByZXNvbHZlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZShvcHRpb25zLnZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIGNhc3QodmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZSh2YWx1ZSwgb3B0aW9ucykuY2FzdCh2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cblxuICB2YWxpZGF0ZSh2YWx1ZSwgb3B0aW9ucywgbWF5YmVDYikge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgbWlzc2luZyBwdWJsaWMgY2FsbGJhY2sgb24gdHlwZVxuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlKHZhbHVlLCBvcHRpb25zKS52YWxpZGF0ZSh2YWx1ZSwgb3B0aW9ucywgbWF5YmVDYik7XG4gIH1cblxuICB2YWxpZGF0ZVN5bmModmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZSh2YWx1ZSwgb3B0aW9ucykudmFsaWRhdGVTeW5jKHZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIHZhbGlkYXRlQXQocGF0aCwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZSh2YWx1ZSwgb3B0aW9ucykudmFsaWRhdGVBdChwYXRoLCB2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cblxuICB2YWxpZGF0ZVN5bmNBdChwYXRoLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlKHZhbHVlLCBvcHRpb25zKS52YWxpZGF0ZVN5bmNBdChwYXRoLCB2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cblxuICBkZXNjcmliZSgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlzVmFsaWQodmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZSh2YWx1ZSwgb3B0aW9ucykuaXNWYWxpZCh2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cblxuICBpc1ZhbGlkU3luYyh2YWx1ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlKHZhbHVlLCBvcHRpb25zKS5pc1ZhbGlkU3luYyh2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXp5OyIsImltcG9ydCB7IGdldHRlciB9IGZyb20gJ3Byb3BlcnR5LWV4cHInO1xuY29uc3QgcHJlZml4ZXMgPSB7XG4gIGNvbnRleHQ6ICckJyxcbiAgdmFsdWU6ICcuJ1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoa2V5LCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgUmVmZXJlbmNlKGtleSwgb3B0aW9ucyk7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZlcmVuY2Uge1xuICBjb25zdHJ1Y3RvcihrZXksIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMuaXNDb250ZXh0ID0gdm9pZCAwO1xuICAgIHRoaXMuaXNWYWx1ZSA9IHZvaWQgMDtcbiAgICB0aGlzLmlzU2libGluZyA9IHZvaWQgMDtcbiAgICB0aGlzLnBhdGggPSB2b2lkIDA7XG4gICAgdGhpcy5nZXR0ZXIgPSB2b2lkIDA7XG4gICAgdGhpcy5tYXAgPSB2b2lkIDA7XG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdyZWYgbXVzdCBiZSBhIHN0cmluZywgZ290OiAnICsga2V5KTtcbiAgICB0aGlzLmtleSA9IGtleS50cmltKCk7XG4gICAgaWYgKGtleSA9PT0gJycpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3JlZiBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuICAgIHRoaXMuaXNDb250ZXh0ID0gdGhpcy5rZXlbMF0gPT09IHByZWZpeGVzLmNvbnRleHQ7XG4gICAgdGhpcy5pc1ZhbHVlID0gdGhpcy5rZXlbMF0gPT09IHByZWZpeGVzLnZhbHVlO1xuICAgIHRoaXMuaXNTaWJsaW5nID0gIXRoaXMuaXNDb250ZXh0ICYmICF0aGlzLmlzVmFsdWU7XG4gICAgbGV0IHByZWZpeCA9IHRoaXMuaXNDb250ZXh0ID8gcHJlZml4ZXMuY29udGV4dCA6IHRoaXMuaXNWYWx1ZSA/IHByZWZpeGVzLnZhbHVlIDogJyc7XG4gICAgdGhpcy5wYXRoID0gdGhpcy5rZXkuc2xpY2UocHJlZml4Lmxlbmd0aCk7XG4gICAgdGhpcy5nZXR0ZXIgPSB0aGlzLnBhdGggJiYgZ2V0dGVyKHRoaXMucGF0aCwgdHJ1ZSk7XG4gICAgdGhpcy5tYXAgPSBvcHRpb25zLm1hcDtcbiAgfVxuXG4gIGdldFZhbHVlKHZhbHVlLCBwYXJlbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5pc0NvbnRleHQgPyBjb250ZXh0IDogdGhpcy5pc1ZhbHVlID8gdmFsdWUgOiBwYXJlbnQ7XG4gICAgaWYgKHRoaXMuZ2V0dGVyKSByZXN1bHQgPSB0aGlzLmdldHRlcihyZXN1bHQgfHwge30pO1xuICAgIGlmICh0aGlzLm1hcCkgcmVzdWx0ID0gdGhpcy5tYXAocmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9ucy5jb250ZXh0XG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9ucy5wYXJlbnRcbiAgICovXG5cblxuICBjYXN0KHZhbHVlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUodmFsdWUsIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucGFyZW50LCBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmNvbnRleHQpO1xuICB9XG5cbiAgcmVzb2x2ZSgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlc2NyaWJlKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAncmVmJyxcbiAgICAgIGtleTogdGhpcy5rZXlcbiAgICB9O1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIGBSZWYoJHt0aGlzLmtleX0pYDtcbiAgfVxuXG4gIHN0YXRpYyBpc1JlZih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5fX2lzWXVwUmVmO1xuICB9XG5cbn0gLy8gQHRzLWlnbm9yZVxuXG5SZWZlcmVuY2UucHJvdG90eXBlLl9faXNZdXBSZWYgPSB0cnVlOyIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCBwcmludFZhbHVlIGZyb20gJy4vdXRpbC9wcmludFZhbHVlJztcbmltcG9ydCB0b0FycmF5IGZyb20gJy4vdXRpbC90b0FycmF5JztcbmxldCBzdHJSZWcgPSAvXFwkXFx7XFxzKihcXHcrKVxccypcXH0vZztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgc3RhdGljIGZvcm1hdEVycm9yKG1lc3NhZ2UsIHBhcmFtcykge1xuICAgIGNvbnN0IHBhdGggPSBwYXJhbXMubGFiZWwgfHwgcGFyYW1zLnBhdGggfHwgJ3RoaXMnO1xuICAgIGlmIChwYXRoICE9PSBwYXJhbXMucGF0aCkgcGFyYW1zID0gX2V4dGVuZHMoe30sIHBhcmFtcywge1xuICAgICAgcGF0aFxuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHJldHVybiBtZXNzYWdlLnJlcGxhY2Uoc3RyUmVnLCAoXywga2V5KSA9PiBwcmludFZhbHVlKHBhcmFtc1trZXldKSk7XG4gICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnZnVuY3Rpb24nKSByZXR1cm4gbWVzc2FnZShwYXJhbXMpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgc3RhdGljIGlzRXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBlcnIubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcic7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlcnJvck9yRXJyb3JzLCB2YWx1ZSwgZmllbGQsIHR5cGUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsdWUgPSB2b2lkIDA7XG4gICAgdGhpcy5wYXRoID0gdm9pZCAwO1xuICAgIHRoaXMudHlwZSA9IHZvaWQgMDtcbiAgICB0aGlzLmVycm9ycyA9IHZvaWQgMDtcbiAgICB0aGlzLnBhcmFtcyA9IHZvaWQgMDtcbiAgICB0aGlzLmlubmVyID0gdm9pZCAwO1xuICAgIHRoaXMubmFtZSA9ICdWYWxpZGF0aW9uRXJyb3InO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnBhdGggPSBmaWVsZDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgdGhpcy5pbm5lciA9IFtdO1xuICAgIHRvQXJyYXkoZXJyb3JPckVycm9ycykuZm9yRWFjaChlcnIgPT4ge1xuICAgICAgaWYgKFZhbGlkYXRpb25FcnJvci5pc0Vycm9yKGVycikpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaCguLi5lcnIuZXJyb3JzKTtcbiAgICAgICAgdGhpcy5pbm5lciA9IHRoaXMuaW5uZXIuY29uY2F0KGVyci5pbm5lci5sZW5ndGggPyBlcnIuaW5uZXIgOiBlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZXJyb3JzLmxlbmd0aCA+IDEgPyBgJHt0aGlzLmVycm9ycy5sZW5ndGh9IGVycm9ycyBvY2N1cnJlZGAgOiB0aGlzLmVycm9yc1swXTtcbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIFZhbGlkYXRpb25FcnJvcik7XG4gIH1cblxufSIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCBpc0Fic2VudCBmcm9tICcuL3V0aWwvaXNBYnNlbnQnO1xuaW1wb3J0IGlzU2NoZW1hIGZyb20gJy4vdXRpbC9pc1NjaGVtYSc7XG5pbXBvcnQgcHJpbnRWYWx1ZSBmcm9tICcuL3V0aWwvcHJpbnRWYWx1ZSc7XG5pbXBvcnQgeyBhcnJheSBhcyBsb2NhbGUgfSBmcm9tICcuL2xvY2FsZSc7XG5pbXBvcnQgcnVuVGVzdHMgZnJvbSAnLi91dGlsL3J1blRlc3RzJztcbmltcG9ydCBWYWxpZGF0aW9uRXJyb3IgZnJvbSAnLi9WYWxpZGF0aW9uRXJyb3InO1xuaW1wb3J0IEJhc2VTY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSh0eXBlKSB7XG4gIHJldHVybiBuZXcgQXJyYXlTY2hlbWEodHlwZSk7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJheVNjaGVtYSBleHRlbmRzIEJhc2VTY2hlbWEge1xuICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgc3VwZXIoe1xuICAgICAgdHlwZTogJ2FycmF5J1xuICAgIH0pOyAvLyBgdW5kZWZpbmVkYCBzcGVjaWZpY2FsbHkgbWVhbnMgdW5pbml0aWFsaXplZCwgYXMgb3Bwb3NlZCB0b1xuICAgIC8vIFwibm8gc3VidHlwZVwiXG5cbiAgICB0aGlzLmlubmVyVHlwZSA9IHZvaWQgMDtcbiAgICB0aGlzLmlubmVyVHlwZSA9IHR5cGU7XG4gICAgdGhpcy53aXRoTXV0YXRpb24oKCkgPT4ge1xuICAgICAgdGhpcy50cmFuc2Zvcm0oZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlcyA9PT0gJ3N0cmluZycpIHRyeSB7XG4gICAgICAgICAgdmFsdWVzID0gSlNPTi5wYXJzZSh2YWx1ZXMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB2YWx1ZXMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmlzVHlwZSh2YWx1ZXMpID8gdmFsdWVzIDogbnVsbDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3R5cGVDaGVjayh2KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodik7XG4gIH1cblxuICBnZXQgX3N1YlR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJUeXBlO1xuICB9XG5cbiAgX2Nhc3QoX3ZhbHVlLCBfb3B0cykge1xuICAgIGNvbnN0IHZhbHVlID0gc3VwZXIuX2Nhc3QoX3ZhbHVlLCBfb3B0cyk7IC8vc2hvdWxkIGlnbm9yZSBudWxscyBoZXJlXG5cblxuICAgIGlmICghdGhpcy5fdHlwZUNoZWNrKHZhbHVlKSB8fCAhdGhpcy5pbm5lclR5cGUpIHJldHVybiB2YWx1ZTtcbiAgICBsZXQgaXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgY29uc3QgY2FzdEFycmF5ID0gdmFsdWUubWFwKCh2LCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IGNhc3RFbGVtZW50ID0gdGhpcy5pbm5lclR5cGUuY2FzdCh2LCBfZXh0ZW5kcyh7fSwgX29wdHMsIHtcbiAgICAgICAgcGF0aDogYCR7X29wdHMucGF0aCB8fCAnJ31bJHtpZHh9XWBcbiAgICAgIH0pKTtcblxuICAgICAgaWYgKGNhc3RFbGVtZW50ICE9PSB2KSB7XG4gICAgICAgIGlzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYXN0RWxlbWVudDtcbiAgICB9KTtcbiAgICByZXR1cm4gaXNDaGFuZ2VkID8gY2FzdEFycmF5IDogdmFsdWU7XG4gIH1cblxuICBfdmFsaWRhdGUoX3ZhbHVlLCBvcHRpb25zID0ge30sIGNhbGxiYWNrKSB7XG4gICAgdmFyIF9vcHRpb25zJGFib3J0RWFybHksIF9vcHRpb25zJHJlY3Vyc2l2ZTtcblxuICAgIGxldCBlcnJvcnMgPSBbXTtcbiAgICBsZXQgc3luYyA9IG9wdGlvbnMuc3luYztcbiAgICBsZXQgcGF0aCA9IG9wdGlvbnMucGF0aDtcbiAgICBsZXQgaW5uZXJUeXBlID0gdGhpcy5pbm5lclR5cGU7XG4gICAgbGV0IGVuZEVhcmx5ID0gKF9vcHRpb25zJGFib3J0RWFybHkgPSBvcHRpb25zLmFib3J0RWFybHkpICE9IG51bGwgPyBfb3B0aW9ucyRhYm9ydEVhcmx5IDogdGhpcy5zcGVjLmFib3J0RWFybHk7XG4gICAgbGV0IHJlY3Vyc2l2ZSA9IChfb3B0aW9ucyRyZWN1cnNpdmUgPSBvcHRpb25zLnJlY3Vyc2l2ZSkgIT0gbnVsbCA/IF9vcHRpb25zJHJlY3Vyc2l2ZSA6IHRoaXMuc3BlYy5yZWN1cnNpdmU7XG4gICAgbGV0IG9yaWdpbmFsVmFsdWUgPSBvcHRpb25zLm9yaWdpbmFsVmFsdWUgIT0gbnVsbCA/IG9wdGlvbnMub3JpZ2luYWxWYWx1ZSA6IF92YWx1ZTtcblxuICAgIHN1cGVyLl92YWxpZGF0ZShfdmFsdWUsIG9wdGlvbnMsIChlcnIsIHZhbHVlKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGlmICghVmFsaWRhdGlvbkVycm9yLmlzRXJyb3IoZXJyKSB8fCBlbmRFYXJseSkge1xuICAgICAgICAgIHJldHVybiB2b2lkIGNhbGxiYWNrKGVyciwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXJyb3JzLnB1c2goZXJyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZWN1cnNpdmUgfHwgIWlubmVyVHlwZSB8fCAhdGhpcy5fdHlwZUNoZWNrKHZhbHVlKSkge1xuICAgICAgICBjYWxsYmFjayhlcnJvcnNbMF0gfHwgbnVsbCwgdmFsdWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG9yaWdpbmFsVmFsdWUgPSBvcmlnaW5hbFZhbHVlIHx8IHZhbHVlOyAvLyAjOTUwIEVuc3VyZSB0aGF0IHNwYXJzZSBhcnJheSBlbXB0eSBzbG90cyBhcmUgdmFsaWRhdGVkXG5cbiAgICAgIGxldCB0ZXN0cyA9IG5ldyBBcnJheSh2YWx1ZS5sZW5ndGgpO1xuXG4gICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCB2YWx1ZS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIGxldCBpdGVtID0gdmFsdWVbaWR4XTtcbiAgICAgICAgbGV0IHBhdGggPSBgJHtvcHRpb25zLnBhdGggfHwgJyd9WyR7aWR4fV1gOyAvLyBvYmplY3QuX3ZhbGlkYXRlIG5vdGUgZm9yIGlzU3RyaWN0IGV4cGxhbmF0aW9uXG5cbiAgICAgICAgbGV0IGlubmVyT3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICBzdHJpY3Q6IHRydWUsXG4gICAgICAgICAgcGFyZW50OiB2YWx1ZSxcbiAgICAgICAgICBpbmRleDogaWR4LFxuICAgICAgICAgIG9yaWdpbmFsVmFsdWU6IG9yaWdpbmFsVmFsdWVbaWR4XVxuICAgICAgICB9KTtcblxuICAgICAgICB0ZXN0c1tpZHhdID0gKF8sIGNiKSA9PiBpbm5lclR5cGUudmFsaWRhdGUoaXRlbSwgaW5uZXJPcHRpb25zLCBjYik7XG4gICAgICB9XG5cbiAgICAgIHJ1blRlc3RzKHtcbiAgICAgICAgc3luYyxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgZW5kRWFybHksXG4gICAgICAgIHRlc3RzXG4gICAgICB9LCBjYWxsYmFjayk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9uZShzcGVjKSB7XG4gICAgY29uc3QgbmV4dCA9IHN1cGVyLmNsb25lKHNwZWMpO1xuICAgIG5leHQuaW5uZXJUeXBlID0gdGhpcy5pbm5lclR5cGU7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cblxuICBjb25jYXQoc2NoZW1hKSB7XG4gICAgbGV0IG5leHQgPSBzdXBlci5jb25jYXQoc2NoZW1hKTtcbiAgICBuZXh0LmlubmVyVHlwZSA9IHRoaXMuaW5uZXJUeXBlO1xuICAgIGlmIChzY2hlbWEuaW5uZXJUeXBlKSBuZXh0LmlubmVyVHlwZSA9IG5leHQuaW5uZXJUeXBlID8gLy8gQHRzLWV4cGVjdC1lcnJvciBMYXp5IGRvZXNuJ3QgaGF2ZSBjb25jYXQoKVxuICAgIG5leHQuaW5uZXJUeXBlLmNvbmNhdChzY2hlbWEuaW5uZXJUeXBlKSA6IHNjaGVtYS5pbm5lclR5cGU7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cblxuICBvZihzY2hlbWEpIHtcbiAgICAvLyBGSVhNRTogdGhpcyBzaG91bGQgcmV0dXJuIGEgbmV3IGluc3RhbmNlIG9mIGFycmF5IHdpdGhvdXQgdGhlIGRlZmF1bHQgdG8gYmVcbiAgICBsZXQgbmV4dCA9IHRoaXMuY2xvbmUoKTtcbiAgICBpZiAoIWlzU2NoZW1hKHNjaGVtYSkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2BhcnJheS5vZigpYCBzdWItc2NoZW1hIG11c3QgYmUgYSB2YWxpZCB5dXAgc2NoZW1hIG5vdDogJyArIHByaW50VmFsdWUoc2NoZW1hKSk7IC8vIEZJWE1FKHRzKTpcblxuICAgIG5leHQuaW5uZXJUeXBlID0gc2NoZW1hO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG5cbiAgbGVuZ3RoKGxlbmd0aCwgbWVzc2FnZSA9IGxvY2FsZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnbGVuZ3RoJyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBsZW5ndGhcbiAgICAgIH0sXG5cbiAgICAgIHRlc3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlzQWJzZW50KHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPT09IHRoaXMucmVzb2x2ZShsZW5ndGgpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH1cblxuICBtaW4obWluLCBtZXNzYWdlKSB7XG4gICAgbWVzc2FnZSA9IG1lc3NhZ2UgfHwgbG9jYWxlLm1pbjtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnbWluJyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBtaW5cbiAgICAgIH0sXG5cbiAgICAgIC8vIEZJWE1FKHRzKTogQXJyYXk8dHlwZW9mIFQ+XG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpc0Fic2VudCh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID49IHRoaXMucmVzb2x2ZShtaW4pO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH1cblxuICBtYXgobWF4LCBtZXNzYWdlKSB7XG4gICAgbWVzc2FnZSA9IG1lc3NhZ2UgfHwgbG9jYWxlLm1heDtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnbWF4JyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBtYXhcbiAgICAgIH0sXG5cbiAgICAgIHRlc3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlzQWJzZW50KHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPD0gdGhpcy5yZXNvbHZlKG1heCk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIGVuc3VyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0KCgpID0+IFtdKS50cmFuc2Zvcm0oKHZhbCwgb3JpZ2luYWwpID0+IHtcbiAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gcmV0dXJuIGBudWxsYCBmb3IgbnVsbGFibGUgc2NoZW1hXG4gICAgICBpZiAodGhpcy5fdHlwZUNoZWNrKHZhbCkpIHJldHVybiB2YWw7XG4gICAgICByZXR1cm4gb3JpZ2luYWwgPT0gbnVsbCA/IFtdIDogW10uY29uY2F0KG9yaWdpbmFsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBhY3QocmVqZWN0b3IpIHtcbiAgICBsZXQgcmVqZWN0ID0gIXJlamVjdG9yID8gdiA9PiAhIXYgOiAodiwgaSwgYSkgPT4gIXJlamVjdG9yKHYsIGksIGEpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh2YWx1ZXMgPT4gdmFsdWVzICE9IG51bGwgPyB2YWx1ZXMuZmlsdGVyKHJlamVjdCkgOiB2YWx1ZXMpO1xuICB9XG5cbiAgZGVzY3JpYmUoKSB7XG4gICAgbGV0IGJhc2UgPSBzdXBlci5kZXNjcmliZSgpO1xuICAgIGlmICh0aGlzLmlubmVyVHlwZSkgYmFzZS5pbm5lclR5cGUgPSB0aGlzLmlubmVyVHlwZS5kZXNjcmliZSgpO1xuICAgIHJldHVybiBiYXNlO1xuICB9XG5cbiAgbnVsbGFibGUoaXNOdWxsYWJsZSA9IHRydWUpIHtcbiAgICByZXR1cm4gc3VwZXIubnVsbGFibGUoaXNOdWxsYWJsZSk7XG4gIH1cblxuICBkZWZpbmVkKCkge1xuICAgIHJldHVybiBzdXBlci5kZWZpbmVkKCk7XG4gIH1cblxuICByZXF1aXJlZChtc2cpIHtcbiAgICByZXR1cm4gc3VwZXIucmVxdWlyZWQobXNnKTtcbiAgfVxuXG59XG5jcmVhdGUucHJvdG90eXBlID0gQXJyYXlTY2hlbWEucHJvdG90eXBlOyAvL1xuLy8gSW50ZXJmYWNlc1xuLy8iLCJpbXBvcnQgQmFzZVNjaGVtYSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBib29sZWFuIGFzIGxvY2FsZSB9IGZyb20gJy4vbG9jYWxlJztcbmltcG9ydCBpc0Fic2VudCBmcm9tICcuL3V0aWwvaXNBYnNlbnQnO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgcmV0dXJuIG5ldyBCb29sZWFuU2NoZW1hKCk7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29sZWFuU2NoZW1hIGV4dGVuZHMgQmFzZVNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgIH0pO1xuICAgIHRoaXMud2l0aE11dGF0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMudHJhbnNmb3JtKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNUeXBlKHZhbHVlKSkge1xuICAgICAgICAgIGlmICgvXih0cnVlfDEpJC9pLnRlc3QoU3RyaW5nKHZhbHVlKSkpIHJldHVybiB0cnVlO1xuICAgICAgICAgIGlmICgvXihmYWxzZXwwKSQvaS50ZXN0KFN0cmluZyh2YWx1ZSkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF90eXBlQ2hlY2sodikge1xuICAgIGlmICh2IGluc3RhbmNlb2YgQm9vbGVhbikgdiA9IHYudmFsdWVPZigpO1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Jvb2xlYW4nO1xuICB9XG5cbiAgaXNUcnVlKG1lc3NhZ2UgPSBsb2NhbGUuaXNWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnRlc3Qoe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIG5hbWU6ICdpcy12YWx1ZScsXG4gICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdmFsdWU6ICd0cnVlJ1xuICAgICAgfSxcblxuICAgICAgdGVzdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gaXNBYnNlbnQodmFsdWUpIHx8IHZhbHVlID09PSB0cnVlO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH1cblxuICBpc0ZhbHNlKG1lc3NhZ2UgPSBsb2NhbGUuaXNWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnRlc3Qoe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIG5hbWU6ICdpcy12YWx1ZScsXG4gICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdmFsdWU6ICdmYWxzZSdcbiAgICAgIH0sXG5cbiAgICAgIHRlc3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlzQWJzZW50KHZhbHVlKSB8fCB2YWx1ZSA9PT0gZmFsc2U7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG59XG5jcmVhdGUucHJvdG90eXBlID0gQm9vbGVhblNjaGVtYS5wcm90b3R5cGU7IiwiLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGlzb1BhcnNlIGZyb20gJy4vdXRpbC9pc29kYXRlJztcbmltcG9ydCB7IGRhdGUgYXMgbG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUnO1xuaW1wb3J0IGlzQWJzZW50IGZyb20gJy4vdXRpbC9pc0Fic2VudCc7XG5pbXBvcnQgUmVmIGZyb20gJy4vUmVmZXJlbmNlJztcbmltcG9ydCBCYXNlU2NoZW1hIGZyb20gJy4vc2NoZW1hJztcbmxldCBpbnZhbGlkRGF0ZSA9IG5ldyBEYXRlKCcnKTtcblxubGV0IGlzRGF0ZSA9IG9iaiA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICByZXR1cm4gbmV3IERhdGVTY2hlbWEoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVTY2hlbWEgZXh0ZW5kcyBCYXNlU2NoZW1hIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgdHlwZTogJ2RhdGUnXG4gICAgfSk7XG4gICAgdGhpcy53aXRoTXV0YXRpb24oKCkgPT4ge1xuICAgICAgdGhpcy50cmFuc2Zvcm0oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVHlwZSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSBpc29QYXJzZSh2YWx1ZSk7IC8vIDAgaXMgYSB2YWxpZCB0aW1lc3RhbXAgZXF1aXZhbGVudCB0byAxOTcwLTAxLTAxVDAwOjAwOjAwWih1bml4IGVwb2NoKSBvciBiZWZvcmUuXG5cbiAgICAgICAgcmV0dXJuICFpc05hTih2YWx1ZSkgPyBuZXcgRGF0ZSh2YWx1ZSkgOiBpbnZhbGlkRGF0ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3R5cGVDaGVjayh2KSB7XG4gICAgcmV0dXJuIGlzRGF0ZSh2KSAmJiAhaXNOYU4odi5nZXRUaW1lKCkpO1xuICB9XG5cbiAgcHJlcGFyZVBhcmFtKHJlZiwgbmFtZSkge1xuICAgIGxldCBwYXJhbTtcblxuICAgIGlmICghUmVmLmlzUmVmKHJlZikpIHtcbiAgICAgIGxldCBjYXN0ID0gdGhpcy5jYXN0KHJlZik7XG4gICAgICBpZiAoIXRoaXMuX3R5cGVDaGVjayhjYXN0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihgXFxgJHtuYW1lfVxcYCBtdXN0IGJlIGEgRGF0ZSBvciBhIHZhbHVlIHRoYXQgY2FuIGJlIFxcYGNhc3QoKVxcYCB0byBhIERhdGVgKTtcbiAgICAgIHBhcmFtID0gY2FzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW0gPSByZWY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtO1xuICB9XG5cbiAgbWluKG1pbiwgbWVzc2FnZSA9IGxvY2FsZS5taW4pIHtcbiAgICBsZXQgbGltaXQgPSB0aGlzLnByZXBhcmVQYXJhbShtaW4sICdtaW4nKTtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnbWluJyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBtaW5cbiAgICAgIH0sXG5cbiAgICAgIHRlc3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlzQWJzZW50KHZhbHVlKSB8fCB2YWx1ZSA+PSB0aGlzLnJlc29sdmUobGltaXQpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH1cblxuICBtYXgobWF4LCBtZXNzYWdlID0gbG9jYWxlLm1heCkge1xuICAgIGxldCBsaW1pdCA9IHRoaXMucHJlcGFyZVBhcmFtKG1heCwgJ21heCcpO1xuICAgIHJldHVybiB0aGlzLnRlc3Qoe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIG5hbWU6ICdtYXgnLFxuICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG1heFxuICAgICAgfSxcblxuICAgICAgdGVzdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gaXNBYnNlbnQodmFsdWUpIHx8IHZhbHVlIDw9IHRoaXMucmVzb2x2ZShsaW1pdCk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG59XG5EYXRlU2NoZW1hLklOVkFMSURfREFURSA9IGludmFsaWREYXRlO1xuY3JlYXRlLnByb3RvdHlwZSA9IERhdGVTY2hlbWEucHJvdG90eXBlO1xuY3JlYXRlLklOVkFMSURfREFURSA9IGludmFsaWREYXRlOyIsImltcG9ydCBNaXhlZFNjaGVtYSwgeyBjcmVhdGUgYXMgbWl4ZWRDcmVhdGUgfSBmcm9tICcuL21peGVkJztcbmltcG9ydCBCb29sZWFuU2NoZW1hLCB7IGNyZWF0ZSBhcyBib29sQ3JlYXRlIH0gZnJvbSAnLi9ib29sZWFuJztcbmltcG9ydCBTdHJpbmdTY2hlbWEsIHsgY3JlYXRlIGFzIHN0cmluZ0NyZWF0ZSB9IGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCBOdW1iZXJTY2hlbWEsIHsgY3JlYXRlIGFzIG51bWJlckNyZWF0ZSB9IGZyb20gJy4vbnVtYmVyJztcbmltcG9ydCBEYXRlU2NoZW1hLCB7IGNyZWF0ZSBhcyBkYXRlQ3JlYXRlIH0gZnJvbSAnLi9kYXRlJztcbmltcG9ydCBPYmplY3RTY2hlbWEsIHsgY3JlYXRlIGFzIG9iamVjdENyZWF0ZSB9IGZyb20gJy4vb2JqZWN0JztcbmltcG9ydCBBcnJheVNjaGVtYSwgeyBjcmVhdGUgYXMgYXJyYXlDcmVhdGUgfSBmcm9tICcuL2FycmF5JztcbmltcG9ydCB7IGNyZWF0ZSBhcyByZWZDcmVhdGUgfSBmcm9tICcuL1JlZmVyZW5jZSc7XG5pbXBvcnQgeyBjcmVhdGUgYXMgbGF6eUNyZWF0ZSB9IGZyb20gJy4vTGF6eSc7XG5pbXBvcnQgVmFsaWRhdGlvbkVycm9yIGZyb20gJy4vVmFsaWRhdGlvbkVycm9yJztcbmltcG9ydCByZWFjaCBmcm9tICcuL3V0aWwvcmVhY2gnO1xuaW1wb3J0IGlzU2NoZW1hIGZyb20gJy4vdXRpbC9pc1NjaGVtYSc7XG5pbXBvcnQgc2V0TG9jYWxlIGZyb20gJy4vc2V0TG9jYWxlJztcbmltcG9ydCBCYXNlU2NoZW1hIGZyb20gJy4vc2NoZW1hJztcblxuZnVuY3Rpb24gYWRkTWV0aG9kKHNjaGVtYVR5cGUsIG5hbWUsIGZuKSB7XG4gIGlmICghc2NoZW1hVHlwZSB8fCAhaXNTY2hlbWEoc2NoZW1hVHlwZS5wcm90b3R5cGUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwcm92aWRlIGEgeXVwIHNjaGVtYSBjb25zdHJ1Y3RvciBmdW5jdGlvbicpO1xuICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBIE1ldGhvZCBuYW1lIG11c3QgYmUgcHJvdmlkZWQnKTtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignTWV0aG9kIGZ1bmN0aW9uIG11c3QgYmUgcHJvdmlkZWQnKTtcbiAgc2NoZW1hVHlwZS5wcm90b3R5cGVbbmFtZV0gPSBmbjtcbn1cblxuZXhwb3J0IHsgbWl4ZWRDcmVhdGUgYXMgbWl4ZWQsIGJvb2xDcmVhdGUgYXMgYm9vbCwgYm9vbENyZWF0ZSBhcyBib29sZWFuLCBzdHJpbmdDcmVhdGUgYXMgc3RyaW5nLCBudW1iZXJDcmVhdGUgYXMgbnVtYmVyLCBkYXRlQ3JlYXRlIGFzIGRhdGUsIG9iamVjdENyZWF0ZSBhcyBvYmplY3QsIGFycmF5Q3JlYXRlIGFzIGFycmF5LCByZWZDcmVhdGUgYXMgcmVmLCBsYXp5Q3JlYXRlIGFzIGxhenksIHJlYWNoLCBpc1NjaGVtYSwgYWRkTWV0aG9kLCBzZXRMb2NhbGUsIFZhbGlkYXRpb25FcnJvciB9O1xuZXhwb3J0IHsgQmFzZVNjaGVtYSwgTWl4ZWRTY2hlbWEsIEJvb2xlYW5TY2hlbWEsIFN0cmluZ1NjaGVtYSwgTnVtYmVyU2NoZW1hLCBEYXRlU2NoZW1hLCBPYmplY3RTY2hlbWEsIEFycmF5U2NoZW1hIH07IiwiaW1wb3J0IHByaW50VmFsdWUgZnJvbSAnLi91dGlsL3ByaW50VmFsdWUnO1xuZXhwb3J0IGxldCBtaXhlZCA9IHtcbiAgZGVmYXVsdDogJyR7cGF0aH0gaXMgaW52YWxpZCcsXG4gIHJlcXVpcmVkOiAnJHtwYXRofSBpcyBhIHJlcXVpcmVkIGZpZWxkJyxcbiAgb25lT2Y6ICcke3BhdGh9IG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOiAke3ZhbHVlc30nLFxuICBub3RPbmVPZjogJyR7cGF0aH0gbXVzdCBub3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOiAke3ZhbHVlc30nLFxuICBub3RUeXBlOiAoe1xuICAgIHBhdGgsXG4gICAgdHlwZSxcbiAgICB2YWx1ZSxcbiAgICBvcmlnaW5hbFZhbHVlXG4gIH0pID0+IHtcbiAgICBsZXQgaXNDYXN0ID0gb3JpZ2luYWxWYWx1ZSAhPSBudWxsICYmIG9yaWdpbmFsVmFsdWUgIT09IHZhbHVlO1xuICAgIGxldCBtc2cgPSBgJHtwYXRofSBtdXN0IGJlIGEgXFxgJHt0eXBlfVxcYCB0eXBlLCBgICsgYGJ1dCB0aGUgZmluYWwgdmFsdWUgd2FzOiBcXGAke3ByaW50VmFsdWUodmFsdWUsIHRydWUpfVxcYGAgKyAoaXNDYXN0ID8gYCAoY2FzdCBmcm9tIHRoZSB2YWx1ZSBcXGAke3ByaW50VmFsdWUob3JpZ2luYWxWYWx1ZSwgdHJ1ZSl9XFxgKS5gIDogJy4nKTtcblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgbXNnICs9IGBcXG4gSWYgXCJudWxsXCIgaXMgaW50ZW5kZWQgYXMgYW4gZW1wdHkgdmFsdWUgYmUgc3VyZSB0byBtYXJrIHRoZSBzY2hlbWEgYXMgXFxgLm51bGxhYmxlKClcXGBgO1xuICAgIH1cblxuICAgIHJldHVybiBtc2c7XG4gIH0sXG4gIGRlZmluZWQ6ICcke3BhdGh9IG11c3QgYmUgZGVmaW5lZCdcbn07XG5leHBvcnQgbGV0IHN0cmluZyA9IHtcbiAgbGVuZ3RoOiAnJHtwYXRofSBtdXN0IGJlIGV4YWN0bHkgJHtsZW5ndGh9IGNoYXJhY3RlcnMnLFxuICBtaW46ICcke3BhdGh9IG11c3QgYmUgYXQgbGVhc3QgJHttaW59IGNoYXJhY3RlcnMnLFxuICBtYXg6ICcke3BhdGh9IG11c3QgYmUgYXQgbW9zdCAke21heH0gY2hhcmFjdGVycycsXG4gIG1hdGNoZXM6ICcke3BhdGh9IG11c3QgbWF0Y2ggdGhlIGZvbGxvd2luZzogXCIke3JlZ2V4fVwiJyxcbiAgZW1haWw6ICcke3BhdGh9IG11c3QgYmUgYSB2YWxpZCBlbWFpbCcsXG4gIHVybDogJyR7cGF0aH0gbXVzdCBiZSBhIHZhbGlkIFVSTCcsXG4gIHV1aWQ6ICcke3BhdGh9IG11c3QgYmUgYSB2YWxpZCBVVUlEJyxcbiAgdHJpbTogJyR7cGF0aH0gbXVzdCBiZSBhIHRyaW1tZWQgc3RyaW5nJyxcbiAgbG93ZXJjYXNlOiAnJHtwYXRofSBtdXN0IGJlIGEgbG93ZXJjYXNlIHN0cmluZycsXG4gIHVwcGVyY2FzZTogJyR7cGF0aH0gbXVzdCBiZSBhIHVwcGVyIGNhc2Ugc3RyaW5nJ1xufTtcbmV4cG9ydCBsZXQgbnVtYmVyID0ge1xuICBtaW46ICcke3BhdGh9IG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvICR7bWlufScsXG4gIG1heDogJyR7cGF0aH0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHttYXh9JyxcbiAgbGVzc1RoYW46ICcke3BhdGh9IG11c3QgYmUgbGVzcyB0aGFuICR7bGVzc30nLFxuICBtb3JlVGhhbjogJyR7cGF0aH0gbXVzdCBiZSBncmVhdGVyIHRoYW4gJHttb3JlfScsXG4gIHBvc2l0aXZlOiAnJHtwYXRofSBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyxcbiAgbmVnYXRpdmU6ICcke3BhdGh9IG11c3QgYmUgYSBuZWdhdGl2ZSBudW1iZXInLFxuICBpbnRlZ2VyOiAnJHtwYXRofSBtdXN0IGJlIGFuIGludGVnZXInXG59O1xuZXhwb3J0IGxldCBkYXRlID0ge1xuICBtaW46ICcke3BhdGh9IGZpZWxkIG11c3QgYmUgbGF0ZXIgdGhhbiAke21pbn0nLFxuICBtYXg6ICcke3BhdGh9IGZpZWxkIG11c3QgYmUgYXQgZWFybGllciB0aGFuICR7bWF4fSdcbn07XG5leHBvcnQgbGV0IGJvb2xlYW4gPSB7XG4gIGlzVmFsdWU6ICcke3BhdGh9IGZpZWxkIG11c3QgYmUgJHt2YWx1ZX0nXG59O1xuZXhwb3J0IGxldCBvYmplY3QgPSB7XG4gIG5vVW5rbm93bjogJyR7cGF0aH0gZmllbGQgaGFzIHVuc3BlY2lmaWVkIGtleXM6ICR7dW5rbm93bn0nXG59O1xuZXhwb3J0IGxldCBhcnJheSA9IHtcbiAgbWluOiAnJHtwYXRofSBmaWVsZCBtdXN0IGhhdmUgYXQgbGVhc3QgJHttaW59IGl0ZW1zJyxcbiAgbWF4OiAnJHtwYXRofSBmaWVsZCBtdXN0IGhhdmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7bWF4fSBpdGVtcycsXG4gIGxlbmd0aDogJyR7cGF0aH0gbXVzdCBoYXZlICR7bGVuZ3RofSBpdGVtcydcbn07XG5leHBvcnQgZGVmYXVsdCBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksIHtcbiAgbWl4ZWQsXG4gIHN0cmluZyxcbiAgbnVtYmVyLFxuICBkYXRlLFxuICBvYmplY3QsXG4gIGFycmF5LFxuICBib29sZWFuXG59KTsiLCJpbXBvcnQgQmFzZVNjaGVtYSBmcm9tICcuL3NjaGVtYSc7XG5jb25zdCBNaXhlZCA9IEJhc2VTY2hlbWE7XG5leHBvcnQgZGVmYXVsdCBNaXhlZDtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHJldHVybiBuZXcgTWl4ZWQoKTtcbn0gLy8gWFhYOiB0aGlzIGlzIHVzaW5nIHRoZSBCYXNlIHNjaGVtYSBzbyB0aGF0IGBhZGRNZXRob2QobWl4ZWQpYCB3b3JrcyBhcyBhIGJhc2UgY2xhc3NcblxuY3JlYXRlLnByb3RvdHlwZSA9IE1peGVkLnByb3RvdHlwZTsiLCJpbXBvcnQgeyBudW1iZXIgYXMgbG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUnO1xuaW1wb3J0IGlzQWJzZW50IGZyb20gJy4vdXRpbC9pc0Fic2VudCc7XG5pbXBvcnQgQmFzZVNjaGVtYSBmcm9tICcuL3NjaGVtYSc7XG5cbmxldCBpc05hTiA9IHZhbHVlID0+IHZhbHVlICE9ICt2YWx1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgcmV0dXJuIG5ldyBOdW1iZXJTY2hlbWEoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlclNjaGVtYSBleHRlbmRzIEJhc2VTY2hlbWEge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICB0eXBlOiAnbnVtYmVyJ1xuICAgIH0pO1xuICAgIHRoaXMud2l0aE11dGF0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMudHJhbnNmb3JtKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcGFyc2VkID0gcGFyc2VkLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgICAgaWYgKHBhcnNlZCA9PT0gJycpIHJldHVybiBOYU47IC8vIGRvbid0IHVzZSBwYXJzZUZsb2F0IHRvIGF2b2lkIHBvc2l0aXZlcyBvbiBhbHBoYS1udW1lcmljIHN0cmluZ3NcblxuICAgICAgICAgIHBhcnNlZCA9ICtwYXJzZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1R5cGUocGFyc2VkKSkgcmV0dXJuIHBhcnNlZDtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocGFyc2VkKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX3R5cGVDaGVjayh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE51bWJlcikgdmFsdWUgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKTtcbiAgfVxuXG4gIG1pbihtaW4sIG1lc3NhZ2UgPSBsb2NhbGUubWluKSB7XG4gICAgcmV0dXJuIHRoaXMudGVzdCh7XG4gICAgICBtZXNzYWdlLFxuICAgICAgbmFtZTogJ21pbicsXG4gICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbWluXG4gICAgICB9LFxuXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpc0Fic2VudCh2YWx1ZSkgfHwgdmFsdWUgPj0gdGhpcy5yZXNvbHZlKG1pbik7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIG1heChtYXgsIG1lc3NhZ2UgPSBsb2NhbGUubWF4KSB7XG4gICAgcmV0dXJuIHRoaXMudGVzdCh7XG4gICAgICBtZXNzYWdlLFxuICAgICAgbmFtZTogJ21heCcsXG4gICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbWF4XG4gICAgICB9LFxuXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpc0Fic2VudCh2YWx1ZSkgfHwgdmFsdWUgPD0gdGhpcy5yZXNvbHZlKG1heCk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIGxlc3NUaGFuKGxlc3MsIG1lc3NhZ2UgPSBsb2NhbGUubGVzc1RoYW4pIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnbWF4JyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBsZXNzXG4gICAgICB9LFxuXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpc0Fic2VudCh2YWx1ZSkgfHwgdmFsdWUgPCB0aGlzLnJlc29sdmUobGVzcyk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIG1vcmVUaGFuKG1vcmUsIG1lc3NhZ2UgPSBsb2NhbGUubW9yZVRoYW4pIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnbWluJyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBtb3JlXG4gICAgICB9LFxuXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpc0Fic2VudCh2YWx1ZSkgfHwgdmFsdWUgPiB0aGlzLnJlc29sdmUobW9yZSk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIHBvc2l0aXZlKG1zZyA9IGxvY2FsZS5wb3NpdGl2ZSkge1xuICAgIHJldHVybiB0aGlzLm1vcmVUaGFuKDAsIG1zZyk7XG4gIH1cblxuICBuZWdhdGl2ZShtc2cgPSBsb2NhbGUubmVnYXRpdmUpIHtcbiAgICByZXR1cm4gdGhpcy5sZXNzVGhhbigwLCBtc2cpO1xuICB9XG5cbiAgaW50ZWdlcihtZXNzYWdlID0gbG9jYWxlLmludGVnZXIpIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG5hbWU6ICdpbnRlZ2VyJyxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0ZXN0OiB2YWwgPT4gaXNBYnNlbnQodmFsKSB8fCBOdW1iZXIuaXNJbnRlZ2VyKHZhbClcbiAgICB9KTtcbiAgfVxuXG4gIHRydW5jYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh2YWx1ZSA9PiAhaXNBYnNlbnQodmFsdWUpID8gdmFsdWUgfCAwIDogdmFsdWUpO1xuICB9XG5cbiAgcm91bmQobWV0aG9kKSB7XG4gICAgdmFyIF9tZXRob2Q7XG5cbiAgICBsZXQgYXZhaWwgPSBbJ2NlaWwnLCAnZmxvb3InLCAncm91bmQnLCAndHJ1bmMnXTtcbiAgICBtZXRob2QgPSAoKF9tZXRob2QgPSBtZXRob2QpID09IG51bGwgPyB2b2lkIDAgOiBfbWV0aG9kLnRvTG93ZXJDYXNlKCkpIHx8ICdyb3VuZCc7IC8vIHRoaXMgZXhpc3RzIGZvciBzeW1lbXRyeSB3aXRoIHRoZSBuZXcgTWF0aC50cnVuY1xuXG4gICAgaWYgKG1ldGhvZCA9PT0gJ3RydW5jJykgcmV0dXJuIHRoaXMudHJ1bmNhdGUoKTtcbiAgICBpZiAoYXZhaWwuaW5kZXhPZihtZXRob2QudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdPbmx5IHZhbGlkIG9wdGlvbnMgZm9yIHJvdW5kKCkgYXJlOiAnICsgYXZhaWwuam9pbignLCAnKSk7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHZhbHVlID0+ICFpc0Fic2VudCh2YWx1ZSkgPyBNYXRoW21ldGhvZF0odmFsdWUpIDogdmFsdWUpO1xuICB9XG5cbn1cbmNyZWF0ZS5wcm90b3R5cGUgPSBOdW1iZXJTY2hlbWEucHJvdG90eXBlOyAvL1xuLy8gTnVtYmVyIEludGVyZmFjZXNcbi8vIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0IGhhcyBmcm9tICdsb2Rhc2gvaGFzJztcbmltcG9ydCBzbmFrZUNhc2UgZnJvbSAnbG9kYXNoL3NuYWtlQ2FzZSc7XG5pbXBvcnQgY2FtZWxDYXNlIGZyb20gJ2xvZGFzaC9jYW1lbENhc2UnO1xuaW1wb3J0IG1hcEtleXMgZnJvbSAnbG9kYXNoL21hcEtleXMnO1xuaW1wb3J0IG1hcFZhbHVlcyBmcm9tICdsb2Rhc2gvbWFwVmFsdWVzJztcbmltcG9ydCB7IGdldHRlciB9IGZyb20gJ3Byb3BlcnR5LWV4cHInO1xuaW1wb3J0IHsgb2JqZWN0IGFzIGxvY2FsZSB9IGZyb20gJy4vbG9jYWxlJztcbmltcG9ydCBzb3J0RmllbGRzIGZyb20gJy4vdXRpbC9zb3J0RmllbGRzJztcbmltcG9ydCBzb3J0QnlLZXlPcmRlciBmcm9tICcuL3V0aWwvc29ydEJ5S2V5T3JkZXInO1xuaW1wb3J0IHJ1blRlc3RzIGZyb20gJy4vdXRpbC9ydW5UZXN0cyc7XG5pbXBvcnQgVmFsaWRhdGlvbkVycm9yIGZyb20gJy4vVmFsaWRhdGlvbkVycm9yJztcbmltcG9ydCBCYXNlU2NoZW1hIGZyb20gJy4vc2NoZW1hJztcblxubGV0IGlzT2JqZWN0ID0gb2JqID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcblxuZnVuY3Rpb24gdW5rbm93bihjdHgsIHZhbHVlKSB7XG4gIGxldCBrbm93biA9IE9iamVjdC5rZXlzKGN0eC5maWVsZHMpO1xuICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmZpbHRlcihrZXkgPT4ga25vd24uaW5kZXhPZihrZXkpID09PSAtMSk7XG59XG5cbmNvbnN0IGRlZmF1bHRTb3J0ID0gc29ydEJ5S2V5T3JkZXIoW10pO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JqZWN0U2NoZW1hIGV4dGVuZHMgQmFzZVNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yKHNwZWMpIHtcbiAgICBzdXBlcih7XG4gICAgICB0eXBlOiAnb2JqZWN0J1xuICAgIH0pO1xuICAgIHRoaXMuZmllbGRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9zb3J0RXJyb3JzID0gZGVmYXVsdFNvcnQ7XG4gICAgdGhpcy5fbm9kZXMgPSBbXTtcbiAgICB0aGlzLl9leGNsdWRlZEVkZ2VzID0gW107XG4gICAgdGhpcy53aXRoTXV0YXRpb24oKCkgPT4ge1xuICAgICAgdGhpcy50cmFuc2Zvcm0oZnVuY3Rpb24gY29lcmNlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNUeXBlKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3BlYykge1xuICAgICAgICB0aGlzLnNoYXBlKHNwZWMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX3R5cGVDaGVjayh2YWx1ZSkge1xuICAgIHJldHVybiBpc09iamVjdCh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgX2Nhc3QoX3ZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgICB2YXIgX29wdGlvbnMkc3RyaXBVbmtub3duO1xuXG4gICAgbGV0IHZhbHVlID0gc3VwZXIuX2Nhc3QoX3ZhbHVlLCBvcHRpb25zKTsgLy9zaG91bGQgaWdub3JlIG51bGxzIGhlcmVcblxuXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLmdldERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuX3R5cGVDaGVjayh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICBsZXQgZmllbGRzID0gdGhpcy5maWVsZHM7XG4gICAgbGV0IHN0cmlwID0gKF9vcHRpb25zJHN0cmlwVW5rbm93biA9IG9wdGlvbnMuc3RyaXBVbmtub3duKSAhPSBudWxsID8gX29wdGlvbnMkc3RyaXBVbmtub3duIDogdGhpcy5zcGVjLm5vVW5rbm93bjtcblxuICAgIGxldCBwcm9wcyA9IHRoaXMuX25vZGVzLmNvbmNhdChPYmplY3Qua2V5cyh2YWx1ZSkuZmlsdGVyKHYgPT4gdGhpcy5fbm9kZXMuaW5kZXhPZih2KSA9PT0gLTEpKTtcblxuICAgIGxldCBpbnRlcm1lZGlhdGVWYWx1ZSA9IHt9OyAvLyBpcyBmaWxsZWQgZHVyaW5nIHRoZSB0cmFuc2Zvcm0gYmVsb3dcblxuICAgIGxldCBpbm5lck9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgcGFyZW50OiBpbnRlcm1lZGlhdGVWYWx1ZSxcbiAgICAgIF9fdmFsaWRhdGluZzogb3B0aW9ucy5fX3ZhbGlkYXRpbmcgfHwgZmFsc2VcbiAgICB9KTtcblxuICAgIGxldCBpc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIGZvciAoY29uc3QgcHJvcCBvZiBwcm9wcykge1xuICAgICAgbGV0IGZpZWxkID0gZmllbGRzW3Byb3BdO1xuICAgICAgbGV0IGV4aXN0cyA9IGhhcyh2YWx1ZSwgcHJvcCk7XG5cbiAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICBsZXQgZmllbGRWYWx1ZTtcbiAgICAgICAgbGV0IGlucHV0VmFsdWUgPSB2YWx1ZVtwcm9wXTsgLy8gc2FmZSB0byBtdXRhdGUgc2luY2UgdGhpcyBpcyBmaXJlZCBpbiBzZXF1ZW5jZVxuXG4gICAgICAgIGlubmVyT3B0aW9ucy5wYXRoID0gKG9wdGlvbnMucGF0aCA/IGAke29wdGlvbnMucGF0aH0uYCA6ICcnKSArIHByb3A7IC8vIGlubmVyT3B0aW9ucy52YWx1ZSA9IHZhbHVlW3Byb3BdO1xuXG4gICAgICAgIGZpZWxkID0gZmllbGQucmVzb2x2ZSh7XG4gICAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgICAgY29udGV4dDogb3B0aW9ucy5jb250ZXh0LFxuICAgICAgICAgIHBhcmVudDogaW50ZXJtZWRpYXRlVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBmaWVsZFNwZWMgPSAnc3BlYycgaW4gZmllbGQgPyBmaWVsZC5zcGVjIDogdW5kZWZpbmVkO1xuICAgICAgICBsZXQgc3RyaWN0ID0gZmllbGRTcGVjID09IG51bGwgPyB2b2lkIDAgOiBmaWVsZFNwZWMuc3RyaWN0O1xuXG4gICAgICAgIGlmIChmaWVsZFNwZWMgPT0gbnVsbCA/IHZvaWQgMCA6IGZpZWxkU3BlYy5zdHJpcCkge1xuICAgICAgICAgIGlzQ2hhbmdlZCA9IGlzQ2hhbmdlZCB8fCBwcm9wIGluIHZhbHVlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZmllbGRWYWx1ZSA9ICFvcHRpb25zLl9fdmFsaWRhdGluZyB8fCAhc3RyaWN0ID8gLy8gVE9ETzogdXNlIF9jYXN0LCB0aGlzIGlzIGRvdWJsZSByZXNvbHZpbmdcbiAgICAgICAgZmllbGQuY2FzdCh2YWx1ZVtwcm9wXSwgaW5uZXJPcHRpb25zKSA6IHZhbHVlW3Byb3BdO1xuXG4gICAgICAgIGlmIChmaWVsZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWYWx1ZVtwcm9wXSA9IGZpZWxkVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZXhpc3RzICYmICFzdHJpcCkge1xuICAgICAgICBpbnRlcm1lZGlhdGVWYWx1ZVtwcm9wXSA9IHZhbHVlW3Byb3BdO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW50ZXJtZWRpYXRlVmFsdWVbcHJvcF0gIT09IHZhbHVlW3Byb3BdKSB7XG4gICAgICAgIGlzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzQ2hhbmdlZCA/IGludGVybWVkaWF0ZVZhbHVlIDogdmFsdWU7XG4gIH1cblxuICBfdmFsaWRhdGUoX3ZhbHVlLCBvcHRzID0ge30sIGNhbGxiYWNrKSB7XG4gICAgbGV0IGVycm9ycyA9IFtdO1xuICAgIGxldCB7XG4gICAgICBzeW5jLFxuICAgICAgZnJvbSA9IFtdLFxuICAgICAgb3JpZ2luYWxWYWx1ZSA9IF92YWx1ZSxcbiAgICAgIGFib3J0RWFybHkgPSB0aGlzLnNwZWMuYWJvcnRFYXJseSxcbiAgICAgIHJlY3Vyc2l2ZSA9IHRoaXMuc3BlYy5yZWN1cnNpdmVcbiAgICB9ID0gb3B0cztcbiAgICBmcm9tID0gW3tcbiAgICAgIHNjaGVtYTogdGhpcyxcbiAgICAgIHZhbHVlOiBvcmlnaW5hbFZhbHVlXG4gICAgfSwgLi4uZnJvbV07IC8vIHRoaXMgZmxhZyBpcyBuZWVkZWQgZm9yIGhhbmRsaW5nIGBzdHJpY3RgIGNvcnJlY3RseSBpbiB0aGUgY29udGV4dCBvZlxuICAgIC8vIHZhbGlkYXRpb24gdnMganVzdCBjYXN0aW5nLiBlLmcgc3RyaWN0KCkgb24gYSBmaWVsZCBpcyBvbmx5IHVzZWQgd2hlbiB2YWxpZGF0aW5nXG5cbiAgICBvcHRzLl9fdmFsaWRhdGluZyA9IHRydWU7XG4gICAgb3B0cy5vcmlnaW5hbFZhbHVlID0gb3JpZ2luYWxWYWx1ZTtcbiAgICBvcHRzLmZyb20gPSBmcm9tO1xuXG4gICAgc3VwZXIuX3ZhbGlkYXRlKF92YWx1ZSwgb3B0cywgKGVyciwgdmFsdWUpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgaWYgKCFWYWxpZGF0aW9uRXJyb3IuaXNFcnJvcihlcnIpIHx8IGFib3J0RWFybHkpIHtcbiAgICAgICAgICByZXR1cm4gdm9pZCBjYWxsYmFjayhlcnIsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVjdXJzaXZlIHx8ICFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3JzWzBdIHx8IG51bGwsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5hbFZhbHVlID0gb3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcblxuICAgICAgbGV0IHRlc3RzID0gdGhpcy5fbm9kZXMubWFwKGtleSA9PiAoXywgY2IpID0+IHtcbiAgICAgICAgbGV0IHBhdGggPSBrZXkuaW5kZXhPZignLicpID09PSAtMSA/IChvcHRzLnBhdGggPyBgJHtvcHRzLnBhdGh9LmAgOiAnJykgKyBrZXkgOiBgJHtvcHRzLnBhdGggfHwgJyd9W1wiJHtrZXl9XCJdYDtcbiAgICAgICAgbGV0IGZpZWxkID0gdGhpcy5maWVsZHNba2V5XTtcblxuICAgICAgICBpZiAoZmllbGQgJiYgJ3ZhbGlkYXRlJyBpbiBmaWVsZCkge1xuICAgICAgICAgIGZpZWxkLnZhbGlkYXRlKHZhbHVlW2tleV0sIF9leHRlbmRzKHt9LCBvcHRzLCB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgZnJvbSxcbiAgICAgICAgICAgIC8vIGlubmVyIGZpZWxkcyBhcmUgYWx3YXlzIHN0cmljdDpcbiAgICAgICAgICAgIC8vIDEuIHRoaXMgaXNuJ3Qgc3RyaWN0IHNvIHRoZSBjYXN0aW5nIHdpbGwgYWxzbyBoYXZlIGNhc3QgaW5uZXIgdmFsdWVzXG4gICAgICAgICAgICAvLyAyLiB0aGlzIGlzIHN0cmljdCBpbiB3aGljaCBjYXNlIHRoZSBuZXN0ZWQgdmFsdWVzIHdlcmVuJ3QgY2FzdCBlaXRoZXJcbiAgICAgICAgICAgIHN0cmljdDogdHJ1ZSxcbiAgICAgICAgICAgIHBhcmVudDogdmFsdWUsXG4gICAgICAgICAgICBvcmlnaW5hbFZhbHVlOiBvcmlnaW5hbFZhbHVlW2tleV1cbiAgICAgICAgICB9KSwgY2IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNiKG51bGwpO1xuICAgICAgfSk7XG5cbiAgICAgIHJ1blRlc3RzKHtcbiAgICAgICAgc3luYyxcbiAgICAgICAgdGVzdHMsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBlcnJvcnMsXG4gICAgICAgIGVuZEVhcmx5OiBhYm9ydEVhcmx5LFxuICAgICAgICBzb3J0OiB0aGlzLl9zb3J0RXJyb3JzLFxuICAgICAgICBwYXRoOiBvcHRzLnBhdGhcbiAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb25lKHNwZWMpIHtcbiAgICBjb25zdCBuZXh0ID0gc3VwZXIuY2xvbmUoc3BlYyk7XG4gICAgbmV4dC5maWVsZHMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5maWVsZHMpO1xuICAgIG5leHQuX25vZGVzID0gdGhpcy5fbm9kZXM7XG4gICAgbmV4dC5fZXhjbHVkZWRFZGdlcyA9IHRoaXMuX2V4Y2x1ZGVkRWRnZXM7XG4gICAgbmV4dC5fc29ydEVycm9ycyA9IHRoaXMuX3NvcnRFcnJvcnM7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cblxuICBjb25jYXQoc2NoZW1hKSB7XG4gICAgbGV0IG5leHQgPSBzdXBlci5jb25jYXQoc2NoZW1hKTtcbiAgICBsZXQgbmV4dEZpZWxkcyA9IG5leHQuZmllbGRzO1xuXG4gICAgZm9yIChsZXQgW2ZpZWxkLCBzY2hlbWFPclJlZl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5maWVsZHMpKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBuZXh0RmllbGRzW2ZpZWxkXTtcblxuICAgICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5leHRGaWVsZHNbZmllbGRdID0gc2NoZW1hT3JSZWY7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEJhc2VTY2hlbWEgJiYgc2NoZW1hT3JSZWYgaW5zdGFuY2VvZiBCYXNlU2NoZW1hKSB7XG4gICAgICAgIG5leHRGaWVsZHNbZmllbGRdID0gc2NoZW1hT3JSZWYuY29uY2F0KHRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQud2l0aE11dGF0aW9uKCgpID0+IG5leHQuc2hhcGUobmV4dEZpZWxkcywgdGhpcy5fZXhjbHVkZWRFZGdlcykpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdEZyb21TaGFwZSgpIHtcbiAgICBsZXQgZGZ0ID0ge307XG5cbiAgICB0aGlzLl9ub2Rlcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGRzW2tleV07XG4gICAgICBkZnRba2V5XSA9ICdkZWZhdWx0JyBpbiBmaWVsZCA/IGZpZWxkLmdldERlZmF1bHQoKSA6IHVuZGVmaW5lZDtcbiAgICB9KTtcblxuICAgIHJldHVybiBkZnQ7XG4gIH1cblxuICBfZ2V0RGVmYXVsdCgpIHtcbiAgICBpZiAoJ2RlZmF1bHQnIGluIHRoaXMuc3BlYykge1xuICAgICAgcmV0dXJuIHN1cGVyLl9nZXREZWZhdWx0KCk7XG4gICAgfSAvLyBpZiB0aGVyZSBpcyBubyBkZWZhdWx0IHNldCBpbnZlbnQgb25lXG5cblxuICAgIGlmICghdGhpcy5fbm9kZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRGcm9tU2hhcGUoKTtcbiAgfVxuXG4gIHNoYXBlKGFkZGl0aW9ucywgZXhjbHVkZXMgPSBbXSkge1xuICAgIGxldCBuZXh0ID0gdGhpcy5jbG9uZSgpO1xuICAgIGxldCBmaWVsZHMgPSBPYmplY3QuYXNzaWduKG5leHQuZmllbGRzLCBhZGRpdGlvbnMpO1xuICAgIG5leHQuZmllbGRzID0gZmllbGRzO1xuICAgIG5leHQuX3NvcnRFcnJvcnMgPSBzb3J0QnlLZXlPcmRlcihPYmplY3Qua2V5cyhmaWVsZHMpKTtcblxuICAgIGlmIChleGNsdWRlcy5sZW5ndGgpIHtcbiAgICAgIC8vIHRoaXMgaXMgYSBjb252ZW5pZW5jZSBmb3Igd2hlbiB1c2VycyBvbmx5IHN1cHBseSBhIHNpbmdsZSBwYWlyXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhjbHVkZXNbMF0pKSBleGNsdWRlcyA9IFtleGNsdWRlc107XG4gICAgICBuZXh0Ll9leGNsdWRlZEVkZ2VzID0gWy4uLm5leHQuX2V4Y2x1ZGVkRWRnZXMsIC4uLmV4Y2x1ZGVzXTtcbiAgICB9XG5cbiAgICBuZXh0Ll9ub2RlcyA9IHNvcnRGaWVsZHMoZmllbGRzLCBuZXh0Ll9leGNsdWRlZEVkZ2VzKTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuXG4gIHBpY2soa2V5cykge1xuICAgIGNvbnN0IHBpY2tlZCA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgaWYgKHRoaXMuZmllbGRzW2tleV0pIHBpY2tlZFtrZXldID0gdGhpcy5maWVsZHNba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jbG9uZSgpLndpdGhNdXRhdGlvbihuZXh0ID0+IHtcbiAgICAgIG5leHQuZmllbGRzID0ge307XG4gICAgICByZXR1cm4gbmV4dC5zaGFwZShwaWNrZWQpO1xuICAgIH0pO1xuICB9XG5cbiAgb21pdChrZXlzKSB7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuY2xvbmUoKTtcbiAgICBjb25zdCBmaWVsZHMgPSBuZXh0LmZpZWxkcztcbiAgICBuZXh0LmZpZWxkcyA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgZGVsZXRlIGZpZWxkc1trZXldO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LndpdGhNdXRhdGlvbigoKSA9PiBuZXh0LnNoYXBlKGZpZWxkcykpO1xuICB9XG5cbiAgZnJvbShmcm9tLCB0bywgYWxpYXMpIHtcbiAgICBsZXQgZnJvbUdldHRlciA9IGdldHRlcihmcm9tLCB0cnVlKTtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0ob2JqID0+IHtcbiAgICAgIGlmIChvYmogPT0gbnVsbCkgcmV0dXJuIG9iajtcbiAgICAgIGxldCBuZXdPYmogPSBvYmo7XG5cbiAgICAgIGlmIChoYXMob2JqLCBmcm9tKSkge1xuICAgICAgICBuZXdPYmogPSBfZXh0ZW5kcyh7fSwgb2JqKTtcbiAgICAgICAgaWYgKCFhbGlhcykgZGVsZXRlIG5ld09ialtmcm9tXTtcbiAgICAgICAgbmV3T2JqW3RvXSA9IGZyb21HZXR0ZXIob2JqKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld09iajtcbiAgICB9KTtcbiAgfVxuXG4gIG5vVW5rbm93bihub0FsbG93ID0gdHJ1ZSwgbWVzc2FnZSA9IGxvY2FsZS5ub1Vua25vd24pIHtcbiAgICBpZiAodHlwZW9mIG5vQWxsb3cgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtZXNzYWdlID0gbm9BbGxvdztcbiAgICAgIG5vQWxsb3cgPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCBuZXh0ID0gdGhpcy50ZXN0KHtcbiAgICAgIG5hbWU6ICdub1Vua25vd24nLFxuICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSxcblxuICAgICAgdGVzdCh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGNvbnN0IHVua25vd25LZXlzID0gdW5rbm93bih0aGlzLnNjaGVtYSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gIW5vQWxsb3cgfHwgdW5rbm93bktleXMubGVuZ3RoID09PSAwIHx8IHRoaXMuY3JlYXRlRXJyb3Ioe1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdW5rbm93bjogdW5rbm93bktleXMuam9pbignLCAnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgICBuZXh0LnNwZWMubm9Vbmtub3duID0gbm9BbGxvdztcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuXG4gIHVua25vd24oYWxsb3cgPSB0cnVlLCBtZXNzYWdlID0gbG9jYWxlLm5vVW5rbm93bikge1xuICAgIHJldHVybiB0aGlzLm5vVW5rbm93bighYWxsb3csIG1lc3NhZ2UpO1xuICB9XG5cbiAgdHJhbnNmb3JtS2V5cyhmbikge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybShvYmogPT4gb2JqICYmIG1hcEtleXMob2JqLCAoXywga2V5KSA9PiBmbihrZXkpKSk7XG4gIH1cblxuICBjYW1lbENhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtS2V5cyhjYW1lbENhc2UpO1xuICB9XG5cbiAgc25ha2VDYXNlKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUtleXMoc25ha2VDYXNlKTtcbiAgfVxuXG4gIGNvbnN0YW50Q2FzZSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1LZXlzKGtleSA9PiBzbmFrZUNhc2Uoa2V5KS50b1VwcGVyQ2FzZSgpKTtcbiAgfVxuXG4gIGRlc2NyaWJlKCkge1xuICAgIGxldCBiYXNlID0gc3VwZXIuZGVzY3JpYmUoKTtcbiAgICBiYXNlLmZpZWxkcyA9IG1hcFZhbHVlcyh0aGlzLmZpZWxkcywgdmFsdWUgPT4gdmFsdWUuZGVzY3JpYmUoKSk7XG4gICAgcmV0dXJuIGJhc2U7XG4gIH1cblxufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZShzcGVjKSB7XG4gIHJldHVybiBuZXcgT2JqZWN0U2NoZW1hKHNwZWMpO1xufVxuY3JlYXRlLnByb3RvdHlwZSA9IE9iamVjdFNjaGVtYS5wcm90b3R5cGU7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGNsb25lRGVlcCBmcm9tICduYW5vY2xvbmUnO1xuaW1wb3J0IHsgbWl4ZWQgYXMgbG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUnO1xuaW1wb3J0IENvbmRpdGlvbiBmcm9tICcuL0NvbmRpdGlvbic7XG5pbXBvcnQgcnVuVGVzdHMgZnJvbSAnLi91dGlsL3J1blRlc3RzJztcbmltcG9ydCBjcmVhdGVWYWxpZGF0aW9uIGZyb20gJy4vdXRpbC9jcmVhdGVWYWxpZGF0aW9uJztcbmltcG9ydCBwcmludFZhbHVlIGZyb20gJy4vdXRpbC9wcmludFZhbHVlJztcbmltcG9ydCBSZWYgZnJvbSAnLi9SZWZlcmVuY2UnO1xuaW1wb3J0IHsgZ2V0SW4gfSBmcm9tICcuL3V0aWwvcmVhY2gnO1xuaW1wb3J0IFZhbGlkYXRpb25FcnJvciBmcm9tICcuL1ZhbGlkYXRpb25FcnJvcic7XG5pbXBvcnQgUmVmZXJlbmNlU2V0IGZyb20gJy4vdXRpbC9SZWZlcmVuY2VTZXQnO1xuaW1wb3J0IHRvQXJyYXkgZnJvbSAnLi91dGlsL3RvQXJyYXknOyAvLyBjb25zdCBVTlNFVCA9ICd1bnNldCcgYXMgY29uc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VTY2hlbWEge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5kZXBzID0gW107XG4gICAgdGhpcy50ZXN0cyA9IHZvaWQgMDtcbiAgICB0aGlzLnRyYW5zZm9ybXMgPSB2b2lkIDA7XG4gICAgdGhpcy5jb25kaXRpb25zID0gW107XG4gICAgdGhpcy5fbXV0YXRlID0gdm9pZCAwO1xuICAgIHRoaXMuX3R5cGVFcnJvciA9IHZvaWQgMDtcbiAgICB0aGlzLl93aGl0ZWxpc3QgPSBuZXcgUmVmZXJlbmNlU2V0KCk7XG4gICAgdGhpcy5fYmxhY2tsaXN0ID0gbmV3IFJlZmVyZW5jZVNldCgpO1xuICAgIHRoaXMuZXhjbHVzaXZlVGVzdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuc3BlYyA9IHZvaWQgMDtcbiAgICB0aGlzLnRlc3RzID0gW107XG4gICAgdGhpcy50cmFuc2Zvcm1zID0gW107XG4gICAgdGhpcy53aXRoTXV0YXRpb24oKCkgPT4ge1xuICAgICAgdGhpcy50eXBlRXJyb3IobG9jYWxlLm5vdFR5cGUpO1xuICAgIH0pO1xuICAgIHRoaXMudHlwZSA9IChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnR5cGUpIHx8ICdtaXhlZCc7XG4gICAgdGhpcy5zcGVjID0gX2V4dGVuZHMoe1xuICAgICAgc3RyaXA6IGZhbHNlLFxuICAgICAgc3RyaWN0OiBmYWxzZSxcbiAgICAgIGFib3J0RWFybHk6IHRydWUsXG4gICAgICByZWN1cnNpdmU6IHRydWUsXG4gICAgICBudWxsYWJsZTogZmFsc2UsXG4gICAgICBwcmVzZW5jZTogJ29wdGlvbmFsJ1xuICAgIH0sIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuc3BlYyk7XG4gIH0gLy8gVE9ETzogcmVtb3ZlXG5cblxuICBnZXQgX3R5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIF90eXBlQ2hlY2soX3ZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjbG9uZShzcGVjKSB7XG4gICAgaWYgKHRoaXMuX211dGF0ZSkge1xuICAgICAgaWYgKHNwZWMpIE9iamVjdC5hc3NpZ24odGhpcy5zcGVjLCBzcGVjKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gLy8gaWYgdGhlIG5lc3RlZCB2YWx1ZSBpcyBhIHNjaGVtYSB3ZSBjYW4gc2tpcCBjbG9uaW5nLCBzaW5jZVxuICAgIC8vIHRoZXkgYXJlIGFscmVhZHkgaW1tdXRhYmxlXG5cblxuICAgIGNvbnN0IG5leHQgPSBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSk7IC8vIEB0cy1leHBlY3QtZXJyb3IgdGhpcyBpcyByZWFkb25seVxuXG4gICAgbmV4dC50eXBlID0gdGhpcy50eXBlO1xuICAgIG5leHQuX3R5cGVFcnJvciA9IHRoaXMuX3R5cGVFcnJvcjtcbiAgICBuZXh0Ll93aGl0ZWxpc3RFcnJvciA9IHRoaXMuX3doaXRlbGlzdEVycm9yO1xuICAgIG5leHQuX2JsYWNrbGlzdEVycm9yID0gdGhpcy5fYmxhY2tsaXN0RXJyb3I7XG4gICAgbmV4dC5fd2hpdGVsaXN0ID0gdGhpcy5fd2hpdGVsaXN0LmNsb25lKCk7XG4gICAgbmV4dC5fYmxhY2tsaXN0ID0gdGhpcy5fYmxhY2tsaXN0LmNsb25lKCk7XG4gICAgbmV4dC5leGNsdXNpdmVUZXN0cyA9IF9leHRlbmRzKHt9LCB0aGlzLmV4Y2x1c2l2ZVRlc3RzKTsgLy8gQHRzLWV4cGVjdC1lcnJvciB0aGlzIGlzIHJlYWRvbmx5XG5cbiAgICBuZXh0LmRlcHMgPSBbLi4udGhpcy5kZXBzXTtcbiAgICBuZXh0LmNvbmRpdGlvbnMgPSBbLi4udGhpcy5jb25kaXRpb25zXTtcbiAgICBuZXh0LnRlc3RzID0gWy4uLnRoaXMudGVzdHNdO1xuICAgIG5leHQudHJhbnNmb3JtcyA9IFsuLi50aGlzLnRyYW5zZm9ybXNdO1xuICAgIG5leHQuc3BlYyA9IGNsb25lRGVlcChfZXh0ZW5kcyh7fSwgdGhpcy5zcGVjLCBzcGVjKSk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cblxuICBsYWJlbChsYWJlbCkge1xuICAgIGxldCBuZXh0ID0gdGhpcy5jbG9uZSgpO1xuICAgIG5leHQuc3BlYy5sYWJlbCA9IGxhYmVsO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG5cbiAgbWV0YSguLi5hcmdzKSB7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gdGhpcy5zcGVjLm1ldGE7XG4gICAgbGV0IG5leHQgPSB0aGlzLmNsb25lKCk7XG4gICAgbmV4dC5zcGVjLm1ldGEgPSBPYmplY3QuYXNzaWduKG5leHQuc3BlYy5tZXRhIHx8IHt9LCBhcmdzWzBdKTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfSAvLyB3aXRoQ29udGV4dDxUQ29udGV4dCBleHRlbmRzIEFueU9iamVjdD4oKTogQmFzZVNjaGVtYTxcbiAgLy8gICBUQ2FzdCxcbiAgLy8gICBUQ29udGV4dCxcbiAgLy8gICBUT3V0cHV0XG4gIC8vID4ge1xuICAvLyAgIHJldHVybiB0aGlzIGFzIGFueTtcbiAgLy8gfVxuXG5cbiAgd2l0aE11dGF0aW9uKGZuKSB7XG4gICAgbGV0IGJlZm9yZSA9IHRoaXMuX211dGF0ZTtcbiAgICB0aGlzLl9tdXRhdGUgPSB0cnVlO1xuICAgIGxldCByZXN1bHQgPSBmbih0aGlzKTtcbiAgICB0aGlzLl9tdXRhdGUgPSBiZWZvcmU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGNvbmNhdChzY2hlbWEpIHtcbiAgICBpZiAoIXNjaGVtYSB8fCBzY2hlbWEgPT09IHRoaXMpIHJldHVybiB0aGlzO1xuICAgIGlmIChzY2hlbWEudHlwZSAhPT0gdGhpcy50eXBlICYmIHRoaXMudHlwZSAhPT0gJ21peGVkJykgdGhyb3cgbmV3IFR5cGVFcnJvcihgWW91IGNhbm5vdCBcXGBjb25jYXQoKVxcYCBzY2hlbWEncyBvZiBkaWZmZXJlbnQgdHlwZXM6ICR7dGhpcy50eXBlfSBhbmQgJHtzY2hlbWEudHlwZX1gKTtcbiAgICBsZXQgYmFzZSA9IHRoaXM7XG4gICAgbGV0IGNvbWJpbmVkID0gc2NoZW1hLmNsb25lKCk7XG5cbiAgICBjb25zdCBtZXJnZWRTcGVjID0gX2V4dGVuZHMoe30sIGJhc2Uuc3BlYywgY29tYmluZWQuc3BlYyk7IC8vIGlmIChjb21iaW5lZC5zcGVjLm51bGxhYmxlID09PSBVTlNFVClcbiAgICAvLyAgIG1lcmdlZFNwZWMubnVsbGFibGUgPSBiYXNlLnNwZWMubnVsbGFibGU7XG4gICAgLy8gaWYgKGNvbWJpbmVkLnNwZWMucHJlc2VuY2UgPT09IFVOU0VUKVxuICAgIC8vICAgbWVyZ2VkU3BlYy5wcmVzZW5jZSA9IGJhc2Uuc3BlYy5wcmVzZW5jZTtcblxuXG4gICAgY29tYmluZWQuc3BlYyA9IG1lcmdlZFNwZWM7XG4gICAgY29tYmluZWQuX3R5cGVFcnJvciB8fCAoY29tYmluZWQuX3R5cGVFcnJvciA9IGJhc2UuX3R5cGVFcnJvcik7XG4gICAgY29tYmluZWQuX3doaXRlbGlzdEVycm9yIHx8IChjb21iaW5lZC5fd2hpdGVsaXN0RXJyb3IgPSBiYXNlLl93aGl0ZWxpc3RFcnJvcik7XG4gICAgY29tYmluZWQuX2JsYWNrbGlzdEVycm9yIHx8IChjb21iaW5lZC5fYmxhY2tsaXN0RXJyb3IgPSBiYXNlLl9ibGFja2xpc3RFcnJvcik7IC8vIG1hbnVhbGx5IG1lcmdlIHRoZSBibGFja2xpc3Qvd2hpdGVsaXN0ICh0aGUgb3RoZXIgYHNjaGVtYWAgdGFrZXNcbiAgICAvLyBwcmVjZWRlbmNlIGluIGNhc2Ugb2YgY29uZmxpY3RzKVxuXG4gICAgY29tYmluZWQuX3doaXRlbGlzdCA9IGJhc2UuX3doaXRlbGlzdC5tZXJnZShzY2hlbWEuX3doaXRlbGlzdCwgc2NoZW1hLl9ibGFja2xpc3QpO1xuICAgIGNvbWJpbmVkLl9ibGFja2xpc3QgPSBiYXNlLl9ibGFja2xpc3QubWVyZ2Uoc2NoZW1hLl9ibGFja2xpc3QsIHNjaGVtYS5fd2hpdGVsaXN0KTsgLy8gc3RhcnQgd2l0aCB0aGUgY3VycmVudCB0ZXN0c1xuXG4gICAgY29tYmluZWQudGVzdHMgPSBiYXNlLnRlc3RzO1xuICAgIGNvbWJpbmVkLmV4Y2x1c2l2ZVRlc3RzID0gYmFzZS5leGNsdXNpdmVUZXN0czsgLy8gbWFudWFsbHkgYWRkIHRoZSBuZXcgdGVzdHMgdG8gZW5zdXJlXG4gICAgLy8gdGhlIGRlZHVwaW5nIGxvZ2ljIGlzIGNvbnNpc3RlbnRcblxuICAgIGNvbWJpbmVkLndpdGhNdXRhdGlvbihuZXh0ID0+IHtcbiAgICAgIHNjaGVtYS50ZXN0cy5mb3JFYWNoKGZuID0+IHtcbiAgICAgICAgbmV4dC50ZXN0KGZuLk9QVElPTlMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29tYmluZWQudHJhbnNmb3JtcyA9IFsuLi5iYXNlLnRyYW5zZm9ybXMsIC4uLmNvbWJpbmVkLnRyYW5zZm9ybXNdO1xuICAgIHJldHVybiBjb21iaW5lZDtcbiAgfVxuXG4gIGlzVHlwZSh2KSB7XG4gICAgaWYgKHRoaXMuc3BlYy5udWxsYWJsZSAmJiB2ID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5fdHlwZUNoZWNrKHYpO1xuICB9XG5cbiAgcmVzb2x2ZShvcHRpb25zKSB7XG4gICAgbGV0IHNjaGVtYSA9IHRoaXM7XG5cbiAgICBpZiAoc2NoZW1hLmNvbmRpdGlvbnMubGVuZ3RoKSB7XG4gICAgICBsZXQgY29uZGl0aW9ucyA9IHNjaGVtYS5jb25kaXRpb25zO1xuICAgICAgc2NoZW1hID0gc2NoZW1hLmNsb25lKCk7XG4gICAgICBzY2hlbWEuY29uZGl0aW9ucyA9IFtdO1xuICAgICAgc2NoZW1hID0gY29uZGl0aW9ucy5yZWR1Y2UoKHNjaGVtYSwgY29uZGl0aW9uKSA9PiBjb25kaXRpb24ucmVzb2x2ZShzY2hlbWEsIG9wdGlvbnMpLCBzY2hlbWEpO1xuICAgICAgc2NoZW1hID0gc2NoZW1hLnJlc29sdmUob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjaGVtYTtcbiAgfVxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcGFyYW0geyo9fSBvcHRpb25zLnBhcmVudFxuICAgKiBAcGFyYW0geyo9fSBvcHRpb25zLmNvbnRleHRcbiAgICovXG5cblxuICBjYXN0KHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgcmVzb2x2ZWRTY2hlbWEgPSB0aGlzLnJlc29sdmUoX2V4dGVuZHMoe1xuICAgICAgdmFsdWVcbiAgICB9LCBvcHRpb25zKSk7XG5cbiAgICBsZXQgcmVzdWx0ID0gcmVzb2x2ZWRTY2hlbWEuX2Nhc3QodmFsdWUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5hc3NlcnQgIT09IGZhbHNlICYmIHJlc29sdmVkU2NoZW1hLmlzVHlwZShyZXN1bHQpICE9PSB0cnVlKSB7XG4gICAgICBsZXQgZm9ybWF0dGVkVmFsdWUgPSBwcmludFZhbHVlKHZhbHVlKTtcbiAgICAgIGxldCBmb3JtYXR0ZWRSZXN1bHQgPSBwcmludFZhbHVlKHJlc3VsdCk7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgdmFsdWUgb2YgJHtvcHRpb25zLnBhdGggfHwgJ2ZpZWxkJ30gY291bGQgbm90IGJlIGNhc3QgdG8gYSB2YWx1ZSBgICsgYHRoYXQgc2F0aXNmaWVzIHRoZSBzY2hlbWEgdHlwZTogXCIke3Jlc29sdmVkU2NoZW1hLl90eXBlfVwiLiBcXG5cXG5gICsgYGF0dGVtcHRlZCB2YWx1ZTogJHtmb3JtYXR0ZWRWYWx1ZX0gXFxuYCArIChmb3JtYXR0ZWRSZXN1bHQgIT09IGZvcm1hdHRlZFZhbHVlID8gYHJlc3VsdCBvZiBjYXN0OiAke2Zvcm1hdHRlZFJlc3VsdH1gIDogJycpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgX2Nhc3QocmF3VmFsdWUsIF9vcHRpb25zKSB7XG4gICAgbGV0IHZhbHVlID0gcmF3VmFsdWUgPT09IHVuZGVmaW5lZCA/IHJhd1ZhbHVlIDogdGhpcy50cmFuc2Zvcm1zLnJlZHVjZSgodmFsdWUsIGZuKSA9PiBmbi5jYWxsKHRoaXMsIHZhbHVlLCByYXdWYWx1ZSwgdGhpcyksIHJhd1ZhbHVlKTtcblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZ2V0RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIF92YWxpZGF0ZShfdmFsdWUsIG9wdGlvbnMgPSB7fSwgY2IpIHtcbiAgICBsZXQge1xuICAgICAgc3luYyxcbiAgICAgIHBhdGgsXG4gICAgICBmcm9tID0gW10sXG4gICAgICBvcmlnaW5hbFZhbHVlID0gX3ZhbHVlLFxuICAgICAgc3RyaWN0ID0gdGhpcy5zcGVjLnN0cmljdCxcbiAgICAgIGFib3J0RWFybHkgPSB0aGlzLnNwZWMuYWJvcnRFYXJseVxuICAgIH0gPSBvcHRpb25zO1xuICAgIGxldCB2YWx1ZSA9IF92YWx1ZTtcblxuICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAvLyB0aGlzLl92YWxpZGF0aW5nID0gdHJ1ZTtcbiAgICAgIHZhbHVlID0gdGhpcy5fY2FzdCh2YWx1ZSwgX2V4dGVuZHMoe1xuICAgICAgICBhc3NlcnQ6IGZhbHNlXG4gICAgICB9LCBvcHRpb25zKSk7IC8vIHRoaXMuX3ZhbGlkYXRpbmcgPSBmYWxzZTtcbiAgICB9IC8vIHZhbHVlIGlzIGNhc3QsIHdlIGNhbiBjaGVjayBpZiBpdCBtZWV0cyB0eXBlIHJlcXVpcmVtZW50c1xuXG5cbiAgICBsZXQgYXJncyA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgcGF0aCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBvcmlnaW5hbFZhbHVlLFxuICAgICAgc2NoZW1hOiB0aGlzLFxuICAgICAgbGFiZWw6IHRoaXMuc3BlYy5sYWJlbCxcbiAgICAgIHN5bmMsXG4gICAgICBmcm9tXG4gICAgfTtcbiAgICBsZXQgaW5pdGlhbFRlc3RzID0gW107XG4gICAgaWYgKHRoaXMuX3R5cGVFcnJvcikgaW5pdGlhbFRlc3RzLnB1c2godGhpcy5fdHlwZUVycm9yKTtcbiAgICBsZXQgZmluYWxUZXN0cyA9IFtdO1xuICAgIGlmICh0aGlzLl93aGl0ZWxpc3RFcnJvcikgZmluYWxUZXN0cy5wdXNoKHRoaXMuX3doaXRlbGlzdEVycm9yKTtcbiAgICBpZiAodGhpcy5fYmxhY2tsaXN0RXJyb3IpIGZpbmFsVGVzdHMucHVzaCh0aGlzLl9ibGFja2xpc3RFcnJvcik7XG4gICAgcnVuVGVzdHMoe1xuICAgICAgYXJncyxcbiAgICAgIHZhbHVlLFxuICAgICAgcGF0aCxcbiAgICAgIHN5bmMsXG4gICAgICB0ZXN0czogaW5pdGlhbFRlc3RzLFxuICAgICAgZW5kRWFybHk6IGFib3J0RWFybHlcbiAgICB9LCBlcnIgPT4ge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHZvaWQgY2IoZXJyLCB2YWx1ZSk7XG4gICAgICBydW5UZXN0cyh7XG4gICAgICAgIHRlc3RzOiB0aGlzLnRlc3RzLmNvbmNhdChmaW5hbFRlc3RzKSxcbiAgICAgICAgYXJncyxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgc3luYyxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGVuZEVhcmx5OiBhYm9ydEVhcmx5XG4gICAgICB9LCBjYik7XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0ZSh2YWx1ZSwgb3B0aW9ucywgbWF5YmVDYikge1xuICAgIGxldCBzY2hlbWEgPSB0aGlzLnJlc29sdmUoX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIHZhbHVlXG4gICAgfSkpOyAvLyBjYWxsYmFjayBjYXNlIGlzIGZvciBuZXN0ZWQgdmFsaWRhdGlvbnNcblxuICAgIHJldHVybiB0eXBlb2YgbWF5YmVDYiA9PT0gJ2Z1bmN0aW9uJyA/IHNjaGVtYS5fdmFsaWRhdGUodmFsdWUsIG9wdGlvbnMsIG1heWJlQ2IpIDogbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gc2NoZW1hLl92YWxpZGF0ZSh2YWx1ZSwgb3B0aW9ucywgKGVyciwgdmFsdWUpID0+IHtcbiAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO2Vsc2UgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSkpO1xuICB9XG5cbiAgdmFsaWRhdGVTeW5jKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgbGV0IHNjaGVtYSA9IHRoaXMucmVzb2x2ZShfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgdmFsdWVcbiAgICB9KSk7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIHNjaGVtYS5fdmFsaWRhdGUodmFsdWUsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBzeW5jOiB0cnVlXG4gICAgfSksIChlcnIsIHZhbHVlKSA9PiB7XG4gICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpc1ZhbGlkKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGUodmFsdWUsIG9wdGlvbnMpLnRoZW4oKCkgPT4gdHJ1ZSwgZXJyID0+IHtcbiAgICAgIGlmIChWYWxpZGF0aW9uRXJyb3IuaXNFcnJvcihlcnIpKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG4gIH1cblxuICBpc1ZhbGlkU3luYyh2YWx1ZSwgb3B0aW9ucykge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnZhbGlkYXRlU3luYyh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChWYWxpZGF0aW9uRXJyb3IuaXNFcnJvcihlcnIpKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG5cbiAgX2dldERlZmF1bHQoKSB7XG4gICAgbGV0IGRlZmF1bHRWYWx1ZSA9IHRoaXMuc3BlYy5kZWZhdWx0O1xuXG4gICAgaWYgKGRlZmF1bHRWYWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdFZhbHVlLmNhbGwodGhpcykgOiBjbG9uZURlZXAoZGVmYXVsdFZhbHVlKTtcbiAgfVxuXG4gIGdldERlZmF1bHQob3B0aW9ucykge1xuICAgIGxldCBzY2hlbWEgPSB0aGlzLnJlc29sdmUob3B0aW9ucyB8fCB7fSk7XG4gICAgcmV0dXJuIHNjaGVtYS5fZ2V0RGVmYXVsdCgpO1xuICB9XG5cbiAgZGVmYXVsdChkZWYpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBsZXQgbmV4dCA9IHRoaXMuY2xvbmUoe1xuICAgICAgZGVmYXVsdDogZGVmXG4gICAgfSk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cblxuICBzdHJpY3QoaXNTdHJpY3QgPSB0cnVlKSB7XG4gICAgbGV0IG5leHQgPSB0aGlzLmNsb25lKCk7XG4gICAgbmV4dC5zcGVjLnN0cmljdCA9IGlzU3RyaWN0O1xuICAgIHJldHVybiBuZXh0O1xuICB9XG5cbiAgX2lzUHJlc2VudCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsO1xuICB9XG5cbiAgZGVmaW5lZChtZXNzYWdlID0gbG9jYWxlLmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnZGVmaW5lZCcsXG4gICAgICBleGNsdXNpdmU6IHRydWUsXG5cbiAgICAgIHRlc3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIHJlcXVpcmVkKG1lc3NhZ2UgPSBsb2NhbGUucmVxdWlyZWQpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSh7XG4gICAgICBwcmVzZW5jZTogJ3JlcXVpcmVkJ1xuICAgIH0pLndpdGhNdXRhdGlvbihzID0+IHMudGVzdCh7XG4gICAgICBtZXNzYWdlLFxuICAgICAgbmFtZTogJ3JlcXVpcmVkJyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcblxuICAgICAgdGVzdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY2hlbWEuX2lzUHJlc2VudCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICB9KSk7XG4gIH1cblxuICBub3RSZXF1aXJlZCgpIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuY2xvbmUoe1xuICAgICAgcHJlc2VuY2U6ICdvcHRpb25hbCdcbiAgICB9KTtcbiAgICBuZXh0LnRlc3RzID0gbmV4dC50ZXN0cy5maWx0ZXIodGVzdCA9PiB0ZXN0Lk9QVElPTlMubmFtZSAhPT0gJ3JlcXVpcmVkJyk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cblxuICBudWxsYWJsZShpc051bGxhYmxlID0gdHJ1ZSkge1xuICAgIGxldCBuZXh0ID0gdGhpcy5jbG9uZSh7XG4gICAgICBudWxsYWJsZTogaXNOdWxsYWJsZSAhPT0gZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuXG4gIHRyYW5zZm9ybShmbikge1xuICAgIGxldCBuZXh0ID0gdGhpcy5jbG9uZSgpO1xuICAgIG5leHQudHJhbnNmb3Jtcy5wdXNoKGZuKTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIHRlc3QgZnVuY3Rpb24gdG8gdGhlIHNjaGVtYSdzIHF1ZXVlIG9mIHRlc3RzLlxuICAgKiB0ZXN0cyBjYW4gYmUgZXhjbHVzaXZlIG9yIG5vbi1leGNsdXNpdmUuXG4gICAqXG4gICAqIC0gZXhjbHVzaXZlIHRlc3RzLCB3aWxsIHJlcGxhY2UgYW55IGV4aXN0aW5nIHRlc3RzIG9mIHRoZSBzYW1lIG5hbWUuXG4gICAqIC0gbm9uLWV4Y2x1c2l2ZTogY2FuIGJlIHN0YWNrZWRcbiAgICpcbiAgICogSWYgYSBub24tZXhjbHVzaXZlIHRlc3QgaXMgYWRkZWQgdG8gYSBzY2hlbWEgd2l0aCBhbiBleGNsdXNpdmUgdGVzdCBvZiB0aGUgc2FtZSBuYW1lXG4gICAqIHRoZSBleGNsdXNpdmUgdGVzdCBpcyByZW1vdmVkIGFuZCBmdXJ0aGVyIHRlc3RzIG9mIHRoZSBzYW1lIG5hbWUgd2lsbCBiZSBzdGFja2VkLlxuICAgKlxuICAgKiBJZiBhbiBleGNsdXNpdmUgdGVzdCBpcyBhZGRlZCB0byBhIHNjaGVtYSB3aXRoIG5vbi1leGNsdXNpdmUgdGVzdHMgb2YgdGhlIHNhbWUgbmFtZVxuICAgKiB0aGUgcHJldmlvdXMgdGVzdHMgYXJlIHJlbW92ZWQgYW5kIGZ1cnRoZXIgdGVzdHMgb2YgdGhlIHNhbWUgbmFtZSB3aWxsIHJlcGxhY2UgZWFjaCBvdGhlci5cbiAgICovXG5cblxuICB0ZXN0KC4uLmFyZ3MpIHtcbiAgICBsZXQgb3B0cztcblxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9wdHMgPSB7XG4gICAgICAgICAgdGVzdDogYXJnc1swXVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0cyA9IGFyZ3NbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuICAgICAgb3B0cyA9IHtcbiAgICAgICAgbmFtZTogYXJnc1swXSxcbiAgICAgICAgdGVzdDogYXJnc1sxXVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0cyA9IHtcbiAgICAgICAgbmFtZTogYXJnc1swXSxcbiAgICAgICAgbWVzc2FnZTogYXJnc1sxXSxcbiAgICAgICAgdGVzdDogYXJnc1syXVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5tZXNzYWdlID09PSB1bmRlZmluZWQpIG9wdHMubWVzc2FnZSA9IGxvY2FsZS5kZWZhdWx0O1xuICAgIGlmICh0eXBlb2Ygb3B0cy50ZXN0ICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdgdGVzdGAgaXMgYSByZXF1aXJlZCBwYXJhbWV0ZXJzJyk7XG4gICAgbGV0IG5leHQgPSB0aGlzLmNsb25lKCk7XG4gICAgbGV0IHZhbGlkYXRlID0gY3JlYXRlVmFsaWRhdGlvbihvcHRzKTtcbiAgICBsZXQgaXNFeGNsdXNpdmUgPSBvcHRzLmV4Y2x1c2l2ZSB8fCBvcHRzLm5hbWUgJiYgbmV4dC5leGNsdXNpdmVUZXN0c1tvcHRzLm5hbWVdID09PSB0cnVlO1xuXG4gICAgaWYgKG9wdHMuZXhjbHVzaXZlKSB7XG4gICAgICBpZiAoIW9wdHMubmFtZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhjbHVzaXZlIHRlc3RzIG11c3QgcHJvdmlkZSBhIHVuaXF1ZSBgbmFtZWAgaWRlbnRpZnlpbmcgdGhlIHRlc3QnKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5uYW1lKSBuZXh0LmV4Y2x1c2l2ZVRlc3RzW29wdHMubmFtZV0gPSAhIW9wdHMuZXhjbHVzaXZlO1xuICAgIG5leHQudGVzdHMgPSBuZXh0LnRlc3RzLmZpbHRlcihmbiA9PiB7XG4gICAgICBpZiAoZm4uT1BUSU9OUy5uYW1lID09PSBvcHRzLm5hbWUpIHtcbiAgICAgICAgaWYgKGlzRXhjbHVzaXZlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChmbi5PUFRJT05TLnRlc3QgPT09IHZhbGlkYXRlLk9QVElPTlMudGVzdCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBuZXh0LnRlc3RzLnB1c2godmFsaWRhdGUpO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG5cbiAgd2hlbihrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGtleXMpICYmIHR5cGVvZiBrZXlzICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9ucyA9IGtleXM7XG4gICAgICBrZXlzID0gJy4nO1xuICAgIH1cblxuICAgIGxldCBuZXh0ID0gdGhpcy5jbG9uZSgpO1xuICAgIGxldCBkZXBzID0gdG9BcnJheShrZXlzKS5tYXAoa2V5ID0+IG5ldyBSZWYoa2V5KSk7XG4gICAgZGVwcy5mb3JFYWNoKGRlcCA9PiB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpZiAoZGVwLmlzU2libGluZykgbmV4dC5kZXBzLnB1c2goZGVwLmtleSk7XG4gICAgfSk7XG4gICAgbmV4dC5jb25kaXRpb25zLnB1c2gobmV3IENvbmRpdGlvbihkZXBzLCBvcHRpb25zKSk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cblxuICB0eXBlRXJyb3IobWVzc2FnZSkge1xuICAgIGxldCBuZXh0ID0gdGhpcy5jbG9uZSgpO1xuICAgIG5leHQuX3R5cGVFcnJvciA9IGNyZWF0ZVZhbGlkYXRpb24oe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIG5hbWU6ICd0eXBlRXJyb3InLFxuXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmICF0aGlzLnNjaGVtYS5pc1R5cGUodmFsdWUpKSByZXR1cm4gdGhpcy5jcmVhdGVFcnJvcih7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICB0eXBlOiB0aGlzLnNjaGVtYS5fdHlwZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgfSk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cblxuICBvbmVPZihlbnVtcywgbWVzc2FnZSA9IGxvY2FsZS5vbmVPZikge1xuICAgIGxldCBuZXh0ID0gdGhpcy5jbG9uZSgpO1xuICAgIGVudW1zLmZvckVhY2godmFsID0+IHtcbiAgICAgIG5leHQuX3doaXRlbGlzdC5hZGQodmFsKTtcblxuICAgICAgbmV4dC5fYmxhY2tsaXN0LmRlbGV0ZSh2YWwpO1xuICAgIH0pO1xuICAgIG5leHQuX3doaXRlbGlzdEVycm9yID0gY3JlYXRlVmFsaWRhdGlvbih7XG4gICAgICBtZXNzYWdlLFxuICAgICAgbmFtZTogJ29uZU9mJyxcblxuICAgICAgdGVzdCh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGxldCB2YWxpZHMgPSB0aGlzLnNjaGVtYS5fd2hpdGVsaXN0O1xuICAgICAgICBsZXQgcmVzb2x2ZWQgPSB2YWxpZHMucmVzb2x2ZUFsbCh0aGlzLnJlc29sdmUpO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQuaW5jbHVkZXModmFsdWUpID8gdHJ1ZSA6IHRoaXMuY3JlYXRlRXJyb3Ioe1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdmFsdWVzOiB2YWxpZHMudG9BcnJheSgpLmpvaW4oJywgJyksXG4gICAgICAgICAgICByZXNvbHZlZFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuXG4gIG5vdE9uZU9mKGVudW1zLCBtZXNzYWdlID0gbG9jYWxlLm5vdE9uZU9mKSB7XG4gICAgbGV0IG5leHQgPSB0aGlzLmNsb25lKCk7XG4gICAgZW51bXMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgbmV4dC5fYmxhY2tsaXN0LmFkZCh2YWwpO1xuXG4gICAgICBuZXh0Ll93aGl0ZWxpc3QuZGVsZXRlKHZhbCk7XG4gICAgfSk7XG4gICAgbmV4dC5fYmxhY2tsaXN0RXJyb3IgPSBjcmVhdGVWYWxpZGF0aW9uKHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnbm90T25lT2YnLFxuXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIGxldCBpbnZhbGlkcyA9IHRoaXMuc2NoZW1hLl9ibGFja2xpc3Q7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IGludmFsaWRzLnJlc29sdmVBbGwodGhpcy5yZXNvbHZlKTtcbiAgICAgICAgaWYgKHJlc29sdmVkLmluY2x1ZGVzKHZhbHVlKSkgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3Ioe1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdmFsdWVzOiBpbnZhbGlkcy50b0FycmF5KCkuam9pbignLCAnKSxcbiAgICAgICAgICAgIHJlc29sdmVkXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuXG4gIHN0cmlwKHN0cmlwID0gdHJ1ZSkge1xuICAgIGxldCBuZXh0ID0gdGhpcy5jbG9uZSgpO1xuICAgIG5leHQuc3BlYy5zdHJpcCA9IHN0cmlwO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG5cbiAgZGVzY3JpYmUoKSB7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuY2xvbmUoKTtcbiAgICBjb25zdCB7XG4gICAgICBsYWJlbCxcbiAgICAgIG1ldGFcbiAgICB9ID0gbmV4dC5zcGVjO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0ge1xuICAgICAgbWV0YSxcbiAgICAgIGxhYmVsLFxuICAgICAgdHlwZTogbmV4dC50eXBlLFxuICAgICAgb25lT2Y6IG5leHQuX3doaXRlbGlzdC5kZXNjcmliZSgpLFxuICAgICAgbm90T25lT2Y6IG5leHQuX2JsYWNrbGlzdC5kZXNjcmliZSgpLFxuICAgICAgdGVzdHM6IG5leHQudGVzdHMubWFwKGZuID0+ICh7XG4gICAgICAgIG5hbWU6IGZuLk9QVElPTlMubmFtZSxcbiAgICAgICAgcGFyYW1zOiBmbi5PUFRJT05TLnBhcmFtc1xuICAgICAgfSkpLmZpbHRlcigobiwgaWR4LCBsaXN0KSA9PiBsaXN0LmZpbmRJbmRleChjID0+IGMubmFtZSA9PT0gbi5uYW1lKSA9PT0gaWR4KVxuICAgIH07XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICB9XG5cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuXG4vLyBAdHMtZXhwZWN0LWVycm9yXG5CYXNlU2NoZW1hLnByb3RvdHlwZS5fX2lzWXVwU2NoZW1hX18gPSB0cnVlO1xuXG5mb3IgKGNvbnN0IG1ldGhvZCBvZiBbJ3ZhbGlkYXRlJywgJ3ZhbGlkYXRlU3luYyddKSBCYXNlU2NoZW1hLnByb3RvdHlwZVtgJHttZXRob2R9QXRgXSA9IGZ1bmN0aW9uIChwYXRoLCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHtcbiAgICBwYXJlbnQsXG4gICAgcGFyZW50UGF0aCxcbiAgICBzY2hlbWFcbiAgfSA9IGdldEluKHRoaXMsIHBhdGgsIHZhbHVlLCBvcHRpb25zLmNvbnRleHQpO1xuICByZXR1cm4gc2NoZW1hW21ldGhvZF0ocGFyZW50ICYmIHBhcmVudFtwYXJlbnRQYXRoXSwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICBwYXJlbnQsXG4gICAgcGF0aFxuICB9KSk7XG59O1xuXG5mb3IgKGNvbnN0IGFsaWFzIG9mIFsnZXF1YWxzJywgJ2lzJ10pIEJhc2VTY2hlbWEucHJvdG90eXBlW2FsaWFzXSA9IEJhc2VTY2hlbWEucHJvdG90eXBlLm9uZU9mO1xuXG5mb3IgKGNvbnN0IGFsaWFzIG9mIFsnbm90JywgJ25vcGUnXSkgQmFzZVNjaGVtYS5wcm90b3R5cGVbYWxpYXNdID0gQmFzZVNjaGVtYS5wcm90b3R5cGUubm90T25lT2Y7XG5cbkJhc2VTY2hlbWEucHJvdG90eXBlLm9wdGlvbmFsID0gQmFzZVNjaGVtYS5wcm90b3R5cGUubm90UmVxdWlyZWQ7IiwiaW1wb3J0IGxvY2FsZSBmcm9tICcuL2xvY2FsZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRMb2NhbGUoY3VzdG9tKSB7XG4gIE9iamVjdC5rZXlzKGN1c3RvbSkuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgT2JqZWN0LmtleXMoY3VzdG9tW3R5cGVdKS5mb3JFYWNoKG1ldGhvZCA9PiB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBsb2NhbGVbdHlwZV1bbWV0aG9kXSA9IGN1c3RvbVt0eXBlXVttZXRob2RdO1xuICAgIH0pO1xuICB9KTtcbn0iLCJpbXBvcnQgeyBzdHJpbmcgYXMgbG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUnO1xuaW1wb3J0IGlzQWJzZW50IGZyb20gJy4vdXRpbC9pc0Fic2VudCc7XG5pbXBvcnQgQmFzZVNjaGVtYSBmcm9tICcuL3NjaGVtYSc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXG5sZXQgckVtYWlsID0gL14oKChbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKFxcLihbYS16XXxcXGR8WyEjXFwkJSYnXFwqXFwrXFwtXFwvPVxcP1xcXl9ge1xcfH1+XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkrKSopfCgoXFx4MjIpKCgoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oKFtcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmXXxcXHgyMXxbXFx4MjMtXFx4NWJdfFtcXHg1ZC1cXHg3ZV18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfChcXFxcKFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZC1cXHg3Zl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSkpKigoKFxceDIwfFxceDA5KSooXFx4MGRcXHgwYSkpPyhcXHgyMHxcXHgwOSkrKT8oXFx4MjIpKSlAKCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFxcZHxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKVxcLikrKChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KChbYS16XXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpJC9pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxubGV0IHJVcmwgPSAvXigoaHR0cHM/fGZ0cCk6KT9cXC9cXC8oKCgoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KCVbXFxkYS1mXXsyfSl8WyFcXCQmJ1xcKFxcKVxcKlxcKyw7PV18OikqQCk/KCgoXFxkfFsxLTldXFxkfDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNV0pXFwuKFxcZHxbMS05XVxcZHwxXFxkXFxkfDJbMC00XVxcZHwyNVswLTVdKVxcLihcXGR8WzEtOV1cXGR8MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC01XSlcXC4oXFxkfFsxLTldXFxkfDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNV0pKXwoKChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxcXC58X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpXFwuKSsoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxcXC58X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSlcXC4/KSg6XFxkKik/KShcXC8oKChbYS16XXxcXGR8LXxcXC58X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoJVtcXGRhLWZdezJ9KXxbIVxcJCYnXFwoXFwpXFwqXFwrLDs9XXw6fEApKyhcXC8oKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCglW1xcZGEtZl17Mn0pfFshXFwkJidcXChcXClcXCpcXCssOz1dfDp8QCkqKSopPyk/KFxcPygoKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCglW1xcZGEtZl17Mn0pfFshXFwkJidcXChcXClcXCpcXCssOz1dfDp8QCl8W1xcdUUwMDAtXFx1RjhGRl18XFwvfFxcPykqKT8oXFwjKCgoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KCVbXFxkYS1mXXsyfSl8WyFcXCQmJ1xcKFxcKVxcKlxcKyw7PV18OnxAKXxcXC98XFw/KSopPyQvaTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cbmxldCByVVVJRCA9IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTtcblxubGV0IGlzVHJpbW1lZCA9IHZhbHVlID0+IGlzQWJzZW50KHZhbHVlKSB8fCB2YWx1ZSA9PT0gdmFsdWUudHJpbSgpO1xuXG5sZXQgb2JqU3RyaW5nVGFnID0ge30udG9TdHJpbmcoKTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHJldHVybiBuZXcgU3RyaW5nU2NoZW1hKCk7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdTY2hlbWEgZXh0ZW5kcyBCYXNlU2NoZW1hIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9KTtcbiAgICB0aGlzLndpdGhNdXRhdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLnRyYW5zZm9ybShmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUeXBlKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgY29uc3Qgc3RyVmFsdWUgPSB2YWx1ZSAhPSBudWxsICYmIHZhbHVlLnRvU3RyaW5nID8gdmFsdWUudG9TdHJpbmcoKSA6IHZhbHVlO1xuICAgICAgICBpZiAoc3RyVmFsdWUgPT09IG9ialN0cmluZ1RhZykgcmV0dXJuIHZhbHVlO1xuICAgICAgICByZXR1cm4gc3RyVmFsdWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF90eXBlQ2hlY2sodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpIHZhbHVlID0gdmFsdWUudmFsdWVPZigpO1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgX2lzUHJlc2VudCh2YWx1ZSkge1xuICAgIHJldHVybiBzdXBlci5faXNQcmVzZW50KHZhbHVlKSAmJiAhIXZhbHVlLmxlbmd0aDtcbiAgfVxuXG4gIGxlbmd0aChsZW5ndGgsIG1lc3NhZ2UgPSBsb2NhbGUubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVzdCh7XG4gICAgICBtZXNzYWdlLFxuICAgICAgbmFtZTogJ2xlbmd0aCcsXG4gICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbGVuZ3RoXG4gICAgICB9LFxuXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpc0Fic2VudCh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoID09PSB0aGlzLnJlc29sdmUobGVuZ3RoKTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbiAgbWluKG1pbiwgbWVzc2FnZSA9IGxvY2FsZS5taW4pIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnbWluJyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBtaW5cbiAgICAgIH0sXG5cbiAgICAgIHRlc3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlzQWJzZW50KHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPj0gdGhpcy5yZXNvbHZlKG1pbik7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIG1heChtYXgsIG1lc3NhZ2UgPSBsb2NhbGUubWF4KSB7XG4gICAgcmV0dXJuIHRoaXMudGVzdCh7XG4gICAgICBuYW1lOiAnbWF4JyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbWF4XG4gICAgICB9LFxuXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpc0Fic2VudCh2YWx1ZSkgfHwgdmFsdWUubGVuZ3RoIDw9IHRoaXMucmVzb2x2ZShtYXgpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH1cblxuICBtYXRjaGVzKHJlZ2V4LCBvcHRpb25zKSB7XG4gICAgbGV0IGV4Y2x1ZGVFbXB0eVN0cmluZyA9IGZhbHNlO1xuICAgIGxldCBtZXNzYWdlO1xuICAgIGxldCBuYW1lO1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgKHtcbiAgICAgICAgICBleGNsdWRlRW1wdHlTdHJpbmcgPSBmYWxzZSxcbiAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgfSA9IG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVzc2FnZSA9IG9wdGlvbnM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGVzdCh7XG4gICAgICBuYW1lOiBuYW1lIHx8ICdtYXRjaGVzJyxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgbG9jYWxlLm1hdGNoZXMsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcmVnZXhcbiAgICAgIH0sXG4gICAgICB0ZXN0OiB2YWx1ZSA9PiBpc0Fic2VudCh2YWx1ZSkgfHwgdmFsdWUgPT09ICcnICYmIGV4Y2x1ZGVFbXB0eVN0cmluZyB8fCB2YWx1ZS5zZWFyY2gocmVnZXgpICE9PSAtMVxuICAgIH0pO1xuICB9XG5cbiAgZW1haWwobWVzc2FnZSA9IGxvY2FsZS5lbWFpbCkge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMockVtYWlsLCB7XG4gICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIGV4Y2x1ZGVFbXB0eVN0cmluZzogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgdXJsKG1lc3NhZ2UgPSBsb2NhbGUudXJsKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hlcyhyVXJsLCB7XG4gICAgICBuYW1lOiAndXJsJyxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBleGNsdWRlRW1wdHlTdHJpbmc6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHV1aWQobWVzc2FnZSA9IGxvY2FsZS51dWlkKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hlcyhyVVVJRCwge1xuICAgICAgbmFtZTogJ3V1aWQnLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIGV4Y2x1ZGVFbXB0eVN0cmluZzogZmFsc2VcbiAgICB9KTtcbiAgfSAvLy0tIHRyYW5zZm9ybXMgLS1cblxuXG4gIGVuc3VyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0KCcnKS50cmFuc2Zvcm0odmFsID0+IHZhbCA9PT0gbnVsbCA/ICcnIDogdmFsKTtcbiAgfVxuXG4gIHRyaW0obWVzc2FnZSA9IGxvY2FsZS50cmltKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHZhbCA9PiB2YWwgIT0gbnVsbCA/IHZhbC50cmltKCkgOiB2YWwpLnRlc3Qoe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIG5hbWU6ICd0cmltJyxcbiAgICAgIHRlc3Q6IGlzVHJpbW1lZFxuICAgIH0pO1xuICB9XG5cbiAgbG93ZXJjYXNlKG1lc3NhZ2UgPSBsb2NhbGUubG93ZXJjYXNlKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHZhbHVlID0+ICFpc0Fic2VudCh2YWx1ZSkgPyB2YWx1ZS50b0xvd2VyQ2FzZSgpIDogdmFsdWUpLnRlc3Qoe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIG5hbWU6ICdzdHJpbmdfY2FzZScsXG4gICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICB0ZXN0OiB2YWx1ZSA9PiBpc0Fic2VudCh2YWx1ZSkgfHwgdmFsdWUgPT09IHZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICB9KTtcbiAgfVxuXG4gIHVwcGVyY2FzZShtZXNzYWdlID0gbG9jYWxlLnVwcGVyY2FzZSkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh2YWx1ZSA9PiAhaXNBYnNlbnQodmFsdWUpID8gdmFsdWUudG9VcHBlckNhc2UoKSA6IHZhbHVlKS50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnc3RyaW5nX2Nhc2UnLFxuICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgdGVzdDogdmFsdWUgPT4gaXNBYnNlbnQodmFsdWUpIHx8IHZhbHVlID09PSB2YWx1ZS50b1VwcGVyQ2FzZSgpXG4gICAgfSk7XG4gIH1cblxufVxuY3JlYXRlLnByb3RvdHlwZSA9IFN0cmluZ1NjaGVtYS5wcm90b3R5cGU7IC8vXG4vLyBTdHJpbmcgSW50ZXJmYWNlc1xuLy8iLCJpbXBvcnQgUmVmZXJlbmNlIGZyb20gJy4uL1JlZmVyZW5jZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZlcmVuY2VTZXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxpc3QgPSB2b2lkIDA7XG4gICAgdGhpcy5yZWZzID0gdm9pZCAwO1xuICAgIHRoaXMubGlzdCA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLnJlZnMgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saXN0LnNpemUgKyB0aGlzLnJlZnMuc2l6ZTtcbiAgfVxuXG4gIGRlc2NyaWJlKCkge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5saXN0KSBkZXNjcmlwdGlvbi5wdXNoKGl0ZW0pO1xuXG4gICAgZm9yIChjb25zdCBbLCByZWZdIG9mIHRoaXMucmVmcykgZGVzY3JpcHRpb24ucHVzaChyZWYuZGVzY3JpYmUoKSk7XG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH1cblxuICB0b0FycmF5KCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMubGlzdCkuY29uY2F0KEFycmF5LmZyb20odGhpcy5yZWZzLnZhbHVlcygpKSk7XG4gIH1cblxuICByZXNvbHZlQWxsKHJlc29sdmUpIHtcbiAgICByZXR1cm4gdGhpcy50b0FycmF5KCkucmVkdWNlKChhY2MsIGUpID0+IGFjYy5jb25jYXQoUmVmZXJlbmNlLmlzUmVmKGUpID8gcmVzb2x2ZShlKSA6IGUpLCBbXSk7XG4gIH1cblxuICBhZGQodmFsdWUpIHtcbiAgICBSZWZlcmVuY2UuaXNSZWYodmFsdWUpID8gdGhpcy5yZWZzLnNldCh2YWx1ZS5rZXksIHZhbHVlKSA6IHRoaXMubGlzdC5hZGQodmFsdWUpO1xuICB9XG5cbiAgZGVsZXRlKHZhbHVlKSB7XG4gICAgUmVmZXJlbmNlLmlzUmVmKHZhbHVlKSA/IHRoaXMucmVmcy5kZWxldGUodmFsdWUua2V5KSA6IHRoaXMubGlzdC5kZWxldGUodmFsdWUpO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgbmV4dCA9IG5ldyBSZWZlcmVuY2VTZXQoKTtcbiAgICBuZXh0Lmxpc3QgPSBuZXcgU2V0KHRoaXMubGlzdCk7XG4gICAgbmV4dC5yZWZzID0gbmV3IE1hcCh0aGlzLnJlZnMpO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG5cbiAgbWVyZ2UobmV3SXRlbXMsIHJlbW92ZUl0ZW1zKSB7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuY2xvbmUoKTtcbiAgICBuZXdJdGVtcy5saXN0LmZvckVhY2godmFsdWUgPT4gbmV4dC5hZGQodmFsdWUpKTtcbiAgICBuZXdJdGVtcy5yZWZzLmZvckVhY2godmFsdWUgPT4gbmV4dC5hZGQodmFsdWUpKTtcbiAgICByZW1vdmVJdGVtcy5saXN0LmZvckVhY2godmFsdWUgPT4gbmV4dC5kZWxldGUodmFsdWUpKTtcbiAgICByZW1vdmVJdGVtcy5yZWZzLmZvckVhY2godmFsdWUgPT4gbmV4dC5kZWxldGUodmFsdWUpKTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuXG59IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgbWFwVmFsdWVzIGZyb20gJ2xvZGFzaC9tYXBWYWx1ZXMnO1xuaW1wb3J0IFZhbGlkYXRpb25FcnJvciBmcm9tICcuLi9WYWxpZGF0aW9uRXJyb3InO1xuaW1wb3J0IFJlZiBmcm9tICcuLi9SZWZlcmVuY2UnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVmFsaWRhdGlvbihjb25maWcpIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUoX3JlZiwgY2IpIHtcbiAgICBsZXQge1xuICAgICAgdmFsdWUsXG4gICAgICBwYXRoID0gJycsXG4gICAgICBsYWJlbCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBvcmlnaW5hbFZhbHVlLFxuICAgICAgc3luY1xuICAgIH0gPSBfcmVmLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1widmFsdWVcIiwgXCJwYXRoXCIsIFwibGFiZWxcIiwgXCJvcHRpb25zXCIsIFwib3JpZ2luYWxWYWx1ZVwiLCBcInN5bmNcIl0pO1xuXG4gICAgY29uc3Qge1xuICAgICAgbmFtZSxcbiAgICAgIHRlc3QsXG4gICAgICBwYXJhbXMsXG4gICAgICBtZXNzYWdlXG4gICAgfSA9IGNvbmZpZztcbiAgICBsZXQge1xuICAgICAgcGFyZW50LFxuICAgICAgY29udGV4dFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZShpdGVtKSB7XG4gICAgICByZXR1cm4gUmVmLmlzUmVmKGl0ZW0pID8gaXRlbS5nZXRWYWx1ZSh2YWx1ZSwgcGFyZW50LCBjb250ZXh0KSA6IGl0ZW07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRXJyb3Iob3ZlcnJpZGVzID0ge30pIHtcbiAgICAgIGNvbnN0IG5leHRQYXJhbXMgPSBtYXBWYWx1ZXMoX2V4dGVuZHMoe1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb3JpZ2luYWxWYWx1ZSxcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHBhdGg6IG92ZXJyaWRlcy5wYXRoIHx8IHBhdGhcbiAgICAgIH0sIHBhcmFtcywgb3ZlcnJpZGVzLnBhcmFtcyksIHJlc29sdmUpO1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgVmFsaWRhdGlvbkVycm9yKFZhbGlkYXRpb25FcnJvci5mb3JtYXRFcnJvcihvdmVycmlkZXMubWVzc2FnZSB8fCBtZXNzYWdlLCBuZXh0UGFyYW1zKSwgdmFsdWUsIG5leHRQYXJhbXMucGF0aCwgb3ZlcnJpZGVzLnR5cGUgfHwgbmFtZSk7XG4gICAgICBlcnJvci5wYXJhbXMgPSBuZXh0UGFyYW1zO1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGxldCBjdHggPSBfZXh0ZW5kcyh7XG4gICAgICBwYXRoLFxuICAgICAgcGFyZW50LFxuICAgICAgdHlwZTogbmFtZSxcbiAgICAgIGNyZWF0ZUVycm9yLFxuICAgICAgcmVzb2x2ZSxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBvcmlnaW5hbFZhbHVlXG4gICAgfSwgcmVzdCk7XG5cbiAgICBpZiAoIXN5bmMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh0ZXN0LmNhbGwoY3R4LCB2YWx1ZSwgY3R4KSkudGhlbih2YWxpZE9yRXJyb3IgPT4ge1xuICAgICAgICAgIGlmIChWYWxpZGF0aW9uRXJyb3IuaXNFcnJvcih2YWxpZE9yRXJyb3IpKSBjYih2YWxpZE9yRXJyb3IpO2Vsc2UgaWYgKCF2YWxpZE9yRXJyb3IpIGNiKGNyZWF0ZUVycm9yKCkpO2Vsc2UgY2IobnVsbCwgdmFsaWRPckVycm9yKTtcbiAgICAgICAgfSkuY2F0Y2goY2IpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNiKGVycik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBfcmVmMjtcblxuICAgICAgcmVzdWx0ID0gdGVzdC5jYWxsKGN0eCwgdmFsdWUsIGN0eCk7XG5cbiAgICAgIGlmICh0eXBlb2YgKChfcmVmMiA9IHJlc3VsdCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yZWYyLnRoZW4pID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsaWRhdGlvbiB0ZXN0IG9mIHR5cGU6IFwiJHtjdHgudHlwZX1cIiByZXR1cm5lZCBhIFByb21pc2UgZHVyaW5nIGEgc3luY2hyb25vdXMgdmFsaWRhdGUuIGAgKyBgVGhpcyB0ZXN0IHdpbGwgZmluaXNoIGFmdGVyIHRoZSB2YWxpZGF0ZSBjYWxsIGhhcyByZXR1cm5lZGApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY2IoZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoVmFsaWRhdGlvbkVycm9yLmlzRXJyb3IocmVzdWx0KSkgY2IocmVzdWx0KTtlbHNlIGlmICghcmVzdWx0KSBjYihjcmVhdGVFcnJvcigpKTtlbHNlIGNiKG51bGwsIHJlc3VsdCk7XG4gIH1cblxuICB2YWxpZGF0ZS5PUFRJT05TID0gY29uZmlnO1xuICByZXR1cm4gdmFsaWRhdGU7XG59IiwiY29uc3QgaXNBYnNlbnQgPSB2YWx1ZSA9PiB2YWx1ZSA9PSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBpc0Fic2VudDsiLCJjb25zdCBpc1NjaGVtYSA9IG9iaiA9PiBvYmogJiYgb2JqLl9faXNZdXBTY2hlbWFfXztcblxuZXhwb3J0IGRlZmF1bHQgaXNTY2hlbWE7IiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuLyoqXG4gKlxuICogRGF0ZS5wYXJzZSB3aXRoIHByb2dyZXNzaXZlIGVuaGFuY2VtZW50IGZvciBJU08gODYwMSA8aHR0cHM6Ly9naXRodWIuY29tL2Nzbm92ZXIvanMtaXNvODYwMT5cbiAqIE5PTi1DT05GT1JNQU5UIEVESVRJT04uXG4gKiDCqSAyMDExIENvbGluIFNub3ZlciA8aHR0cDovL3pldGFmbGVldC5jb20+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqL1xuLy8gICAgICAgICAgICAgIDEgWVlZWSAgICAgICAgICAgICAgICAgMiBNTSAgICAgICAgMyBERCAgICAgICAgICAgICAgNCBISCAgICAgNSBtbSAgICAgICAgNiBzcyAgICAgICAgICAgIDcgbXNlYyAgICAgICAgIDggWiA5IMKxICAgIDEwIHR6SEggICAgMTEgdHptbVxudmFyIGlzb1JlZyA9IC9eKFxcZHs0fXxbK1xcLV1cXGR7Nn0pKD86LT8oXFxkezJ9KSg/Oi0/KFxcZHsyfSkpPyk/KD86WyBUXT8oXFxkezJ9KTo/KFxcZHsyfSkoPzo6PyhcXGR7Mn0pKD86WyxcXC5dKFxcZHsxLH0pKT8pPyg/OihaKXwoWytcXC1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/KT8pPyQvO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJc29EYXRlKGRhdGUpIHtcbiAgdmFyIG51bWVyaWNLZXlzID0gWzEsIDQsIDUsIDYsIDcsIDEwLCAxMV0sXG4gICAgICBtaW51dGVzT2Zmc2V0ID0gMCxcbiAgICAgIHRpbWVzdGFtcCxcbiAgICAgIHN0cnVjdDtcblxuICBpZiAoc3RydWN0ID0gaXNvUmVnLmV4ZWMoZGF0ZSkpIHtcbiAgICAvLyBhdm9pZCBOYU4gdGltZXN0YW1wcyBjYXVzZWQgYnkg4oCcdW5kZWZpbmVk4oCdIHZhbHVlcyBiZWluZyBwYXNzZWQgdG8gRGF0ZS5VVENcbiAgICBmb3IgKHZhciBpID0gMCwgazsgayA9IG51bWVyaWNLZXlzW2ldOyArK2kpIHN0cnVjdFtrXSA9ICtzdHJ1Y3Rba10gfHwgMDsgLy8gYWxsb3cgdW5kZWZpbmVkIGRheXMgYW5kIG1vbnRoc1xuXG5cbiAgICBzdHJ1Y3RbMl0gPSAoK3N0cnVjdFsyXSB8fCAxKSAtIDE7XG4gICAgc3RydWN0WzNdID0gK3N0cnVjdFszXSB8fCAxOyAvLyBhbGxvdyBhcmJpdHJhcnkgc3ViLXNlY29uZCBwcmVjaXNpb24gYmV5b25kIG1pbGxpc2Vjb25kc1xuXG4gICAgc3RydWN0WzddID0gc3RydWN0WzddID8gU3RyaW5nKHN0cnVjdFs3XSkuc3Vic3RyKDAsIDMpIDogMDsgLy8gdGltZXN0YW1wcyB3aXRob3V0IHRpbWV6b25lIGlkZW50aWZpZXJzIHNob3VsZCBiZSBjb25zaWRlcmVkIGxvY2FsIHRpbWVcblxuICAgIGlmICgoc3RydWN0WzhdID09PSB1bmRlZmluZWQgfHwgc3RydWN0WzhdID09PSAnJykgJiYgKHN0cnVjdFs5XSA9PT0gdW5kZWZpbmVkIHx8IHN0cnVjdFs5XSA9PT0gJycpKSB0aW1lc3RhbXAgPSArbmV3IERhdGUoc3RydWN0WzFdLCBzdHJ1Y3RbMl0sIHN0cnVjdFszXSwgc3RydWN0WzRdLCBzdHJ1Y3RbNV0sIHN0cnVjdFs2XSwgc3RydWN0WzddKTtlbHNlIHtcbiAgICAgIGlmIChzdHJ1Y3RbOF0gIT09ICdaJyAmJiBzdHJ1Y3RbOV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBtaW51dGVzT2Zmc2V0ID0gc3RydWN0WzEwXSAqIDYwICsgc3RydWN0WzExXTtcbiAgICAgICAgaWYgKHN0cnVjdFs5XSA9PT0gJysnKSBtaW51dGVzT2Zmc2V0ID0gMCAtIG1pbnV0ZXNPZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIHRpbWVzdGFtcCA9IERhdGUuVVRDKHN0cnVjdFsxXSwgc3RydWN0WzJdLCBzdHJ1Y3RbM10sIHN0cnVjdFs0XSwgc3RydWN0WzVdICsgbWludXRlc09mZnNldCwgc3RydWN0WzZdLCBzdHJ1Y3RbN10pO1xuICAgIH1cbiAgfSBlbHNlIHRpbWVzdGFtcCA9IERhdGUucGFyc2UgPyBEYXRlLnBhcnNlKGRhdGUpIDogTmFOO1xuXG4gIHJldHVybiB0aW1lc3RhbXA7XG59IiwiY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuY29uc3QgZXJyb3JUb1N0cmluZyA9IEVycm9yLnByb3RvdHlwZS50b1N0cmluZztcbmNvbnN0IHJlZ0V4cFRvU3RyaW5nID0gUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZztcbmNvbnN0IHN5bWJvbFRvU3RyaW5nID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nIDogKCkgPT4gJyc7XG5jb25zdCBTWU1CT0xfUkVHRVhQID0gL15TeW1ib2xcXCgoLiopXFwpKC4qKSQvO1xuXG5mdW5jdGlvbiBwcmludE51bWJlcih2YWwpIHtcbiAgaWYgKHZhbCAhPSArdmFsKSByZXR1cm4gJ05hTic7XG4gIGNvbnN0IGlzTmVnYXRpdmVaZXJvID0gdmFsID09PSAwICYmIDEgLyB2YWwgPCAwO1xuICByZXR1cm4gaXNOZWdhdGl2ZVplcm8gPyAnLTAnIDogJycgKyB2YWw7XG59XG5cbmZ1bmN0aW9uIHByaW50U2ltcGxlVmFsdWUodmFsLCBxdW90ZVN0cmluZ3MgPSBmYWxzZSkge1xuICBpZiAodmFsID09IG51bGwgfHwgdmFsID09PSB0cnVlIHx8IHZhbCA9PT0gZmFsc2UpIHJldHVybiAnJyArIHZhbDtcbiAgY29uc3QgdHlwZU9mID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGVPZiA9PT0gJ251bWJlcicpIHJldHVybiBwcmludE51bWJlcih2YWwpO1xuICBpZiAodHlwZU9mID09PSAnc3RyaW5nJykgcmV0dXJuIHF1b3RlU3RyaW5ncyA/IGBcIiR7dmFsfVwiYCA6IHZhbDtcbiAgaWYgKHR5cGVPZiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuICdbRnVuY3Rpb24gJyArICh2YWwubmFtZSB8fCAnYW5vbnltb3VzJykgKyAnXSc7XG4gIGlmICh0eXBlT2YgPT09ICdzeW1ib2wnKSByZXR1cm4gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWwpLnJlcGxhY2UoU1lNQk9MX1JFR0VYUCwgJ1N5bWJvbCgkMSknKTtcbiAgY29uc3QgdGFnID0gdG9TdHJpbmcuY2FsbCh2YWwpLnNsaWNlKDgsIC0xKTtcbiAgaWYgKHRhZyA9PT0gJ0RhdGUnKSByZXR1cm4gaXNOYU4odmFsLmdldFRpbWUoKSkgPyAnJyArIHZhbCA6IHZhbC50b0lTT1N0cmluZyh2YWwpO1xuICBpZiAodGFnID09PSAnRXJyb3InIHx8IHZhbCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gJ1snICsgZXJyb3JUb1N0cmluZy5jYWxsKHZhbCkgKyAnXSc7XG4gIGlmICh0YWcgPT09ICdSZWdFeHAnKSByZXR1cm4gcmVnRXhwVG9TdHJpbmcuY2FsbCh2YWwpO1xuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRWYWx1ZSh2YWx1ZSwgcXVvdGVTdHJpbmdzKSB7XG4gIGxldCByZXN1bHQgPSBwcmludFNpbXBsZVZhbHVlKHZhbHVlLCBxdW90ZVN0cmluZ3MpO1xuICBpZiAocmVzdWx0ICE9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgbGV0IHJlc3VsdCA9IHByaW50U2ltcGxlVmFsdWUodGhpc1trZXldLCBxdW90ZVN0cmluZ3MpO1xuICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LCAyKTtcbn0iLCJpbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSAncHJvcGVydHktZXhwcic7XG5cbmxldCB0cmltID0gcGFydCA9PiBwYXJ0LnN1YnN0cigwLCBwYXJ0Lmxlbmd0aCAtIDEpLnN1YnN0cigxKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluKHNjaGVtYSwgcGF0aCwgdmFsdWUsIGNvbnRleHQgPSB2YWx1ZSkge1xuICBsZXQgcGFyZW50LCBsYXN0UGFydCwgbGFzdFBhcnREZWJ1ZzsgLy8gcm9vdCBwYXRoOiAnJ1xuXG4gIGlmICghcGF0aCkgcmV0dXJuIHtcbiAgICBwYXJlbnQsXG4gICAgcGFyZW50UGF0aDogcGF0aCxcbiAgICBzY2hlbWFcbiAgfTtcbiAgZm9yRWFjaChwYXRoLCAoX3BhcnQsIGlzQnJhY2tldCwgaXNBcnJheSkgPT4ge1xuICAgIGxldCBwYXJ0ID0gaXNCcmFja2V0ID8gdHJpbShfcGFydCkgOiBfcGFydDtcbiAgICBzY2hlbWEgPSBzY2hlbWEucmVzb2x2ZSh7XG4gICAgICBjb250ZXh0LFxuICAgICAgcGFyZW50LFxuICAgICAgdmFsdWVcbiAgICB9KTtcblxuICAgIGlmIChzY2hlbWEuaW5uZXJUeXBlKSB7XG4gICAgICBsZXQgaWR4ID0gaXNBcnJheSA/IHBhcnNlSW50KHBhcnQsIDEwKSA6IDA7XG5cbiAgICAgIGlmICh2YWx1ZSAmJiBpZHggPj0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWXVwLnJlYWNoIGNhbm5vdCByZXNvbHZlIGFuIGFycmF5IGl0ZW0gYXQgaW5kZXg6ICR7X3BhcnR9LCBpbiB0aGUgcGF0aDogJHtwYXRofS4gYCArIGBiZWNhdXNlIHRoZXJlIGlzIG5vIHZhbHVlIGF0IHRoYXQgaW5kZXguIGApO1xuICAgICAgfVxuXG4gICAgICBwYXJlbnQgPSB2YWx1ZTtcbiAgICAgIHZhbHVlID0gdmFsdWUgJiYgdmFsdWVbaWR4XTtcbiAgICAgIHNjaGVtYSA9IHNjaGVtYS5pbm5lclR5cGU7XG4gICAgfSAvLyBzb21ldGltZXMgdGhlIGFycmF5IGluZGV4IHBhcnQgb2YgYSBwYXRoIGRvZXNuJ3QgZXhpc3Q6IFwibmVzdGVkLmFyci5jaGlsZFwiXG4gICAgLy8gaW4gdGhlc2UgY2FzZXMgdGhlIGN1cnJlbnQgcGFydCBpcyB0aGUgbmV4dCBzY2hlbWEgYW5kIHNob3VsZCBiZSBwcm9jZXNzZWRcbiAgICAvLyBpbiB0aGlzIGl0ZXJhdGlvbi4gRm9yIGNhc2VzIHdoZXJlIHRoZSBpbmRleCBzaWduYXR1cmUgaXMgaW5jbHVkZWQgdGhpc1xuICAgIC8vIGNoZWNrIHdpbGwgZmFpbCBhbmQgd2UnbGwgaGFuZGxlIHRoZSBgY2hpbGRgIHBhcnQgb24gdGhlIG5leHQgaXRlcmF0aW9uIGxpa2Ugbm9ybWFsXG5cblxuICAgIGlmICghaXNBcnJheSkge1xuICAgICAgaWYgKCFzY2hlbWEuZmllbGRzIHx8ICFzY2hlbWEuZmllbGRzW3BhcnRdKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBzY2hlbWEgZG9lcyBub3QgY29udGFpbiB0aGUgcGF0aDogJHtwYXRofS4gYCArIGAoZmFpbGVkIGF0OiAke2xhc3RQYXJ0RGVidWd9IHdoaWNoIGlzIGEgdHlwZTogXCIke3NjaGVtYS5fdHlwZX1cIilgKTtcbiAgICAgIHBhcmVudCA9IHZhbHVlO1xuICAgICAgdmFsdWUgPSB2YWx1ZSAmJiB2YWx1ZVtwYXJ0XTtcbiAgICAgIHNjaGVtYSA9IHNjaGVtYS5maWVsZHNbcGFydF07XG4gICAgfVxuXG4gICAgbGFzdFBhcnQgPSBwYXJ0O1xuICAgIGxhc3RQYXJ0RGVidWcgPSBpc0JyYWNrZXQgPyAnWycgKyBfcGFydCArICddJyA6ICcuJyArIF9wYXJ0O1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBzY2hlbWEsXG4gICAgcGFyZW50LFxuICAgIHBhcmVudFBhdGg6IGxhc3RQYXJ0XG4gIH07XG59XG5cbmNvbnN0IHJlYWNoID0gKG9iaiwgcGF0aCwgdmFsdWUsIGNvbnRleHQpID0+IGdldEluKG9iaiwgcGF0aCwgdmFsdWUsIGNvbnRleHQpLnNjaGVtYTtcblxuZXhwb3J0IGRlZmF1bHQgcmVhY2g7IiwiaW1wb3J0IFZhbGlkYXRpb25FcnJvciBmcm9tICcuLi9WYWxpZGF0aW9uRXJyb3InO1xuXG5jb25zdCBvbmNlID0gY2IgPT4ge1xuICBsZXQgZmlyZWQgPSBmYWxzZTtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKGZpcmVkKSByZXR1cm47XG4gICAgZmlyZWQgPSB0cnVlO1xuICAgIGNiKC4uLmFyZ3MpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcnVuVGVzdHMob3B0aW9ucywgY2IpIHtcbiAgbGV0IHtcbiAgICBlbmRFYXJseSxcbiAgICB0ZXN0cyxcbiAgICBhcmdzLFxuICAgIHZhbHVlLFxuICAgIGVycm9ycyxcbiAgICBzb3J0LFxuICAgIHBhdGhcbiAgfSA9IG9wdGlvbnM7XG4gIGxldCBjYWxsYmFjayA9IG9uY2UoY2IpO1xuICBsZXQgY291bnQgPSB0ZXN0cy5sZW5ndGg7XG4gIGNvbnN0IG5lc3RlZEVycm9ycyA9IFtdO1xuICBlcnJvcnMgPSBlcnJvcnMgPyBlcnJvcnMgOiBbXTtcbiAgaWYgKCFjb3VudCkgcmV0dXJuIGVycm9ycy5sZW5ndGggPyBjYWxsYmFjayhuZXcgVmFsaWRhdGlvbkVycm9yKGVycm9ycywgdmFsdWUsIHBhdGgpKSA6IGNhbGxiYWNrKG51bGwsIHZhbHVlKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRlc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGVzdCA9IHRlc3RzW2ldO1xuICAgIHRlc3QoYXJncywgZnVuY3Rpb24gZmluaXNoVGVzdFJ1bihlcnIpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgLy8gYWx3YXlzIHJldHVybiBlYXJseSBmb3Igbm9uIHZhbGlkYXRpb24gZXJyb3JzXG4gICAgICAgIGlmICghVmFsaWRhdGlvbkVycm9yLmlzRXJyb3IoZXJyKSkge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmRFYXJseSkge1xuICAgICAgICAgIGVyci52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5lc3RlZEVycm9ycy5wdXNoKGVycik7XG4gICAgICB9XG5cbiAgICAgIGlmICgtLWNvdW50IDw9IDApIHtcbiAgICAgICAgaWYgKG5lc3RlZEVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoc29ydCkgbmVzdGVkRXJyb3JzLnNvcnQoc29ydCk7IC8vc2hvdyBwYXJlbnQgZXJyb3JzIGFmdGVyIHRoZSBuZXN0ZWQgb25lczogbmFtZS5maXJzdCwgbmFtZVxuXG4gICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIG5lc3RlZEVycm9ycy5wdXNoKC4uLmVycm9ycyk7XG4gICAgICAgICAgZXJyb3JzID0gbmVzdGVkRXJyb3JzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBjYWxsYmFjayhuZXcgVmFsaWRhdGlvbkVycm9yKGVycm9ycywgdmFsdWUsIHBhdGgpLCB2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbGJhY2sobnVsbCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59IiwiZnVuY3Rpb24gZmluZEluZGV4KGFyciwgZXJyKSB7XG4gIGxldCBpZHggPSBJbmZpbml0eTtcbiAgYXJyLnNvbWUoKGtleSwgaWkpID0+IHtcbiAgICB2YXIgX2VyciRwYXRoO1xuXG4gICAgaWYgKCgoX2VyciRwYXRoID0gZXJyLnBhdGgpID09IG51bGwgPyB2b2lkIDAgOiBfZXJyJHBhdGguaW5kZXhPZihrZXkpKSAhPT0gLTEpIHtcbiAgICAgIGlkeCA9IGlpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGlkeDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydEJ5S2V5T3JkZXIoa2V5cykge1xuICByZXR1cm4gKGEsIGIpID0+IHtcbiAgICByZXR1cm4gZmluZEluZGV4KGtleXMsIGEpIC0gZmluZEluZGV4KGtleXMsIGIpO1xuICB9O1xufSIsImltcG9ydCBoYXMgZnJvbSAnbG9kYXNoL2hhcyc7IC8vIEB0cy1leHBlY3QtZXJyb3JcblxuaW1wb3J0IHRvcG9zb3J0IGZyb20gJ3RvcG9zb3J0JztcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAncHJvcGVydHktZXhwcic7XG5pbXBvcnQgUmVmIGZyb20gJy4uL1JlZmVyZW5jZSc7XG5pbXBvcnQgaXNTY2hlbWEgZnJvbSAnLi9pc1NjaGVtYSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0RmllbGRzKGZpZWxkcywgZXhjbHVkZWRFZGdlcyA9IFtdKSB7XG4gIGxldCBlZGdlcyA9IFtdO1xuICBsZXQgbm9kZXMgPSBuZXcgU2V0KCk7XG4gIGxldCBleGNsdWRlcyA9IG5ldyBTZXQoZXhjbHVkZWRFZGdlcy5tYXAoKFthLCBiXSkgPT4gYCR7YX0tJHtifWApKTtcblxuICBmdW5jdGlvbiBhZGROb2RlKGRlcFBhdGgsIGtleSkge1xuICAgIGxldCBub2RlID0gc3BsaXQoZGVwUGF0aClbMF07XG4gICAgbm9kZXMuYWRkKG5vZGUpO1xuICAgIGlmICghZXhjbHVkZXMuaGFzKGAke2tleX0tJHtub2RlfWApKSBlZGdlcy5wdXNoKFtrZXksIG5vZGVdKTtcbiAgfVxuXG4gIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcykgaWYgKGhhcyhmaWVsZHMsIGtleSkpIHtcbiAgICBsZXQgdmFsdWUgPSBmaWVsZHNba2V5XTtcbiAgICBub2Rlcy5hZGQoa2V5KTtcbiAgICBpZiAoUmVmLmlzUmVmKHZhbHVlKSAmJiB2YWx1ZS5pc1NpYmxpbmcpIGFkZE5vZGUodmFsdWUucGF0aCwga2V5KTtlbHNlIGlmIChpc1NjaGVtYSh2YWx1ZSkgJiYgJ2RlcHMnIGluIHZhbHVlKSB2YWx1ZS5kZXBzLmZvckVhY2gocGF0aCA9PiBhZGROb2RlKHBhdGgsIGtleSkpO1xuICB9XG5cbiAgcmV0dXJuIHRvcG9zb3J0LmFycmF5KEFycmF5LmZyb20obm9kZXMpLCBlZGdlcykucmV2ZXJzZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyBbXSA6IFtdLmNvbmNhdCh2YWx1ZSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCBGb3JtRmllbGRzIGZyb20gXCIuL0Zvcm1GaWVsZHNcIjtcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICBmdWxsTmFtZTogXCJcIixcclxuICAgICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgICAgbW9iaWxlTm86IFwiXCIsXHJcbiAgICAgICAgICBjbmljTm86IFwiXCIsXHJcbiAgICAgICAgICBjaXR5OiBcIlwiLFxyXG4gICAgICAgICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgeyhmb3JtaWspID0+IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J215LTQgZm9udC13ZWlnaHQtYm9sZC1kaXNwbGF5LTQnPlxyXG4gICAgICAgICAgICAgIEFkZCBOZXcgRW1wbG95ZWVcclxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2coZm9ybWlrLnZhbHVlcyl9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZHMgbGFiZWw9J0Z1bGwgTmFtZScgbmFtZT0nZnVsbE5hbWUnIHR5cGU9J3RleHQnIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNic+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRzIGxhYmVsPSdFbWFpbCcgbmFtZT0nZW1haWwnIHR5cGU9J2VtYWlsJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkcyBsYWJlbD0nTW9iaWxlIG5vJyBuYW1lPSdtb25iaWxlTm8nIHR5cGU9J3RlbCcgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZHMgbGFiZWw9J0NOSUMgbm8nIG5hbWU9J2NuaWNObycgdHlwZT0ndGVsJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTYnPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkcyBsYWJlbD0nQ2l0eScgbmFtZT0nY2l0eScgdHlwZT0ndGV4dCcgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC02Jz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZHMgbGFiZWw9J1N0YXR1cycgbmFtZT0nc3RhdHVzJyB0eXBlPSd0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTEyJz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZHMgbGFiZWw9J0FkZHJlc3MnIG5hbWU9J2FkZHJlc3MnIHR5cGU9J3RleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gYnRuLXByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Gb3JtaWs+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=