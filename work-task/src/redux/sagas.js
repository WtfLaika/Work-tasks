
import { takeEvery } from '@redux-saga/core/effects';

const myRegEx = /0/g;
const randomSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+|<>:=-";
export function* sagaWatcher() {
    yield takeEvery()
}


export function* sagaWorker() {
    try{
        const payloader = '';
        for( i = 0; i < 5;i++){
            payloader += call(get)
        }
    }
}










async function getRandom(){
    return randomSymbols[Math.floor(Math.random()*(randomSymbols.length -1))]
}
// createStr() {

//     this.str = '';
//     for (let i = 0; i < 5; i++) {
//         this.str += this.getRandom();
//     }
//     this.str = String(this.str)
//     return this.checkStr();
// }
// getRandom() {
//     return this.randomSymbols[Math.floor(Math.random() * (this.randomSymbols.length - 1))];
// }
// function checkStr(str) {
    //   if (myRegEx.test(str)) {
    //     return 0
    //   } else if (checkPal(str)) {
    //     return showStr(str, 'red');
    //   } else if (checkOnlyNumb(str)) {
    //     return showStr(str, 'blue')
    //   }
    //   return showStr(str,'white');
  
  
    // }
    // function checkPal(str) {
    //   let revStr = str.split('').reverse().join('');
    //   console.log(`revStr ${revStr}`)
    //   if (str == revStr) {
    //     return true;
    //   }
    //   return false;
    // }
    // function checkOnlyNumb(str) {
    //   let numbStr = Number(str);
    //   console.log(`numbStr: ${numbStr}`)
    //   if(numbStr == undefined || numbStr == null){
    //     return false;
    //   }else{
    //     return true;
    //   }
    // }
    // function showStr(string, myColor = 'white') {
    //   setResult(...result,{str:string,color:myColor})
    //   console.log(result);
     
    // }