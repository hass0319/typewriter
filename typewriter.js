const sentence = "hello there from lighthouse labs";
// process.stdout.write('\n');
let timeIncrement = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
  process.stdout.write(sentence[i]);
  if (i === sentence.length - 1) {
    process.stdout.write('\n');
  }
  }, timeIncrement += 50);
}

