import ProjectsDataSource from '../projectsData';

// Pure javascript document.ready
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function getOffsetFromTop(elementId) {
  var elem = document.getElementById(elementId).getBoundingClientRect();
  return (elem.top - elem.height) + window.scrollY - 400;
}

ready(function(){
  scrollEvents.changeClass(".major-skill.web", "bounceOut", "bounceIn");
  scrollEvents.changeClass(".web-secondary", "bounceOut", "bounceIn");
  scrollEvents.changeClass(".major-skill.ios", "bounceOut", "bounceIn", 50);
  scrollEvents.changeClass(".connector", "bounceOut", "bounceIn", 50);

  scrollEvents.changeClass(".major-skill.entreprenuership", "fadeOut", "fadeIn", 100);
  scrollEvents.changeClass(".too", "hide", "fadeIn", 100);
  
  // Add the slides to the projects dinamically
  for (var i = 0; i < ProjectsDataSource.length; i++) {
    ProjectsDataSource[i]
    const slideEffect = (i % 2) === 0 ? { in: "slideInLeft", out: "slideOutLeft" } : { in: "slideInRight", out: "slideOutRight" };
    scrollEvents.changeClass(`#project-${i}`, slideEffect.out, slideEffect.in, getOffsetFromTop(`project-${i}`));
  }
});
