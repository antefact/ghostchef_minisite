function typing() {
    $(".ghostchef").typed({
        strings: ["pork with fennel", "pork with garlic", "anchoves with garlic", "pork with garlic and anchoves", ],
        typeSpeed: 1
    });
}

var timer=0;

var timeoutID = window.setTimeout(typing(), 1000);

$('.ghostchef').on('inview', function(event, isInView) {
  if (isInView) {
    console.log("is in view");
  } else {
    console.log("is not in view");
  }
});
