const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let valid = true;
  const fullname = document.getElementById('fullname');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  // Reset border colors
  [fullname, email, subject, message].forEach(input => input.style.borderColor = '#ccc');

  // Check required fields
  if (fullname.value.trim() === '') {
    fullname.style.borderColor = 'red';
    valid = false;
  }

  if (email.value.trim() === '') {
    email.style.borderColor = 'red';
    valid = false;
  } else {
    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      email.style.borderColor = 'red';
      valid = false;
    }
  }

  if (subject.value.trim() === '') {
    subject.style.borderColor = 'red';
    valid = false;
  }

  if (message.value.trim() === '') {
    message.style.borderColor = 'red';
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
  } else {
    alert('Please fill in all required fields correctly.');
  }
});
