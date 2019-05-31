import React from 'react'
import Date from './Date'
import Text from './Text'
import Number from './Number'

export default ({ state, updateState, updateShowForm }) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            updateShowForm(false)
            const text = document.getElementById("text").value
            const number = document.getElementById("number").value
            const date = document.getElementById("date").value
            updateState({ text, number, date })
        }}>
            <Date init={state.date} />
            <Number init={state.number} />
            <Text init={state.text} />
            <button type="submit">Next</button>
        </form>
    )
}