import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';

export const Personaje = () => {

    const [char, setChar] = useState([])

    const [values, handleInputChange] = useForm({
        searchText: ''
    })

    const { searchText } = values;

    useEffect(() => {
        getCharacters();
    }, [])

    const getCharacters = async () => {
        const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/starwars.json';
        const resp = await fetch(url);
        const { results } = await resp.json();
        console.log(results)
        setChar(results);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const filtered = char.filter(obj =>
            obj.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
        console.log(filtered)
        setChar(filtered)
    }

    return (
        <div>
            <h1>Star Wars</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    name="searchText"
                    value={searchText}
                    onChange={handleInputChange} />
            </form>
            <hr />
            {
               char.length===0
               ?
               (<h1>Dato no encontrado</h1>)
               :
               (
                char.map(c => (
                    <div key={c.id}>
                        <h3>{c.name}</h3>
                        <img src={c.image} width="100px" />
                    </div>
                ))
               )
            }
        </div>
    )
}
