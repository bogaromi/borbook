  //FEATURED HOVER
$(document).ready(function(){
      $(".linkfeat").hover(
        function () {
            $(".textfeat").show(500);
        },
        function () {
            $(".textfeat").hide(500);
        }
    );
});

//collapsible accessible.
let myLabels = document.querySelectorAll('.lbl-toggle');

Array.from(myLabels).forEach(label => {
  label.addEventListener('keydown', e => {
    // 32 === spacebar
    // 13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});

  //Scroll totop
    //-----------------------------------------------
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
        $(".scrollToTop").addClass("fadeToTop");
        $(".scrollToTop").removeClass("fadeToBottom");
      } else {
        $(".scrollToTop").removeClass("fadeToTop");
        $(".scrollToTop").addClass("fadeToBottom");
      }
    });

    $(".scrollToTop").click(function() {
      $("body,html").animate({scrollTop:0},800);
    });

    //fullscreen search
         function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

// Animations
    //-----------------------------------------------
    if ($("[data-animation-effect]").length>0) {
      $("[data-animation-effect]").each(function() {
        var waypoints = $(this).waypoint(function(direction) {
          var animatedObject;
          animatedObject = $(this.element);
          animatedObject.addClass('animated object-visible ' + animatedObject.attr("data-animation-effect"));
          this.destroy();
        },{
          offset: '90%'
        });
      });
    };