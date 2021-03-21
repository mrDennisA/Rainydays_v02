function gridItems(list) {
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (item.gender === "mens") {
            const gridMensItems = document.getElementById("grid-mens-items");
            gridMensItems.innerHTML += `  <a href="../product_details.html">
                                            <img src="../images/mens/${item.img}" alt="${item.name}">
                                            <div>
                                                <span>${item.rating}</span>
                                                <h4>${item.name}</h4>
                                                <div>${item.discription}</div>
                                                <h3>Price ${item.price}</h3>
                                            </div>
                                        </a>`;
        } else {
            const gridWomensItems = document.getElementById("grid-womens-items");
            gridWomensItems.innerHTML += `   <a href="../product_details.html">
                                                <img src="../images/womens/${item.img}" alt="${item.name}">
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
    gridItems(mensList);
}

if (typeof womensList !== "undefined") {
    gridItems(womensList);
}
