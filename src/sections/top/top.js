import "./top.scoped.css";
import Button from "../../components/button/button";
import Typist from "react-typist";

const Top = () => (
  <section className="container" id="top">
    <div className="infoBox">
      <Typist avgTypingDelay={70} cursor={{ show: false }}>
        <h1>
          A passionate <br /> software developer, <br /> turning dreams <br />
          into&#160;
          <Typist.Delay ms={300} />
          <span className="realityText">reality</span>
        </h1>
      </Typist>

      <Button rounded text="View my portfolio" path={"#projects"} />
    </div>
  </section>
);

export default Top;
