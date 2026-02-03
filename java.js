// template_qhlj3ro
// service_g1pstsc
// VwH5xvKzzdxR_BhUd

function contact(event) {
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
               success.classList.add("modal__overlay--visible")

               setTimeout(() => {
               success.classList.remove("modal__overlay--visible")
               event.target.reset()
               toggleModal()
               }, 1000)

          }).catch(() =>{
               loading.classList.remove("modal__overlay--visible")
               alert(
                    "The email service is temporarily unavailable. Please contact me directly on email@email.com"
               )
          })
     }

     let isModalOpen = false
     function toggleModal() {
          if (isModalOpen) {
               isModalOpen = false
               return document.body.classList.remove("modal--open")
          }
          isModalOpen = true
          console.log("toggleModal()")
          document.body.classList += " modal--open"
     }