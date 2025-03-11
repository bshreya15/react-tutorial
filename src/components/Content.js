import React from 'react'

const Content = () => {

    const handleNameChange = () => {
        const names = ['John', 'Jane', 'Doe'];
        const int = Math.floor(Math.random() * names.length);
        return names[int];
    }

    const handleClick = () => {
        alert('You clicked the button!');
    }

    const handleClick2 = (name) => {
        alert(`${name} clicked the button!`);
    }

  return (
    <main className="content">
        {/* call the handleNameChange once, only when page loads */}
        {/* therefore, () after function name */}
        <p>Hello {handleNameChange()}!</p>

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
    </main>
  )
}

export default Content
