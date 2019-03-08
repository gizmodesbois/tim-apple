var all = document.querySelectorAll("h1,h2,h3,h4,h5,p,span,em,strong");

var searchValue = ['Tim Cook', 'tim cook'];
for (j = 0; j < searchValue.length; j++) {
  for (i = 0; i < all.length; i++) {
    if (all[i].innerHTML.indexOf(searchValue[j]) > -1) {
      all[i].innerHTML = all[i].innerHTML.replace(searchValue[j], "Tim Apple")
    }
  }
}