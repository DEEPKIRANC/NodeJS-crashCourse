const obj={
    name:"Deep",
    age:24,
    city:"Raipur",
    salary:46000
}

const displayUser=()=>{
    console.log("Name : ",obj.name," , Age: ",obj.age," ,City: ",obj.city);
}

const userSalary=()=>{
    return obj.salary * 12;
}

module.exports={displayUser,userSalary};