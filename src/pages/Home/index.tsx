import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="description">
        <h1 className="description-title">
          quick<text className="red-description-title">and</text>quality
        </h1>
        <div className="description-and-contact-btn">
          <div className="description-text">
            <p>
              While realizing your product, which is ready to change the world,
              we offer you all kinds of software and design solutions you need
              throughout the product life cycle with our creative, agile and
              experienced team.
            </p>
            <p>
              As you create your brand and introduce yourself to the world, we
              support your development throughout your journey as your
              collaborator.
            </p>
          </div>
          <div className="bar-and-button">
            <img className="topbar" src="./topbar.png" alt="" />
            <button className="contact-btn">Contact Us</button>
            <img className="lowerbar" src="./lowerbar.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
