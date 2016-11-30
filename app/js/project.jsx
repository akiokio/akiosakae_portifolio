import React from 'react';
import CardWrapper from './cardWrapper';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.openCard = this.openCard.bind(this);
    this.closeCard = this.closeCard.bind(this);
    this.outerHeight = this.outerHeight.bind(this);

    this.state = {
      cardHeight: 0,
    }
  }

  outerHeight(el) {
    let height = el.offsetHeight;
    const style = getComputedStyle(el);

    height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    return height;
  }

  openCard(e) {
    this.setState({
      cardHeight: this.outerHeight(e.target.parentElement.parentElement),
    });
  }

  closeCard(e) {
    this.setState({
      cardHeight: 0,
    })
  }

  render() {
    return (
      <div id={`project-${this.props.index}`} className="pure-u-22-24 all-in-center project-container animated">
        <div className="pure-u-1-1 pure-u-sm-1-1 pure-u-md-11-24 project-screenshot">
          <img className="pure-img" src={this.props.project.previewImgUrl} alt="project-logo" />
        </div>
        <div className="pure-u-1-1 pure-u-sm-1-1 pure-u-md-11-24 project-details">
          <h3>{this.props.project.name}</h3>
          <p>{this.props.project.description}</p>
          <p>{this.props.project.pitch}</p>
          <p>{this.props.project.role}</p>
          <p><a className="pure-button button-secondary" href={this.props.project.link} target="_blank"><i className="fa fa-magic white-ico" aria-hidden="true" />&nbsp;&nbsp;See in action</a></p>
          <button className="pure-button card-button button-success" onClick={this.openCard}><i className="fa fa-plus-circle white-ico" aria-hidden="true" />&nbsp;Tell me more</button>
          <CardWrapper project={this.props.project} height={this.state.cardHeight} onClose={this.closeCard}/>
        </div>
      </div>
    )
  }
}

Project.propTypes = {
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

export default Project;