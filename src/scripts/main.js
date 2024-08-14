document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteio').addEventListener('submit', function(e){
        e.preventDefault();
        let numeroMaximo = document.getElementById('numero-max').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.ceil(numeroAleatorio);
        document.getElementById('resultado-valor').innerHTML = numeroAleatorio

        document.querySelector('.resultado').style.display = 'block';
    })
})