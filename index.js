(function () {
  "use strict";

  function btoa(str) {
    var buffer
      ;

    if (str instanceof Buffer) {
      buffer = str;
    } else {
      buffer = new Buffer(str + '', 'binary');
    }

    return buffer.toString('base64');
  }

  module.exports = btoa;
}());
