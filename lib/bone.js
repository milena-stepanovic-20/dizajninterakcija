const FallingObject = require("./falling_object");

class Bone extends FallingObject {
  constructor(options = {}) {
    options.good = true;
    options.src =
      "https://static.vecteezy.com/system/resources/thumbnails/047/831/602/small/a-single-chilled-beer-bottle-with-water-droplets-free-png.png";
    super(options);
  }
}

module.exports = Bone;
