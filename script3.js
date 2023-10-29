let button = document.querySelector(".download");

button.addEventListener("click", () => {
    fetch(`https://randomuser.me/api`)

    .then(function (resp) {
        return resp.json();
    })

    .then(function (data) {
        let block = `<div class="element">
        <img src="${data.results[0].picture.large}" alt="Image"/>
        <p>Phone: ${data.results[0].phone}</p>
		<p>Coordinates: ${data.results[0].Coordinates}</p>
		<p>Postcode: ${data.results[0].location.postcode}</p>
        <p>Сountry: ${data.results[0].location.country}</p>
        </div>`;
        document.querySelector(".out").insertAdjacentHTML("beforeend", block);
        console.log(data);
    });

});