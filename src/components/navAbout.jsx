import styles from '../styles/about.module.css'
import { Link } from "@mui/material";
import {Button} from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ShareIcon from '@mui/icons-material/Share';
const NavAbout = () => {
    return (
        <nav className={styles.navAbout}>
            <Link href="#">Cast & Crew </Link>
            <Link href="#">User rewiews </Link>
            <Link href="#">Trivia </Link>
            <Link href="#">IMBdPro </Link>
            <Link href="/" ><Button><ManageSearchIcon className={styles.allTopics}/> All topics</Button></Link>
            <Link><Button><ShareIcon/> Share</Button ></Link>
        </nav>
    );
}

export default NavAbout;