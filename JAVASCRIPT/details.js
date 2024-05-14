const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get('projectId');

// Fetch both JSON files
Promise.all([
    fetch('/JSON/projects-personal-data.json').then(response => response.json()),
])
.then(([personalData]) => {
    // Find the project with the matching ID in personalData
    let project = personalData.find(item => item.id === projectId);
    
    // Display project details or error message
    const projectDetails = document.getElementById('projectDetails');
    if (project) {
        let classCodeHtml = '';
        if (project.className && project.codeExample) {
            for (let i = 0; i < project.className.length; i++) {
                classCodeHtml += `
                    <button id="button" onclick="switchImage('${project.codeExample[i]}')">${project.className[i]}</button>
                `;
            }
        }

        projectDetails.innerHTML = `
            <h1 id="title">${project.title}</h1>
            ${project.image ? `<img id="image" src="${project.image}" alt="${project.title}">` : ''}
            <p id="description">${project.description}</p>
            
            <div id="CodeButton">
                ${classCodeHtml}
            </div>
            ${project.codeExample ? `<div id="imageCode"><img id="code" src="${project.codeExample[0]}" alt="${project.title}"></div>` : ''}
            ${project.link ? `
            
            <div style="padding:30px;text-align: center;background-color:#403e3e;border-Radius:10px;">
            <a style="color:white;" href="${project.link}">${project.title}</a>
            </div>` 
            
            : ''}
        `;
    } else {
        projectDetails.textContent = 'Project not found.';
    }
})
.catch(error => console.error('Error fetching project data:', error));


function switchImage(url) {
    const image = document.getElementById("code");
    image.src = url;
}
