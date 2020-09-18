let pokemonList = [
    {
        name: 'Charmander',
        height: 2,
        types: ['fire']
    },
    {
        name: 'Blastoise',
        height: 5.03,
        types: ['water']
    },
    {
        name: 'Slowbro',
        height: 5.03,
        types: ['water', 'psychic']
    }
];

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 2) {
        document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + " -Huge Pokemon!");
    } else {
        document.write(pokemonList.name + ' (height: ' + pokemonList[i].height + ')');
    }
}