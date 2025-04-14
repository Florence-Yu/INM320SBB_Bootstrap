document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
      .then((response) => response.json())
      .then((destinations) => {
        const container = document.getElementById("card-container");
  
        destinations.forEach((place) => {
          const col = document.createElement("div");
          col.className = "col-md-4 mb-4";
  
          col.innerHTML = `
            <div class="card h-100 shadow-sm border-0">
              <img src="${place.img}" class="card-img-top" alt="${place.title}">
              <div class="card-body">
                <h5 class="card-title">${place.title}</h5>
                <p class="card-text">${place.description}</p>
              </div>
            </div>
          `;
  
          container.appendChild(col);
        });
      })
      .catch((error) => {
        console.error("Failed to load destinations:", error);
      });
  });  