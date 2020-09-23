
document.getElementById ("blast").addEventListener('click', function(event){
    event.preventDefault()
   

    const altura = parseFloat(document.querySelector("#text1").value)//transforma um texto em número real.
    const peso = parseFloat(document.querySelector("#text2").value)//transforma um texto em número real.
    const imc = peso / (altura * altura)//calculado do imc, armazenando na variável imc.
    let classificacao = ""//classificacao é inicializada com uma string(texto) vazio.
    
    if(imc <= 18.5){
        classificacao = 'Abaixo do peso'
    }
    else if(imc >= 18.6 && imc <= 24.9){
        classificacao = 'Saudável'
    }
    else if(imc >= 25 && imc <= 29.9){
        classificacao = 'Peso em excesso'
    }
    else if(imc >= 30 && imc <= 34.9){      //Estrutura condicional que de acordo com o resultado do imc informa a classificacao da pessoa.
        classificacao = 'Obesidade grau 1'
    }
    else if(imc >= 35 && imc <= 39.9){
        classificacao = 'Obesidade grau 2'
    }
    else if(imc >= 40){
        classificacao = 'Obesidade grau 3'
    }

    document.querySelector("#display").innerHTML= `IMC: ${imc.toFixed(1)} - Classificação: ${classificacao}`//Mostra na div display o resultado com o valor do imc e sua classificação.
})