import Carousel from "react-multi-carousel";
import styles from '../styles/about.module.css'
const MovieVideo = ({ movie }) => {
    const trailers = movie.videos.trailers
    const embedLink = trailers.map(embed => embed.slice(32, 43))
    // Carousel
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 0,
            slidesToSlide: 0, // optional, default to 1.
        },
    };
    return (
        <>
         <Carousel
                responsive={responsive}
                keyBoardControl={true}
                infinite={false}
                customTransition="transform 500ms ease-in-out"
                containerClass="carousel-container"
              >
            {
                 embedLink.map((embed, i) =>
                <div className={styles.video} key={i}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${embed}?autoplay=1`}
                        title={i}
                        frameBorder="0"
                        allowFullScreen
                        referrerPolicy="no-referrer"
                    ></iframe>
                </div>
                )
            }
            </Carousel>
        </>
    );
}

export default MovieVideo;