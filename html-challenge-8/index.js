let listed__numbers = document.getElementsByClassName('listed__numbers');

listed__numbers.forEach(element => {
    element.addEventListener('click', function() {
      console.log('click')
    });
});

//.classList.toggle("one");