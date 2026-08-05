let studentnames:string[]=["Suresh", "Mahesh", "Naresh"];
let studentmarks: number[]= [75, 80, 82];
let updatedmark: number[]=[];
let totalmark: number= 0;

for (let i=0; i < studentmarks.length; i++){
    updatedmark[i]= studentmarks[i]!+10;
    totalmark+=studentmarks[i]!
    console.log(studentnames[i] +";" + updatedmark[i]);

}
let average:number = totalmark/studentmarks.length;
console.log("Average = " + average); 