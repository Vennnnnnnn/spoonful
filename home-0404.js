// let detail = document.querySelector('.detail');

// detail.addEventListener('click', function() {
//     alert(123)
// });

// let pictures = ['./pic/注重細節/12-w367-h462.jpg', 
// './pic/注重細節/13-w367-h462.jpg',
// './pic/注重細節/7 (2)-w367-h462.jpg',
// './pic/注重細節/4-fotor-w367-h462.jpg']

// let index = 0;

// setInterval(function() {
//     generatePictureElement();
// }, 3000); 


// function generatePictureElement() {
//     const container = document.getElementsByClassName('detail-container')[0];
//     const picture = document.createElement('div');
//     picture.classList.add('detail-pic');
//     const img = document.createElement('img');

//     img.style.width = 376 + 'px'; 
//     img.style.height = 462 + 'px'; 

//     img.src = pictures[index];

//     index++;

//     if (index > 3) {
//         index = 0; 
//     }

//     img.alt = 'Dynamic Image';
//     picture.appendChild(img);
//     container.appendChild(picture);
// }

// function removeChildPic() {
//     const container = document.querySelector('.detail-container');
//     const firstElement = container.querySelector('.detail-pic');
//     if (firstElement) {
//         container.removeChild(firstElement);
//     }
// }

// let moveSite = 0;

// setInterval(function() {
//     moveSite--;
//     moveTranslate(moveSite);  
// }, 20);

// function moveTranslate(moveSite) {
//     const elements = document.querySelectorAll('.detail-pic');
//     elements.forEach(element => {
//         element.style.transform = `translateX(${moveSite}px)`;
//     });
// }
// document.addEventListener('DOMContentLoaded', function() {
//     let links = document.querySelectorAll('a');

//     links.forEach(link => {
//         link.addEventListener('click', function(e){
//             e.preventDefault();
//         });
//     });
// });
