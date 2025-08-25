
const mobileNumber = 10833749611;
const pinNumber = 1234;


document.getElementById('login-btn')
.addEventListener('click', function(event) {
    event.preventDefault();

    const mobile = document.getElementById('login-mobile-number');
    const mobileValue = parseInt(mobile.value);

    const pin = document.getElementById('login-pin');
    const pinValue = parseInt(pin.value);

  if(mobileNumber !== mobileValue || pinNumber !== pinValue) {
    alert('Please give valid information');
    return;
  }

  document.location.href = 'home.html';

  mobile.value = '';
  pin.value = '';
    
})
