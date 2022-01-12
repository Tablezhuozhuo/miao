var tablezhuozhuo = {
  chunk: function (array, size) {
    var size = size || 1;
    var result = [];
    var l = arr.length; //数组的长度
    var s = Math.ceil(l / size)
    for (var i = 0; i < s; i++) {
      result[i] = arr.slice(size * i, size * (i + 1))
    }
    return result

},
  compact: function () { },
}
