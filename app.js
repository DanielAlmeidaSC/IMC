function armazenaDados(peso, altura){
    let pesoArmazenado = document.querySelector('#peso').value;
    let alturaArmazenado = document.querySelector('#altura').value;

    let resultado = pesoArmazenado/(alturaArmazenado*alturaArmazenado);


    document.querySelector('h3').innerHTML = `O seu IMC é de ${resultado.toFixed(2)}`;


    if (resultado < 16) {
        document.querySelector('h4').innerHTML = `Magreza Severa`;
    } else if(resultado >= 16 && resultado <= 16.9) {
        document.querySelector('h4').innerHTML = `Magreza Moderada`;
    }else if(resultado >= 17 && resultado <= 18.4) {
        document.querySelector('h4').innerHTML = `Magreza Leve`;
    } else if(resultado >= 18.5 && resultado <= 24.9) {
        document.querySelector('h4').innerHTML = `Peso normal (saudável)`;
    }else if(resultado >= 25 && resultado <= 29.9) {
        document.querySelector('h4').innerHTML = `Sobrepeso`;
    }else if(resultado >= 30 && resultado <= 34.9) {
        document.querySelector('h4').innerHTML = `Obesidade Grau I`;
    }else if(resultado >= 35 && resultado <= 39.9) {
        document.querySelector('h4').innerHTML = `Obesidade Grau II`;
    }else if(resultado >= 40){
        document.querySelector('h4').innerHTML = `Obesidade Grau III (mórbida)`;
    }

}

    
    
    /*A função armazenaPeso calcula o IMC, mas você está tentando usar a variável resultado fora do escopo da função, o que causa um erro.
O cálculo do IMC e a exibição do resultado precisam estar dentro da função.
Também é importante garantir que os valores de peso e altura sejam convertidos para números.*/