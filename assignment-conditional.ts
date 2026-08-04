let customerName: string= "John Doe";
console.log(customerName);
let creditScore:number= 651;
if(creditScore >= 750){
    console.log("the loan is automatically approved");
    
}
else if(creditScore>=650 && creditScore<=750)
{
    console.log("additional checks are performed.");

}
else{
    console.log("the loan is denied.");
}
let income:number= 55000;
let DTI: number= 35.0;
if (income>= 50000 && DTI <= 40)
    {
  console.log( "loan to be considered.");
  console.log("Customer is employed");
  console.log(" DTI ratio is less than 40%, the loan is approved.");
}
else if(DTI>=40){
    console.log("DTI ratio is 40% or greater, the loan is denied.");
}
else{
    console.log("customer is unemployed");
    console.log("the loan is denied");
}

//switch
let employement: boolean = true;
let Loanstatus: any= "";

if(creditScore>=750 ){
   Loanstatus  = "Approved";
}
  if(creditScore>=650  && income>= 50000 && employement && DTI <= 40 )
  {
    Loanstatus  = "Approved";
  }
  else{
    console.log("denied");

  }

  switch(Loanstatus)
{
  case "Approved":
    {
  console.log("Final Result: Loan Approved");
            break;

    }
    case "denied":
        {
        console.log("Final Result: Loan Approved");
        break;
        }
        }
