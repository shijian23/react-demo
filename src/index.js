import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'

// function tick() {
//   const element = (
//     <div>
//       <h1>哈哈哈哈哈</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById('root'))
// }
// setInterval(() => {
//   tick()
// }, 1000);

ReactDOM.render((<App></App>), document.getElementById('root'))