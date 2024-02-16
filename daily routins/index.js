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
  const isHotWaterReady = JSON.parse(readLine());
  const isBreakfastReady = JSON.parse(readLine());

/* Please do not modify anything above this line */
const takingShower=()=>{
    return new Promise((resolve,reject)=>{
        isHotWaterReady?resolve("Taken Shower"):reject("Hot Water Not Ready")
    });
}
const breakFast=()=>{
    return new Promise((resolve,reject)=>{
        isBreakfastReady?resolve("Had Breakfast"):reject("Breakfast Not Ready")
    });
}
const work=()=>{
    return new Promise((resolve,reject)=>{
        resolve("Got to Work")
    });
}
const myPromise=async()=>{
    try{
    const shower=await takingShower();
    console.log(shower)
    const breakfast=await breakFast();
    console.log(breakfast)
    const working=await work();
    console.log(working)
    }catch(error){
        console.log(error)
    }
}
myPromise()
  // Write your code here
}
