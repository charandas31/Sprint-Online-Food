

function cart() {
    let cartU = document.getElementById('cartU');
    cartU.innerHTML = null;

    let userC = JSON.parse(localStorage.getItem('usersCart'));

    userC.forEach(function (el) {

        let div = document.createElement('div');
        let p_image = document.createElement('img')
        p_image.src = el.image
        let p_name = document.createElement('p');
        p_name.innerHTML = `Name: ${el.name}`
        let p_price = document.createElement('p');
        p_price.innerHTML = `Price: ${el.price}`
        let p_time = document.createElement('p');
        p_time.innerHTML = `Time to prepare: ${el.time}`
        
        cartU.append(div)
        div.append(p_image, p_name, p_price, p_time);
    })
}
cart()