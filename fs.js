const fs=require('fs');

/*fs.writeFile("message.txt","Hello there Node!!",(error)=>{
    if(error)
    {
        throw error;
    }

    console.log("File Created !");
})
*/
fs.readFile("./message.txt","utf8",(error,data)=>{
    if(error)
    {
        throw error;
    }

    console.log(data);
})
console.log("This comes first ..?");