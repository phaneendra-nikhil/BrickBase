import SearchBar from "../../components/searchbar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Building Foundations for the Future. </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus ipsa commodi necessitatibus nihil, inventore quas totam
            eaque dolorum.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>20+</h1>
              <span>Years of Experience</span>
            </div>
            <div className="box">
              <h1>100+</h1>
              <span>Awards Gained</span>
            </div>
            <div className="box">
              <h1>1500+</h1>
              <span>Property Ready</span>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="banner" />
      </div>
    </div>
  );
}

export default HomePage;
