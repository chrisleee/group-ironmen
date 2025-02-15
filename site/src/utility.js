import { Item } from "./data/item";

class Utility {
  constructor() {}

  callOnInterval(fn, interval, callImmediate = true) {
    if (callImmediate) {
      fn();
    }

    return setInterval(() => {
      if (document.visibilityState === "visible") fn();
    }, interval);
  }

  formatShortQuantity(quantity) {
    if (quantity >= 1000000000) {
      return Math.floor(quantity / 1000000000) + "B";
    } else if (quantity >= 10000000) {
      return Math.floor(quantity / 1000000) + "M";
    } else if (quantity >= 100000) {
      return Math.floor(quantity / 1000) + "K";
    }
    return quantity;
  }

  removeArticles(str) {
    const articles = ["a", "the", "an"];
    const words = str.split(" ");
    if (words.length <= 1) return str;
    if (articles.includes(words[0].toLowerCase())) {
      return words.splice(1).join(" ");
    }
    return str;
  }
}
const utility = new Utility();

export { utility };
