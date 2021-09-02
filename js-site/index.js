const deletePx = /px$/g;
window.addEventListener('load', loading, false)
autosize(document.querySelector('#user-text'))

function loading() {
    let btnPrev = previous;
    let btnNext = next;
    btnPrev.addEventListener('click', choosePrev, true)
    btnNext.addEventListener('click', chooseNext, false)
}

function chooseNext() {
    let sliderStyle = getComputedStyle( document.querySelector('.slider-track') );
    let position = sliderStyle.left.replace(deletePx,'');
    if(position > -1120 && position % 380 == 0){
        document.querySelector('.slider-track').style.left = (Number(position) - 380) + 'px'; 
    }
    else if (position <= -1120){
        document.querySelector('.slider-track').style.left = '0px'
    }
    
}

function choosePrev() {
    let sliderStyle = getComputedStyle( document.querySelector('.slider-track') );
    let position = sliderStyle.left.replace(deletePx,'');
    

    if(position < 0 && position % 380 == 0){
        document.querySelector('.slider-track').style.left = (Number(position) + 380) + 'px'; 
    }
    else if(position >= 0){
        document.querySelector('.slider-track').style.left = '-1140px'
    }
}