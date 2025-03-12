import React from 'react'
import { useState } from 'react';

const ContentState = () => {
    // Array destructuring
    // name is the current state value
    // setName is the function that updates the state value
    // useState('John') is the default state value
    const [name, setName] = useState('Shreya from State hook');   

    const handleNameChange = () => {
        const names = ['John', 'Jane', 'Doe'];
        const int = Math.floor(Math.random() * names.length);
        return names[int];
    }

    const handleNameChange2 = () => {
        const names = ['John', 'Jane', 'Doe'];
        const int = Math.floor(Math.random() * names.length);
        setName(`${names[int]} from State`)
    }

    const handleClick = () => {
        alert('You clicked the button!');
    }

    const handleClick2 = (name) => {
        alert(`${name} clicked the button!`);
    }
    
    const handleClick3 = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
    }

  return (
    <main className="content1">
        {/* call the handleNameChange once, only when page loads */}
        {/* therefore, () after function name */}
        <p>Hello {handleNameChange()}!</p>
        
        {/* func call on double click */}
        <p onDoubleClick={handleClick}>Hello! {handleNameChange()}!</p>
        
        <p>Hello {name}!</p>
        {/* onclick of this button will change the name in above p tag */}
        {/* using useState react hook => react rerenders*/}
        <button onClick={handleNameChange2}>Click me to change name!</button>

        {/* pass the ref to the handleClick func ie no () after func name */}
        {/* func will be called whenever button is clicked */}
        {/* if  onClick={handleClick()} is present the func will be called immediately */}
        <button onClick={handleClick}>Click me!</button>

        {/* Anonymous func are not called until button is clicked so parameters can be passed */}
        {/* Anon func can be multiline so we need =>{} to write func body */}
        {/* Anonymous func with parameter passed in onClick  */}
        <button onClick={() => {handleClick2('Shreya')}}>Click me 2!</button>

        {/* Anonymous func with function parameter passed in onClick  */}
        <button onClick={() => {handleClick2(handleNameChange())}}>Click me 3!</button>

        {/* event obj onClick */}
        <button onClick={(e) => {handleClick3(e)}}>Click me 4!</button>
    </main>
  )
}

export default ContentState
