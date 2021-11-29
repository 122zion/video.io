const books = list.getElementsByTagName('li');
Array.from(books).forEach((book) => {
  const title = book.firstElementChild.textContent;
  if(title.toLowerCase().indexOf(e.target.value) != -1){
  if(title.toLowerCase().indexOf(term) != -1){
    book.style.display = 'block';
  } else {
    book.style.display = 'none';
