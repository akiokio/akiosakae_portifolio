import React from 'react';

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);

    this.openCard = this.openCard.bind(this);

    this.state = {
      isOpen: false
    };
  }

  openCard() {
    this.setState({
      isOpen: true
    });
  }

  render() {
    return (
      <div id={`project-${this.props.index}`} className="pure-u-22-24 all-in-center project-container animated">
        <div className="pure-u-1-1 pure-u-sm-1-1 pure-u-md-11-24 project-screenshot">
          <img className="pure-img" src={this.props.project.previewImgUrl} alt="project-logo" />
        </div>
        <div className="pure-u-1-1 pure-u-sm-1-1 pure-u-md-11-24 project-details">
          <h3>{this.props.project.name} {JSON.stringify(this.state)}</h3>
          <p>{this.props.project.description}</p>
          <p>{this.props.project.pitch}</p>
          <p>{this.props.project.role}</p>
          <p><a className="pure-button button-secondary" href={this.props.project.link} target="_blank"><i className="fa fa-magic white-ico" aria-hidden="true" />&nbsp;&nbsp;See in action</a></p>
          <button className="pure-button card-button button-success" onClick={this.openCard}><i className="fa fa-plus-circle white-ico" aria-hidden="true" />&nbsp;Tell me more</button>
          <div className="card-wrapper">
            <div className="card">
              <p><strong>Goal:</strong> {this.props.project.goal}</p>
              <p><strong>Skills:</strong> {this.props.project.skills}</p>
              <p><strong>Tech Stack:</strong>&nbsp;
                <span className="tag"><i className="fa fa-tag" aria-hidden="true" />&nbsp;</span>
                <span className="tag"><i className="fa fa-tag" aria-hidden="true" />&nbsp;</span>
                <span className="tag"><i className="fa fa-tag" aria-hidden="true" />&nbsp;</span>
                <span className="tag"><i className="fa fa-tag" aria-hidden="true" />&nbsp;</span>
                <span className="tag"><i className="fa fa-tag" aria-hidden="true" />&nbsp;</span> 
                <span className="tag"><i className="fa fa-tag" aria-hidden="true" />&nbsp;</span>
                <span className="tag"><i className="fa fa-tag" aria-hidden="true" />&nbsp;</span>
                <span className="tag"><i className="fa fa-tag" aria-hidden="true" />&nbsp;</span>
              </p>
              <p>{this.props.project.bigDescription}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ProjectCard.propTypes = {
  project: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    pitch: React.PropTypes.string.isRequired,
    role: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    previewImgUrl: React.PropTypes.string.isRequired,
    goal: React.PropTypes.string.isRequired,
    skills: React.PropTypes.string.isRequired,
    techStack: React.PropTypes.string.isRequired,
    bigDescription: React.PropTypes.string.isRequired,
  }).isRequired,
  index: React.PropTypes.number.isRequired,
}

export default ProjectCard;