import blog from '../../../images/blog/blog-header-image.jpg'

export function Blog(props) {
  return (
    <div className="blog-header" data-aos="fade-up" data-aos-delay="100">
      <img src={blog} className="img-fluid" alt="blog header" />

      <div className="blog-header-info">
        <h4 className="blog-category text-info"> {props.categoria} </h4>

        <h3>
          <a href="cohab.php"> {props.title} </a>
        </h3>
      </div>
    </div>
  );
}
