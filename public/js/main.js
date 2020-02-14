window.addEventListener('load', async (event) => {
  const response = await axios.get('/user');
  const { data } = response;
  if (data !== '') {
    document.querySelector('.nav-li-login').innerHTML = `<a style="font-family: 'Montserrat', sans-serif; font-weight:bold;"
    href="/logout">Logout</a>`
  } else {
    document.querySelector('.nav-li-login').innerHTML = `<a style="font-family: 'Montserrat', sans-serif; font-weight:bold;"
    href="/login">Login</a>`
  }

})
