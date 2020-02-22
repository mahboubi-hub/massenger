import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/onboard/login.js';
// class Parent extends React.Component {
//     render() {
//         return ( <

//             div >
//             <
//             Header name = 'reza'
//             famili = 'mahbob' / >
//             <
//             Footer / >

//             <
//             /div>

//         )
//     }
// }

// function Header(props) {
//     return ( <
//         div >
//         <
//         h1 > this is a
//         function companent < /h1> <
//         p > this is a para < /p> <
//         p className = 'red' > my name is a { props.name } { props.name } < /p>

//         <
//         /div>
//     )
// }
// class Footer extends React.Component {
//     render() {
//         return ( <
//             h6 > this is a class < /h6>
//         )
//     }
// }

ReactDOM.render( <Login /> , document.getElementById('root'));