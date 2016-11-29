import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsDataSource from '../projectsData';
import ProjectCard from './projectCard';

class ProjectList extends React.Component {
  render() {
    const projectCardsList = this.props.projectsData.map((project, index) => {
      return <ProjectCard key={`project-${index}`} project={project} index={index} />
    });
    return (
      <div className="pure-u-1-1 horizontal-center third-container">
        <div className="pure-u-1-1 headline">
          <h2>I built...</h2>
        </div>
        {projectCardsList}
      </div>
    )
  }
}

ProjectList.propTypes = {
  projectsData: React.PropTypes.array.isRequired,
}

ReactDOM.render(<ProjectList projectsData={ProjectsDataSource} />, document.getElementById('projectList'));