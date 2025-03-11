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

  return (
    <main className="content">
        <p>Hello {handleNameChange()}!</p>
        <button onClick={handleClick}>Click me!</button>
    </main>
  )
}

export default Content
