import './App.css';
import React from 'react';
import {useState,useEffect} from 'react';
import MyList from './component/MyList';
import {observer} from 'mobx-react';
import first from './store/Variables';
/*

Ваша задача создать генератор случайных строк. Каждое значение должно состоять из 5 символов.

Настройте генерацию и отображение значений через каждые 3 секунды.

При отображения отображении значения пользователю выполните следующие условия:
1) если созданное значение является палиндромом отобразите его красным цветом;
2) если созданное значение состоит только из цифр отобразите его синим цветом;
3) если созданное содержит 0 не отображайте его вовсе.

При настройке отображения через каждые 3 секунды используйте RxJs.

Ожидаем от Вас ссылку на github, удачи в выполнении:)
 */
function App() {

const myRegEx = /0/g;
const randomSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+|<>:=-";
const [result,setResult] = useState(['ad24d']);
let [str,setStr] = useState([]);
const [randomSym,setRandomSym] = useState(' ');
let myARR = [1,2,3,4,5]

  function getRandom() {
    return randomSymbols[Math.floor(Math.random() * (randomSymbols.length - 1))];
  }
 

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
  return ( 
<main onClick={first.showStr} >
<MyList  result={result}/>
</main>
  )
 
}

export default observer(App);
