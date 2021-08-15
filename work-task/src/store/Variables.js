import { action, makeAutoObservable, makeObservable, observable, autorun, } from 'mobx'
class Variables {
    result = [{str:'asdasd',color:'white'}]
    myRegEx = /0/g;
    randomSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+|<>:=-";
    str = '';
    constructor() {
        
        makeAutoObservable(this)
    }


    createStr() {

        this.str = '';
        for (let i = 0; i < 5; i++) {
            this.str += this.getRandom();
        }
        this.str = String(this.str)
        return this.checkStr();
    }
    getRandom() {
        return this.randomSymbols[Math.floor(Math.random() * (this.randomSymbols.length - 1))];
    }
    checkStr() {
        if (this.myRegEx.test()) {
            return 0
        } else if (this.checkPal()) {
            return this.showStr();
        } else if (this.checkOnlyNumb()) {
            return this.showStr('blue')
        }
        return this.showStr('white');


    }
    checkPal() {
        let revStr = this.str.split('').reverse().join('');
        console.log(`revStr ${revStr}`)
        if (this.str == revStr) {
            return true;
        }
        return false;
    }
    checkOnlyNumb(){
        console.log(Number(this.str))
        if (Number(this.str) == undefined || isNaN(Number(this.str))) {
            return false;
        } else {
            return true;
        }
    }
    showStr(myColor) {
        this.result.push({str:this.str,color:myColor})
        console.log(this.result);
    }

}
const first = new Variables()
autorun(() => {
    first.createStr()
}, {
    name: 'Custom autorun',
    delay: 3000
})
export default first;