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
  difference: function (array, [values]) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < [values].length; j++) {
        if (array[i] == [values][j]) {
          break
        }
        result.push(array[i])
      }
    }
    return result
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
  dropRight: function (array, [n = 1]) {

  },
}
