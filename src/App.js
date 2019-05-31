import React, { useState } from 'react'
import Form from './components/Form'
import Review from './components/Review'
import './App.css'

export default () => {
    const [showForm, updateShowForm] = useState(true)
    const [state, updateState] = useState({})
    return (
        <div className="card">
            {showForm ? <Form state={state} updateShowForm={updateShowForm} updateState={updateState} /> :
                <Review state={state} updateShowForm={updateShowForm} />}
        </div>
    )
}