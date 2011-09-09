(function () {
  "use strict";

  function btoa(str) {
    return new Buffer(str, 'utf8').toString('base64');
  }

  module.exports = btoa;
}());
