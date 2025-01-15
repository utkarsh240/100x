// function setTimeoutPromisified(ms){
//     return new Promise(resolve=> setTimeout(resolve,ms));
// }

// function afterDone(){
//     console.log("hello");
// }

// setTimeoutPromisified(5000).then(afterDone);


// function waitfor3sec(){
//     setTimeout(main,3000);

// }

// function main(){
//     console.log("hello");
// }

// waitfor3sec(main);

// function run() {
// 	console.log("I will run after 1s");
// }

// setTimeout(run, 1000);
// console.log("I will run immedietely");
// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   function callback() {
//       console.log("3 seconds have passed");
//   }
  
//   setTimeoutPromisified(3000).then(callback)
  

function doAsync(resolve){

    setTimeout(resolve,3000);

}


const p = new Promise(doAsync);

function callback(){
    console.log("3 second")
}


p.then(callback);
