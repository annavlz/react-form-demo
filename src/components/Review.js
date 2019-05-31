import React from 'react'

export default ({ state, updateShowForm }) => {
    return (
        <div>
            <p>Text: {state.text}</p>
            <p>Number: {state.number}</p>
            <p>Date: {state.date}</p>
            <button onClick={() => updateShowForm(true)}>Back</button>
        </div>
    )
}