function scrollAppear(){
    var about = document.getElementById('about');
    var aboutPosition = about.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.1;
    var aboutImg = document.querySelector('.profile-pic');
    var aboutImgPosition = aboutImg.getBoundingClientRect().top;

    if(aboutPosition < screenPosition){
        about.classList.add('appear');
    }
    if(aboutImgPosition < screenPosition){
        aboutImg.classList.add('appear');
    }
}

window.addEventListener('scroll', scrollAppear);