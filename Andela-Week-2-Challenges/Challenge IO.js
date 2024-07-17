/* declaring year of Birth as the variable  and prompt messaage*/
    var YearOfBirth = prompt ("Please enter your year of birth");
    //setting the conditions and outputs to the console.
      if (YearOfBirth < 1990){
          console.log ('elder');
      }
     else if(YearOfBirth >=1990 && YearOfBirth <=2001){
         console.log ("youth");
     } 
     else if (YearOfBirth > 2001){
         console.log("minor");
     }
     else {
         console.log("check input");
     }
    