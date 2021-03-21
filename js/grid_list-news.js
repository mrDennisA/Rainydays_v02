function gridNews(list) {
    for (let i = 0; i < list.length; i++) {
        if (i === 4) {
            break;
        }
        const item = list[i];
        if (item.gender === "mens") {
            const gridMensNews = document.getElementById("grid-mens-news");
            gridMensNews.innerHTML += `  <a href="./product_details.html">
                                            <img src="./images/mens/${item.img}" alt="${item.name}">
                                            <div>
                                                <span>${item.rating}</span>
                                                <h4>${item.name}</h4>
                                                <div>${item.discription}</div>
                                                <h3>Price ${item.price}</h3>
                                            </div>
                                        </a>`;
        } else {
            const gridWomensNews = document.getElementById("grid-womens-news");
            gridWomensNews.innerHTML += `   <a href="./product_details.html">
                                                <img src="./images/womens/${item.img}" alt="${item.name}">
                                                <div>
                                                    <span>${item.rating}</span>
                                                    <h4>${item.name}</h4>
                                                    <div>${item.discription}</div>
                                                    <h3>Price ${item.price}</h3>
                                                </div>
                                            </a>`;
        }
    }
}

if (typeof mensList !== "undefined") {
    gridNews(mensList);
}

if (typeof womensList !== "undefined") {
    gridNews(womensList);
}
