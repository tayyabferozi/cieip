const toggleOverlay = () => {
  $(".navigation ul").toggleClass("active");
  $(".dark-overlay").toggleClass("active");
};

$(".burger").click(toggleOverlay);

$(".navigation .close").click(toggleOverlay);

$(".dark-overlay").click(toggleOverlay);
