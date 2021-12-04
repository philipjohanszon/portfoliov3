import "./project.scoped.css";
import Button from "../button/button";

const Project = (props) => {
  if (props.right) {
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
        <img src={props.imgSrc} alt="Featured project image" />
      </div>
    );
  } else {
    return (
      <div className="container">
        <img src={props.imgSrc} alt="Featured project image" />
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

      </div>
    );
  }
};

export default Project;
