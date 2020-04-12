const ReviewsBtn = document.querySelectorAll('.reviews-btn');
const FullReview = document.querySelector('.full-review');
const FullReviewCloseBtn = document.querySelector('.full-review__close-btn');

for (i = 0; i < ReviewsBtn.length; i++) {

  ReviewsBtn[i].addEventListener('click', function (e) {
    e.preventDefault();

    FullReview.style.display = 'block';
    body.style.overflow = 'hidden';
  });
};

FullReviewCloseBtn.addEventListener('click', function (e) {
  e.preventDefault();

  FullReview.style.display = 'none';
  body.style.overflow = 'visible';
});