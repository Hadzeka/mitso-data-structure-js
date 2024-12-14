const { NotImplementedError } = require('../extensions/index.js');

function ListNode(x) {
  this.value = x;
  this.next = null;
}

module.exports = function removeKFromList(l, k) {
  // Создаем временный узел, чтобы упростить удаление
  let dummy = new ListNode(0);
  dummy.next = l;
  let current = dummy;

  // Проходим по списку и удаляем элементы со значением k
  while (current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  // Возвращаем голову нового списка, пропуская временный узел
  return dummy.next;
}
