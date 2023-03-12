//your JS code here. If required.
const submitBtn = document.getElementById('btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const firstName = document.getElementById('firstname').value;
  const lastName = document.getElementById('lastname').value;
  const phoneNumber = document.getElementById('phonenumber').value;
  const email = document.getElementById('email').value;

  const mesg = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail ID: ${email}`;

  if (!firstName || !lastName || !phoneNumber || !email) {
    return alert(`Please fill out all fields.`);
  } else {
    return alert(mesg);
  }
});
