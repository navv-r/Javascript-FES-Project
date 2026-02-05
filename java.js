// template_qhlj3ro
// service_g1pstsc
// VwH5xvKzzdxR_BhUd

let contrastToggle = false;
function toggleContrast() {
	contrastToggle = !contrastToggle
	if (contrastToggle) {
		document.body.classList += " dark-theme"
	}
	else {
		document.body.classList.remove("dark-theme")
	}
	
}

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
          document.body.classList.add("modal--open")
     }


const scaleFactor = 1/25
function moveBackground(event) {
     const shapes = document.querySelectorAll(".shape")
     const x = event.clientX * scaleFactor
     const y = event.clientY * scaleFactor

     for (let i = 0; i < shapes.length; ++i) {
          const isOdd = i % 2 !== 0
          const boolInt = isOdd ? -1 : 1
          shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
     }
}