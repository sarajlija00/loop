function insomnia (counting) {
  for (sheep = 1; sheep <= counting; sheep++) {
      if (sheep == 1) {
          console.log (sheep +" ovca");
      }
      if (sheep > 1 && sheep <= 4) {
          console.log (sheep + ' ovce');
      }
      if (sheep > 4) {
          console.log (sheep + ' ovaca');
      }
  }
}

insomnia (20);