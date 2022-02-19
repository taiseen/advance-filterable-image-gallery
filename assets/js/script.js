// 19 - Feb - 2022 

const toggleBtn = document.getElementById('side-menu');
const searchBox = document.getElementById('search-box');
const sideBar = document.querySelector('.side-bar');
const popupImage = document.querySelector('.popup-image');
const images = document.querySelectorAll('.image-container img');
const categoryBtn = document.querySelectorAll('.category .btn');


toggleBtn.onclick = () => {
    toggleBtn.classList.toggle('fa-times');
    sideBar.classList.toggle('userClick');
}

// by clicking this div, img popup close
popupImage.onclick = () => {
    popupImage.style.display = 'none';
}

window.onscroll = () => {
    toggleBtn.classList.remove('fa-times');
    sideBar.classList.remove('userClick');
}


images.forEach(img => {
    img.onclick = () => {
        
        let imgSrc = img.getAttribute('src');

        // 1st get ready the image holder
        popupImage.style.display = 'flex';

        //query inside this div for img tag & set value
        popupImage.querySelector('img').src = imgSrc;
    }
});




// User typing ==> Search

searchBox.oninput = (e) => {

    // convert user input value into lower case
    let userInput = e.target.value.toLowerCase();

    images.forEach(img => {
        
        // get image data- attribute value
        let dataSearch = img.getAttribute('data-search')

        // match userInput value, have inside dataSearch variable...
        if (dataSearch.indexOf(userInput) > -1) {
            img.style.display = 'inline-block';
        } else {
            img.style.display = 'none';
        }
    });
}




// Button pressing ==> Search

// loop at all buttons
categoryBtn.forEach(btn => {

    // get each button click
    btn.onclick = () => {

        // get current clicking button data- attribute value
        let userClick = btn.getAttribute('data-category');

        // remove previously selected or clicked button
        categoryBtn.forEach(remove => { remove.classList.remove('active') });

        // loop to collect all data- about Image
        images.forEach(img => {

            // get image data- attribute value
            let category = img.getAttribute('data-cat');
            
            // get image file extension
            let fileType = img.getAttribute('src').split('.').pop();


            if (userClick == 'all') {
                img.style.display = 'inline-block';
            } else if (userClick === category) {        // <== search by Category
                img.style.display = 'inline-block';
            } else if (userClick === fileType) {        // <== search by File Type
                img.style.display = 'inline-block';
            } else {
                img.style.display = 'none';             // <== no result found
            }
        });

        btn.classList.add('active');
    }
})