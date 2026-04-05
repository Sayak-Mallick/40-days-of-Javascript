// functions in callstack

function f1() {
  console.log("This is f1");
}

function f2() {
  f1();
  console.log("This is f2");
}
 
function f3() {
  f2();
  console.log("This is f3");
}

f3();
