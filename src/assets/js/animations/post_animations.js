function handleClickAnimation(element) {
  element.style.transform = 'scale(0.9)';
  element.style.boxShadow = '0px 2px 0px #dddddd';
  setTimeout(() => {
    element.style.transform = 'scale(1)';
    element.style.boxShadow = 'none';
  }, 200);
}

function postActionAnimation() {}

export { handleClickAnimation };
