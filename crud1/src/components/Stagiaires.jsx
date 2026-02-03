import React from 'react'

export default function Stagiaires({ stagiaireList, handleDeleteApp, handleEditApp}) {

    const handleDelete = function (id) {
        handleDeleteApp(id)
    }

    const handleEdit = function(stagiaire){
        handleEditApp(stagiaire)
    }


    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOM</th>
                        <th>Prénom</th>
                        <th>Note</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stagiaireList.map(s =>
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.nom}</td>
                                <td>{s.prenom}</td>
                                <td>{s.note}</td>
                                <td>
                                    <button
                                        style={{ backgroundColor: "orange" }}
                                        onClick={() => handleEdit(s)}>update</button>
                                    <button
                                        style={{ background: "red" }}
                                        onClick={() => handleDelete(s.id)}  >delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
