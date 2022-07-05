import styles from "../styles/about.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MoviePhoto = ({movie}) => {
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
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };
    return ( 
        <>
        <div className={styles.foto}>
              <Carousel
                responsive={responsive}
                keyBoardControl={true}
                infinite={false}
                customTransition="transform 500ms ease-in-out"
                containerClass="carousel-container"
              >
                {
                  movie.photos.poster.map((item, i) => (
                    <div className={styles.photos} key={i}>
                      <img alt="" src={item} />
                    </div>
                  ))
                }
              </Carousel>
            </div>
        </>
     );
}
 
export default MoviePhoto;