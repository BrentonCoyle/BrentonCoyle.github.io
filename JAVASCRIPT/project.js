// 
// This project.js file parses the data creating the cards on the projects.html page
// you can change classes of stuff for colors and waht not
//

// Json File 1

fetch('/JSON/project-person-projects.json')
    .then(response => response.json())
    .then(data => {
        const cardContainer = document.getElementById('cardContainer1');
        data.forEach(card => {
            const link = document.createElement('a');
            // Add the card URL as a query parameter to the idL
            link.href = `details-project.html?projectId=${encodeURIComponent(card.id)}`;
            link.className = "card grey";
            link.innerHTML = `
                <p class="tip">${card.tip}</p>
                <p class="second-text">${card.secondText}</p>
            `;
            cardContainer.appendChild(link);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

