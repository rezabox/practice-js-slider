var img=document.querySelector('.slider-item').children;
var nextSlider=document.querySelector('.next');
var prevSlider=document.querySelector('.preveious');
var i=0;
var total= img.length;
console.log(total);

nextSlider.onclick = function(){
    next('next');
}
prevSlider.onclick = function(){
    next('prev');
}
function next(direction){
    if(direction == 'next'){
        i++;
        if(i == total){
            i = 0;
        }
    }else{
        if(i == 0){
            i = total-1;
        }else{
            i--;
        }
        
    }
    for(let i =0; i < total; i++){
        img[i].classList.remove('active');
    }

    img[i].classList.add('active');



}