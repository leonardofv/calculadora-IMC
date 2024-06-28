
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); //impedir comportamento padrão do evento

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const imc = weight / (height * height).toFixed(2);

    const value = document.getElementById('value');
    let descricao = '';

    document.getElementById('infos').classList.remove('hidden'); //removendo classe hidden

    if(imc < 18.5) {
        descricao = 'Magreza';
    }
    else if(imc < 24.9) {
        descricao = 'Normal'
    }
    else if(imc < 29.9) {
        descricao = 'Sobrepeso';
    }
    else if(imc < 39.9) {
        descricao = 'Obsidade';
    }
    else {
        descricao = 'Obsidade grave';
    }

    value.textContent = imc.toFixed(2);
    document.getElementById('descricao').textContent = descricao;


});