class node {
  constructor(content, next) {
    this.content = content;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;

    //it needs a memeory of two, one to know the previess value, and one to store the next value
  }
  append(node) {
    if (this.head == null) {
      this.head = node;

      return;
    }
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
  prepend(node) {
    node.next = this.head;
    this.head = node;
  }

  size() {
    let i = 0;
    let current = this.head;
    if (current.next == null) {
      console.log(i);
      return i;
    }
    while (current.next != null) {
      i += 1;
      console.log(current.content);
      current = current.next;
    }
    i += 1;
    console.log(i);

    return i;
  }
  first() {
    console.log(this.head);
    return this.head;
  }
  tail() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    console.log(current.content);
    return current.content;
  }
  at(index) {
    if (this.size() < index) {
      console.log("to loarge");
      return;
    }
    let current = this.head;
    while (index > 1) {
      current = current.next;
      index -= 1;
    }
    console.log(current.content);
    return current.content;
  }
  pop() {
    let current = this.head;
    let length = this.size();
    if (length == 1) {
      current = null;
      return;
    }
    if (length == 2) {
      current.next = null;
      return;
    }
    while (length > 2) {
      length -= 1;
      current = current.next;
    }
    current.next = null;
    console.log(this.head);
    return this.head;
  }
  contains(value) {
    let current = this.head;
    while (true) {
      if (current.content == value) {
        console.log(true);
        return true;
      }
      if (current.next == null) {
        console.log(false);
        return false;
      }
      current = current.next;
    }
  }
  toString() {
    let string = "";
    let length = this.size();
    let current = this.head;
    while (length > 0) {
      console.log(current.content);
      string += `(${current.content})-> `;
      current = current.next;
      length -= 1;
    }
    string += "null";
    console.log(string);
    return string;
  }
  insertAt(value, index) {
    let current = this.head;
    let previous = current;
    let length = this.size();
    if (index > length) {
      console.log("to large index");
      return;
    }
    if (index == 0) {
      this.prepend(value);
      console.log(this.head);
      return;
    }
    while (index > 0) {
      previous = current;
      current = current.next;
      index -= 1;
    }
    value.next = current;
    previous.next = value;

    console.log(this.head);
  }
  removeAt(index) {
    let current = this.head;
    let previous = current;
    let length = this.size();

    if (length < index) {
      console.log("too long");
      return;
    }
    while (index > 0) {
      previous = current;
      current = current.next;
      index -= 1;
    }
    previous.next = current.next;
    console.log(this.head);
    return;
  }
}

class hashMap {
  constructor(loadFactor, capacity, array) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.array = array;
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    hashCode = hashCode % this.capacity;
    console.log(hashCode);
    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key);

    if (this.array[index] == null) {
      console.log("1");
      this.array[index] = { key: key, value: value };
      console.log(this.array[index]);
    } else if (this.array[index].key == key) {
      this.array[index].value = value;
      console.log("repeat");
    } else if (this.array[index].head == null) {
      console.log("working");

      console.log(this.array[index]);
      let list = new LinkedList(null);
      console.log(list);
      console.log("e");
      let exisiting = new node(this.array[index], null);
      list.append(exisiting);
      console.log(list);
      let newNode = new node({ key: key, value: value }, null);
      list.append(newNode);

      this.array[index] = list;
      console.log(this.array[index].head.next);
      console.log(this.array[index]);
      console.log("bo");
    } else {
      console.log("em");
      let testing = this.array[index].head;
      console.log(testing);

      console.log(testing.next);
      let repeat = false;
      while (testing.next != null) {
        console.log("going");
        console.log(testing.content.key);
        if (testing.content.key == key) {
          testing.content.value = value;
          repeat = true;
          console.log(this.array[index].head);
          break;
        }
        testing = testing.next;
      }
      console.log(this.array[index].head);

      if (repeat == false) {
        let newNode = new node({ key: key, value: value }, null);
        testing.next = newNode;
        console.log(this.array[index].head);
      }
    }
  }

  get(key) {
    let array = this.array;
    let length = this.capacity;
    for (let i = 0; i < length; i++) {
      console.log(array[i]);
      console.log(i);
      if (array[i] == null) {
        console.log(i);
      }
    }
  }
}

let test = new hashMap(0.75, 10, []);

test.set("jaylin", "hernandez");
test.set("banana", "yellow");

test.set("worddfo", "testing");
test.set("lamperes", "etesing");
test.set("jaylin", "rangel");

test.get("jaylin");
