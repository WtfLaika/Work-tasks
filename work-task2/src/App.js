import './App.css';
import { observer } from "mobx-react"
import checker from './store/checker';
import {useEffect,useState} from 'react'
import PropTypes from 'prop-types'
function App() {



const [result,setResult] = useState('')
  const selector1 = checker.table1.map((item, index) => {
    return <option className="selector-item" value={item.id} key={`1-${index}`}>{item.name}</option>
  })
  const selector2 = checker.table2.map((item, index) => {
    return <option className="selector-item" value={item.id} key={`2-${index}`}>{item.name}</option>
  })

  const selector3 = checker.table3.map((item, index) => {
    return <option className="selector-item" value={item.id} key={`3-${index}`}>{item.name}</option>
  })
useEffect (() => {
  
 setResult(checker.tableMain.map((item, index) => {
    if(item.isNeeded){
      return <div className='required-items' key={`${index}-main`}>&bull;&emsp;{item.name}-{item.id}</div>
    }
  } ) )
   
},[checker.stateIsChanged])
  



  return (
    <main>
      <div className="select-container">
        <select className='container-item' onChange={(e) => checker.changeState(e)} id='table1'>{selector1}</select>
        <select className='container-item' onChange={(e) => checker.changeState(e)} id='table2'>{selector2}</select>
        <select className='container-item' onChange={(e) => checker.changeState(e)} id='table3'>{selector3}</select>
      </div>
      <div className='required-items'>{result}</div>
    </main>
  );
}

App.propTypes = {
  selector1: PropTypes.node,
  selector2: PropTypes.node,
  selector3: PropTypes.node,
  result: PropTypes.node
}

export default observer(App);
