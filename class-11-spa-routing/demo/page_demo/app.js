// aboutView
(function(module) {
  const aboutView = {};

  aboutView.logView = function() {
    console.log('From aboutView');
  }

  aboutView.render = function() {
    $('section').hide();
    $('#about').fadeIn();
  }

  module.aboutView = aboutView;
})(window);

// contentView
(function(module) {
  const contentView = {};

  contentView.logView = function() {
    console.log('From contentView');
  }

  contentView.render = function() {
    $('section').hide();
    $('#content').fadeIn();
  }

  module.contentView = contentView;
})(window);


// routes
aboutView.render();

page('/test', function() {
  console.log('TESTING');
});

page('/about', aboutView.render);
page('/content', contentView.render);

page();