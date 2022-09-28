import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

function MoviesList() {

  const list = [
    {
      id: 1,
      name: 'Матрица',
      year: 1999,
      country: 'США',
      genres: [ 'триллер', 'боевик', 'драма' ]
    },
    {
      id: 2,
      name: 'Амели',
      year: 2002,
      country: 'Франция',
      genres: [ 'драма', 'комедия' ]
    }
  ]

  const genres = [
    'триллер', 'боевик', 'драма', 'комедия'
  ]

  const [movies, setMovies] = useState(list)
  const [filterName, setFilterName] = useState('')
  const [selectedGenres, setSelectedGenres] = useState({})

  function handleSearch(event) {
    const filterName = event.target.value.toLowerCase()
    setFilterName(filterName)

    filterMovies(filterName, selectedGenres)
  }

  function handleSelectedGenre(genre) {
    selectedGenres[genre] = !selectedGenres[genre]
    setSelectedGenres(selectedGenres)

    filterMovies(filterName, selectedGenres)
  }

  function filterMovies(filterName, genres) {
    let newMovies = list.filter(movie => {
      const name = movie.name.toLowerCase()
      const country = movie.country.toLowerCase()

      return name.includes(filterName) || country.includes(filterName)
    })

    const genresArr = []

    for (let key of Object.keys(genres)) {
      if (genres[key] === true) {
        genresArr.push(key)
      }
    }

    newMovies = list.filter(movie => {
      let flag = true
      
      for (let key of genresArr) {
        if (!movie.genres.includes(key)) {
          flag = false
          break
        }
      }

      return flag
    })

    setMovies(newMovies)
  }

  return (
    <div className='mooves-list'>
      <Form>
        <Form.Group className="mb-3" controlId="formSearchId">
          <Form.Label>Поиск</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Искать по имени или стране"
            onChange={handleSearch}
          />
        </Form.Group>
        <div className="mb-3">
          {genres.map((genre) => (
            <Form.Check
              inline
              key={`inline-checkbox-${genre}`}
              label={genre}
              name="group1"
              type="checkbox"
              id={`inline-checkbox-${genre}`}
              onClick={() => handleSelectedGenre(genre)}
            />
          ))}
        </div>
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
            movies.map((movie) => {
              return (
                <tr>
                  <td>{movie.id}</td>
                  <td>{movie.name}</td>
                  <td>{movie.year}</td>
                  <td>{movie.country}</td>
                  <td>{movie.genres.join(', ')}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
}

export default MoviesList;
