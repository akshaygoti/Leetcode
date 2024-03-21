// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

const number = 10;  

const revnumber = () => {
  let mynumaber = number.toString().split("").reverse().join("");  //toString =>number string convert  //split => chuta pade ->  "1" "2" "3"   //reverse => "1" "2" "1"  //join => this do join 121 
                                                                                                                            
  let mystrnumner = number.toString();

  if(mystrnumner==mynumaber){
    console.log("this is true");
  }
  else{
    console.log("this is false");
  }
};

revnumber();