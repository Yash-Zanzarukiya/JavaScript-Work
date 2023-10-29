
let promiseOne = new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("Inside The Promise One...");
        let err = true;
        if(!err)
            resolve({user:"yashpz",pass:"9506"})
        else
            reject("Sorry darling! there is Some Error....")
    },1000)
})

promiseOne
.then(function(para){
    console.log(para);
    console.log("Promise Kept...");
    return para.user
})
.then((data)=>console.log("UserName: "+data))
.catch(function(err){
    console.log(err);
})

async function consumePromiseOne(){
    try {
        let response  =  await promiseOne
        console.log("Inside consume");
        console.log(response);
    } catch (error) {
        console.log("Error: "+error);
    }
}

consumePromiseOne()