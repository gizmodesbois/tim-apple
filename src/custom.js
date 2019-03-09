var all = document.querySelectorAll("h1,h2,h3,h4,h5,p,span,em,strong");

for (i = 0; i < all.length; i++) {
  all[i].innerHTML = all[i].innerHTML.replace(/tim cook/gi, "Tim Apple")
}