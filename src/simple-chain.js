const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  arr: [],
  
  getLength() {// возвращает текущую длину цепочки в виде числа;
    return this.arr.length;
  },
  
  addLink(value = "") {//добавляет ссылку, содержащую string представление value в цепочку;
    let str = `( ${value} )`;
    this.arr.push(str);
    return this;
  },

  removeLink(position) {// убирает звено цепи в указанном положении;
      if (isNaN(position) || position%1 > 0 ) {
        this.arr = [];
        throw new Error("You can't remove incorrect link!");
      };
      if (position <= this.getLength() && position > 0) {
        this.arr.splice(position - 1, 1);
      } else {
        this.arr =[];
        throw new Error("You can't remove incorrect link!");
      }
    return this;
  },

  reverseChain() {//переворачивает цепь;
    this.arr.reverse();
    return this;
  },

  finishChain() {//заканчивается цепочка и return sона.
    const chain = this.arr.join("~~");
    this.arr = [];
    return chain;
  }
};

module.exports = {
  chainMaker
};
