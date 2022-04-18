let names = prompt('Type Your Name')
let roll = prompt('Type Your Roll Number')
let reg = prompt('Type Your Reg Number')
let sch = prompt('Type Your School Name')

let bn = prompt('Bangla')
let en = prompt('English')
let math = prompt('math')
let s = prompt('Science')
let sc = prompt('S Science')
let rel = prompt('Religion')



console.log(`

    Your Name : ${names}
    Roll Number : ${roll} 
    Reg Number : ${reg} 
    School Name : ${sch}
 >>===============================================================>>
  Subject           Markes                Gpa                   Grade
 Bangla             ${bn}               ${gpa(bn)}          ${grade(bn)}
 English            ${en}               ${gpa(en)}          ${grade(en)}
 Math               ${math}             ${gpa(math)}        ${grade(math)}
 Science            ${s}                ${gpa(s)}           ${grade(s)}
 S Science          ${sc}               ${gpa(sc)}          ${grade(sc)}
 Religion           ${rel}              ${gpa(rel)}         ${grade(rel)}

`);