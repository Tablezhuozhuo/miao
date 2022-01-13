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
  compact: function () { },
}
