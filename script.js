let grade = 85;
if (grade >= 0 && grade <= 100) {
  if (grade >= 90) {
    console.log("A");
  } else if (grade >= 80) {
    console.log("B");
  } else if (grade >= 70) {
    console.log("C");
  } else if (grade >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
} else {
  console.log("Invalid grade");
}

switch (true) {
  case grade < 0 || grade > 100:
    console.log("Invalid grade");
    break;
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
    console.log("B");
    break;
  case grade >= 70:
    console.log("C");
    break;
  case grade >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}
