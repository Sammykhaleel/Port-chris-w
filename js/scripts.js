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

    return {
        add: add,
        getAll: getAll,
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
    let size;
    if (pokemon.height > 5) {
        size = "Big Pokemon";
    } else if (pokemon.height <= 6 && pokemon.height > 2) {
        size = "Medium Size";
    } else {
        size = "Small Pokemon";
    }
    let color;
    if (pokemon.types.includes('grass')) {
        color = '<span style="color: green;">'
    } else if (pokemon.types.includes('fire')) {
        color = '<span style="color: red;">'
    } else if (pokemon.types.includes('water')) {
        color = '<span style="color: blue;">'
    } else if (pokemon.types.includes('speed')) {
        color = '<span style="color: lightblue;">'
    } else if (pokemon.types.includes('psychic')) {
        color = '<span style="color: yellow;">'
    }
    document.write(
        '<div class="box">' +
        pokemon.name +
        " (height: " +
        pokemon.height +
        ")" +
        "<br>" +
        size +
        "<br>" +
        color +
        pokemon.types +
        "<br>" +
        "</div>"
    );
});
