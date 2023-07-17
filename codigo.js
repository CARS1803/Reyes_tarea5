const formulario = document.querySelector('form');
const button = document.getElementById('buttonConsulta');

const consultarPokemon = async (e) => {
    e.preventDefault();
    let nombrePokemon = formulario.pokemon.value;
    
    if (nombrePokemon === '') {
        alert('Debe ingresar el nombre del Pokémon');
        return;
    }
    
    const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    const config = {
        method: 'GET'
    };

    try {
        const respuesta = await fetch(url, config);
        
        if (respuesta.status === 200) {
            const data = await respuesta.json();
            console.log(data.name);
            console.log(data.weight);
            console.log(data.types[0].type.name);
            console.log(data.sprites.front_default);

            document.getElementById('nombrePokemon').innerText = data.name;
            document.getElementById('pesoPokemon').innerText = data.weight;
            document.getElementById('tipoPokemon').innerText = data.types[0].type.name;
            document.getElementById('imagenPokemon').src = data.sprites.front_default;
            document.getElementById('estado').innerText = 'Pokemon encontrado';
        } else {
            alert('Error en la consulta');
        }
        
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
};
const consultaAPI = async () => {
    const url = './codigo.php';
    const config = {
        method: 'GET'
    };

    try {
        const respuesta = await fetch(url, config);
        const data = await respuesta.text();

        mostrarAlerta(data);
    } catch (error) {
        mostrarAlerta(error);
    }
}

const mostrarAlerta = (mensaje) => {
    alert(mensaje);
}


formulario.addEventListener('submit', consultarPokemon);
button.addEventListener('click', consultaAPI);
