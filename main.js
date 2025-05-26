
document.addEventListener('DOMContentLoaded', () => {
    let menuBar = document.querySelector('.menu-bar');
    let closeMenu = document.querySelector('.close-nav-menu');
    let navMenu = document.querySelector('.nav-menu');
    let cartSetCon = document.querySelector('.cart-set-container');
    let subtIcon = document.querySelector('.subtr-icon');
    let addIcon = document.querySelector('.add-icon');
    let itemsNum = document.querySelector('.items-number');
    let addCon = document.querySelector('.add-container');
    let itemsNumOnCart = document.querySelector('.items-number-on-cart');
    let cartImg = document.querySelector('.nav-cart-container');
    let subCartCon = document.querySelector('.sub-cart-container');
    let delCart = document.querySelector('.del-cart');
    let cartItem = document.querySelector('.cart-item');
    let checkout = document.querySelector('.check-out');
    let emptyCart = document.querySelector('.empty-cart');
    let galleryCon = document.querySelector('.gallery-container');
    let mobileGalleryCon = document.querySelector('.gallery-container-mobile');
    let displayImg = document.querySelector('.large-product-img');
    let productImg = document.getElementsByClassName('product-img');
    let index = 0;
    let m_index = 0;
    let nextGImg = document.querySelector('.arrow-fwd-gallery');
    let preGImg = document.querySelector('.arrow-bwd-gallery');
    let nextImg = document.querySelector('.arrow-fwd');
    let preImg = document.querySelector('.arrow-bwd');
    
    menuBar.addEventListener('click', () => {
        navMenu.style.display = 'flex';
        cartSetCon.style.display = 'none';
    })
    closeMenu.addEventListener('click', () => {
        navMenu.style.display = 'none';
    })
    
    addIcon.addEventListener('click', () => {
        itemsNum.innerHTML = Number(itemsNum.innerHTML) + 1;
    })
    
    subtIcon.addEventListener('click', () => {
        itemsNum.innerHTML = (itemsNum.innerHTML > 0) ? Number(itemsNum.innerHTML) - 1 : 0;
    })
    
    addCon.addEventListener('click', () => {
        itemsNumOnCart.innerHTML = Number(itemsNumOnCart.innerHTML) + Number(itemsNum.innerHTML);
        itemsNumOnCart.style.display = (itemsNum.innerHTML > 0) ? 'flex' : itemsNumOnCart.style.display;
        itemsNum.innerHTML = 0;
        if(itemsNumOnCart.innerHTML != 0){
           cartItem.style.display = 'flex';
           checkout.style.display = 'flex';
           emptyCart.style.display = 'none';
           cartItem.querySelector('.cart-items-number').innerHTML = `${itemsNumOnCart.innerHTML}`;
            cartItem.querySelector('.total-price').innerHTML = `$${itemsNumOnCart.innerHTML * 125}.00`;
        }
    })
    
    cartImg.addEventListener('click', () => {
        cartSetCon.style.display = (cartSetCon.style.display == 'flex') ? 'none' : 'flex';
        navMenu.style.display = (screen.width < 1000) ? 'none' : navMenu.style.display;
    })
    if(delCart){
        delCart.addEventListener('click', () => {
            cartItem.style.display = 'none';
           checkout.style.display = 'none';
           emptyCart.style.display = 'flex';
           itemsNumOnCart.innerHTML = 0;
           itemsNumOnCart.style.display = 'none';
        })
        
        displayImg.addEventListener('click', () => {
            galleryCon.style.display = (screen.width >= 1000) ? 'flex' : 'none';
        })
        
        galleryCon.querySelector('.close-gallery').addEventListener('click', () => {
            galleryCon.style.display = 'none';
        })
    }
    for(let img of productImg){
        img.addEventListener('click', () => {
            img.parentNode.querySelectorAll('.product-img').forEach(value => {value.style.border = 'none'});
            img.style.border = '2px solid hsl(26, 100%, 55%)';
            img.style.borderRadius = '10px';
            let imGallery = img.parentNode.parentNode.querySelector('.large-product-img-gallery');
            if(imGallery){
            imGallery.style.background = `url('${img.src}')`;
            imGallery.style.backgroundSize = 'cover';
            imGallery.style.backgroundPosition = 'center';
            }
            let imobile = img.parentNode.parentNode.querySelector('.large-product-img');
            if(imobile){
            imobile.style.background = `url('${img.src}')`;
            imobile.style.backgroundSize = 'cover';
            imobile.style.backgroundPosition = 'center';
            }
            
    });
    }
    nextGImg.addEventListener('click', () => {
        index++;
        if(index > 3){index = 3;}
        let igallery = galleryCon.querySelector('.large-product-img-gallery');
        igallery.style.background = `url('${productImg[index].src}')`;
            igallery.style.backgroundSize = 'cover';
            igallery.style.backgroundPosition = 'center';
            galleryCon.querySelectorAll('.product-img').forEach(value => {
            value.style.border = (igallery.style.background.includes(`${value.src}`)) ? '2px solid hsl(26, 100%, 55%)' : 'none';
            });
    })
    
    preGImg.addEventListener('click', () => {
        index--;
        if(index < 0){index = 0;}
        let igallery = galleryCon.querySelector('.large-product-img-gallery');
        igallery.style.background = `url('${productImg[index].src}')`;
            igallery.style.backgroundSize = 'cover';
            igallery.style.backgroundPosition = 'center';
            galleryCon.querySelectorAll('.product-img').forEach(value => {
            value.style.border = (igallery.style.background.includes(`${value.src}`)) ? '2px solid hsl(26, 100%, 55%)' : 'none';
            });
    })
    
    nextImg.addEventListener('click', () => {
        m_index++;
        if(m_index > 3){m_index = 3;}
        let igallery = mobileGalleryCon.querySelector('.large-product-img');
        igallery.style.background = `url('${productImg[m_index].src}')`;
            igallery.style.backgroundSize = 'cover';
            igallery.style.backgroundPosition = 'center';
            mobileGalleryCon.querySelectorAll('.product-img').forEach(value => {
            value.style.border = (igallery.style.background.includes(`${value.src}`)) ? '2px solid hsl(26, 100%, 55%)' : 'none';
            value.style.backgroundSize = 'cover';
            value.style.backgroundPosition = 'center';
            });
    })
    
    preImg.addEventListener('click', () => {
        m_index--;
        if(m_index < 0){m_index = 0;}
        let igallery = mobileGalleryCon.querySelector('.large-product-img');
        igallery.style.background = `url('${productImg[m_index].src}')`;
            igallery.style.backgroundSize = 'cover';
            igallery.style.backgroundPosition = 'center';
            mobileGalleryCon.querySelectorAll('.product-img').forEach(value => {
            value.style.border = (igallery.style.background.includes(`${value.src}`)) ? '2px solid hsl(26, 100%, 55%)' : 'none';
            });
    })
})
