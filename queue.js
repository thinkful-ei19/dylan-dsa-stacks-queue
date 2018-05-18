class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (!this.first) this.first = node;
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }
    this.last = node;
  }

  dequeue() {
    if (!this.first) return;
    const node = this.first;
    this.first = node.prev;
    if (node === this.last) this.last = null;
    return node.value;
  }


}

function peek(q) {
  if (!q.first) return null;
  return q.first.value;
}

function display(q) {
  if (!q.first) return null;

  let current = q.first;

  while (current) {
    console.log(current.value);
    current = current.prev;
  }
}

const starTrek = new Queue();

function main() {

  starTrek.enqueue('Kirk');
  starTrek.enqueue('Spock');
  starTrek.enqueue('Uhura');
  starTrek.enqueue('Sulu');
  starTrek.enqueue('Checkov');

  starTrek.dequeue('Kirk');
  starTrek.dequeue('Spock');

  // console.log(starTrek, null, 2);

}

main();

// console.log(peek(starTrek));
console.log(display(starTrek));