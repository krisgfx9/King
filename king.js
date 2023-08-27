const gridItems = document.querySelectorAll('.grid-item');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-image');
const closeBtn = document.querySelector('.close-btn');
const slideBtnLeft = document.querySelector('.slide-btn.left');
const slideBtnRight = document.querySelector('.slide-btn.right');
const slideBtnFlip = document.querySelector('.slide-btn.flip');

let currentIndex = 0;
const images = [
  './kotf/1.png',
  './kotf/2.png',
  './kotf/3.png',
  './kotf/4.png',
  './kotf/5.png',
  './kotf/6.png',
  './kotf/7.png',
  './kotf/8.png',
  './kotf/9.png',
  './kotf/10.png',
  './kotf/11.png',
  './kotf/12.png',
  './kotf/13.png',
  './kotf/14,5.png',
  './kotf/14.png',
  './kotf/15.png',
  './kotf/16.png',
  './kotf/17.png',
  './kotf/18,2.png',
  './kotf/18,3.png',
  './kotf/18.png',
  './kotf/19.png',
  './kotf/20.png',
  './kotf/21.png',
  './kotf/22.png',
  './kotf/22,5.png',
  './kotf/23.png',
  './kotf/24.png',
  './kotf/25.png',
  './kotf/26.png',
  './kotf/27.png',
  './kotf/28.png',
  './kotf/29,5.png',
  './kotf/29.png',
  './kotf/30.png',
  './kotf/31.png',
  './kotf/32,5.png',
  './kotf/32.png',
  './kotf/33.png',
  './kotf/34.png',
  './kotf/35.png',
  './kotf/36.png',
  './kotf/37.png',
  './kotf/38.png',
  './kotf/39.png',
  './kotf/40.png',
  './kotf/41.png',
  './kotf/42.png',
  './kotf/43.png',
  './kotf/44.png',
  './kotf/46.png',
  './kotf/47.png',
  './kotf/48.png',
  './kotf/48,5.png',
  './kotf/49.png',
  './kotf/50.png',
  './kotf/51.png',
  './kotf/52.png',
  './kotf/53.png',
  './kotf/54.png',
  './kotf/55.png',
  './kotf/56.png',
  './kotf/57,5.png',
  './kotf/57.png',
  './kotf/58.png',
  './kotf/59.png',
  './kotf/60.png',
  './kotf/61,5.png',
  './kotf/61.png',
  './kotf/62.png',
  './kotf/63.png',
  './kotf/64.png',
  './kotf/65.png',
  './kotf/66.png',
  './kotf/67.png',
  './kotf/68.png',
  './kotf/69.png',
  './kotf/70.png',
  './kotf/71,5.png',
  './kotf/71.png',
  './kotf/72,5.png',
  './kotf/72.png',
  './kotf/73,5.png',
  './kotf/73.png',
  './kotf/74.png',
  './kotf/75.png',
  './kotf/76.png',
  './kotf/77.png',
  './kotf/78.png',
  './kotf/79,5.png',
  './kotf/79,6.png',
  './kotf/79.png',
  './kotf/80.png',
  './kotf/81.png',
  './kotf/82.png',
  './kotf/83,5.png',
  './kotf/83.png',
  './kotf/84.png',
  './kotf/85.png'
];
const flippedImages = [
  './kotf/1s.png',
  './kotf/2s.png',
  './kotf/3s.png',
  './kotf/4s.png',
  './kotf/5s.png',
  './kotf/6s.png',
  './kotf/7s.png',
  './kotf/8s.png',
  './kotf/9s.png',
  './kotf/10s.png',
  './kotf/11s.png',
  './kotf/12s.png',
  './kotf/13s.png',
  './kotf/14,5s.png',
  './kotf/14s.png',
  './kotf/15s.png',
  './kotf/16s.png',
  './kotf/17s.png',
  './kotf/18,2s.png',
  './kotf/18,3s.png',
  './kotf/18s.png',
  './kotf/19s.png',
  './kotf/20s.png',
  './kotf/21s.png',
  './kotf/22s.png',
  './kotf/22,5s.png',
  './kotf/23s.png',
  './kotf/24s.png',
  './kotf/25s.png',
  './kotf/26s.png',
  './kotf/27s.png',
  './kotf/28s.png',
  './kotf/29,5s.png',
  './kotf/29s.png',
  './kotf/30s.png',
  './kotf/31s.png',
  './kotf/32,5s.png',
  './kotf/32s.png',
  './kotf/33s.png',
  './kotf/34s.png',
  './kotf/35s.png',
  './kotf/36s.png',
  './kotf/37s.png',
  './kotf/38s.png',
  './kotf/39s.png',
  './kotf/40s.png',
  './kotf/41s.png',
  './kotf/42s.png',
  './kotf/43s.png',
  './kotf/44s.png',
  './kotf/46s.png',
  './kotf/47s.png',
  './kotf/48s.png',
  './kotf/48,5s.png',
  './kotf/49s.png',
  './kotf/50s.png',
  './kotf/51s.png',
  './kotf/52s.png',
  './kotf/53s.png',
  './kotf/54s.png',
  './kotf/55s.png',
  './kotf/56s.png',
  './kotf/57,5s.png',
  './kotf/57s.png',
  './kotf/58s.png',
  './kotf/59s.png',
  './kotf/60s.png',
  './kotf/61,5s.png',
  './kotf/61s.png',
  './kotf/62s.png',
  './kotf/63s.png',
  './kotf/64s.png',
  './kotf/65s.png',
  './kotf/66s.png',
  './kotf/67s.png',
  './kotf/68s.png',
  './kotf/69s.png',
  './kotf/70s.png',
  './kotf/71,5s.png',
  './kotf/71s.png',
  './kotf/72,5s.png',
  './kotf/72s.png',
  './kotf/73,5s.png',
  './kotf/73s.png',
  './kotf/74s.png',
  './kotf/75s.png',
  './kotf/76s.png',
  './kotf/77s.png',
  './kotf/78s.png',
  './kotf/79,5s.png',
  './kotf/79,6s.png',
  './kotf/79s.png',
  './kotf/80s.png',
  './kotf/81s.png',
  './kotf/82s.png',
  './kotf/83,5s.png',
  './kotf/83s.png',
  './kotf/84s.png',
  './kotf/85s.png'
];
let isFlipped = false;

// Open modal with clik image
gridItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    modalImage.src = images[index];
    modal.style.display = 'block';
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Slide to previous image
slideBtnLeft.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  if (isFlipped) {
    modalImage.src = flippedImages[currentIndex];
  } else {
    modalImage.src = images[currentIndex];
  }
});

// Slide to next image
slideBtnRight.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  if (isFlipped) {
    modalImage.src = flippedImages[currentIndex];
  } else {
    modalImage.src = images[currentIndex];
  }
});

// Flip image
slideBtnFlip.addEventListener('click', () => {
  isFlipped = !isFlipped;
  
  if (isFlipped) {
    slideBtnFlip.classList.add('flipped');
    slideBtnFlip.classList.add('clicked');
    modalImage.classList.add('flipped');
    modalImage.src = flippedImages[currentIndex];
  } else {
    slideBtnFlip.classList.remove('flipped');
    slideBtnFlip.classList.remove('clicked');
    modalImage.classList.remove('flipped');
    modalImage.src = images[currentIndex];
  }
});


