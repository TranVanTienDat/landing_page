const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// quantity product
const quantity = $(".quantity");
const up = $(".up");
const down = $(".down");
const listImg = $(".list-img-product");

// Tăng giảm số lượng sản phẩm
const updateQuantity = (operation) => {
  let qty = parseInt(quantity.innerText);
  if (operation === "increase") {
    qty++;
  } else if (operation === "decrease" && qty > 1) {
    qty--;
  }
  quantity.innerText = qty;
};

// Sự kiện khi nhấn nút tăng số lượng
up.addEventListener("click", () => {
  updateQuantity("increase");
});

// Sự kiện khi nhấn nút giảm số lượng
down.addEventListener("click", () => {
  updateQuantity("decrease");
});

//  slider img
const scrollLeft = $(".scroll-left");
const scrollRight = $(".scroll-right");
const listImgProduct = $(".list-img-product");

const arrayListImg = [
  {
    img: "./assets/images/img-view.png",
  },
  {
    img: "./assets/images/img-view.png",
  },
  {
    img: "./assets/images/img-view.png",
  },
  {
    img: "./assets/images/img-view.png",
  },
  {
    img: "./assets/images/img-view.png",
  },
];

const mapImg = (arr) => {
  return arr.map((data, i) => {
    return `<div class="img lg:w-[600px] max-lg:w-[450px] "><img index=${i} src="${data.img}" alt="" class=" w-[100%] h-[100%] object-cover "/></div>`;
  });
};

listImgProduct.innerHTML = mapImg(arrayListImg);
const img = $$(".img");
const widthImg = img.clientWidth;
const lengthItems = img.length - 1;
let active = 0;

scrollRight.addEventListener("click", () => {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  listImgProduct.style.left = -img[active].offsetLeft + "px";
  console.log(listImgProduct);
});

scrollLeft.addEventListener("click", () => {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  listImgProduct.style.left = -img[active].offsetLeft + "px";
  console.log(listImgProduct);
});

//  info
const listInfo = $$(".info");

listInfo.forEach((item) => {
  item.addEventListener("click", () => {
    // Loại bỏ lớp active khỏi tất cả các thẻ
    listInfo.forEach((item) => {
      item.classList.remove("info--active");
    });

    // Thêm lớp active cho thẻ được nhấp vào
    item.classList.add("info--active");
  });
});
