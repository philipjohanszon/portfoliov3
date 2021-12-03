import PageBookmarkOffset from "../../components/pageBookmarkOffset/pageBookmarkOffset";
import "./about.scoped.css";
import Head from "../../components/3DHead/3DHead";

const About = () => {
  return (
    <section className="container">
      <PageBookmarkOffset idField="about" />
      <div class="left background">
        <div class="left itemContainer">
          <Head />
        </div>
      </div>
      <div class="right background">
        <div class="right itemContainer">
          <h3>
            I'm a Swedish software developer that specializes in Go, SQL and
            JavaScript.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
