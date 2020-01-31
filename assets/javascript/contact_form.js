class ContactForm {
  constructor(){
    this.form = document.getElementById('contact-form');
    this.formMessage = document.getElementById('form-message');
    this.formFields = document.getElementsByClassName('fieldset')
    this.uploadButton = document.getElementById('contact-submit');

    this.form.onsubmit = this.submitForm
  }

  submitForm = (event) => {
    event.preventDefault();
    if (grecaptcha.getResponse().length > 0) {
      this.postContent()
    }
  }

  postContent() {
    this.uploadButton.innerHTML = 'Sending...';

    this.formMessage.innerHTML = '<h3>Thank you</h3>'

    let formData = new FormData(this.form);
    var xhr = new XMLHttpRequest();

    xhr.open('POST', this.form.action, true);
    xhr.onload = _ => {
      let response = JSON.parse(xhr.response);
        this.formMessage.style.opacity = 1
        this.formMessage.style.zIndex = 1
      if (xhr.status === 200) {
          this.formMessage.innerHTML = '<h3>Thank you</h3>'
      } else {
        formMessage.innerHTML = 'Error: ' + response.error;
      }
    };
    xhr.send(formData);
  }
}



var enableBtn = () => {
  form.uploadButton.disabled = false
}

var disableBtn = () => {
  form.uploadButton.disabled = true
}

form = new ContactForm()
