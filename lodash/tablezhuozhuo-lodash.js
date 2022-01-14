var tablezhuozhuo = {
  chunk: function (array, size) {
    var size = size || 1
    var result = []
    var l = array.length
    var s = Math.ceil(l / size)
    for (var i = 0; i < s; i++) {
      result[i] = array.slice(size * i, size * (i + 1))
    }
    return result
  },
  compact: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },
  difference: function (array, ...[values]) {

  },
  differenceBy: function (array, [values]) {

  },
  differenceWith: function (array, [values]) {

  },
  drop: function (array, n) {
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
  },
  dropRight: function (array, n) {
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
  },
  dropRightWhile: function (array, [predicate = _.identity]) {

  },
  dropWhile: function (array, [predicate = _.identity]) { },
  fill: function (array, value, start, end) {
    var start = start || 0
    var l = array.length
    var end = end || l
    for (var i = 0; i < l; i++) {
      if (i >= start && i < end) {
        array[i] = value
      }
    }
    return array
  },
  findIndex: function (array, [predicate = _.identity], [fromIndex = 0]) {

  },

  findLastIndex: function (array, [predicate = _.identity], [fromIndex = array.length - 1]) {

  },
  // flatten: function (array) {
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
  // },

  // flatten: function (array) {
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
  // },

  flatten: function (array) {
    return array.reduce((result, item) => {
      if (Array.isArray(item)) {
        result.push(...item)
      }
      else {
        result.push(item)
      } return result
    }, [])
  },

  // flatten: function (array) {
  //   return array.reduce((result, item) => {
  //    return result.concat(item)
  //   }, [])
  // },

  // flatten: function (array) {
  //   return [].concat(...array)
  // },

  // flatten: function (array) {
  //   return [].apply([], array)
  // },

  // flattenDeep: function (array) {
  //   var result = []
  //   for (var i = 0; i < array.length; i++) {
  //     var item = array[i]
  //     if (Array.isArray(item)) {
  //       result.push(...flattenDeep(item))
  //     }
  //     else { result.push(item) }
  //   }
  //   return result
  // },

  flattenDeep: function (array) {
    return array.reduce((result, item) => {
      if (Array.isArray(item)) {
        return result.concat(flattenDeep(item))
      }
      return result.concat(item)
    }, [])
  },

  // flattenDeep: function (array) {
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
  // },


  // flattenDeep: function (array) {
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
  // },wrong

  flattenDepth: function (array, depth = 1) {
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
  },


}
