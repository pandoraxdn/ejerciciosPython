let div_root = document.getElementById("root");

const load = () => {

    div_root.innerHTML += `
        <div class="container text-center">
            <h1 id="total"></h1>
            <div class="row justify-content">
                <div class="col-8" id="table">
                </div>
                <div class="col-4" id="show">
                </div>
            </dev>
        </div>
    `;

    let table = document.getElementById("table");

    table.innerHTML += `
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody id="content-table">
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </table>
    `;
}

const data = (response) => {
    let total = document.getElementById("total");
    total.innerText += `Total de pokemon: ${response.count}`;
    let content_table = document.getElementById("content-table");
    content_table.innerHTML = "";
    const pokemon_list = response.results.map( ({name,url}) =>{
        // https://pokeapi.co/api/v2/pokemon/1/
        const urlParts = url.split('/');
        const id = urlParts[ urlParts.length - 2 ];
        const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        return{
            id,
            name,
            picture,
        }
    });
    pokemon_list.map( ({id, name, picture}) => {
        content_table.innerHTML += `
            <tr>
              <td>
                <button 
                    type="button" 
                    class="btn btn-outline-secondary btn-sm"
                    onclick="showpokemon(${id});">
                ${id}
                </button>
              </td>
              <td>${name}</td>
              <td>
                <img src="${picture}" width="50" height="50"/>
              </td>
            </tr>
        `;
    });
    console.log(response);
}

const peticion = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(response => data(response));
}

const data_pokemon = (response) => {
    let show = document.getElementById("show");
    show.innerHTML = "";
    const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.id}.png`;

    const types = response.types.map(type => type.type.name);

    show.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="${picture}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${response.name}</h5>
            <p class="card-text">Types:
            ${types}
            </p>
          </div>
        </div>
    `;
    console.log(response);
}

const showpokemon = (id) => {
    fetch('https://pokeapi.co/api/v2/pokemon/'+id)
    .then(response => response.json())
    .then(response => data_pokemon(response));
}

window.onload = () => {
    load();
    peticion();
}
