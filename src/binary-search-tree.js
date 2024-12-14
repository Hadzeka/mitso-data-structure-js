const { NotImplementedError } = require("../extensions/index.js");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.search(this.rootNode, data) !== null;
  }

  search(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  find(data) {
    return this.search(this.rootNode, data);
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      // Узел с одним или без дочерних узлов
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Узел с двумя дочерними узлами: получаем наименьший в правом поддереве (наследника по порядку)
      node.data = this.minNode(node.right).data;

      // Удаляем наследника по порядку
      node.right = this.removeNode(node.right, node.data);
      return node;
    }
  }

  minNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.minNode(node.left);
    }
  }

  min() {
    return this.minNode(this.rootNode).data;
  }

  max() {
    return this.maxNode(this.rootNode).data;
  }

  maxNode(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.maxNode(node.right);
    }
  }
}
