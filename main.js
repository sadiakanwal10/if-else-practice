"use strict";
// example 01 //
let isRaining = true;
if (isRaining) {
    console.log("today is a rainy day");
}
else {
    console.log("today is a sunny day");
}
// marksheet of a student //
let physicsMarks = 90;
let chemistryMarks = 80;
let mathsMarks = 95;
let compMarks = 75;
let totalMarks = 400;
let obtainedMarks = physicsMarks + chemistryMarks + mathsMarks + compMarks;
let percentage = (obtainedMarks / totalMarks) * 100;
console.log("MARKSHEET OF MR.A");
console.log("physics marks:", physicsMarks);
console.log("chemistry marks:", chemistryMarks);
console.log("math marks:", mathsMarks);
console.log("comp marks:", compMarks);
console.log("total marks:", totalMarks);
console.log("obtained marks:", obtainedMarks);
console.log("percentage:", percentage.toFixed(0) + "%");
if (percentage >= 80) {
    console.log("GRADE A1");
}
else if (percentage >= 70) {
    console.log("GRADE A");
}
else if (percentage >= 60) {
    console.log("GRADE B");
}
else {
    console.log("you are fail");
}
