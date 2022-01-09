import React, { useState } from 'react'

function ButtonWithHooks() {
    const [greeting, setGreeting] = useState("Hello2");
    const [title, setTitle] = useState("2008");

    return (
        <div>
            <h2>{title}</h2>
            <p>{greeting}</p>
            <button onClick={() => setGreeting("Bye2")} > Click me!</button>
            <button onClick={() => setTitle("2022")} > Click me!</button>
        </div >
    )
}

export default ButtonWithHooks
