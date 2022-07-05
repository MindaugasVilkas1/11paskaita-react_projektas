import styles from "../styles/footer.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';
const Footer = () => {
    return (
        <section>
            <div className={styles.icons}>
                <div>
                    <FacebookIcon />
                </div>
                <div>
                    <InstagramIcon />
                </div>
                <div>
                    <TwitterIcon />
                </div>
                <div>
                    <YouTubeIcon />
                </div>
            </div>
            <div className={styles.aLink}>
                <a href="#">Get the IMDb App <LaunchIcon /></a>
                <a href="#">Help <LaunchIcon /></a>
                <a href="#">Site Index <LaunchIcon /></a>
                <a href="#">IMDbPro <LaunchIcon /></a>
                <a href="#">Box Office Mojo <LaunchIcon /></a>
                <a href="#">IMDb Developer <LaunchIcon /></a>
            </div>
            <div className={styles.aLink}>
                <a href="#">Press Room <LaunchIcon /></a>
                <a href="#">Advertising <LaunchIcon /></a>
                <a href="#">Jobs <LaunchIcon /></a>
                <a href="#">Jobs <LaunchIcon /></a>
                <a href="#">Privacy Policy <LaunchIcon /></a>
                <a href="#">Interest-Based Ads <LaunchIcon/></a>
            </div>
            <div className={styles.amazon}>
                <p>An Amazon Company</p>
            </div>
            <div>
                <p className={styles.copyRight}>© 1990-2022 by IMDb.com, Inc.</p>
            </div>
        </section>
    );
}

export default Footer;