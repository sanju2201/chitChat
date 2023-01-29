///////////MENUBAR (SIDEBAR)//////////////
const menuItems = document.querySelectorAll(".menu-item");

// mesage
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
// const message = messages.querySelectorAll('.message');
// const messageSearch = document.querySelector('#message-search');



menuItems.forEach(item => {
    item.addEventListener("click",()=>{
        changeActiveItem();
        item.classList.add("active");
        if (item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none'
        } else {
            document.querySelector('.notifications-popup').style.display = 'block'
            document.querySelector('#notifications .notification-count').style.display = 'none'
        }
    })
})

 // remove active class from other menu buttons
const changeActiveItem = ()=>{
    menuItems.forEach(item =>{
        item.classList.remove("active");
    })
}


///////////MESSAGES//////////////
// searchs chat
// const searchMessage = ()=>{
//    const val = messageSearch.value.toLowerCase();
//    console.log(val);
//    message.forEach(chat => {
//     let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
//    })
// }

// search chat
// messageSearch.addEventListener('keyup',searchMessage);

// Highlight message card when mesages menu item is clicked
messagesNotification.addEventListener("click",()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
   messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    },2000);
})



