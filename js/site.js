jQuery(document).ready(function ($) {
  setTimeout(function () {
    $(".trans--grow").addClass("grow");
  }, 275);
});

function openTab(tabName) {
  var tabs = document.querySelectorAll('.cheap-eat, .mid-eat, .fine-eat');

  // Close all tabs
  tabs.forEach(function(tab) {
      tab.style.display = "none";
  });

  // Open the selected tab
  document.querySelector(tabName).style.display = "block";
}