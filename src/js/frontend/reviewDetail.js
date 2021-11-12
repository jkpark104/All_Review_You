import axios from 'axios';
import render from './render';
import userData from './userData';

// DOM NODES
const $reviewDetail = document.querySelector('.reviewDetail');

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const { data: reviews } = await axios.get('/reviews/review/1');
    const { data: curUserId } = await axios.get('/users/me');

    userData.id = curUserId;

    render.reviewDetail(reviews[0], { $reviewDetail }, curUserId);
  } catch (e) {
    console.error(e);
  }
});
