console.log('first')

setTimeout(()=>{
    console.log('second')
}, 0)

console.log('third')

//output order is: first, third, second.
//this is because callbacks are offloaded, giving priority to immediate opeartions, no matter how big
//or small the timeout is