function btn1(){
    const img=document.querySelector('.container');
    console.log("button clicked!");
    img.className='container';
    img.classList.add('invert');
}

function btn2(){
    const img=document.querySelector('.container');
    console.log("button clicked!");
    img.className='container';
    img.classList.add('hue');
}

function btn3(){
    const img=document.querySelector('.container');
    console.log("button clicked!");
    img.className='container';
    img.classList.add('sat');
}

function btn4(){
    const img=document.querySelector('.container');
    console.log("button clicked!");
    img.className='container';
}

// function download(){
//     const img=document.getElementsByClassName('carousel-item active');
//     let imgPath=img.getAttribute('src');
//     console.log(imgPath);
// }

function toggleClass(){
    const sec=document.querySelector('.sec');
    const body=document.querySelector('body');
    sec.classList.toggle('light');
    body.classList.toggle('lgt');
}