class webbrain{

    static year = 0;

    static getYear(){
        console.log(++webbrain.year);
    }
    age = 0;
    getAge(){
        console.log(++this.age);
    }
}
let st1 = new webbrain();
let st2 = new webbrain();


console.log("-----men funksiya orqali chaqirganim -----");
webbrain.getYear()
webbrain.getYear()
webbrain.getYear()

console.log("-----men oddiy orqali chaqirganim -----");

st1.getAge()
st1.getAge()
st2.getAge()


// console.log("-----men static orqali chaqirganim -----");
// st1.getYear()
// st1.getYear()
// st2.getYear()
// st2.getYear()