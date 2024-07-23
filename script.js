function expand(event) {
    const button = event.currentTarget;
    const questionEl = button.closest('.question');
    const uSub = questionEl.querySelector('.uSub');
    uSub.classList.toggle('visible');

    const img = button.querySelector('img');

    if(uSub.classList.contains('visible')){
        img.src='assets/images/icon-minus.svg';
        img.alt = 'minus';
    }else{
        img.src='assets/images/icon-plus.svg';
        img.alt='plus';
    }


}


