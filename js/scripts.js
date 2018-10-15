$(document).ready(function() {
  console.log("scripts loaded");
  
  // Initialize slick
  $('.single-item').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  });
  
  // source for following code: https://gist.github.com/philbar/7357321f491dd36f1343
  // Initializes Magnific Popup
  $('.popup-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    // Changes iFrame to support Youtube state changes (so we can close the video when it ends)
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
      '<div class="mfp-close"></div>' +
      '<iframe id="player" class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
      // Converts Youtube links to embeded videos in Magnific popup.
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0&enablejsapi=1'
        }
      }
    },
    // Tracks Youtube video state changes (so we can close the video when it ends)
    callbacks: {
      open: function() {
        new YT.Player('player', {
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
      }
    }
  });
  
  // Closes Magnific Popup when Video Ends
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
      $.magnificPopup.close();
    }
  }
  // end source
  
  // initialize jquery-quiz
  $('#quiz').quiz({
    questions: [
      {
        'q': 'How many strings does the masenqo have?',
        'options': [
          '1',
          '2',
          '3',
          '4'
        ],
        'correctIndex': 0,
        'correctResponse': 'That\'s right!',
        'incorrectResponse': 'Wrong answer, the masenqo has only one string.'
      },
      {
        'q': 'Which instrument\'s scroll is commonly in the shape of a horses head?',
        'options': [
          'The rebab',
          'The masenqo',
          'The viola da gamba',
          'The morin khuur'
        ],
        'correctIndex': 3,
        'correctResponse': 'That\'s right!',
        'incorrectResponse': 'Wrong answer, the morin khuur is sometimes called the "horsehead fiddle" because of it\'s special scroll.'
      },
      {
        'q': 'What is the oldest known instrument discussed in this site?',
        'options': [
          'The viola da gamba',
          'The masenqo',
          'The morin khuur',
          'The violin'
        ],
        'correctIndex': 1,
        'correctResponse': 'That\'s right!',
        'incorrectResponse': 'Wrong answer, the masenqo is the oldest known instrument.'
      },
      {
        'q': 'Which instrument discussed on this site has the most strings?',
        'options': [
          'The viola da gamba',
          'The violin',
          'The rabab',
          'The erhu'
        ],
        'correctIndex': 0,
        'correctResponse': 'That\'s right!',
        'incorrectResponse': 'Wrong answer, the viola da gamba usually has 6 or more strings.'
      },
      {
        'q': 'Which instrument comes from china?',
        'options': [
          'The violin',
          'The morin khuur',
          'The erhu',
          'The rabab'
        ],
        'correctIndex': 2,
        'correctResponse': 'That\'s right!',
        'incorrectResponse': 'Wrong answer, the erhu is the only instrument on this list to come from China.'
      },
      {
        'q': 'Which instrument comes from the huqin instrument family?',
        'options': [
          'The viola da gamba',
          'The masenqo',
          'The erhu',
          'The rabab'
        ],
        'correctIndex': 2,
        'correctResponse': 'That\'s right!',
        'incorrectResponse': 'Wrong answer, the erhu comes from the huqin instrument family.'
      },
    ]
  });
});  




