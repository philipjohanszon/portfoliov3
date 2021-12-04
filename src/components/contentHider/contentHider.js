import "./contentHider.scoped.css";

const ContentHider = (props) => (
    <div className="hider" onClick={props.onClick}>
        <div className="top">
            <h3 className="viewMore">View more projects</h3>     
        </div>
        <div className="bottom"></div>
    </div>
)

export default ContentHider;