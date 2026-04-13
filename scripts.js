function calcular(){
    
    let qtdeArroz = Number(document.getElementById("qtdeArroz").value)
   
    let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value)
  
    let qtdeOleo = Number(document.getElementById("qtdeOleo").value)
    
    let qtdeMacarrao = Number(document.getElementById("qtdeMacarrao").value)
    // calcula o valor total de pontos dos itens avulsos
    let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)
    let cor = document.getElementById("cor").value
    let metaKit // declara meta de kit alimentação
    let metaSuplemento // declaração meta de suplemento
   
    if (cor == "amarela"){
        metaKit = 54
        metaSuplemento = 27
    }
    else if (cor == "cinza"){
        metaKit = 51
        metaSuplemento = 26
    }
    else if (cor == "laranja"){
        metaKit = 21
        metaSuplemento = 11
    }
    else if (cor == "marron"){
        metaKit = 88
        metaSuplemento = 44
    }
    else if (cor == "preta"){
        metaKit = 60
        metaSuplemento = 30
    }
   
    let metaLeite = metaKit // meta do leite é a meta do kit
    if (metaKit % 2 == 0) {// par
        metaSuplemento = metaKit / 2
    }
    else { // ímpar
        metaSuplemento = (metaKit / 2) + 1
    }
    // calcula a meta da doação de sangue
    let metaSangue = metaSuplemento
    // calcula pontuação do kit de alimentação
    let kitAlimentacao = Number(document.getElementById("kitAlimentacao").value)
    if (kitAlimentacao >= metaKit) {
        pontos = pontos + (kitAlimentacao * 10)
    }
    else  {
        pontos = pontos + (qtdeLatas * (5000/metaSuplemento))
    }
    // calcula pontuação do leite
    let qtdeLeite = Number(document.getElementById("qtdeLeite").value)
    // fazer os ifs

    // calcula pontuação do sangue
    let qtdeDoacao = Number(document.getElementById("qtdeDoacao").value)
    // fazer os ifs
    // vamos exibir o resultado para o usuário
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos + " pontos"
    document.getElementById("resultado").innerText = "Pontuação total: " + pontos.toFixed(2) + " pontos"
}