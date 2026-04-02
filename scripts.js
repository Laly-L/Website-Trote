 function calcular() {
        let arroz = Number(document.getElementById('arroz').value);
        let feijao = Number(document.getElementById('feijao').value);
        let macarrao = Number(document.getElementById('macarrao').value);
        let oleo = Number(document.getElementById('oleo').value);

        let pontos = (arroz * 10) + (feijao * 8) + (macarrao * 2) + (oleo * 4);
        document.getElementById('resultado').textContent = `pontuação total: ${pontos} pontos`;

    }

    let kit_alimentacao = Number(document.getElementById('kit_alimentacao').value);
   if (kit_alimentacao == 60) {
        pontos = pontos + 5000;
    }
    else {
        pontos = pontos + (5000/60) * kit_alimentacao;
    }

    let doacao_sangue = Number(document.getElementById('doacao_sangue').value);
    pontos = pontos + (doacao_sangue * 1000);
