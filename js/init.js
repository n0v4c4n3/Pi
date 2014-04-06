$(document).ready(iniEventos);

function iniEventos() {
    //tablita efecto
    $(".tablita tr").hover(function () {
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });

    //flecha arriba scroll y efecto
    $("#arriba").on("click", function () {
        $("html, body").animate({ scrollTop: $("#wrap").offset().top }, 300);
    })
}
