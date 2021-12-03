import "./project.scoped.css";
import photo from "../../images/biscalcProject.png";
import Button from "../button/button";

const Project = (props) => {
  return (
    <div className="container">
      <div className="infoBox">
        {props.featured ? (
          <>
            <p className="featuredText">Featured Project</p>
            <h2 className="featured">{props.title}</h2>
          </>
        ) : (
          <h2>{props.title}</h2>
        )}
        <hr />
        <p className="description">{props.description}</p>

        {props.featured ? <Button text="Explore" /> : <Button text="Explore" />}
      </div>
      <img src={photo} alt="Featured project image" />
    </div>
  );
};

export default Project;
