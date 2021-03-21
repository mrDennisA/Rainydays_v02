const breadcrumbs = document.querySelector(".breadcrumbs");
const productImg = document.querySelector(".product-img");
const productName = document.querySelector(".product-name");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// if (id === null) {
//     location.href = "/";
// }

async function createHtml(item) {
    if (item.gender === "mens") {
        breadcrumbs.innerHTML = `   <li><a href="./index.html">Rainydays</a></li>
                                    <li><a href="./mens.html">Mens</a></li>
                                    <li><a href="./mens_outdoor.html">Outdoor</a></li>
                                    <li>${item.name}</li> `;

        productImg.src = `./images/mens/${item.img}`;

        productName.innerHTML = `   <h3>${item.name}</h3>
                                    <p>${item.discription}</p>
                                    <h2>${item.price}</h2>
                                    <p>${item.info}</p>`;
    } else {
        breadcrumbs.innerHTML = `   <li><a href="./index.html">Rainydays</a></li>
                                    <li><a href="./womens.html">Womens</a></li>
                                    <li><a href="./womens_outdoor.html">Outdoor</a></li>
                                    <li>${item.name}</li> `;

        productImg.src = `./images/womens/${item.img}`;

        productName.innerHTML = `   <h3>${item.name}</h3>
                                    <p>${item.discription}</p>
                                    <h2>${item.price}</h2>
                                    <p>${item.info}</p>`;
    }
}

if (typeof mensList !== "undefined") {
    createHtml(mensList[id]);
}

if (typeof womensList !== "undefined") {
    createHtml(womensList[id]);
}
