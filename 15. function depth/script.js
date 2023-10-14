const user ={
    name:"webbrain",
    last:"Academy",
    get fullName(){
        console.log(this.name, this.last);
    },
    set fullName(value){
        console.log(value || (this.name,this.last));
    }
}


// user.fullName()
user.fullName = {name:"eshmat", last:"Toshmat"}
user.fullName