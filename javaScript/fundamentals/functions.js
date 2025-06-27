// Regular Function
function salaan(){
    console.log("Assalamu Alaikum")
}
salaan();

// Arrow Function
const salaanArrow = () => {
    console.log("Assalamu Alaikum")
}

const getSalaan = salaanArrow();
console.log(getSalaan)

// function with paramaters
const add = (a,b)=>{
    return a + b
}
const result  = ad(5,5)
console.log(result);

// callback Function
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

// recursive Function
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}