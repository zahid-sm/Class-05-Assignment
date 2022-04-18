let names = prompt('Type Your Name')
let curency = prompt(`Which country's money do you want to exchange ?`)
let ammount = prompt('How much money do you want to convert?')


console.log(` Hi ${names} Your ${ammount} ${curency} = ${curency_converter2(curency,ammount)} BDT`);