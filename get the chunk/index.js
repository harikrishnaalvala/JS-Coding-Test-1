"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n").map((str) => str.trim());
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const myString = readLine();
  const startString  = readLine();
  const endString = readLine();

/* Please do not modify anything above this line */
const index=myString.indexOf(startString)
const index2=myString.indexOf(endString)
const getChunk=myString.slice(index,index2)
console.log(getChunk)
  // Write your code here

}
