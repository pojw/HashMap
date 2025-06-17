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
    while (current != null) {
      i += 1;
      current = current.next;
    }
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
      if (current.content.key == value) {
        console.log(true);
        console.log(current.content.value);
        return current.content.value;
      }
      if (current.next == null) {
        console.log(false);
        return false;
      }
      current = current.next;
    }
  }
  containsAt(value) {
    let current = this.head;
    let count = 0;
    while (true) {
      if (current.content.key == value) {
        console.log(true);
        console.log(current.content.value);
        return count;
      }
      if (current.next == null) {
        console.log(false);
        return false;
      }
      current = current.next;
      count += 1;
    }
  }
  toStringKey() {
    let string = [];
    let length = this.size();
    let current = this.head;
    while (length > 0) {
      console.log(current.content);
      string.push(current.content.key);
      current = current.next;
      length -= 1;
    }
    console.log(string);
    return string;
  }
  toStringValue() {
    let string = [];
    let length = this.size();
    let current = this.head;
    while (length > 0) {
      console.log(current.content);
      string.push(current.content.value);
      current = current.next;
      length -= 1;
    }
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
    console.log(array);
    for (let i = 0; i < length; i++) {
      if (array[i] == null) {
        // console.log("nothing in " + i);
      } else if (array[i].key) {
        console.log("key in " + i);
      } else if (this.array[i].contains(key)) {
        console.log(this.array[i].contains(key));
        return this.array[i].contains(key);
      } else {
        return false;
      }
    }
  }
  has(key) {
    let array = this.array;
    let length = this.capacity;
    console.log(array);
    for (let i = 0; i < length; i++) {
      if (array[i] == null) {
        // console.log("nothing in " + i);
      } else if (array[i].key) {
        console.log("key in " + i);
      } else if (this.array[i].contains(key)) {
        console.log(this.array[i].contains(key));
        return true;
      } else {
        return false;
      }
    }
  }
  remove(key) {
    let array = this.array;
    for (let i = 0; i < this.capacity; i++) {
      if (array[i] == null) {
        continue;
      } else if (array[i].key == key) {
        array[i] = [];
        console.log("removed");
        console.log(this.array);

        return;
      } else if (this.array[i].contains(key)) {
        let length = this.array[i].containsAt(key);
        this.array[i].removeAt(length);
        console.log("removed form linked list");
        console.log(this.array);
        return;
      }
    }
  }
  length() {
    let count = 0;

    for (let i = 0; i < this.capacity; i++) {
      const entry = this.array[i];

      if (this.array[i] == null) {
        continue;
      } else if (this.array[i].key) {
        count += 1;
      } else if (entry instanceof LinkedList) {
        let size = this.array[i].size();
        count += size;
      }
    }
    console.log(count);
    return count;
  }
  clear() {
    for (let i = 0; i < this.capacity; i++) {
      this.array[i] = [];
    }
    console.log(this.array);
  }
  keys() {
    let keys = [];
    for (let i = 0; i < this.capacity; i++) {
      const entry = this.array[i];

      if (this.array[i] == null) {
        continue;
      } else if (this.array[i].key) {
        console.log("fsdlkfj" + this.array[i].key);
        keys.push(this.array[i].key);
        console.log(keys);
      } else if (entry instanceof LinkedList) {
        let linkedArray = this.array[i].toStringKey();
        console.log(linkedArray);
        for (let i = 0; i < linkedArray.length; i++) {
          keys.push(linkedArray[i]);
          console.log(linkedArray[i]);
        }
      }
      return keys;
    }
    console.log(keys);
    console.log("hefhsjdfljsd");
  }
  values() {
    let keys = [];
    for (let i = 0; i < this.capacity; i++) {
      const entry = this.array[i];

      if (this.array[i] == null) {
        continue;
      } else if (this.array[i].key) {
        console.log("fsdlkfj" + this.array[i].value);
        keys.push(this.array[i].value);
        console.log(keys);
      } else if (entry instanceof LinkedList) {
        let linkedArray = this.array[i].toStringValue();
        console.log(linkedArray);
        for (let i = 0; i < linkedArray.length; i++) {
          keys.push(linkedArray[i]);
          console.log(linkedArray[i]);
        }
      }
    }
    console.log(keys);
    return keys;
  }
  entries() {
    let keys = this.keys();
    let values = this.values();
    console.log("ffff");
    let entries = [];
    for (let i = 0; i < keys.length; i++) {
      let obj = [keys[i], values[i]];
      entries.push(obj);
    }
    console.log(entries);
    return entries;
  }
}

let test = new hashMap(0.75, 10, []);

test.set("jaylin", "hernandez");
test.set("banana", "yellow");

test.set("worddfo", "testing");
test.set("lamperes", "etesing");
test.set("jaylin", "rangel");

test.keys();
test.values();
test.entries();
