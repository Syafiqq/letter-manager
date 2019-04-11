function __private_config_file() {
  return {
    apiUrl: "",
  };
}

if (typeof module !== "undefined") {
  module.exports = __private_config_file();
} else {
  (function(window) {
    var af = __private_config_file();
    window.__env = window.__env || {};
    window.__env.apiUrl = af.apiUrl;
  }(this));
}
