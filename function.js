
/**
 * Create a function that will return children, teenagers, young people, old people from the age
 * @param {*} names 
 * @param {*} age 
 * @returns 
 */

const ageCell = (names,age) => {

    let cell='';

    if (age >= 0 && age <= 12) {
        cell = `Hi ${names} You Are children`
    }else if ( age >= 13 && age <= 19) {
        cell = `Hi ${names} You Are Children`
    }else if ( age >= 20 && age <= 35) {
        cell = `Hi ${names} You Are young `
    }else if ( age >= 36 && age <= 45) {
        cell = `Hi ${names} You Are Young Old Man`
    }else if ( age >= 46 && age <= 100) {
        cell = `Hi ${names} You Are old man`
    }else{
        cell = `${names} apne hoy jin na hoy vut`
    }

    return cell;
    
}
            // children teenagers young people function End






   /**
    * Create a function that will return the area of a rectangle, square, triangle
    * @param {*} type 
    * @param {*} valu1 
    * @param {*} valu2 
    * @returns 
    */

const areaCell = (type, valu1, valu2 = null ) => {

    let shape;
    let area;

    if (type == 'r') {

        shape = `rectangle`
        area = `${valu1}* ${valu2}`
    }else if (type == 's') {

        shape = `square`
        area = `${valu1 * valu1}`
    }else if (type == 't') {

        shape = `triangle`
        area = `${.5 * valu1 * valu1}`
    }

    return shape,area;

}
          // rectangle square triangle function End









/**
 * GPA, GRADE function 
 * @param {*} markes 
 * @returns 
 */

const gpa = (markes) => {

    let gpa;

    if (markes >= 0 && markes <=32) {
        gpa = 0
    }else if (markes >= 33 && markes <=39) {
        gpa = 1
    }else if (markes >= 40 && markes <=49) {
        gpa = 2
    }else if (markes >= 50  && markes <=59) {
        gpa = 3
    }else if (markes >= 60 && markes <=69) {
        gpa = 3.5
    }else if (markes >= 70 && markes <=79) {
        gpa = 4
    }else if (markes >= 80 && markes <=100) {
        gpa = 5.00
    }else{
        gpa = NaN
    }
    return gpa;
}

const grade = (markes) => {

    let grade;

    if (markes >= 0 && markes <= 32) {
        grade = 'F'
    }else if (markes >=33 && markes <=39) {
        grade = 'D'
    }else if (markes >=40 && markes <=49) {
        grade = 'C'
    }else if (markes >=50 && markes <=59) {
        grade = 'B'
    }else if (markes >=60 && markes <=69) {
        grade = 'A-'
    }else if (markes >=70 && markes <=79) {
        grade = 'A'
    }else if (markes >=80 && markes <=100 ) {
        grade = 'A+'
    }else{
        grade = 'invalid'
    }
    return grade;
}
               // GPA GRADE  function End








/**
 * Create an age calculator function
 * @param {*} names 
 * @param {*} age 
 * @returns 
 */

const ageCell2 = (names,age) => {
    
    let boyos ;

    if (names,age) {
        boyos = `Hi ${names}  You Are ${2022 - age} Years Old `
    }else{
        boyos = `invalid information`
    }
    return boyos;
}
                //  Age calculator function End








/**
 * Create a BMI function for health 
 */

 const bmiCalc = (weight, height) => {

    return `Your bmi is ${weight / (height * height)}`;

}
            // BMI function End











/**
 * currency converter function style 01
 * @param {*} names 
 * @param {*} curency 
 * @param {*} ammount 
 * @returns 
 */


const curency_converter = (names,curency,ammount) => {

    if (curency == 'dollar') {
        return` Hi ${names} Your ${ammount} ${curency} = ${ammount * 84} BDT`
    }else if (curency == 'pound') {
        return` Hi ${names} Your ${ammount} ${curency} = ${ammount * 112} BDT`
    }else if (curency == 'euro') {
        return` Hi ${names} Your ${ammount} ${curency} = ${ammount * 94} BDT`
    }else{
        return 'Invalid Information'
    }
}











/**
 * currency converter function style 02
 * @param {*} curency 
 * @param {*} ammount 
 * @returns 
 */



const curency_converter2 = (curency,ammount) => {

    let total;

    if (curency == 'dollar') {

        total = `${ammount * 84}`
    }else if (curency == 'pound') {

        total = `${ammount * 112}`
    }

    return total;
    
}


