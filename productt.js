

fetchProduct()
function fetchProduct() {
  fetch("https://fakestoreapi.com/products").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          if (data.length > 0) {

            var temp = "";
            let count = 1;
            data.forEach((itemData) => {

              const cart = {
                "title": itemData.title,
                "price": itemData.price,
                "image": itemData.image,
                "quantity": 1
              };

              temp += "<div class='col-sm-3 col-6 second_product'>"
              temp += "<img src='" + itemData.image + "' class='firstproduct'>"
              temp += "<a href='view-item.html?itemid=" + count + "' class='producttitle'>" + itemData.title.substring(0, 20) + "...  </a>"
              temp += "<p class='text-left mb-0'><small class='text-left'>Rating: " + itemData.rating['rate', 'count'] + "</small><p>"
              temp += "<h5 class='text-left'>$" + itemData.price + "</h5>"
              temp += "<button class='btn btn-success product_button'  onclick='addCartItem(" + itemData.id + ", " + JSON.stringify(cart) + ")'>Add To Cart </button>"
              temp += "</div>"


              /*     temp += "<div class=' col-sm-3 col-6 second_product' >"
                  temp += "<img src='" + itemData.image + "' class='firstproduct card-img-top'>"
                //  temp += "<div class='card-body'>"
                  temp += "<a href='view-item.html?itemid=" + count + "' class='producttitle'>" + itemData.title.substring(0, 40) + "...  </a>"
                  temp += "<p class='text-left mb-0'><small class='text-left'>Rating: " + itemData.rating['rate', 'count'] + "</small><p>"
                  temp += "<button class='btn btn-success product_button'  onclick='addCartItem(" + itemData.id + ", " + JSON.stringify(cart) + ")'>Add To Cart </button>"
                  temp += "</div>" */
              count++;
            });
            document.getElementById('product').innerHTML = temp;
          }
        }
      )
    }
  )
}


fetchALLProduct()
function fetchALLProduct() {
  fetch("https://fakestoreapi.com/products").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          if (data.length > 0) {

            var temp = "";
            let count = 1;
            data.forEach((itemData) => {

              temp += "<div class='col-sm-3 col-6  second_product'>"
              temp += "<img src='" + itemData.image + "' class='firstproduct'>"
              temp += "<a href='view-item.html?itemid=" + count + "' class='producttitle'>" + itemData.title.substring(0, 20)  + "...  </a>"
              temp += "<h5 class='text-left'>" + itemData.rating['rate', 'count'] + "</h5>"
              temp += "<h5 class='text-left'>$" + itemData.price + "</h5>"
              temp += "<a href='view-item.html?itemid=" + count + " 'class='btn btn-success'>Add To Cart </a>"
              temp += "</div>"


              count++;
            });
            document.getElementById('allproduct').innerHTML = temp;
          }
        }
      )
    }
  )

}

fetchProduct1()
function fetchProduct1() {
  fetch("https://fakestoreapi.com/products/3").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          let count = 1;
          document.getElementById('product1').innerHTML = ("<a href='view-item.html?itemid=" + count + "'>" + data['title']);
          document.getElementById('product2').innerHTML = ("$" + data['price']);
          document.getElementById('product5').src = (data['image']);
          count++;
        }
      )
    }
  )



}



fetchCategoryProduct()
function fetchCategoryProduct() {
  fetch("https://fakestoreapi.com/products").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          if (data.length > 0) {

            var temp = "";
            let count = 1;
            data.forEach((itemData) => {
              //temp += "<div><img src='" + itemData.image + "'>";
              //temp += "<a href='' >" + itemData.category + "</a></div>";
              temp += "<div class='col-sm-3 second_product'>"
              temp += "<img src='" + itemData.image + "' class='firstproduct'>"
              temp += "<a href='view-item.html?itemid=" + count + "' class='producttitle'>" + itemData.title + "  </a>"
              temp += "<h5>" + itemData.rating['rate', 'count'] + "</h5>"
              temp += "<h5>$" + itemData.price + "</h5>"
              temp += "</div>"


              count++;
            });
            document.getElementById('category').innerHTML = temp;
          }
        }
      )
    }
  )

}


fetchProduct2()
function fetchProduct2() {
  fetch("https://fakestoreapi.com/products/3").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          let count = 1;
          document.getElementById('newproduct8').innerHTML = ("<a href='view-item.html?itemid=" + count + "'>" + data['title']);
          document.getElementById('newproduct9').innerHTML = ("Price: $" + data['price']);
          document.getElementById('newproduct99').src = (data['image']);
          count++;
        }
      )
    }
  )

}

