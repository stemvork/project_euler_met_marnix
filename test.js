// const obj = {
//     #name: "UNSET",
//     log: [],
//     set current(name){
//         if(name == ""){
//             name = "EMPTY";
//         }
//         this.log.push(name);

//     },
// }


class OBJ{
    #name;
    log;
    constructor(){
        this.#name = "UNSET";
        this.log = [];
        this.unlocked = true;
    }
    set name(n){
        if(!this.unlocked) return;
        if(n.toUpperCase() !== n){
            console.warn(`tried to set name to ${n}, this will be converted to ${n.toUpperCase()}`);
        }
        if(n.length > 0){
            this.#name = n.toUpperCase();
        } else {
            console.warn(`tried to set name to "${n}", but an empty string or an invalid data type was passed. OBJ.name remains ${this.#name}`);
        }
    }
    get name(){
        if(!this.unlocked){
            console.warn("Access denied");
            return;
        }
        return this.#name;
    }
}
let f = (a, b) => a + b;

let p = new OBJ();
p.name = "";
console.log(p.name);
// console.log(f(1,2));
