console.log(this);

Object.prototype.checkThisOut = function () {
  // this is going to be in all the objects
  console.log(this);
};

const product1 = {
  brand: "MackBook",
  model: "Pro M3",

  logThisOut: function () {
    // but this nmethod is only valid for this object
    console.log(this);
  },
};

const product2 = {
  brand: "Lenovo",
  model: "ThinkPad",
};

product1.logThisOut();
product1.checkThisOut();

product2.checkThisOut();

