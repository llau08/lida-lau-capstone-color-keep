import { Link } from "react-router-dom";
import "../Home/Home.scss";
import { Carousel } from "react-carousel-minimal";

function Home() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      caption: "Done by Michael",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598264294394-ba29cf557627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGhhaXJzdHlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
      caption: "Done by Arvin",
    },
    {
      image:
        "https://images.unsplash.com/photo-1464629093290-33d3e39ccbfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",

      caption: "Done by Maria",
    },

    {
      image:
        "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <main className="home">
      <div>
        <h2 className="home__title">DECEMBER FEATURES</h2>
        <Carousel
          data={data}
          time={5000}
          width="850px"
          height="500px"
          captionStyle={captionStyle}
          slideNumber={true}
          slideNumberStyle={slideNumberStyle}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          thumbnailWidth="100px"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
      </div>
      <Link to="/add-client">
        <button className="home__btn">Add New Client</button>
      </Link>
      <Link to="/profiles">
        <button className="home__btn">See All Profiles</button>
      </Link>
    </main>
  );
}
export default Home;
