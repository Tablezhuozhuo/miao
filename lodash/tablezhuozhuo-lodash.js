var tablezhuozhuo = function () {
  function chunk(array, size) {
    var size = size || 1
    var result = []
    var l = array.length
    var s = Math.ceil(l / size)
    for (var i = 0; i < s; i++) {
      result[i] = array.slice(size * i, size * (i + 1))
    }
    return result
  }
  function compact(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  }
  // function difference(array, ...values) {

  // }
  // function differenceBy(array, [values]) {

  // }
  // function differenceWith(array, [values]) {

  // }
  function drop(array, n) {
    if (n == undefined) {
      n = 1
    }
    l = array.length
    if (l < n) {
      array = []
      return array
    }
    for (var i = 1; i < l; i++) {
      if (i <= n) {
        array.shift()
      }
    }
    return array
  }
  function dropRight(array, n) {
    if (n == undefined) {
      n = 1
    }
    l = array.length
    if (l < n) {
      array = []
      return array
    }
    for (var i = 1; i < l; i++) {
      if (i <= n) {
        array.pop()
      }
    }
    return array
  }
  // function dropRightWhile(array, [predicate = _.identity]) {

  // }
  // function dropWhile(array, [predicate = _.identity]) { }
  function fill(array, value, start, end) {
    var start = start || 0
    var l = array.length
    var end = end || l
    for (var i = 0; i < l; i++) {
      if (i >= start && i < end) {
        array[i] = value
      }
    }
    return array
  }
  // function findIndex(array, [predicate = _.identity], [fromIndex = 0]) {

  // }

  // function findLastIndex(array, [predicate = _.identity], [fromIndex = array.length - 1]) {

  // }
  // function flatten  (array) {
  //   var result = []
  //   for (var i = 0; i < array.length; i++) {
  //     l = array[i].length
  //     if (l) {
  //       for (var j = 0; j < l; j++) {
  //         result.push(array[i][j])
  //       }
  //     }
  //     else { result.push(array[i]) }
  //   }
  //   return result
  // }

  // function flatten  (array) {
  //   var result = []
  //   for (var i = 0; i < array.length; i++) {
  //     var item = ary[i]
  //     if (Array.isArray(item)) {
  //      result.push(...item)
  //     }
  //     else { result.push(item)
  //     }
  //   }
  //   return result
  // }

  function flatten(array) {
    return array.reduce((result, item) => {
      if (Array.isArray(item)) {
        result.push(...item)
      }
      else {
        result.push(item)
      } return result
    }, [])
  }

  // function flatten  (array) {
  //   return array.reduce((result, item) => {
  //    return result.concat(item)
  //   } [])
  // }

  // function flatten  (array) {
  //   return [].concat(...array)
  // }

  // function flatten  (array) {
  //   return [].apply([], array)
  // }

  // function flattenDeep  (array) {
  //   var result = []
  //   for (var i = 0; i < array.length; i++) {
  //     var item = array[i]
  //     if (Array.isArray(item)) {
  //       result.push(...flattenDeep(item))
  //     }
  //     else { result.push(item) }
  //   }
  //   return result
  // }

  function flattenDeep(array) {
    return array.reduce((result, item) => {
      if (Array.isArray(item)) {
        return result.concat(flattenDeep(item))
      }
      return result.concat(item)
    }, [])
  }

  // function flattenDeep  (array) {
  //   var result = []
  //   for (var i = 0; i < array.length; i++) {
  //     var item = array[i]
  //     if (Array.isArray(item)) {
  //       item = flattenDeep(item)
  //       for (var j = 0; j < item.length; j++) {
  //         result.push(item[j])
  //       }
  //     }
  //     else { result.push(item) }
  //   }
  //   return result
  // }


  // function flattenDeep  (array) {
  //   var result = []
  //   for (var i = 0; i < array.length; i++) {
  //     l = array[i].length
  //     if (l) {
  //       for (var j = 0; j < l; j++) {
  //         result.push(flattenDeep(array[i])[j])
  //       }
  //     }
  //     else { result.push(array[i]) }
  //   }
  //   return result
  // }wrong

  function flattenDepth(array, depth = 1) {
    if (depth == 0) {
      return ary.slice
      // return Array.from(ary)
      // return [...ary]
    }
    return array.reduce((result, item) => {
      if (Array.isArray(item)) {
        return result.concat(flattenDepth(item, depth - 1))
      }
      return result.concat(item)
    }, [])
  }
  function fromPairs(pairs) {
    var result = {}
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i]
      result[pair[0]] = pair[1]
    }
    return result
  }
  function head(array) {
    if (array[0]) {
      return array[0]
    }
  }
  function indexOf(array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  }
  function initial(array) {
    return array.slice(0, -1)
  }
  function intersection(...arrays) {

  }
  function intersectionBy(...arrays, iteratee = _.identity) {
    var ary = []

    for (var i = 0; i < arrays.length; i++){

      for (var j = 0; j < arrays[i].length; j++) {
        for()
        if (iteratee(arrays[i][j]) === (arrays[i + 1][k]))
          break
      }
    }
  }
  function intersectionWith(...arrays, [comparator]) {

    return false
  }
  function join(array, separator = ',') {
    var str = ''
    for (var i = 0; i < array.length - 1; i++) {
      str += array[i]
      str += separator
    }
    str += array[array.length - 1]
    return str
  }
  function last(array) {
    return array[array.length - 1]
  }
  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  }
  function nth(array, n = 0) {
    if (n < 0) {
      return array[array.length + n]
    }
    return array[n]
  }
  function pull(array, ...values) {
    for (var j = 0; j < values.length; j++) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] == values[j]) {
          for (var k = i; k < array.length - 1; k++) {
            array[k] = array[k + 1]
          }
          array.pop()
        }
      }
    }
    return array
  }
  function pullAll(array, values) {
    for (var j = 0; j < values.length; j++) {
      for (var i = 0; i < array.length; i++) {
        if (array[i] == values[j]) {
          for (var k = i; k < array.length - 1; k++) {
            array[k] = array[k + 1]
          }
          array.pop()
        }
      }
    }
    return array
  }
  function pullAllBy(array, values, [iteratee = _.identity]) {

  }
  function pullAllWith(array, values, [comparator]) { }
  function reverse(array) {
    for (var i = 0; i < array.length / 2; i++) {
      var current = array[i]
      array[i] = array[array.length - i - 1]
      array[array.length - i - 1] = current
    }
    return array
  }
  function sortedIndex(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] >= value) {
        return i
      }
    }
  }
  function sortedIndexBy(array, value, [iteratee = _.identity]) { }
  function sortedIndexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  }
  function sortedLastIndex(array, value) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (array[i] <= value) {
        return i + 1
      }
    }
  }
  // function sortedLastIndexBy(array, value, [teratee = _.identity]) { }
  function sortedLastIndexOf(array, value) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (array[i] == value) {
        return i + 1
      }
    } return -1
  }
  function sortedUniq(array) {
    var ary = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] != array[i - 1]) {
        ary.push(array[i])
      }
    }
    return ary
  }
  function sortedUniqBy(array, [iteratee]) { }
  function tail(array) {
    array.shift()
    return array
  }
  function take(array, [n = 1]) {
    if (n <= 0) {
      return []
    }
    return array.slice(0, n - 1)
  }
  function takeRight(array, [n = 1]) {
    if (n <= 0) {
      return []
    }
    return array.slice(-n)
  }
  function takeRightWhile(array, [predicate = _.identity]) { }

  function takeWhile(array, [predicate = _.identity]) { }

  function union(...arrays) {
    var ary = []
    ary.push(arrays[0][0])
    for (var i = 0; i < arrays.length; i++) {
      var current = arrays[i]
      for (var j = 0; j < current.length; j++) {
        for (var k = 0; k < ary.length; k++) {
          if (current[j] == ary[k]) {
            break
          }
          else {
            ary.push(current[j])
          }
        }
      }
    }
    return ary
  }
  function unionBy([arrays], [iteratee = _.identity]) { }

  function unionWith([arrays], [comparator]) { }

  function uniq(array) {

    var ary = []
    ary.push(array[0])
    for (var i = 1; i < array.length; i++) {
      for (var j = 0; j < ary.length; j++) {
        if (array[i] == ary[j]) {
          break
        }
        else {
          ary.push(array[i])
        }
      }
    }
    return ary
  }
  //   function uniqBy  (array, [iteratee = _.identity]) { }
  //   function uniqWith  (array, [comparator]) { }
  //   function unzip  (array) { }
  //   function unzipWith  (array, [iteratee = _.identity]) { }
  function without(array, ...values) {
    var ary = []
    for (var j = 0; j < values.length; j++) {
      for (var i = 0; i < array.length; i++) {
        if (values[j] == array[i]) {
          for (var k = i; k < array.length - 1; k++) {
            array[k] = array[k + 1]
          }
        }
      }
    }
    return ary
  }
  function xor(...arrays) {
    var ary = []
    var ary2 = []
    for (var i = 0; i < arrays.length; i++) {
      var item = arrays[i]
      for (var j = 0; j < item.length; j++) {
        ary.push(item[j])
      }
    }
    for (var k = 0; k < ary.length; k++) {
      for (var q = k + 1; q < ary.length; q++) {
        if (ary[k] == ary[q]) {
          break
        }
        ary2.push(ary[k])
      }
    }
    return ary2
  }
  //   function xorBy  ([arrays], [iteratee = _.identity]) { }
  //   function xorWith  ([arrays], [comparator]) { }
  function zip(...arrays) {
    var ary = []
    for (var k = 0; k < arrays[0].length; k++) {
      ary.push([arrays[0][k]])
    }
    for (var i = 1; i < arrays.length; i++) {
      var item = arrays[i]
      for (var j = 0; j < item.length; j++) {
        ary[j].push(item[j])
      }
    }
    return ary
  }
  function zipObject(props = [], values = []) {
    var obj = {}
    for (var i = 0; i < props.length; i++) {
      obj[props[i]] = values[i]
    }
    return obj
  }
  //   function zipObjectDeep  ([props = []], [values = []]) { }
  //   function zipWith  ([arrays], [iteratee = _.identity]) { }
  //   function countBy  (collection, [iteratee = _.identity]) { }
  //   function every  (collection, [predicate = _.identity]) { }
  //   function filter  (collection, [predicate = _.identity]) { }
  //   function find  (collection, [predicate = _.identity], [fromIndex = 0]) { }
  //   function findLast  (collection, [predicate = _.identity], [fromIndex = collection.length - 1]) { }
  //   function flatMap  (collection, [iteratee = _.identity]) { }
  //   function flatMapDeep  (collection, [iteratee = _.identity]) { }
  //   function flatMapDepth  (collection, [iteratee = _.identity], [depth = 1]) { }
  //   function forEach  (collection, [iteratee = _.identity]) { }
  //   function forEachRight  (collection, [iteratee = _.identity]) { }
  //   function groupBy  (collection, [iteratee = _.identity]) { }
  //   function includes  (collection, value, [fromIndex = 0]) { }
  //   function invokeMap  (collection, path, [args]) { }
  //   function keyBy  (collection, [iteratee = _.identity]) { }
  //   function map  (collection, [iteratee = _.identity]) { }
  //   function orderBy  (collection, [iteratees = [_.identity]], [orders]) { }
  //   function partition  (collection, [predicate = _.identity]) { }
  //   function reduce  (collection, [iteratee = _.identity], [accumulator]) { }
  //   function reduceRight  (collection, [iteratee = _.identity], [accumulator]) { }
  //   function reject  (collection, [predicate = _.identity]) { }
  // function sample  (collection) { }
  //   function sampleSize  (collection, [n = 1]) { }
  function shuffle(collection) {
      var
    }
  //   function size  (collection) { }
  //   function some  (collection, [predicate = _.identity]) { }
  //   function sortBy  (collection, [iteratees = [_.identity]]) { }
  //   function defer  (func, [args]) { }
  //   function delay  (func, wait, [args]) { }
  //   function castArray  (value) { }
  //   function conformsTo  (object, source) { }
  function eq(value, other) {
    if (value === other) {
      return true
    }
    else return false
  }
  function gt(value, other) {
    if (value > other) {
      return true
    }
    else return false
  }
  //   function gte  (value, other) { }
  //   function isArguments  (value) { }
  //   function isArray  (value) { }
  //   function isArrayBuffer  (value) { }
  //   function isArrayLike  (value) { }
  //   function isArrayLikeObject  (value) { }
  //   function isBoolean  (value) { }

  //   function isBuffer  (value) { }
  //   function isDate  (value) { }
  //   function isElement  (value) { }
  //   function isEmpty  (value) { }
  //   function isEqual  (value, other) { }

  //   function isEqualWith  (value, other, [customizer]) { }

  //   function isError  (value) { }
  //   function isFinite  (value) { }
  //   function isFunction  (value) { }
  //   function isInteger  (value) { }
  //   function isLength  (value) { }
  //   function isMap  (value) { }
  //   function isMatch  (object, source) { }

  //   function isMatchWith  (object, source, [customizer]) { }

  //   function isNaN  (value) { }
  //   function isNative  (value) { }
  //   function isNil  (value) { }
  //   function isNull  (value) { }
  //   function isNumber  (value) { }
  //   function isObject  (value) { }
  //   function isObjectLike  (value) { }
  //   function isPlainObject  (value) { }
  //   function isRegExp  (value) { }
  //   function isSafeInteger  (value) { }
  //   function isSet  (value) { }
  //   function isString  (value) { }
  //   function isSymbol  (value) { }
  //   function isTypedArray  (value) { }
  //   function isUndefined  (value) { }
  //   function isWeakMap  (value) { }
  //   function isWeakSet  (value) { }

  //   function now  () { }
  //   function after  (n, func) { }
  function ary(func, n = f.length) {
    return function (...args) {
      return func.call(this, ...args.slice(0, n))
    }
  }
  function before(n, func) {
    var c = 0
    var result
    return function (...args) {
      if (c < n) {
        result = func(...args)
        c++
      }
      return result


    }
  }
  //   function bind  (func, thisArg, [partials]) { }
  //   function bindKey  (object, key, [partials]) { }
  //   function curry  (func, [arity = func.length]) { }

  //   function curryRight  (func, [arity = func.length]) { }

  //   function debounce  (func, [wait = 0], [options = {}]) { }

  function flip(func) {
    return function (...args) {
      return func(...args.reverse())
    }
  }
  function memoize(func,resolver) {
      var map = new Map()
    return function (...args) {
        var key= resolver(...args)
        if (map.has(...args))
          return map.get(val)
      }
      return
  }
  function negate(predicate) {
    return function () {
      return !f(...args)
    }
  }





  //   function once  (func) { }

  //   function overArgs  (func, [transforms = [_.identity]]) { }
  //   function partial  (func, [partials]) { }
  //   function partialRight  (func, [partials]) { }
  //   function rearg  (func, indexes) { }
  //   function rest  (func, [start = func.length - 1]) { }
  function spread(func, [start = 0]) {
    return function (ary) {
      return f.apply(null, ary)
      // return f.apply.bind(f,null)
    }

  }
  //   function throttle  (func, [wait = 0], [options = {}]) { }
  function unary(func) {
    return function (...args) {
      return func(...args.slice(0, 1))
    }
  }
  // return ary(func,1)
  //   function wrap  (value, [wrapper = identity]) { }
  //   function clone  (value) { }

  //   function cloneDeep  (value) { }

  //   function cloneDeepWith  (value, [customizer]) { }

  //   function cloneWith  (value, [customizer]) { }
  //   function lt  (value, other) { }

  //   function lte  (value, other) { }

  //   function toArray  (value) { }

  //   function toFinite  (value) { }

  //   function toInteger  (value) { }

  //   function toLength  (value) { }

  //   function toNumber  (value) { }

  //   function toPlainObject  (value) { }

  //   function toSafeInteger  (value) { }

  //   function toString  (value) { }

  //   function add  (augend, addend) { }

  //   function ceil  (number, [precision = 0]) { }

  //   function divide  (dividend, divisor) { }

  //   function floor  (number, [precision = 0]) { }

  //   function max  (array) { }

  //   function maxBy  (array, [iteratee = _.identity]) { }

  //   function mean  (array) { }

  //   function meanBy  (array, [iteratee = _.identity]) { }

  //   function min  (array) { }

  //   function minBy  (array, [iteratee = _.identity]) { }

  //   function multiply  (multiplier, multiplicand) { }

  //   function round  (number, [precision = 0]) { }

  //   function subtract  (minuend, subtrahend) { }

  //   function sum  (array) { }

  //   function sumBy  (array, [iteratee = _.identity]) { }

  //   function clamp  (number, [lower], upper) { }

  //   function inRange  (number, [start = 0], end) { }

  //   function random  ([lower = 0], [upper = 1], [floating]) { }

  //   function assign  (object, [sources]) { }

  //   function assignIn  (object, [sources]) { }

  //   function assignInWith  (object, sources, [customizer]) { }

  //   function assignWith  (object, sources, [customizer]) { }

  //   function at  (object, [paths]) { }

  //   function create  (prototype, [properties]) { }

  //   function defaults  (object, [sources]) { }

  //   function defaultsDeep  (object, [sources]) { }

  //   function findKey  (object, [predicate = _.identity]) { }

  //   function findLastKey  (object, [predicate = _.identity]) { }

  //   function forIn  (object, [iteratee = _.identity]) { }

  //   function forInRight  (object, [iteratee = _.identity]) { }

  var hasOwn = Object.prototype.hasOwnProperty
  function forOwn(object, iteratee) {
    for (var key in obj) {
      if (hasOwn.call(obj, val)) {
        iteratee(obj[key], key)
      }
    }
  }

  //   function forOwnRight  (object, [iteratee = _.identity]) { }

  //   function functions  (object) { }

  //   function functionsIn  (object) { }

  //   function get  (object, path, [defaultValue]) {


  //   function has  (object, path) { }

  //   function hasIn  (object, path) { }

  //   function invert  (object) { }

  //   function invertBy  (object, [iteratee = _.identity]) { }

  //   function invoke  (object, path, [args]) { }

  //   function keys  (object) { }

  //   function keysIn  (object) { }

  //   function mapKeys  (object, [iteratee = _.identity]) { }

  //   function mapValues  (object, [iteratee = _.identity]) { }

  //   function merge  (object, [sources]) { }

  //   function mergeWith  (object, sources, customizer) { }

  //   function omit  (object, [paths]) { }

  //   function omitBy  (object, [predicate = _.identity]) { }

  //   function pick  (object, [paths]) { }

  //   function pickBy  (object, [predicate = _.identity]) { }

  //   function result  (object, path, [defaultValue]) { }

  //   function set  (object, path, value) { }

  //   function setWith  (object, path, value, [customizer]) { }

  //   function toPairs  (object) { }

  //   function toPairsIn  (object) { }

  //   function transform  (object, [iteratee = _.identity], [accumulator]) { }

  //   function unset  (object, path) { }

  //   function update  (object, path, updater) { }

  //   function updateWith  (object, path, updater, [customizer]) { }

  //   function values  (object) { }

  //   function valuesIn  (object) { }

  //   function chain  (value) { }

  //   function tap  (value, interceptor) { }

  //   function thru  (value, interceptor) { }

  //   function camelCase  ([string = '']) { }

  //   function capitalize  ([string = '']) { }

  //   function deburr  ([string = '']) { }

  //   function endsWith  ([string = ''], [target], [position = string.length]) { }

  //   function escape  ([string = '']) { }

  //   function escapeRegExp  ([string = '']) { }

  //   function kebabCase  ([string = '']) { }

  //   function lowerCase  ([string = '']) { }

  //   function lowerFirst  ([string = '']) { }

  //   function pad  ([string = ''], [length = 0], [chars = ' ']) { }

  //   function padEnd  ([string = ''], [length = 0], [chars = ' ']) { }

  //   function padStart  ([string = ''], [length = 0], [chars = ' ']) { }

  //   function parseInt  (string, [radix = 10]) { }

  //   function repeat  ([string = ''], [n = 1]) { }

  //   function replace  ([string = ''], pattern, replacement) { }

  //   function snakeCase  ([string = '']) { }

  //   function split  ([string = ''], separator, [limit]) { }

  //   function startCase  ([string = '']) { }

  //   function startsWith  ([string = ''], [target], [position = 0]) { }

  //   function template  ([string = ''], [options = {}]) { }

  //   function toLower  ([string = '']) { }

  //   function toUpper  ([string = '']) { }

  //   function trim  ([string = ''], [chars = whitespace]) { }

  //   function trimEnd  ([string = ''], [chars = whitespace]) { }

  //   function trimStart  ([string = ''], [chars = whitespace]) { }

  //   function truncate  ([string = ''], [options = {}]) { }

  //   function unescape  ([string = '']) { }

  //   function upperCase  ([string = '']) { }

  //   function upperFirst  ([string = '']) { }

  //   function words  ([string = ''], [pattern]) { }

  //   function attempt  (func, [args]) { }

  //   function bindAll  (object, methodNames) { }

  //   function cond  (pairs) { }

  //   function conforms  (source) { }

  //   function constant  (value) { }

  //   function defaultTo  (value, defaultValue) { }

  //   function flow  ([funcs]) { }

  //   function flowRight  ([funcs]) { }

  //   function identity  (value) { }

  //   function iteratee  ([func = _.identity]) { }

  //   function matches  (source) {

  //   function matchesProperty  (path, srcValue) { }

  //   function method  (path, [args]) { }

  //   function methodOf  (object, [args]) { }

  //   function mixin  ([object = lodash], source, [options = {}]) { }

  //   function noConflict  () { }

  //   function noop  () { }

  //   function nthArg  ([n = 0]) { }

  //   function over  ([iteratees = [_.identity]]) { }

  //   function overEvery  ([predicates = [_.identity]]) { }

  //   function overSome  ([predicates = [_.identity]]) { }

  //   function property  (path) { }

  //   function propertyOf  (object) { }

  //   function range  ([start = 0], end, [step = 1]) { }

  //   function rangeRight  ([start = 0], end, [step = 1]) { }

  //   function runInContext  ([context = root]) { }

  //   function stubArray  () { }

  //   function stubFalse  () { }

  //   function stubObject  () { }

  //   function stubString  () { }

  //   function stubTrue  () { }

  //   function times  (n, [iteratee = _.identity]) { }

  //   function toPath  (value) { }

  //   function uniqueId  ([prefix = '']) { }
}
