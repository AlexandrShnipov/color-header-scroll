let myNav = document.getElementById('mynav');
const onScroll = () => {
  if (document.documentElement.scrollTop >= 100) {
    console.log(document.documentElement.scrollTop)
    myNav.classList.add('nav-colored');
    // myNav.classList.remove("nav-transparent");
  }
  else {
    // myNav.classList.add("nav-transparent");
    myNav.classList.remove('nav-colored');
  }
};

window.addEventListener('scroll', onScroll)
