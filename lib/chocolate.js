const FallingObject = require("./falling_object");

class Chocolate extends FallingObject {
  constructor(options = {}) {
    options.good = false;
    options.src =
      "https://png.pngtree.com/png-clipart/20250420/original/pngtree-water-bottle-png-image_20750613.png";
    super(options);
  }
}

module.exports = Chocolate;
