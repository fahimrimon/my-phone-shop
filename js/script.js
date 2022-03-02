// search phone
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));
}

// search phone result
const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card h-100">
                 <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">Model: ${phone.phone_name}</h5>
                    <h5 class="card-title">Brand: ${phone.brand}</h5>
                    <button type="button" class="btn btn-primary">More Details</button>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
}