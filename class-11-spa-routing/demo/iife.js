const thingToPass = 'A STRING';
let scopeCount = 0;

(function(passedIn) {
  let scopeCount = 0;
  scopeCount += 10;
  // console.log('in IIFE:', scopeCount);
  // console.log('passed in value', passedIn)
})(thingToPass);

scopeCount += 5;

// console.log('global:', scopeCount);


(function(module) {
  const viewObj = {};

  viewObj.renderSomething = function() {
    console.log('rendering');
  }

  module.viewObj = viewObj;
})(window);

viewObj.renderSomething();