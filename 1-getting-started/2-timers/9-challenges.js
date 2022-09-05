/**
Challenge 1:

  Print "Hello World" forever. Starting with a delay of 1 second
  but then incrementing the delay by 1 second each time.
  The second time will have a delay of 2 seconds
  The third time will have a delay of 3 seconds.

  Include the delay in the printed message
  Hello World. 1
  Hello World. 2
  Hello World. 3
  ...

  Constraints: You can only use const (no let or var)

Challenge 2:

  Just like Challenge 1 but this time with repeated delay values.
  Print Hello World 5 times with a delay of 100 ms.
  Then Print it again 5 more times with a delay of 200 ms.
  Then print it again 5 more times with a delay of 300 ms.
  And so on until the program is killed.

  Include the delay in the printed message:
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 100
  Hello World. 200
  Hello World. 200
  Hello World. 200
  ...

  Constraints:
   - Only use setInterval (not setTimeout)
   - Use only ONE if statement

 */

// 01
function solution01() {
  const delayFn = (delayTime) => {
    setTimeout(() => {
      console.log(`Hello World. ${delayTime}`);
      delayFn(delayTime + 1);
    }, delayTime * 1000);
  };

  delayFn(1);
}

function solution02() {
  count = 0;
  const delayFn = (delayTime) => {
    if(count == 5) {
      clearInterval(intervalFn);
      count = 0;
    }
    const intervalFn = setInterval(() => {
      console.log(`Hello World ${delayTime}`);
      delayFn(delayTime + 100);
    }, delayTime + 100);
  }
  delayFn(100);
}

// trial
solution02();
