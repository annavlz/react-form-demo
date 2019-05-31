import React, { useState } from 'react'

export default ({ init }) => {
    const [input, update] = useState(init || "")
    return (
        <div>
            <label>Text
                <input type="text" id="text" value={input} onChange={(e) => update(e.target.value)} />
            </label>
        </div>
    )
}