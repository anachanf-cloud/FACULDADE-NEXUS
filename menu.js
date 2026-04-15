$(document).ready(function () {

    let valorBase = 0;

    // Seleção do curso (imagem clicada)
    $("#engenharia").click(function () {
        valorBase = 2612.38;
    });

    $("#tecnologia").click(function () {
        valorBase = 1168.69;
    });

    $("#saúde").click(function () {
        valorBase = 3466.74;
    });

    $("#arquitetura").click(function () {
        valorBase = 2697.74;
    });

    // Botão calcular
    $("#calcular").click(function () {

        let nota = parseFloat($("#NOTA_ENEM").val());
        let desconto = 0;

        if (nota >= 100 && nota <= 200) {
            desconto = 0.10;
        }
        else if (nota >= 201 && nota <= 400) {
            desconto = 0.20;
        }
        else if (nota >= 401 && nota <= 600) {
            desconto = 0.25;
        }
        else if (nota >= 601 && nota <= 800) {
            desconto = 0.35;
        }
        else if (nota >= 801 && nota <= 900) {
            desconto = 0.40;
        }
        else if (nota >= 901 && nota <= 1000) {
            desconto = 0.50;
        }

        let valorFinal = valorBase - (valorBase * desconto);

        $("#Mensalidade").val("R$ " + valorFinal.toFixed(2));

    });

}); $(document).ready(function () {

    let valorBase = 0;

    // Seleção do curso (imagem clicada)
    $("#engenharia").click(function () {
        valorBase = 2612.38;
    });

    $("#tecnologia").click(function () {
        valorBase = 1168.69;
    });

    $("#saude").click(function () {
        valorBase = 3466.74;
    });

    $("#arquitetura").click(function () {
        valorBase = 2697.74;
    });

    // Botão calcular
    $("#calcular").click(function () {

        let nota = parseFloat($("#NOTA_ENEM").val());
        let desconto = 0;

        if (nota >= 100 && nota <= 200) {
            desconto = 0.10;
        }
        else if (nota >= 201 && nota <= 400) {
            desconto = 0.20;
        }
        else if (nota >= 401 && nota <= 600) {
            desconto = 0.25;
        }
        else if (nota >= 601 && nota <= 800) {
            desconto = 0.35;
        }
        else if (nota >= 801 && nota <= 900) {
            desconto = 0.40;
        }
        else if (nota >= 901 && nota <= 1000) {
            desconto = 0.50;
        }

        let valorFinal = valorBase - (valorBase * desconto);

        $("#Mensalidade").val(valorFinal.toFixed(2));

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const elementos = document.querySelectorAll("#NEXUS .nexus-text, #NEXUS .students");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.3
    });

    elementos.forEach(el => observer.observe(el));
});

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-principal',
  offset: 120
});