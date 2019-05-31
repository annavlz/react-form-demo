import React, { useState } from 'react'

export default ({ init }) => {
    const [input, update] = useState(init || 0)
    return (
        <div>
            <label>Number
                <input type="number" id="number" value={input} onChange={(e) => update(e.target.value)} />
            </label>
        </div>
    )
}