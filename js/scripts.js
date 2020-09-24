let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: 'Charmander',
            height: 2,
            types: ['fire']
        },
        {
            name: 'Blastoise',
            height: 5.05,
            types: ['water']
        },
        {
            name: 'Slowbro',
            height: 5.05,
            types: ['water', 'psychic']
        },
        {
            name: 'Alakazam',
            height: 4.11,
            types: ['psychic']
        },
        {
            name: 'Mew',
            height: 1.04,
            types: ['psychic']
        }
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll,
    };
})();
pokemonRepository.getAll();

pokemonList.forEach(function (pokemon) {
    document.write(pokemon.name + ' (height: ' + pokemon.height + ')');
});