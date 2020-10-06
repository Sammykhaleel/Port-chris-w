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
        let modalContainer = document.querySelector("#modal-container");

        // Clears existing modal content
        modalContainer.innerHTML = '';

        let modal = document.createElement("div");
        modal.classList.add("modal");

        //Close button for the modal
        let closeButtonElement = document.createElement('button');

        closeButtonElement.classList.add("modal-close");
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        let nameElement = document.createElement("h1");
        nameElement.innerText = item.name;

        // adds the image content
        let imageElement = document.createElement("img");
        imageElement.classList.add("modal-image");
        imageElement.setAttribute("src", item.imageUrl);

        //adds the height content
        heightElement = document.createElement("p");
        heightElement.innerText = 'Height : ' + item.height;

        modal.appendChild(closeButtonElement);
        modal.appendChild(nameElement);
        modal.appendChild(imageElement);
        modal.appendChild(heightElement);
        modalContainer.appendChild(modal);
        // Adds the visible class
        modalContainer.classList.add("is-visible");
    }

    function hideModal() {
        let modalContainer = document.querySelector("#modal-container");
        modalContainer.classList.remove("is-visible");
    }
    //This is for the Esc key
    window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector("#modal-container");
        if (e.key === 'Escape' && modalContainer.classList.contains("is-visible")) {
            hideModal();
        }
    });
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.addEventListener('click', (e) => {
        // Since this is also triggered when clicking INSIDE the modal
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });

    document.querySelector("#modal-container").addEventListener('click', () => {
        showModal();
    })



    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal,
        hideModal: hideModal
    };
})();



pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

