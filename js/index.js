import React from 'react';
import ReactDom from 'react-dom';

//import Name from './name';
import Todoitem from './Todoitem';

// Alltid med stor bokstav

function App(){
    return (
        <section className="wrapper"> 
            <h1>Todo</h1>
                <ul className='todo-list'>
                    <Todoitem text= 'Köp kaffe' done={false}/>    {/* тук вместо text и done може да е вс текст. False True '' или {}  */}
                    <Todoitem text= 'Köp kaka' done={true}/>
                    <Todoitem text= 'Brygg kaffe' done={false}/>
                    <Todoitem text= 'Fika' done={false}/>
                </ul>        
        </section>
    )
}
/* const name= 'Gala';
const nameElem=document.getElementById('name');
nameElem.innerHTML= 'Hej' +name; */

ReactDom.render(<App />, document.getElementById('root'));
