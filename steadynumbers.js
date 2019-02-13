function steadyNumbers (number) {
  for (let steady = 1; steady < number; steady++) {
    const action = steady % 2;
    if (steady > 1 && action == 0) {
        console.log (steady);
    }
      
  }
}

steadyNumbers (55);