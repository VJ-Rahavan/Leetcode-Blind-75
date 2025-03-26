class ListNode {
  val = 0;
  next = null;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const createList = (arr) => {
  let obj = null;
  for (let i of arr) {
    obj = new ListNode(i, obj);
  }

  return obj;
};

const list = createList([1, 2, 3, 4, 5].reverse());

function reverseList(head) {
  let obj = null,
    cur = head;

  while (cur) {
    obj = new ListNode(cur.val, obj);
    cur = cur.next;
  }
  return obj;
}

// function reverseList(head) {
//   let obj = new ListNode(head.val),
//     cur = head.next;

//   while (cur !== null) {
//     const v = new ListNode(cur.val, obj);
//     obj = v;
//     cur = cur.next;
//   }
//   console.log(obj);
// }

reverseList(list);
