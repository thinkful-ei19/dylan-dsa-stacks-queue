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
      return this.top;
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
  if (!stack.top) return null;
  return stack.top.data;
}

function display(stack) {
  if (!stack.top) return null;

  let current = stack.top;

  while (current) {
    console.log(current.data);
    current = current.next;
  }
}

function isPalindrome(stack) {
  let tempStack = new Stack();
  stack = stack.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  for (let i = 0; i < stack.length; i++) {
    tempStack.push(stack[i]);
  }

  for (let i = 0; i < stack.length; i++) {
    let currentLetter = tempStack.pop();
    if (currentLetter !== stack[i]) {
      return false;
    }
  }

  return true;

}

function matching(str) {
  let tempStack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') tempStack.push(str[i]);
    if (str[i] === ')' && !tempStack.top) return false;
    if (str[i] === ')' && tempStack.top) tempStack.pop();
  }
  if (tempStack.top) {
    return false;
  } else {
    return true;
  }
}

const myStack = new Stack();

function main() {

  myStack.push('Kirk');
  myStack.push('Spock');
  myStack.push('McCoy');
  myStack.push('Scotty');
  // console.log(JSON.stringify(myStack, null, 2));
  myStack.pop();
  myStack.pop();
  // display(myStack);

  // console.log(isPalindrome('A man, a plan, a canal: Panama'));
  // console.log(isPalindrome('dadd'));

  console.log(matching('(( 5 + ( 4 - 2 ) ) )'));


}

main();



