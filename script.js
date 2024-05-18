// let button = document.querySelector('.button');


// // button.addEventListener('click', function(){
// //     alert('!!');
// // })



const clickButton = document.querySelector('button');
        clickButton.addEventListener('click', showMessage);
        
        function showMessage() {
            // if (clickButton.innerText === 'Удалить обработчик события') {
            //     alert('Обработчик удален');
            //     clickButton.removeEventListener('click', showMessage);
            // } else {
            //     alert('Обработчик не удален');
            // }
            alert('!')
        }
