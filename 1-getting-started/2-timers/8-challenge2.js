// Print "Hello World"
// Every second
// And stop after 5 times
let count = 0;
let helloLoop = setInterval(_ => {
  console.log('Hello World');
  count++;
  stopFunction(count);
}, 1000);

const stopFunction = (countTimes) => {
  if(countTimes >= 5) {
    clearInterval(helloLoop);
    console.log(`Done`);
  }
}
// After 5 times. Print "Done" and let Node exit.
