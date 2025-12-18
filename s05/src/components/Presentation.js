function Presentation({stagiaire,diplomes}) {
    //props.groupe = "dev204"; ERROR
    return (
        <div>

            <h1>hi {stagiaire.groupe}</h1>
            <h1>hi {stagiaire.centre}</h1>
            <h1>hi {stagiaire.nom}</h1>
            <h1>hi {stagiaire.prenom}</h1>

            <ul>
                {diplomes.map((d,i) => <li key={i}>{d}</li>)}
            </ul>

            {/* <h1>hi {props.stagiaire.groupe}</h1>
            <h1>hi {props.stagiaire.centre}</h1>
            <h1>hi {props.stagiaire.nom}</h1>
            <h1>hi {props.stagiaire.prenom}</h1> */}
            {/* <h1>hi {props.groupe}</h1> */}
            {/* <h2>Centre {props.centre}</h2> */}
            {/* <h3>{props.children}</h3> */}
        </div>
    )

}

export default Presentation;