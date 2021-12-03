import "./projects.scoped.css";
import PageBookmarkOffset from "../../components/pageBookmarkOffset/pageBookmarkOffset";
import Project from "../../components/project/project";
import ILearned from "../iLearned/iLearned";

const Projects = () => (
  <section class="container">
    <PageBookmarkOffset idField="projects" />
    <Project
      featured
      title="BisCalc Web-tools"
      description="I created a website with calculation tools for
          companies located in sweden. It uses vue as a frontend framework and
          go with mysql as the backend."
    />
    <ILearned />
    <Project />
  </section>
);

export default Projects;
