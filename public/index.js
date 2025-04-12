async function renderCards() {
    const response = await fetch('data.json');

    
    const data = await response.json();


    let articles = data.articles;
    
    console.log(articles);

    const container = document.querySelector(".articles .container .row");

    articles.forEach((article,idx) => {
        console.log(idx + 1)
        console.log(article.thumbnail)
        console.log(article.title)
        console.log(article.summary)


        const cardHTML = `
        <div class="col-lg-12 col-md-6 mb-4">
        <div class="card">
            <img src="${article.thumbnail}" class="card-img-top" alt="${article.title}">
            <div class="card-body">
            <h5 class="card-title" style="font-size:1rem;">${article.title}</h5>
            <p class="card-text">${article.summary}</p>
            <a href="" class="btn btn-primary">More</a>
            </div>
        </div>
        </div>
    `;

        container.insertAdjacentHTML("beforeend", cardHTML);

    });


   
    
}
   

renderCards();

