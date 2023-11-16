console.log(
  "%c Developed by CHRLS DESIGN - https://chrls.design",
  "background: #000; color: #fff; display: block; padding:5px; padding-right: 10px;"
);

let transitionTrigger = $(".preloader_trigger");
let introDurationMS = 2200;
let exitDurationMS = 2800;
let excludedClass = "no-transition";

// On Page Load
transitionTrigger.click();
$("body").addClass("no-scroll-transition");
setTimeout(() => {
  $("body").removeClass("no-scroll-transition");
}, introDurationMS);
// On Link Click
$("a").on("click", function (e) {
  if (
    $(this).prop("hostname") == window.location.host &&
    $(this).attr("href").indexOf("#") === -1 &&
    !$(this).hasClass(excludedClass) &&
    $(this).attr("target") !== "_blank"
  ) {
    e.preventDefault();
    $("body").addClass("no-scroll-transition");
    let transitionURL = $(this).attr("href");
    transitionTrigger.click();
    setTimeout(function () {
      window.location = transitionURL;
    }, exitDurationMS);
  }
});
// On Back Button Tap
window.onpageshow = function (event) {
  if (event.persisted) {
    window.location.reload();
  }
};
// Hide Transition on Window Width Resize
setTimeout(() => {
  $(window).on("resize", function () {
    setTimeout(() => {
      $(".preloader_normal").css("display", "none");
    }, 50);
  });
}, introDurationMS);

$(function () {
  let jbcounter = $(".listcounter-item").length;
  $(".project-counter").text("/00" + jbcounter);
  $(".menu-p-counter").text("(" + jbcounter + ")");
});

document
  .getElementById("footeremailcopy")
  .addEventListener("click", function () {
    footerCopy();
  });

function footerCopy() {
  var element = event.target;
  var range;
  if (document.selection) {
    range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    range = document.createRange();
    range.selectNode(element);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  }
  document.execCommand("copy");
  window.getSelection().empty();
  window.getSelection().removeAllRanges();
}
