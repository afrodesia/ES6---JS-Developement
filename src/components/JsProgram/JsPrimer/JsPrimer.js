export default class JsPrimer {}


// Boolean


var oBooleanTrue = new Boolean(true)
var oBooleanFalse = new Boolean(false)

console.log(oBooleanTrue)
console.log(oBooleanFalse)

if(oBooleanTrue){
    console.log("I am seriously truthy, see = ?")
}
if(oBooleanFalse.valueOf()){
    console.log("With valueOf, I am false")
}else{
    console.log("Without valueOf, I am still truthy ")
}

// The instanceof operater

var aStringObject = new String("string")
console.log(typeof aStringObject)
console.log(aStringObject instanceof String)

var aString = "This is a string"
console.log(aString instanceof String)

// Date Objects

var today = new Date()
console.log(today.getDate())
console.log(today.getMonth())
console.log(today.getFullYear())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getSeconds())
console.log(today.getTime())

var start = Date.now()
for (var i=0; i<10000; i++)
var end = Date.now()
var elapsed = end - start
console.log(elapsed)


// The + operator

var a = 25
a =+a
console.log(a)

var c = "Foo"
c=+c
console.log(c)
console.log(typeof c)

var zero = ""
zero=+zero
console.log(zero)
console.log(typeof zero)

// The ++ and --operators

var a = 1
var b = ++a

console.log(a)
console.log(b)

// var a, b, c 

// a = b = c = 0

// Boolean operators

// console.log(true && true)
// console.log(true && false)
// console.log("Foo" && "Bar")
// console.log("Foo" && false)
// console.log(false && (1 == 2))


console.log(true || true)
console.log(true || false)
console.log("Foo" || "Bar")
console.log("Foo" || false)
console.log(false || (1 == 2))

function greeting(name){
    name = name || "Ken"
    console.log("Hello " + name)
}
greeting("Hello " + name)

var s = new String("String")

console.log(!s)

var allowedToDrink = (age > 21) ? "yes" : "no"

function isAllowedToDrink(age){
    if(age > 21){
    return true
}else{
    return false
}
}

console.log(isAllowedToDrink(16))

