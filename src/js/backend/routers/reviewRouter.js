const { Router } = require('express');
const { createReview, writeReview, getOneReview } = require('../controllers/reviewController');

const reviewRouter = Router();

const Reviews = require('../models/Review');

reviewRouter.get('/', (req, res) => {});

// reviews/mine/ -> GET 내가 쓴 리뷰
reviewRouter.get('/mine/:id', (req, res) => {
  res.send(
    Reviews.state
      .filter(({ userId }) => userId === req.params.id)
      .map(({ content, photos }, i, reviews) => ({
        ...reviews[i],
        content: content.slice(0, 300),
        photos: photos.slice(0, 1),
      }))
  );
});

// reviews/review/id -> GET 특정 리뷰 for reviewDetail Page
// reviewRouter.get('/review/:id', (req, res) => {
//   res.send(Reviews.state.filter(({ reviewId }) => reviewId === +req.params.id));
// });

reviewRouter.get('/:id', getOneReview);

reviewRouter.post('/', writeReview);
reviewRouter.patch('/:id', (req, res) => {});
reviewRouter.put('/:id', (req, res) => {});
reviewRouter.delete('/:id', (req, res) => {});

module.exports = reviewRouter;
