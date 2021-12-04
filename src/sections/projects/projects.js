import "./projects.scoped.css";
import PageBookmarkOffset from "../../components/pageBookmarkOffset/pageBookmarkOffset";
import Project from "../../components/project/project";
import Spacer from "../../components/spacer/spacer";
import ContentHider from "../../components/contentHider/contentHider";
import ILearned from "../iLearned/iLearned";
import { useState, useEffect } from "react";

const Projects = () => { 

  const testProjects = [ { featured: true, title:"BisCalc Web-tools", description: "I created a website with calculation tools for companies located in Sweden. It uses vue as a frontend framework and go with mysql as the backend", image: "https://biscalc.se/public/images/frontpagePhone.png"},{ title:"test", description: "awhdahwdhawdhahwdhawdhawhdawhdhawda", image: "https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=s180-rw" }, { title:"test2", description: "awdawfdjusbguiselhighisoöeghsegoösehgöseioghseg", image:"https://biscalc.se/public/images/frontpagePhone.png" }, { title:"test3", description: "awhdahwdhawdhahwdhawdhawhdawhdhawda", image: "https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=s180-rw" }, { title:"test4", description: "awhdahwdhawdhahwdhawdhawhdawhdhawda", image: "https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=s180-rw" },{ title:"test5", description: "awhdahwdhawdhahwdhawdhawhdawhdhawda", image: "https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=s180-rw" },]

  let [featuredProject, setFeaturedProject] = useState({});
  let [projects, setProjects] = useState([]);
  let [projectsRaw, setProjectsRaw] = useState([]);
  let [loadedMoreProjects, setLoadMoreProjects] = useState(false);

  useEffect(() => {
    getRawProjects();
  }, []);
    
  useEffect(() => {
    getFeaturedProject();
    getDisplayedProjects();
  }, [projectsRaw]);

  useEffect(() => {
    getDisplayedProjects();
  }, [loadedMoreProjects]);

  const getRawProjects = () => {
    setProjectsRaw(testProjects);
  }

  const getFeaturedProject = () => {
    for (let i = 0; i < projectsRaw.length; i++) {
      if (projectsRaw[i].featured) {
        setFeaturedProject(projectsRaw[i]);
        return;
      }
    }
  }

  const getDisplayedProjects = () => {
    let displayProjects = [];

    if (!loadedMoreProjects) {

      for (let i = 0; i < projectsRaw.length; i++) {
        console.log(displayProjects.length);
        if (displayProjects.length === 4) break; 

        if  (!projectsRaw[i].featured) {
          displayProjects.push(projectsRaw[i]);
        } 
      }
    } else {
      for (let i = 0; i < projectsRaw.length; i++) {
        if (!projectsRaw[i].featured) {
          displayProjects.push(projectsRaw[i]);
        }
      }
    }

    setProjects(displayProjects);
  }
  
  return (
    <section className="container">
      <PageBookmarkOffset idField="projects" />
      <Project
        featured
        title={featuredProject.title}
        description={featuredProject.description}
        imgSrc={featuredProject.image}
      />
      <ILearned />
      { 
        ( projects.map((project, index) => (
            (index % 2 != 0) ? 
              <> 
              <Spacer amount={"5vh"} />
              <Project left title={project.title} description={project.description} imgSrc={project.image} />
              </>
            :
              <>
              <Spacer amount={"5vh"} />
              <Project right title={project.title} description={project.description} imgSrc={project.image} />
              </>
        )
        ))
      }

      {
        (loadedMoreProjects) ? 
          ""
        :
          <ContentHider onClick={() => setLoadMoreProjects(true)} />
      }
    </section>
  )
};

export default Projects;
