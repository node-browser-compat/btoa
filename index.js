(function () {
  "use strict";

  function btoa(str) {
    return new Buffer(str, 'binary').toString('base64');
  }

  module.exports = btoa;
}());
