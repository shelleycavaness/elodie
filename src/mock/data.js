import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'vase_elo.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://shelleycavaness.github.io/shellyeah/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'restauratrice_elodie_boulte.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://shelleycavaness.github.io/shellyeah', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'elodie11.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://shelleycavaness.github.io/shellyeah/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'IMG_6532.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://shelleycavaness.github.io/shellyeah/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/elodie-boulte-texier-19256511a/?originalSubdomain=fr',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
