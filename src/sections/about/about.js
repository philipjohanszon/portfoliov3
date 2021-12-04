import PageBookmarkOffset from "../../components/pageBookmarkOffset/pageBookmarkOffset";
import "./about.scoped.css";
//import Head from "../../components/3DHead/3DHead";

const About = () => {
  return (
    <section className="container">
      <PageBookmarkOffset idField="about" />
      <div className="left background">
        <div className="left itemContainer">
          <img src="/static/images/about/about-1.jpg" alt="about" />
        </div>
      </div>
      <div className="right background">
        <div className="right itemContainer">
          <h3>
            I'm a Swedish software developer that specializes in Go, Java and
            JavaScript.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
