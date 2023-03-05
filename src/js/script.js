let main = document.querySelector('.sotilganlar__cards'),
    search = document.querySelector(".nav__form--inp");
const data = products.map( el => {
    return {
        id: el.id,
        name: el.title,
        price: el.price,
        description: el.description,
        sold: el.stock,
        categories: el.categories,
        img: el.thumbnail
    }
})
function renderCard(data) {
    data.forEach( el => {
        let card = document.createElement('div');
        card.setAttribute('class', 'sotilganlar__cards--card flex justify-between items-center gap-y-5 flex-col lg:w-[19%] h-min[480px] h-max-[560px] p-2 bg-white');
        card.innerHTML = `
        <img src="${el.img}" alt="" class="w-[150px] h-[100px]">
        <div class="sotilganlar__cards--card-text gap-y-2 flex flex-col">
            <h5 class="text-[#0D63F3] text-[22px]">${el.price * 11360} so’m</h5>
            <p class="text-[19px] font-bold">${el.name}
                </p>
            <p>${el.description}
                </p>
        </div>
        <small class="w-[100%]">${el.sold} ta buyurtma</small>
        <span class="flex justify-between w-[100%] items-center rounded-[10px]">
            <button class="w-[55%] h-[40px] bg-[#0D63F3] text-white font-bold rounded-[8px]">Sotib olish</button>
            <button class="bookmarks py-2 px-2 rounded-md text-white bg-sky-400" data-id="${el.id}">Bookmark</i></button>
        </span>
    </div>
        `
        main.append(card)
    } )
}
renderCard(data);


function renderCardSearch(data) {
    main.innerHTML = null;
    data.forEach( el => {
        let card = document.createElement('div');
        card.setAttribute('class', 'sotilganlar__cards--card flex justify-between items-center gap-y-5 flex-col lg:w-[19%] h-min[480px] h-max-[560px] p-3 bg-white');
        card.innerHTML = `
        <img src="${el.img}" alt="" class="w-[150px] h-[100px]">
        <div class="sotilganlar__cards--card-text gap-y-2 flex flex-col">
            <h5 class="text-[#0D63F3] text-[22px]">${el.price * 11360} so’m</h5>
            <p class="text-[19px] font-bold">${el.name}
                </p>
            <p>${el.description}
                </p>
        </div>
        <small class="w-[100%]">${el.sold} ta buyurtma</small>
        <span class="flex justify-between w-[100%] items-center px-2 rounded-[10px]">
            <button class="w-[55%] h-[40px] bg-[#0D63F3] text-white font-bold rounded-[8px]">Sotib olish</button>
            <button class="bookmarks" data-id="${el.id}>Bookmark</button>
        </span>
    </div>
        `
        main.append(card)
    } )
}
search.addEventListener("keyup", e => {
    let filterArr = data.filter(item => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    renderCardSearch(filterArr);
})

$('#bookmark').addEventListener("click", () => {
    $('#bookmarlist').classList.toggle('show');
})

let bookmarklist = [];

$('.sotilganlar').addEventListener('click', (event) => {
   if (event.target.classList.contains('bookmarks')) {
    let id = event.target.getAttribute('data-id');
    let item = data.filter(el => {
        return el.id == id;
    })
    item.forEach(el => {
        if(!bookmarklist.includes(el.id)) {
            bookmarklist.push(el);
        }
    })
    console.log(bookmarklist);
    $('#bookmarlist').innerHTML = null;
    bookmarklist.forEach( item => {
        const el = createElement('div', 'bg-red-500 mt-[10px] rounded-md w-[95%] py-3 text-white flex justify-around item center', item.name);
        $('#bookmarlist').append(el)
    })
   }
})