fetchProduct3()
function fetchProduct3() {
  fetch("https://fakestoreapi.com/products/4").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          let count = 1;
          document.getElementById('newproduct4').innerHTML = ("<a href='view-item.html?itemid=" + count + "'>" + data['title']);
          document.getElementById('newproduct5').innerHTML = ("$" + data['price']);
          document.getElementById('newproduct6').src = (data['image']);
          count++;
        }
      )
    }
  )

}

fetchProduct4()
function fetchProduct4() {
  fetch("https://fakestoreapi.com/products/7").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          let count = 1;
          document.getElementById('catpro').innerHTML = ("<a href='view-item.html?itemid=" + count + "'>" + data['title']);
          document.getElementById('catpro1').innerHTML = ("$" + data['price']);
          document.getElementById('catpro2').src = (data['image']);
          count++;
        }
      )
    }
  )

}

fetchProduct5()
function fetchProduct5() {
  fetch("https://fakestoreapi.com/products/17").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          let count = 1;
          document.getElementById('catproduct1').innerHTML = ("<a href='view-item.html?itemid=" + count + "'>" + data['title']);
          document.getElementById('catproduct2').innerHTML = ("$" + data['price']);
          document.getElementById('catproduct').src = (data['image']);
          count++;
        }
      )
    }
  )

}

fetchProduct7()
function fetchProduct7() {
  fetch("https://fakestoreapi.com/products/19").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          let count = 1;
          document.getElementById('mainproduct1').innerHTML = ("<a href='view-item.html?itemid=" + count + "'>" + data['title']);
          document.getElementById('mainproduct2').innerHTML = ("$" + data['price']);
          document.getElementById('mainproduct').src = (data['image']);
          count++;
        }
      )
    }
  )

}

fetchProduct6()
function fetchProduct6() {
  fetch("https://fakestoreapi.com/products/12").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          let count = 1;
          document.getElementById('newproduct2').innerHTML = ("<a href='view-item.html?itemid=" + count + "'>" + data['title']);
          document.getElementById('newproduct1').innerHTML = ("$" + data['price']);
          document.getElementById('newproduct').src = (data['image']);
          count++;
        }
      )
    }
  )

}



fetchJewCategory()
function fetchJewCategory() {
  fetch("https://fakestoreapi.com/products/category/jewelery").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          if (data.length > 0) {
            var temp = "";
            let count = 1;
            data.forEach((itemData) => {
              //temp += "<div><img src='" + itemData.image + "'>";
              //temp += "<a href='' >" + itemData.category + "</a></div>";
              temp += "<div class='col-6 col-sm-3 second_product '>"
              temp += "<div class='firstproduct'><img src='" + itemData.image + "' class='img-fluid'></div>"
              temp += "<a href='view-item.html?itemid=" + count + "' class='producttitle'>" + itemData.title + "  </a>"
              temp += "<h5 class='text-left'>" + itemData.rating['rate', 'count'] + "</h5>"
              temp += "<h5 class='text-left'>$" + itemData.price + "</h5>"
              temp += "</div>"

              count++;
            });
            document.getElementById('jewelery').innerHTML = temp;
          }
        }
      )
    }
  )

}

fetchCategory()
function fetchCategory() {
  fetch("https://fakestoreapi.com/products/category/electronics").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          if (data.length > 0) {
            var temp = "";
            let count = 1;
            data.forEach((itemData) => {
              //temp += "<div><img src='" + itemData.image + "'>";
              //temp += "<a href='' >" + itemData.category + "</a></div>";
              temp += "<div class='col-sm-4 col-6 second_product1'>"
              temp += "<img src='" + itemData.image + "' class='imagecat'>"
              temp += "<a href='view-item.html?itemid=" + count + "' class='producttitle'>" + itemData.title.substring(0, 30) + "....  </a>"
              //temp += "<h5>" + itemData.rating['rate', 'count'] + "</h5>"
              temp += "<h5 class='text-left'>$" + itemData.price + "</h5>"
              temp += "</div>"


              count++;
            });
            document.getElementById('productcategory').innerHTML = temp;
          }
        }
      )
    }
  )

}





fetchNewProduct()
function fetchNewProduct() {
  fetch("product.txt").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          if (data.length > 0) {

            var temp = "";
            let count = 1;
            data.forEach((itemData) => {
              //temp += "<div><img src='" + itemData.image + "'>";
              //temp += "<a href='' >" + itemData.category + "</a></div>";
              temp += "<div class='swiper-slide'>"
              temp += "<div><img src='" + itemData.image + "' class='firstproduct'></div>"
              temp += "<p><a href='view-item.html?itemid=" + count + "' class='producttitle'>" + itemData.title + "  </a></p>"
              temp += "<h5>" + itemData.rating['rate', 'count'] + "</h5>"
              temp += "<h5>$" + itemData.price + "</h5>"
              temp += "</div>"


              count++;
            });
            document.getElementById('newproduct').innerHTML = temp;
          }
        }
      )
    }
  )

}



