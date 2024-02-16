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
  const name = readLine();
  const role = readLine();
  const salary = JSON.parse(readLine());
let taxPercent=0;
  function Employee(name, role, salary) {
/* Please do not modify anything above this line */
this.name=name;
this.role=role;
this.salary=salary;
this.getTaxAmount=function(){
    if(this.salary>=500000){
        taxPercent=5;
    }
    else if(this.salary>=1000000){
        taxPercent=10;
    }
    return this.salary*taxPercent/100;
};
    // Write your code here

  }

  const employee1 =new Employee(name, role, salary);// Write your code here

/* Please do not modify anything below this line */

  console.log(employee1.getTaxAmount());
}
