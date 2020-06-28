const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;

    arr.forEach((element) => {
      if (Array.isArray(element)) {
        depth = Math.max(depth, this.calculateDepth(element));
      }
    });

    return depth + 1;
  }
};