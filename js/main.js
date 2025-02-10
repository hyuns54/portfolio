$('#fullpage').fullpage({
  scrollingSpeed: 700,
  responsiveWidth: 1024,
  navigation: true, // 기본값 false
  navigationPosition: 'right', // 기본값 right
  navigationTooltips: ['home', 'Epilogue', 'Aboutme', 'Portfolio', 'Skill'],
  showActiveTooltip: false, //단어 노출, 기본값 flase
  afterLoad: function (origin, destination, direction, trigger) {
    if (destination == 4) {
      $("#header,#fp-nav").fadeOut();
    } else {
      $("#header,#fp-nav").fadeIn();
    }
  },
  anchors: ['section1', 'section2', 'section3', 'section4', 'section5']
});

