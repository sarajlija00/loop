function finalGrade (exam,projects) {
  if (exam > 90 && projects > 10 ){
    return 100;    
}
  if (exam > 75 && projects <= 5) {
    return 90;
}
  if (exam > 50 && projects <= 2) {
    return 75;      
}
    return 0;
} 

let result = finalGrade (100, 12);
console.log (result);
result = finalGrade (99, 0);
result = finalGrade (10, 15);
result = finalGrade (85, 5);
result = finalGrade (55, 3);
result = finalGrade (55, 0);
result = finalGrade (20, 2);
    
finalGrade (100, 12);
finalGrade (99, 0);
finalGrade (10, 15);
finalGrade (85, 5);
finalGrade (55, 3);
finalGrade (55, 0);
finalGrade (20, 2);