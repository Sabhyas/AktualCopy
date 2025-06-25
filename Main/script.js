const numbers = document.querySelectorAll('.hover-number');
const mainImage = document.getElementById('mainImage');

const images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
let currentIndex = 0;
let autoSlideInterval;

function showImage(index) {
  currentIndex = index;
  mainImage.src = images[currentIndex];
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 2000); // every 2 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

startAutoSlide();

numbers.forEach((number, index) => {
  number.addEventListener('mouseenter', () => {
    stopAutoSlide();      
    showImage(index);     
  });

  number.addEventListener('mouseleave', () => {
    startAutoSlide();    
  });
});

const likeButton = document.getElementById("likebutton")
const likeCount = document.getElementById("likecount");

    likeButton.onclick = function() {
      let currentLikes = parseInt(likeCount.textContent);
      likeCount.textContent = currentLikes + 1;
    };

const dislikeButton = document.getElementById("dislikebutton")
const dislikeCount = document.getElementById("dislikecount")

 dislikeButton.onclick = function() {
  let currentDislikes = parseInt(dislikeCount.textContent);
  dislikeCount.textContent = currentDislikes + 1;
 }
 let reacted = false;

likebutton.onclick = () => {
  if (reacted) return;
  likecount.textContent = parseInt(likecount.textContent) + 1;
  reacted = true;
};

dislikebutton.onclick = () => {
  if (reacted) return;
  dislikecount.textContent = parseInt(dislikecount.textContent) + 1;
  reacted = true;
};

const seeMoreBtn = document.getElementById("seeMoreBtn")
const invisible = document.querySelector(".extra-images")

seeMoreBtn.onclick = function() {
  document.querySelector(".extra-images").style.display = 'block';
}