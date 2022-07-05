import styles from '../styles/about.module.css'
import MovieDetails from './movieDetails'
import NavAbout from './navAbout'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const About = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  //loader
  const [isPending, setisPending] = useState(true)
  // error message on browser
  const [error, setError] = useState(null)
  useEffect(() => {
    getData()
  },[]);

  //get pets
  const getData = () => {
    // cleanup
    const abortCont = new AbortController()
   
      //fetch get data
      fetch('http://localhost:8080/movies/' + id, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource')
          }
          return res.json()
        })

        .then((data) => {
          setMovie(data)
          setisPending(false)
          setError(null)
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Fetch aborted')
          } else {
            setisPending(false)
            setError(err.message)
          }

        })
   
    return () => abortCont.abort()

  }
  return (
    <>
      {error && <div>{error}</div>}
      {isPending && <div> Loading... </div>}
      <div className={styles.aboutpage}>
        <NavAbout
        />
        <MovieDetails
        movie={movie}
        />
      </div>
    
    </>
  );
}

export default About;