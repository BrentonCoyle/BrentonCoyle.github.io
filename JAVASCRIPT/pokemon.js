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

            console.log('Name:', pokemonName);
            console.log('Abilities:', pokemonAbilities);
            console.log('Types:', pokemonTypes);

            // Get the URL of the default front image
            const imageUrl = data.sprites.front_default;
            console.log('Image URL:', imageUrl);

            // Create HTML string for the Pokémon data
            const pokeStuff = `
            
                <img id="pokeImage" src="${imageUrl}" alt="${pokemonName}">
            

                <div id="pokeText">
                    <p>Name: ${pokemonName}</p>
                    <p>Abilities: ${pokemonAbilities.join(', ')}</p>
                    <p>Types: ${pokemonTypes.join(', ')}</p>
                </div>
                
            `;

            // Append the HTML string to the pokeData div
            const pokeData = document.getElementById('pokeData');
            pokeData.innerHTML = pokeStuff;
        })
        .catch(error => {
            console.error('Error fetching data from PokeAPI:', error);
        });
}
