function encontrarDuplicados(nume) {
    const replica = [];
    for (let i = 0; i < num.length; i++) {
      for (let j = i + 1; j < nume.length; j++) {
        if (num[i] === num[j]) {
          replica.push(num[i]);
          break;
        }
      }
    }
    return replica;
  }
