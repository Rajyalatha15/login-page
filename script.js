function login(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const error = document.getElementById('error');

  if (email === '' || password === '') {
    error.textContent = '⚠️ Please fill all fields!';
    return;
  }

  if (password.length < 6) {
    error.textContent = '⚠️ Password must be at least 6 characters!';
    return;
  }

  error.style.color = '#4ade80';
  error.textContent = '✅ Login successful!';
}