import React, { useState } from 'react'

export default ({ init }) => {
    const [input, update] = useState(init || "2019-01-01")
    return (
        <div>
            <label>Date
                <input type="date" id="date" value={input} onChange={(e) => update(e.target.value)} />
            </label>
        </div>
    )
}