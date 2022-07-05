import styles from '../styles/home.module.css'
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import InfoIcon from '@mui/icons-material/Info';
const MovieCard = ({ movie }) => {
   
    return (
       
        <div className={styles.card} id={movie.id}>
            <div>
                <img alt={movie.title} className={styles.img} src={movie.photos.poster[0]} />
            </div>
            <div className={styles.stars}>
            <span className={styles.star}><StarIcon className={styles.starIcon}/> {movie.IMDB.totalScore}</span>
            <button className={styles.iconButton}><StarBorderIcon className={styles.starOutline}/></button>
            </div>
            <div className={styles.titleName}>
              <Link className={styles.a} to = {`/about/${movie.id}`}><span className={styles.movieTitle}>{movie.title}</span></Link>  
            </div>
            <div className={styles.watchlistAndIcon}>
                <Button className={styles.watchlist}><AddIcon className={styles.addIcon}/>Watchlist</Button>
            </div>
            <div className={styles.trailer}>
            <Button><ArrowRightIcon className={styles.infoIcon}/>Trailer</Button>
            <Button><InfoIcon className={styles.infoIcon}/></Button>
            </div>
        </div>
    );
}
 
export default MovieCard;