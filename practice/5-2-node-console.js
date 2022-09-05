console.dir(arguments);

function f1() {
  console.log("1");
  f2();
  function f2() {
    console.log("2");
  }
}
f1();
