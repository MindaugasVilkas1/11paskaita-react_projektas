import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../styles/home.module.css'
import MovieCard from './movieCard';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


const Home = () => {
    const [movies, setMovies] = useState([])

    //carousel
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 5,
            slidesToSlide: 5, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1200, min: 900 },
            items: 4,
            slidesToSlide: 4, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 900, min: 0 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
    };

    //get Movies
    useEffect(() => {
        fetch('http://localhost:8080/movies')
            .then(res => res.json())
            .then(data => setMovies(data))

    },[])
    return (
        <div className={styles.homepage}>
            <h1 className={styles.title}> What to watch</h1>
            <Carousel
                responsive={responsive}
                keyBoardControl={true}
                infinite={false}
                customTransition="transform 500ms ease-in-out"
                containerClass="carousel-container"
            >
                {
                    movies.map(movie => (

                        <MovieCard
                        key={movie.title}
                            movie={movie}
                        />
                    ))
                }
            </Carousel>
        </div>
    );
}

export default Home;