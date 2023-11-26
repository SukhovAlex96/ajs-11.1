export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`игрок ${character.name} уже есть в комнаде`);
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((item) => {
      this.add(item);
    });
  }

  toArray() {
    return Array.from(this.members);
  }

  * [Symbol.iterator]() {
    const arr = this.toArray();
    // let current = 0;
    // const last = arr.length;
    for (let i = 0; i < arr.length; i += 1) {
      yield arr[i];
    }
  }
}
