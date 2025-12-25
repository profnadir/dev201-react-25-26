import React, { useState } from 'react'

export default function ChercheBar(props) {

    const [term, setTerm] = useState('')

    const handleSubmitApp = event => {
        event.preventDefault();
        props.onChercheSubmit(term)
    }

    return (
        <div className="Child">
            <form onSubmit={(event) => handleSubmitApp(event)}>
                <div>
                    <label>Entrer le mot clé de recherche:</label>
                    <input
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
                <button type="submit">chercher</button>
            </form>
        </div>
    )
}
