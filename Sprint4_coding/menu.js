let foodM = [
    {
        image: "https://b.zmtcdn.com/data/pictures/5/18544135/21c99da5ce9408ebb1a818cdb9bbfe5c_o2_featured_v2.jpg?output-format=webp",
        name: "The Roll Thali",
        price: 400,
        time: 30
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/9/19640369/56444f1caf069ffac1b34583dc8e13d8_o2_featured_v2.jpg?output-format=webp",
        name: "Noodles",
        price: 200,
        time: 25
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/4/19207954/54a2921f8a9d9973d6d8f95a2e3418bf_o2_featured_v2.jpg?output-format=webp",
        name: "Punjabi Biryani",
        price: 500,
        time: 40
    },
    {
        image: "https://b.zmtcdn.com/data/pictures/chains/9/18349489/543cce54cbd1ee577a36bde7f807804d.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        name: "Special Bryani",
        price: 550,
        time: 35
    },
]

if (localStorage.getItem('foodList') == null) {
    localStorage.setItem('foodList', JSON.stringify(foodM))
}

function showFood() {
    
    let parent = document.getElementById('food');
    parent.innerHTML = null;
    
    let food_list = JSON.parse(localStorage.getItem('foodList'));

    food_list.forEach(function (el) {

        let div = document.createElement('div');
        let p_image = document.createElement('img')
        p_image.src = el.image
        let p_name = document.createElement('p');
        p_name.innerHTML = `Name: ${el.name}`
        let p_price = document.createElement('p');
        p_price.innerHTML = `Price: ${el.price}`
        let p_time = document.createElement('p');
        p_time.innerHTML = `Time to prepare: ${el.time}`
        let btn = document.createElement('button');
        btn.textContent = "Add To Cart"
        btn.onclick = function () {
            addCart(el);
        }
        
        parent.append(div)
        div.append(p_image, p_name, p_price, p_time, btn);
        
    })

}
showFood();

function GoCart() {
    window.location.href = "./cart.html"
}

function addCart(el) {
    
    let UserCart;

    UserCart = localStorage.getItem('usersCart')
     
    if (UserCart == null) {
        UserCart = [];
    } else {
        UserCart = JSON.parse(localStorage.getItem('usersCart'))
    }
    UserCart.push(el);

    localStorage.setItem('usersCart', JSON.stringify(UserCart))

}