import React from 'react';
/* function test(number){             Това е същата концепция катo долното
    console.log(number) //Number är 1
}
test(1);
 */

function Todoitem(props) {
    console.log('Props är', props);

    let todoDone='Ej klar';
    if (props.done ===true){  /* ако отпреде е boolean {true} тук е само bool -true иначе отпреде и тук  string 'true' */
        todoDone='Klar'
    }
 
    return (
        <li> Todo: {props.text}-{todoDone}</li>   //dinamisk komponent
        )
}

export default Todoitem;
