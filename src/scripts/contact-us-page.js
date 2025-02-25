import { Modal } from "bootstrap"

console.info("contact us page script loaded")

const $formFeedbackModal = document.getElementById("formFeedbackModal")
const bsFormFeedbackModal = new Modal($formFeedbackModal, {})
const $contactForm = document.getElementById("contact-form")

if ($contactForm) {
  $contactForm.onsubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.target.classList.contains("needs-validation")) {
      e.target.classList.remove("needs-validation")
      e.target.classList.add("was-validated")
    }

    if (e.target.checkValidity()) {
      bsFormFeedbackModal.show()
    }
  }
}

const $header = document.querySelector("body > header")
const $main = document.querySelector("body > main")

$main.style.paddingTop = $header.getBoundingClientRect().height + "px"
