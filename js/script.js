$(".card").each(function(){
  $(this).on("mouseenter",function(){
    var bgUrl = $(this).children("a").children("img").prop("src");
    $(".bgimage").css('background-image', `url("${bgUrl}")`);
  });
});

$baguetteBox.run('.cards-gallery', {animation: 'slideIn'});
