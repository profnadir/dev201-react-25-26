import React from 'react'

export default function ResultatList(props) {
  return (
    <div className="Child">
        <h1>composant ResultatList</h1>
        {props.resultas.length == 0 ? (
          <p>pas de resultats</p>
        ) : (
          <div className="resultas">
            <ul>
              {props.resultas.map((item) => {
                return <li key={item.nom}>{item.nom}</li>;
              })}
            </ul>
          </div>
        )}
    </div>
  )
}
