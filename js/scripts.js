let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: "Charmander",
            height: 2,
            types: ["fire"],
        },
        {
            name: "Blastoise",
            height: 7.05,
            types: ["water"],
        },
        {
            name: "Slowbro",
            height: 5.05,
            types: ["grass", "psychic"],
        },
        {
            name: "Alakazam",
            height: 4.11,
            types: ["psychic"],
        },
        {
            name: "Mew",
            height: 1.04,
            types: ["speed"],
        },
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon) {
        let pokeDex = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('poke-button');
        listItem.appendChild(button);
        pokeDex.appendChild(listItem);
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
    }
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
    };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({
    name: 'eve',
    height: 1.6,
    types: ['speed']
});
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
