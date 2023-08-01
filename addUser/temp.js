const ul = document.querySelector('.items');
const btn = document.querySelector('.btn');
btn.style.background = 'red';

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.className);
    document.getElementById('my-form').style.background = '#FF0000';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Clicked</h1>';
    console.log(e);
  });
  
  
  btn.addEventListener('mouseover', e => {
      e.preventDefault();
      console.log(e.target.className);
      document.getElementById('my-form').style.background = '#0000FF';
      // document.querySelector('body').classList.add('bg-dark');
      ul.lastElementChild.innerHTML = '<h1>Hover</h1>';
    });
  
    btn.addEventListener('mouseout', e => {
      e.preventDefault();
      console.log(e.target.className);
      document.getElementById('my-form').style.background = '#ccc';
      // document.querySelector('body').classList.add('bg-dark');
      ul.lastElementChild.innerHTML = '<h1>Left</h1>';
    });
  