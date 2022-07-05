import styles from '../styles/about.module.css'
import { Button, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MoviePhoto from './moviePhoto';
import MovieVideo from './movieVideo';



const MovieDetails = ({ movie }) => {

  return (
    <>
      {movie && (
        <div>
          <div className={styles.movieDetails}>
            <div className={styles.title}>
              <Typography variant="h5" component="h2">
                {movie.title}
              </Typography>
              <span className={styles.span} >{movie.releaseYear} · {movie.length}min.</span>
            </div>
            <div></div>
            <div className={styles.imdbRating}>
              <span className={styles.span}>IMDb RATING</span><br></br>
              <Button variant='text'>
                <div className={styles.flexButton}>
                  <div>
                    <StarIcon className={styles.starIcon} />
                  </div>
                  <div>
                    <span className={styles.spanWhite}> {movie.IMDB.totalScore}</span>
                    <span className={styles.span}>/10</span>
                  </div>
                </div>
              </Button>
            </div>
            <div className={styles.imdbRating}>
              <span className={styles.span}>YOUR RATING</span><br></br>
              <Button variant='text'>
                <div className={styles.flexButton}>
                  <div>
                    <StarIcon className={styles.rateIcon} />
                  </div>
                  <div>
                    <span className={styles.Rate}>RATE</span>
                  </div>
                </div>
              </Button>
            </div>
            <div className={styles.imdbRating}>
              <span className={styles.span}>POPULARYTY</span><br></br>
              <Button variant='text'>
                <div className={styles.flexButton}>
                  <div>
                    <TrendingUpIcon className={styles.trendingIcon} />
                    <span className={styles.spanWhite}>{movie.popularity.ranking}</span>
                  </div>
                  <div>
                    <span className={styles.span}>{movie.popularity.weeklyChange < 0 ? <ArrowDropDownRoundedIcon /> : <ArrowDropUpRoundedIcon />}
                      {movie.popularity.weeklyChange}
                    </span>
                  </div>
                </div>
              </Button>
            </div>
          </div>
          <div className={styles.fotoAndVideo}>
          <MoviePhoto
          movie={movie}
          />
            <div className={styles.videos}>
            <MovieVideo
            movie={movie}
            />
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default MovieDetails;