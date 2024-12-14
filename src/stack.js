const { NotImplementedError } = require("../extensions/index.js");

module.exports = class Stack {
  constructor() {
    this.items = []; // Инициализация пустого массива для хранения элементов стека
  }

  // Добавляет элемент в стек
  push(element) {
    this.items.push(element);
  }

  // Удаляет и возвращает верхний элемент стека
  pop() {
    if (this.items.length === 0) {
      return undefined; // Если стек пуст, возвращаем undefined
    }
    return this.items.pop(); // Удаляем и возвращаем верхний элемент
  }

  // Возвращает верхний элемент стека, не удаляя его
  peek() {
    if (this.items.length === 0) {
      return undefined; // Если стек пуст, возвращаем undefined
    }
    return this.items[this.items.length - 1]; // Возвращаем верхний элемент
  }
};
