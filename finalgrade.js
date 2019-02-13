function finalGrade (exam,projects) {
    const validGrade = exam > 0 && exam < 101;
    if ( ! validGrade ){
        console.log ("invalid");
    
    }
    if (exam > 90 && projects > 10) {
        console.log (100);
        
    }
    if (exam > 75 && projects <= 5) {
        console.log (90);
        
    }
    if (exam > 50 && projects <= 2) {
        console.log (75);
        
    }
    
    
}



finalGrade (100, 12);
finalGrade (99, 0);
finalGrade (10, 15);
finalGrade (85, 5);
finalGrade (55, 3);
finalGrade (55, 0);
finalGrade (20, 2);