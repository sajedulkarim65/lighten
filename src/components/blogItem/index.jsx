//

function BlogItem({ blogImages, heading, blogDate }) {
  return (
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
      <div class="news-box">
        <figure>
          <img src={blogImages} alt="img" />
        </figure>
        <h3>{heading}</h3>
        <span>{blogDate}</span>
        <span>Comment</span>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters,
        </p>
      </div>
    </div>
  );
}

export default BlogItem;
