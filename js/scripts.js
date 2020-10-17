let pokemonRepository = (function () {
    let pokemonList = []
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

    function showDetails(item) {
        loadDetails(item).then(function () {
            console.log(item);
            showModal(item)
        });
    }
    // This loads the Pokemon URL 
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // This adds details from the URL
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            //item.types = details.types;
            item.types = [];
            details.types.forEach(function (typeItem) {
                item.types.push(typeItem.type.name)
            });
            item.abilities = [];
            details.abilities.forEach(function (abilityItem) {
                item.abilities.push(abilityItem.ability.name)
            });

        }).catch(function (e) {
            console.error(e);
        });
    }

    function showModal(item) {
        let modalBody = $(".modal-body");
        let modalTitle = $(".modal-title");
        let modalHeader = $(".modal-header");

        $('#modal-container').modal('show');

        modalTitle.empty();
        modalBody.empty();

        // Element for the name in the modal content
        let nameElement = $("<h1>" + item.name + "</h1>");
        // Creating the img for the modal
        let imageElement = $('<img class="modal-image">');
        imageElement.attr("src", item.imageUrl);
        // Height Element
        let heightElemnt = $("<p>" + "Height : " + item.height + "</p>");
        // Types Element
        let typesElement = $("<p>" + "Types : " + item.types + "</p>");
        // Abilities Element
        let abilitiesElement = $("<p>" + "Abilities : " + item.abilities + "</p>");

        modalTitle.append(nameElement);
        modalBody.append(imageElement);
        modalBody.append(heightElemnt);
        modalBody.append(typesElement);
        modalBody.append(abilitiesElement);
    }


    // document.querySelector("#modal-container").addEventListener('click', () => {
    //     showModal();
    // })



    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal,
        // hideModal: hideModal
    };
})();



pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

