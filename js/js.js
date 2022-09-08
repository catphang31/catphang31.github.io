function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
};

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(" .mobile-nav-toggle");

navToggle.addEventListener("click" , () => {
    const visibility = primaryNav.getAttribute("data-visible")

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
    }
    else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
    }
});

audioPlayer();
function audioPlayer() {
    var currentSong = 0;
    $("#audioPlayer")[0].src = $("#playlist li .js-on")
    [0];
    $("#playlist li .js-on").click(function(e) {
        e.preventDefault();
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
        $("#playlist li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    });
}
