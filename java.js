// template_qhlj3ro
// service_g1pstsc
// VwH5xvKzzdxR_BhUd

function contact() {
     event.preventDefault()
     const loading = document.querySelector('.modal__overlay--loading')
     const success = document.querySelector('.modal__overlay--success')
     loading.classList += " modal__overlay--visible"
     emailjs
          .sendForm(
               'service_g1pstsc',
               'template_qhlj3ro',
               event.target,
               'VwH5xvKzzdxR_BhUd'
          ).then(() => {
               loading.classList.remove("modal__overlay--visible")
               success.classList += " modal__overlay--visible"
          }).catch(() =>{
               loading.classList.remove("modal__overlay--visible")
               alert(
                    "The email service is temporarily unavailable. Please contact me directly on email@email.com"
               )
          })
     }