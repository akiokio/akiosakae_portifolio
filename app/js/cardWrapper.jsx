import React from 'react';

class CardWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tagList = this.props.project.techStack.split(',').map((tech, index) => {
      return <span className="tag" key={index}><i className="fa fa-tag hide-xs" aria-hidden="true" />&nbsp; {tech}</span>
    });
    return (
      <div className="card-wrapper" style={{height: `${this.props.height}px`}} onClick={this.props.onClose}>
        <div className="card">
          <p><strong>Goal:</strong> {this.props.project.goal}</p>
          <p><strong>Skills:</strong> {this.props.project.skills}</p>
          <p><strong>Tech Stack:</strong>&nbsp;
            {tagList}
          </p>
          <p dangerouslySetInnerHTML={{__html: this.props.project.bigDescription}}></p>
        </div>
      </div>
    )
  }
}

CardWrapper.propTypes = {
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
  onClose: React.PropTypes.func.isRequired,
}

export default CardWrapper;