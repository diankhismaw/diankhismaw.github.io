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

      $('#noti_Counter').fadeOut('slow');// HIDE THE COUNTER.

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
});

$(document).ready(function () {
  // ANIMATEDLY DISPLAY THE NOTIFICATION COUNTER.
  $('#noti_Counter_res')
      .css({ opacity: 0 })
      .text('7')              // ADD DYNAMIC VALUE (YOU CAN EXTRACT DATA FROM DATABASE OR XML).
      .css({ top: '-10px' })
      .animate({ top: '-2px', opacity: 1 }, 500);

  $('#noti_Button_res').click(function () {

      // TOGGLE (SHOW OR HIDE) NOTIFICATION WINDOW.
      $('#notifications_res').fadeToggle('fast', 'linear', function () {
          if ($('#notifications_res').is(':hidden')) {
              $('#noti_Button_res').css('color', '#E4AC38');
          }
      });

      $('#noti_Counter_res').fadeOut('slow');                 // HIDE THE COUNTER.

      return false;
  });

  // HIDE NOTIFICATIONS WHEN CLICKED ANYWHERE ON THE PAGE.
  $(document).click(function () {
      $('#notifications_res').hide();

      // CHECK IF NOTIFICATION COUNTER IS HIDDEN.
      if ($('#noti_Counter_res').is(':hidden')) {
          // CHANGE BACKGROUND COLOR OF THE BUTTON.
      }
  });
});

function changeImage(link, type) {
  window.test=link;
  src=$(link).attr('src');

  $(link).parents('.troll').find('img').first().attr('src','assets/img/up-triangle.png');
  $(link).parents('.troll').find('img').last().attr('src','assets/img/down-triangle.png');

  if (src=='assets/img/'+type+'-triangle.png'){
    $(link).attr('src','assets/img/'+type+'-triangle-hover.png');
  } else {
    $(link).attr('src','assets/img/'+type+'-triangle.png');
  }
}

/*
 * action edit comment status
 */
function showCommentForm(selector) {
  selector.parents('div#comment_left').find('.show-anime').slideToggle('slow');
  selector.parents('div#comment_left').find('.edit-anime').slideToggle('slow');
	selector.parents('div#comment_right').find('.show-anime-review').slideToggle('slow');
  selector.parents('div#comment_right').find('.edit-anime-review').slideToggle('slow');
}

/* edit anime and manga panel */
$('.comment-status').on('click', function(e) {
  e.preventDefault();
  showCommentForm($(this));
  $(this).parents('li').find('div.edit-comment-status').toggle();
  $(this).toggle();
});

$('.btn-save-edit').bind('click', function(e) {
  showCommentForm($(this));
  var selector = $(this).parents('li');
  selector.find('div.edit-comment-status').toggle();
  selector.find('div.comment-status').toggle();
});
/* end edit anime and manga panel */

/*  edit profile picture */
$('#change_profpict').on('click', function() {
  $('.overlay-edit').slideToggle('slow');
	$('.trigger-edit-cover').slideToggle('slow');
});
/* end edit profile picture */

/*-------- Comment Box -----------*/
$('.textarea-box').focus(function() {
  	$(this).addClass('resize');
    $(this).next().addClass('display-post-comment');
		$(this).next().next().addClass('value-box-click');
});

$('.textarea-box').blur(function() {
    $(this).removeClass('resize');
    $(this).next().removeClass('display-post-comment');
		$(this).next().next().removeClass('value-box-click');
});

$('.textarea-resize').focus(function(){
  $(this).addClass('input-resize');
});
$('.textarea-resize').blur(function(){
  $(this).removeClass('input-resize');
});

$('.disable-comment').on('click', function(){
	$(this).parent().find('.display-comment').show();
	$(this).hide();
	$(this).parents().find('.user-comment.mar-t-20').find('.info-avatar').hide();
	$(this).parents().find('.user-comment.mar-t-20').find('.wrap-comment-field').hide();
	$(this).parents().find('.user-comment.mar-t-20').find('.noactive-comment').show();
});

$('.display-comment').on('click', function(){
	$(this).parent().find('.disable-comment').show();
	$(this).hide();
	$(this).parents().find('.user-comment.mar-t-20').find('.info-avatar').show();
	$(this).parents().find('.user-comment.mar-t-20').find('.wrap-comment-field').show();
	$(this).parents().find('.user-comment.mar-t-20').find('.noactive-comment').hide();
});

$('#manage-fav').on('click', function(){
	$(this).hide();
	$('.fav-anime-modal').show();
});

$('#close-manage').on('click', function(){
	$('#manage-fav').show();
	$('.fav-anime-modal').hide();
});

// One Piece Tab
$('.onePieceThread').on('click', function() {
  $('#contentOnePiece').hide();
  $('#uploadOnePiece').show();
  $(this).hide();
  $('.onePieceBack').show();
});
$('.onePieceBack').on('click', function(){
  $(this).hide();
  $('.onePieceThread').show();
  $('#contentOnePiece').show();
  $('#uploadOnePiece').hide();
});
// Discussion Tab
$('.discussionThread').on('click', function() {
  $('#contentDiscussion').hide();
  $('#uploadDiscussion').show();
  $(this).hide();
  $('.discussionBack').show();
});
$('.discussionBack').on('click', function(){
  $(this).hide();
  $('.discussionThread').show();
  $('#contentDiscussion').show();
  $('#uploadDiscussion').hide();
});
// Manga Tab
$('.mangaThread').on('click', function() {
  $('#contentManga').hide();
  $('#uploadManga').show();
  $(this).hide();
  $('.mangaBack').show();
});
$('.mangaBack').on('click', function(){
  $(this).hide();
  $('.mangaThread').show();
  $('#contentManga').show();
  $('#uploadManga').hide();
});
// Theories Tab
$('.theoriesThread').on('click', function() {
  $('#contentTheories').hide();
  $('#uploadTheories').show();
  $(this).hide();
  $('.theoriesBack').show();
});
$('.theoriesBack').on('click', function(){
  $(this).hide();
  $('.theoriesThread').show();
  $('#contentTheories').show();
  $('#uploadTheories').hide();
});

$('.btn-back-upload').on('click', function() {
  $('.wrap-tab-content').show();
  $('.upload-page').hide();
});

editArticel = function(selector, type) {
  $(selector).on('click', function() {
    if (type == 'edit') {
      $('.btn-edit-detail').hide();
      $('.btn-save-detail').show();
    } else {
      $('.btn-edit-detail').show();
      $('.btn-save-detail').hide();
    }

    $('.field-discuss').toggle();
    $('.panel-post-editor').toggle();
  });
};

editArticel('.btn-edit-detail', 'edit');
editArticel('.btn-save-detail', 'save');
