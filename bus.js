function bus (cap, on, wait) {
 const placeInTheBus = cap - on;
 if (wait > placeInTheBus) {
   console.log ('Bus full', " Remaining people ", wait - placeInTheBus);
 } else {
     console.log ('bus capacity', cap, "People in the bus", on + wait, 'Remaining people ', placeInTheBus - wait);

 }
 }


bus (10, 5, 5);

bus (100, 60, 50);