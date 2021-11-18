import axios from 'axios';
import render from './render';
import user from './user';
import Observer from './Observer';
import './utils/likes';

window.addEventListener('DOMContentLoaded', async () => {
  const { order } = document.querySelector('.nav__now').dataset;
  document.querySelector('.loading').classList.remove('hidden');
  document.querySelector('.review-more__text').classList.add('hidden');
  try {
    const reviewData = await Promise.all([
      axios.get('/reviews/sort', {
        params: { likesOrLatest: order, reset: 'reset' },
      }),
      axios.get('/users/me'),
    ]);
    document.querySelector('.loading').classList.add('hidden');
    document.querySelector('.review-more__text').classList.remove('hidden');

    const [
      {
        data: { reviews, tags },
      },
      { data: curUserId },
    ] = reviewData;

    if (curUserId) user.login(curUserId);

    const observer = new Observer();
    observer.start();

    render.home(reviews, { tags });
  } catch (e) {
    console.error(e);
  }
});

document.querySelector('.nav__list').onclick = async e => {
  if (!e.target.matches('.nav__list a')) return;
  e.preventDefault();

  document.querySelector('.loading').classList.remove('hidden');
  document.querySelector('.review-more__text').classList.add('hidden');
  document.querySelectorAll('.nav__list > li').forEach($li => {
    $li.classList.toggle('nav__now', $li === e.target.parentNode);
  });

  console.log(document.querySelector('.selectedTag'));

  const tag = document.querySelector('.selectedTag') ? document.querySelector('.selectedTag').dataset.tag : null;
  const { order } = e.target.parentNode.dataset;

  // window.history.pushState({ path: order }, null, order);

  try {
    const {
      data: { reviews, tags },
    } = await axios.get('/reviews/sort', {
      params: { likesOrLatest: order, reset: 'reset' },
    });
    document.querySelector('.loading').classList.add('hidden');
    document.querySelector('.review-more__text').classList.remove('hidden');
    render.home(reviews, { tags, selectedTag: tag });
  } catch (e) {
    console.error(e);
  }
};

document.querySelector('.tags').onclick = async e => {
  if (!e.target.matches('.tag a')) return;
  e.preventDefault();

  console.log(e.target);

  document.querySelector('.loading').classList.remove('hidden');
  document.querySelector('.review-more__text').classList.add('hidden');

  const { order } = document.querySelector('.nav__now').parentNode.dataset;
  const { tag } = e.target.closest('.tag').dataset;

  document.querySelectorAll('.tag').forEach($tag => $tag.classList.remove('selectedTag'));
  e.target.closest('.tag').classList.add('selectedTag');

  try {
    const {
      data: { reviews, tags },
    } = await axios.get('/reviews/sort', {
      params: { likesOrLatest: order, selectedTag: tag, reset: 'reset' },
    });
    document.querySelector('.loading').classList.add('hidden');
    document.querySelector('.review-more__text').classList.remove('hidden');
    render.home(reviews, { tags, selectedTag: tag });
  } catch (e) {
    console.error(e);
  }
};

// window.onpopstate = async () => {
//   const path = window.location.pathname.replace(/\//g, '');

//   const order = path === 'latest' ? 'latest' : 'likes';

//   document.querySelectorAll('.nav__list > li').forEach($li => {
//     $li.classList.toggle('nav__now', $li.dataset.order === order);
//   });

//   try {
//     const { data: reviews } = await axios.get(`/reviews/order-${order}`);

//     render.home(reviews);
//   } catch (e) {
//     console.error(e);
//   }
// };
