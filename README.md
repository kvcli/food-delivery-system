# food-delivery-system 

to use the cart page in your website, just copy the html part of it and css styles, and also stoer.js file.

you need to edit names of classes in this function to match with names of classes you have in your products section.

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

as you can see here 
 
 <div class="box" data-aos="fade-up">
            
            <img class="image" src="images/menu-3.jpg">
            <div class="content">
                <div class="price"> $7.99 <span>9.99</span> </div>
                <span class="shop-item-title">   <p>oat & Banana crape.</p> </span>
                <button class="btn btn-primary shop-item-button" type="button">Order now</button>
            </div>
        </div>
