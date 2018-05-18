class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

}

function peek(stack) {
  if (!stack.top) return 'The stack is empty';
  return stack.top.data;
}

function display(stack) {
  if (!stack.top) return 'The stack is empty';

  let current = stack.top;

  while (current.next) {
    console.log(current.data);
    current = current.next;
  }
}

const myStack = new Stack();

function main() {

  myStack.push('Kirk');
  myStack.push('Spock');
  myStack.push('McCoy');
  myStack.push('Scotty');
  console.log(JSON.stringify(myStack, null, 2));
  // myStack.pop();
  // console.log(JSON.stringify(myStack, null, 2));

  display(myStack);


}

main();



