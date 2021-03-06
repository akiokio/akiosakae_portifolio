import React from 'react';
import ReactDOM from 'react-dom';
import ProjectsDataSource from '../projectsData';
import Project from './project';

class ProjectList extends React.Component {
  render() {
    const projectCardsList = this.props.projectsData.map((project, index) => {
      return <Project key={`project-${index}`} project={project} index={index} />
    });
    return (
      <div className="pure-u-1-1 horizontal-center third-container">
        <div className="pure-u-1-1 headline">
          <h2>I built...</h2>
        </div>
        {projectCardsList}
        <button className="pure-button more-projects-btn" type="button" name="more-projects">And much more</button>
      </div>
    )
  }
}

ProjectList.propTypes = {
  projectsData: React.PropTypes.array.isRequired,
}

ReactDOM.render(<ProjectList projectsData={ProjectsDataSource} />, document.getElementById('projectList'));