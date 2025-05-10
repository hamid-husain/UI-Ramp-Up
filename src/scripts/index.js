import Swiper from 'swiper/bundle'

import '@/styles/style.scss'
import { constants } from '@/scripts/constants'

const swiper = new Swiper('.swiper', {
  slidesPerView: constants.slidesPerView,
  spaceBetween: constants.spaceBetweenSlides,
  grabCursor: true,
  loop: true,

  navigation: {
    nextEl: '.next-button',
    prevEl: '.prev-button'
  },
});

const blogPosts = [
  {
    title: "Visiting my best friend's city for the first time",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate amet quam tempora voluptatum?",
    date: "July 29, 2020",
    season: "Season 1",
    tags: ["audio", "goodbyes", "life"],
    isNew: true
  },
  {
    title: "An interesting read I definitely recommend",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate amet quam tempora voluptatum?",
    date: "Sept 3, 2020",
    season: "Season 1",
    tags: ["goodbyes", "life"],
    isNew: false
  },
  {
    title: "What if all my adventures go back home?",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate amet quam tempora voluptatum?",
    date: "Sept 11, 2020",
    season: "Season 1",
    tags: ["audio", "goodbyes"],
    isNew: false
  }
];

const container = document.querySelector('.latest-blogs__content');


blogPosts.forEach(post => {
  const card = document.createElement('div');
  card.className = 'blog-card';

  const imageDiv = document.createElement('div');
  imageDiv.className = 'blog-card__image';

  if (post.isNew) {
    const ribbon = document.createElement('div');
    ribbon.className = 'ribbon';
    ribbon.textContent = 'New';
    imageDiv.appendChild(ribbon);
  }

  const contentDiv = document.createElement('div');
  contentDiv.className = 'blog-card__content';

  const title = document.createElement('h3');
  title.textContent = post.title;
  title.className = 'heading-3';

  const textWrapper = document.createElement('div');
  const paragraph = document.createElement('p');
  paragraph.textContent = post.content;

  const button = document.createElement('button');
  button.textContent = 'View';

  textWrapper.appendChild(paragraph);
  textWrapper.appendChild(button);

  contentDiv.appendChild(title);
  contentDiv.appendChild(textWrapper);

  const detailsDiv = document.createElement('div');
  detailsDiv.className = 'blog-card__details';

  const ul = document.createElement('ul');

  const liSeason = document.createElement('li');
  liSeason.textContent = post.season;

  const liDate = document.createElement('li');
  liDate.textContent = `Posted on ${post.date}`;

  const liTags = document.createElement('li');
  liTags.textContent = post.tags.join(' / ');

  ul.appendChild(liSeason);
  ul.appendChild(liDate);
  ul.appendChild(liTags);

  detailsDiv.appendChild(ul);

  card.appendChild(imageDiv);
  card.appendChild(contentDiv);
  card.appendChild(detailsDiv);

  container.appendChild(card);
});
