const validationEmail = /^[\w\d]+\@\w+\.\w{2,10}$/

const inputEmail = document.querySelector('.email-List__input');  
const listEmail = document.querySelector('.email-List__content');
const modal = document.querySelector(".modal");

inputEmail.addEventListener('keydown',(e) =>{ 
  if(e.code === "Enter"){
    const value = document.querySelector('.email-List__input').value;
    const valid = validationEmail.test(value);
    if(valid){
    const newAddress = document.createElement('li');
    
    newAddress.classList.add('email-List__item');
    newAddress.innerHTML = `${value}<span class="close"></span>`
    listEmail.append(newAddress);
    close();

    }else{
      modal.classList.toggle('show');
    }

    e.target.value = ''
    e.target.blur();
  }
});

modal.addEventListener('click',(e) => {
  if(e.target === modal){
    modal.classList.toggle('show');
  }
});


function close(){
  closeElements = document.querySelectorAll('.close');
  closeElements.forEach(item => {    // delete li 
    item.addEventListener('click',() => {
      console.log(item.parentNode)
      item.parentNode.remove();
    });
  });
}
close();







