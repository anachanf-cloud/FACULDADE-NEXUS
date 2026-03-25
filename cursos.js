$(document).ready(function () {

    get_valores();

    $(".btnoi").hide();
    $(".overlay").css("opacity", "0");

    // HOVER INFORMAÇÕES
    $(".card-curso").hover(
        function () {
            $(this).find(".btnoi").stop(true, true).fadeIn(200);
            $(this).find(".overlay").stop(true, true).animate({ opacity: 0.6 }, 200);
        },
        function () {
            $(this).find(".btnoi").stop(true, true).fadeOut(200);
            $(this).find(".overlay").stop(true, true).animate({ opacity: 0 }, 200);
        }
    );

    // ORGANIZAÇÃO ALFABÉTICA
    let cards = $(".card-curso").get();
    cards.sort(function (a, b) {
        let nomeA = $(a).find("img").attr("src").toUpperCase();
        let nomeB = $(b).find("img").attr("src").toUpperCase();
        return nomeA.localeCompare(nomeB);
    });
    $.each(cards, function (index, card) {
        $(".pagina").append(card);
    });

    // EVENTOS DOS FILTROS (todos chamam a mesma função)
    $("#titulo").on("keyup", aplicarFiltros);
    $("#categoria").on("change", aplicarFiltros);
    $(".filtro_valores").on("keyup", aplicarFiltros);

});


// 🔥 FUNÇÃO UNIFICADA DE FILTRO
function aplicarFiltros() {

    let texto = $("#titulo").val().toLowerCase().trim();
    let categoriaSelecionada = $("#categoria").val();

    let maximo = parseFloat($("#maximo").val().replace('.', '').replace(',', '.')) || Infinity;
    let minimo = parseFloat($("#minimo").val().replace('.', '').replace(',', '.')) || 0;

    $(".card-curso").each(function () {

        let nome = $(this).data("nome").toLowerCase();
        let categoria = $(this).data("categoria").toString();

        let valor = $(this).find(".valor").html().replace('R$', '');
        valor = valor.replace('.', '');
        valor = parseFloat(valor.replace(',', '.'));

        // filtros individuais
        let filtroNome = nome.includes(texto);
        let filtroCategoria = (categoriaSelecionada == "0" || categoria == categoriaSelecionada);
        let filtroValor = (valor >= minimo && valor <= maximo);

        // 🔥 TODOS juntos
        if (filtroNome && filtroCategoria && filtroValor) {
            $(this).show();
        } else {
            $(this).hide();
        }

    });
}


// 🔧 MANTIDO (sem alteração de lógica)
function get_valores() {

    let menor = 0.00;
    let maior = 0.00;

    $(".valor").each(function (index) {

        let valor = $(this).html().replace('R$', '');
        valor = valor.replace('.', '');
        valor = parseFloat(valor.replace(',', '.'));

        if (index == 0) {
            menor = valor;
        }

        if (valor > maior) {
            maior = valor;
            $("#maximo").val($(this).html().replace('R$', ''));
        }

        if (valor < menor) {
            menor = valor;
            $("#minimo").val($(this).html().replace('R$', ''));
        }

    });

}


// 🔧 MANTIDO
function moeda(a, e, r, t) {
    let n = "",
        h = j = 0,
        u = tamanho2 = 0,
        l = ajd2 = "",
        o = window.Event ? t.which : t.keyCode;
    if (13 == o || 8 == o)
        return !0;
    if (n = String.fromCharCode(o),
        -1 == "0123456789".indexOf(n))
        return !1;
    for (u = a.value.length,
        h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++);
    for (l = ""; h < u; h++) - 1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
    if (l += n, 0 == (u = l.length) && (a.value = ""), 1 == u && (a.value = "0" + r + "0" + l), 2 == u && (a.value = "0" + r + l), u > 2) {
        for (ajd2 = "",
            j = 0,
            h = u - 3; h >= 0; h--)
            3 == j && (ajd2 += e,
                j = 0),
                ajd2 += l.charAt(h),
                j++;
        for (a.value = "",
            tamanho2 = ajd2.length,
            h = tamanho2 - 1; h >= 0; h--)
            a.value += ajd2.charAt(h);
        a.value += r + l.substr(u - 2, u)
    }
    return !1
}