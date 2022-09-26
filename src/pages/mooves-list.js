import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table';


function MoovesList() {
    const list = [
        {
            id: 1,
            name: "Матрица",
            year: 1999,
            country: "CША",
            genres: [ 'триллер', 'боевик', 'драма' ]
        },
    
        {
            id: 2,
            name: "Амели",
            year: 2002,
            country: "Франция",
            genres: [ 'драма', 'комедия' ] 
        }
    ]

const ganres =  [
    'триллер', 'боевик', 'драма', 'комедия'
]
const [moovies, setMoovies] =  useState(list)

function handleSearch(event) {
    const value = event.target.value.toLowerCase()

    const newMovis = list.filter(movie => {
        const name = movie.name.toLowerCase()
        const country = movie.country.toLowerCase()

        return name.inСlude(value) || country.inСlude(value)
    })

    setMoovies(newMovis)
}

    return (
    <div>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Поиск</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Искать по имени или стране" 
        onChange={handleSearch}/>
      </Form.Group>
      {/* <div className='mb-3'>
        {genres.map((genre) => (
            <Form.Check
            inline
            key=
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
        ))}
      </div> */}
    </Form>

    <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Год</th>
            <th>Страна</th>
            <th>Жанры</th>
            </tr>
        </thead>

        <tbody>
            {
                moovies.map((movie) => {
                    return (
                        <tr>
                        <td>{movie.id}</td>
                        <td>{movie.name}</td>
                        <td>{movie.year}</td>
                        <td>{movie.country}</td>
                        <td>{movie.genres.join(', ')}</td>

                    </tr>
                    )
                }
            )
            }
        
        </tbody>
        </Table>
    </div>
    
  );
}

export default MoovesList