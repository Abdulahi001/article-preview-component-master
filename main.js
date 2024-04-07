let share = document.querySelector('.share');
let share1 = document.querySelector('.share1');
let icons = document.getElementById('icon')
console.log(icons)
icons.style.display = 'none'
share1.classList.add('hide')


share.addEventListener('click',function(){
    share1.classList.remove('hide');
    share.classList.add('hide');
    icons.style.display = 'block'
})
share1.addEventListener('click',function () {
    share1.classList.add('hide');
    share.classList.remove('hide');
    icons.style.display = 'none'
})

