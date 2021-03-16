function MakeO(success, data) {
  let successCb;
  let errCb;
  this.onSuccess = function (cb) {
      this.successCb = cb;
      return this;
  };
  this.onError = function(eb) {
    this.errCb = eb;
    return this;
  };
  setTimeout(() => {
    success ? this.successCb(data) : this.errCb(new Error("I errored"))
  }, 1000);
};

let oSuccess = new MakeO(true, "Some Data");
let oFail = new MakeO(false, "Some Data");

require('./output/Main').entry(oSuccess)();
require('./output/Main').entry(oFail)();
