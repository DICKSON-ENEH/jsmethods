let name = ["leke", "dickson", "mic", "josh", " cynthia", [2, true, "fruits"]]
console.log(name.length)
let random = Math.floor(Math.random() *(name.length))
console.log(random)
console.log(name[random])

//name , property, squarebracket and position

//destructuring extract value from an object or an array and assign them to a new variable
let [a , b, x] = ["leke", "dickson", "mic", "josh", " cynthia"]
console.log(b)

let student = {
    name : "john",
    height: 6,
    skills:["js", "node", "react"]

}
console.log(student.skills[2])

 let {person, height, skills}=student
console.log(height)


document.getElementById("output").innerHTML
+= " manipulating html from js"
document.getElementById("put").innerHTML
= "<div><h2><i>italics text</></h2></div>"


// let user = prompt ("whats your name")
// document.write("welcome"+ " " + user)

//arithmetic operator 
//mondulus, addition ' increament and decreament


//asignment operator
let cy = 20
console.log(++cy)

let p = 7 
p++
console.log(p)

///comparison operator returns in boolean
//==, === , >,<,>=,<=,!=


let aa = 5
let bb = 10
let cc ="5"

b++
console.log(typeof aa ==="number")
console.log(typeof cc === typeof"number")

//strictly equals to refers to the datat type equals to refers to the value

console.log("2"<"12")
console.log("12000"<"12000")

const namesx = "dominic"
const namsx = "Atsactiya"
console.log(namesx + " " + namsx)


const  Tobi = ()=>{
     return " champepe" ;    
 }
console.log(Tobi)

Tobi()











