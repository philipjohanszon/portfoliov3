import LearnedBox from "../../components/learnedBox/learnedBox";
import "./iLearned.scoped.css";

const ILearned = () => {
  return (
    <div className="container">
      <h2>I learned</h2>
      <div className="boxesContainer">
        <LearnedBox img="awdawd.jpg" alt="golang image" name="Go Development" />
        <LearnedBox img="awdawd.jpg" alt="Vue image" name="Vue framework" />
        <LearnedBox img="awdawd.jpg" alt="MySQL image" name="MySQL" />
      </div>
    </div>
  );
};

export default ILearned;
