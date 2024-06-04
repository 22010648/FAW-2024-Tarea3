function setActive(obj){
    setInactive();
    obj.classList.add('active');
}

function setInactive(obj){
    var obj = document.querySelector('.active');
    if (obj != null)
    obj.classList.remove('active');
}