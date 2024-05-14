function getPokemon() {
    let name = document.getElementById("pokemonName").value;
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                
                alert("You Probably Misspelled or Used an Uppercase. Try Again")
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Pokemon Data:', data);

            const pokemonName = data.name;
            const pokemonAbilities = data.abilities.map(ability => ability.ability.name);
            const pokemonTypes = data.types.map(type => type.type.name);
            const imageUrl = data.sprites.front_default;
            

        
            const pokeStuff = `
                <img id="pokeImage" src="${imageUrl}" alt="${pokemonName}">
        
                <div id="pokeText">
                    <p>Name: ${pokemonName}</p>
                    <p>Abilities: ${pokemonAbilities.join(', ')}</p>
                    <p>Types: ${pokemonTypes.join(', ')}</p>
                </div>`;
            
                const pokeData = document.getElementById('pokeData');
            pokeData.innerHTML = pokeStuff;
        })
        .catch(error => {
            console.error('Error fetching data from PokeAPI:', error);
        });
}
