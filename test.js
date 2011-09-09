(function () {
  "use strict";

  var btoa = require('./index')
    , encoded = "SGVsbG8gV29ybGQ="
    , unencoded = "Hello World"
    , result
    ;

  if (encoded !== btoa(unencoded)) {
    return;
  }

  console.log('[PASS] all tests pass');
}());
