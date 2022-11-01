import { useRef, useState } from 'react';
import './App.css';

function App() {

  const qas = [
    { q: 'Q1:質問文章が入ります。', a: 'A1：回答文章が入ります。'},
    { q: 'Q2:質問文章が入ります。', a: 'A2：回答文章が入ります。'},
    { q: 'Q3:質問文章が入ります。', a: 'A3：回答文章が入ります。'},
    { q: 'Q4:質問文章が入ります。', a: 'A4：回答文章が入ります。'},
    { q: 'Q5:質問文章が入ります。', a: 'A5：回答文章が入ります。'}
  ];

  const clickFnc = (e) => {
    e.target.nextSibling.className === 'a_class active' ? 
    e.target.nextSibling.classList.remove('active') : 
    e.target.nextSibling.classList.add('active');
  }
  const clickFnc2 = (e) => {
    e.target.className === 'a_class active' ? 
    e.target.classList.remove('active') : 
    e.target.classList.add('active');
  }

  const closeFnc=()=>{
    const getTags=document.querySelectorAll('#pTag');
    getTags.forEach((getTag)=>{
      getTag.className==='a_class active' &&
      getTag.classList.remove('active');
    });
  }

  return (
    <div className="App">
      <h2>"Q" and "A" App</h2>
      {qas.map((qa, index) => (
        <div key={index}>
          <p onClick={clickFnc} className='q-class'>{qa.q}</p>
          <p id='pTag' onClick={clickFnc2} className='a_class'>{qa.a}</p>
        </div>
      ))}
      <button onClick={closeFnc}>All Close</button>
    </div>
  );
}

export default App;
