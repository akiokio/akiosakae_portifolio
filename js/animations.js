// PureJS document.ready
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function getOffsetFromTop(elementId) {
  var elem = document.getElementById(elementId).getBoundingClientRect();
  console.log(elem  , elem.top , elem.height , document.documentElement.clientHeight);
  return elem.top - elem.height;
}

ready(function(){
  scrollEvents.changeClass(".major-skill.web", "hide", "bounceIn");
  scrollEvents.changeClass(".major-skill.ios", "hide", "bounceIn", 50);
  scrollEvents.changeClass(".connector", "hide", "bounceIn", 50);

  scrollEvents.changeClass(".major-skill.entreprenuership", "hide", "fadeIn", 100);
  scrollEvents.changeClass(".too", "hide", "fadeIn", 100);

  scrollEvents.changeClass("#project-1", "slideOutLeft", "slideInLeft", getOffsetFromTop('project-1'));
  scrollEvents.changeClass("#project-2", "slideOutRight", "slideInRight", getOffsetFromTop('project-2'));
  scrollEvents.changeClass("#project-3", "slideOutLeft", "slideInLeft", getOffsetFromTop('project-3'));
  scrollEvents.changeClass("#project-4", "slideOutRight", "slideInRight", getOffsetFromTop('project-4'));
  scrollEvents.changeClass("#project-5", "slideOutLeft", "slideInLeft", getOffsetFromTop('project-5'));
});
