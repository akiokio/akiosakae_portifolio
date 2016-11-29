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

  scrollEvents.changeClass("#project-0", "slideOutLeft", "slideInLeft", getOffsetFromTop('project-0'));
  scrollEvents.changeClass("#project-1", "slideOutLeft", "slideInLeft", getOffsetFromTop('project-1'));
  scrollEvents.changeClass("#project-2", "slideOutRight", "slideInRight", getOffsetFromTop('project-2'));
  scrollEvents.changeClass("#project-3", "slideOutLeft", "slideInLeft", getOffsetFromTop('project-3'));
  scrollEvents.changeClass("#project-4", "slideOutRight", "slideInRight", getOffsetFromTop('project-4'));
});
