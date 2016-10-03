$("#modal_trigger").leanModal({
  top: 200,
  overlay: 0.6,
  closeButton: ".modal_close"
});

$("#modal-trigger-test").leanModal({
	top: 200,
	overlay: 0.6,
	closeButton:".modal_close"
});

$("#modal-add-panel").leanModal({
	top: 200,
	overlay: 0.6,
	closeButton:".modal_close"
});
$("#modal-add-list").leanModal({
	top: 200,
	overlay: 0.6,
	closeButton:".modal_close"
});

$(function () {
  // Choose Upload type
  $(".choose-image").click(function () {
    $(".upload").hide();
    $(".image-upload").show();
    return false;
  });

  $(".choose-discuss").click(function () {
    $(".upload").hide();
    $(".discuss-upload").show();
    return false;
  });

  $(".choose-album").click(function () {
    $(".upload").hide();
    $(".album-upload").show();
    return false;
  });

  $(".choose-rating").click(function () {
    $(".upload").hide();
    $(".rating-upload").show();
    return false;
  });

  // Upload Image
  $("#next-image").click(function () {
    $(".image-upload").hide();
    $(".upload-category-image").show();
  });

  $(".back-image").click(function () {
    $(".image-upload").hide();
    $(".upload").show();
  });

  $("#next-category-image").click(function () {
    $(".upload-category-image").hide();
    $(".anime-category-image").show();
  });

  $("#back-category-image").click(function () {
    $(".upload-category-image").hide();
    $(".image-upload").show();
  });

  $("#back-anime-image").click(function () {
    $(".anime-category-image").hide();
    $(".upload-category-image").show();
  });

  // Upload Discuss
  $("#next-discuss").click(function () {
    $(".discuss-upload").hide();
    $(".upload-category-discuss").show();
  });

  $(".back-discuss").click(function () {
    $(".discuss-upload").hide();
    $(".upload").show();
  });

  $("#next-category-discuss").click(function () {
    $(".upload-category-discuss").hide();
    $(".anime-category-discuss").show();
  });

  $("#back-category-discuss").click(function () {
    $(".upload-category-discuss").hide();
    $(".discuss-upload").show();
  });

  $("#back-anime-discuss").click(function () {
    $(".anime-category-discuss").hide();
    $(".upload-category-discuss").show();
  });

  // Upload link
  $("#next-link").click(function () {
    $(".link-upload").hide();
    $(".upload-category-link").show();
  });

  $("#back-link").click(function () {
    $(".link-upload").hide();
    $(".upload").show();
  });

  $("#next-category-link").click(function () {
    $(".upload-category-link").hide();
    $(".anime-category-link").show();
  });

  $("#back-category-link").click(function () {
    $(".upload-category-link").hide();
    $(".link-upload").show();
  });

  $("#back-anime-link").click(function () {
    $(".anime-category-link").hide();
    $(".upload-category-link").show();
  });

  // Upload Album
  $("#next-album").click(function () {
    $(".album-upload").hide();
    $(".upload-category-album").show();
  });

  $(".back-album").click(function () {
    $(".album-upload").hide();
    $(".upload").show();
  });

  $("#next-category-album").click(function () {
    $(".upload-category-album").hide();
    $(".anime-category-album").show();
  });

  $("#back-category-album").click(function () {
    $(".upload-category-album").hide();
    $(".album-upload").show();
  });

  $("#back-anime-album").click(function () {
    $(".anime-category-album").hide();
    $(".upload-category-album").show();
  });

  // Upload Rating
  $("#next-rating").click(function () {
    $(".rating-upload").hide();
    $(".upload-category-rating").show();
  });

  $(".back-rating").click(function () {
    $(".rating-upload").hide();
    $(".upload").show();
  });

  $("#next-category-rating").click(function () {
    $(".upload-category-rating").hide();
    $(".anime-category-rating").show();
  });

  $("#back-category-rating").click(function () {
    $(".upload-category-rating").hide();
    $(".rating-upload").show();
  });

  $("#back-anime-rating").click(function () {
    $(".anime-category-rating").hide();
    $(".upload-category-rating").show();
  });

  // Going back to Social Forms
  $("#btn-save").click(function () {
    $(".image-upload").hide();
    $(".upload").hide();
    $(".upload-category1").hide();
    $(".upload-category2").hide();
    $(".upload-category3").hide();
    $(".upload-category4").hide();
    $(".upload-category5").hide();
    $(".anime-category").hide();
    $(".discuss-upload").hide();
    return false;
  });

})

$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    if ($(this).attr("value") == "credit") {
      $(".credit").toggle();
    }
  });
});
