$('#more').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td')
  elem.toggle('slow');
});

$('#more1').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td1')
  elem.toggle('slow');
});


$('#more2').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td2')
  elem.toggle('slow');
});


$('#more3').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td3')
  elem.toggle('slow');
});


$('#more4').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td4')
  elem.toggle('slow');
});


$('#more5').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td5')
  elem.toggle('slow');
});


$('#more6').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td6')
  elem.toggle('slow');
});


$('#more7').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td7')
  elem.toggle('slow');
});

$('#more8').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td8')
  elem.toggle('slow');
});

$('#more9').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td9')
  elem.toggle('slow');
});


$('#more10').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td10')
  elem.toggle('slow');
});


$('#more11').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td11')
  elem.toggle('slow');
});


$('#more12').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td12')
  elem.toggle('slow');
});


$('#more13').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td13')
  elem.toggle('slow');
});


$('#more14').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td14')
  elem.toggle('slow');
});

$('#more15').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td15')
  elem.toggle('slow');
});

$('#more16').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td16')
  elem.toggle('slow');
});


$('#more17').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td17')
  elem.toggle('slow');
});

$('#more18').on('click', function(e) {
  e.preventDefault();
  var elem = $(this).prevAll('.td18')
  elem.toggle('slow');
});


$(document).ready(function () {
  // ANIMATEDLY DISPLAY THE NOTIFICATION COUNTER.
  $('#noti_Counter')
      .css({ opacity: 0 })
      .text('7')              // ADD DYNAMIC VALUE (YOU CAN EXTRACT DATA FROM DATABASE OR XML).
      .css({ top: '-10px' })
      .animate({ top: '-2px', opacity: 1 }, 500);

  $('#noti_Button').click(function () {

      // TOGGLE (SHOW OR HIDE) NOTIFICATION WINDOW.
      $('#notifications').fadeToggle('fast', 'linear', function () {
          if ($('#notifications').is(':hidden')) {
              $('#noti_Button').css('color', '#E4AC38');
          }
      });

      $('#noti_Counter').fadeOut('slow');                 // HIDE THE COUNTER.

      return false;
  });

  // HIDE NOTIFICATIONS WHEN CLICKED ANYWHERE ON THE PAGE.
  $(document).click(function () {
      $('#notifications').hide();

      // CHECK IF NOTIFICATION COUNTER IS HIDDEN.
      if ($('#noti_Counter').is(':hidden')) {
          // CHANGE BACKGROUND COLOR OF THE BUTTON.
      }
  });

  $('#notifications').click(function () {
      return false;       // DO NOTHING WHEN CONTAINER IS CLICKED.
  });
});