function addtoCart() {
  title = document.getElementById("title").innerText;
  price = document.getElementById("price").innerText;
  image = document.getElementById("image").src;
  quantity = document.getElementById("quantity").value;
  //console.log("cart");

  const cart = {
    "title": title,
    "price": price,
    "image": image,
    "quantity": quantity
  }
  window.localStorage.setItem(itemid, JSON.stringify(cart));
  allCart();
  countCart();
  countCarth();
  // alert("Item added!");
}

function allCart() {
  document.getElementById("cart").innerHTML = "";
  var cart = [];
  for (var i = 0; i < localStorage.length; i++) {
    cart = JSON.parse(localStorage.getItem(localStorage.key(i)));

    document.getElementById("cart").innerHTML += '<div class="dropdown-item"> <div class="row"> <img src="' + cart.image + '" alt="" class="col-sm-3"> <div class="col-sm-9"> <button onclick="removeCart(' + localStorage.key(i) + ')" class="btn btn-sm btn-danger float-right">&times;</button> <p class="float-left">' + cart.title + '</p> <p style="clear:left;"><small>$' + cart.price * cart.quantity + '</small></p> </div> </div> </div>';
  }
}
allCart();


function removeCart(id) {
  localStorage.removeItem(id);
  allCart();
  countCart();
  // alert("Item removed!");
}

allCart1();
function allCart1() {
  document.getElementById("cart2").innerHTML = "";
  var cart = [];
  for (var i = 0; i < localStorage.length; i++) {
    cart = JSON.parse(localStorage.getItem(localStorage.key(i)));

    document.getElementById("cart2").innerHTML += '<div class="dropdown-item"> <div class="row"> <img src="' + cart.image + '" alt="" class="col-sm-3"> <div class="col-sm-9"> <button onclick="removeCart(' + localStorage.key(i) + ')" class="btn btn-sm btn-danger float-right">&times;</button> <p class="float-left">' + cart.title + '</p> <p style="clear:left;"><small>$' + cart.price * cart.quantity + '</small></p> </div> </div> </div>';
  }
}

function addtoCart1() {
  title = document.getElementById("id").innerText;
  price = document.getElementById("price").innerText;
  image = document.getElementById("image").src;
  quantity = document.getElementById("quantity").value;
  //console.log("cart");

  const cart = {
    "title": title,
    "price": price,
    "image": image,
    "quantity": quantity
  }
  window.localStorage.setItem(itemid, JSON.stringify(cart));
  allCart();
  countCart();
  // alert("Item added!");
}

/* function allCart1() {
  document.getElementById("cart2").innerHTML = "";
  var cart = [];
  for (var i = 0; i < localStorage.length; i++) {
      cart = JSON.parse(localStorage.getItem(localStorage.key(i)));

      document.getElementById("cart2").innerHTML += '<div class="dropdown-item"> <div class="row"> <img src="' + cart.image + '" alt="" class="col-sm-3"> <div class="col-sm-9"> <button onclick="removeCart(' + localStorage.key(i) + ')" class="btn btn-sm btn-danger float-right">&times;</button> <p class="float-left">' + cart.title + '</p> <p style="clear:left;"><small>$' + cart.price * cart.quantity + '</small></p> </div> </div> </div>';
  }
}
allCart1(); */

function countCart() {
  let counter = localStorage.length;
  document.getElementById("counter").innerHTML = counter;
  document.getElementById("counter2").innerHTML = counter;
  document.getElementById("countermobile2").innerHTML = counter;
  document.getElementById("counterhome").innerHTML = counter;
  alert(counter)
}
countCart();


//Add \cart Item
/* function addCartItem(itemid, cart) {
  window.localStorage.setItem(itemid, JSON.stringify(cart));
  alert("Item added!");
  allCart();
  countCarth();
}

function countCarth() {
  let counter = localStorage.length;
  alert(counter)
  document.getElementById("counterhome").innerHTML = counter;
  allCart();
} 
countCarth();  */

/* 
var url_string = window.location;
var url = new URL(url_string)
var itemid = url.searchParams.get("itemid");

//localStorage.clear();


function countCart() {
    let counter = localStorage.length;
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("counter2").innerHTML = counter;
    document.getElementById("countermobilehome").innerHTML = counter;
    document.getElementById("countermobile2").innerHTML = counter;

}
countCart(); */
