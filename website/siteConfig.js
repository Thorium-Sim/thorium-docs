/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'The Lion\'s Gate Center',
    image: '/img/tlgc.jpg',
    infoLink: 'https://thelionsgatecenter.com',
    pinned: true,
  }
];

const donors = [
  "Thomas Delclite 🇧🇪",
  "Chuck Smith 🇺🇸",
  "The Lion's Gate Center 🇺🇸"
];

const siteConfig = {
  title: 'Thorium' /* title for your website */,
  tagline: 'Next Generation Simulator Controls',
  url: 'https://thoriumsim.com' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'thorium',
  headerLinks: [
    {doc: 'getting_started', label: 'Get Started'},
    /*{doc: 'mission_writing', label: 'Missions'},
    {doc: 'developers', label: 'Devs'},*/
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],
  users,
  donors,
  /* path to images for header/footer */
  headerIcon: 'img/thorium.svg',
  footerIcon: 'img/thorium.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#37203C',
    secondaryColor: '#544980',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Fyreworks',
   organizationName: 'thorium-sim', // or set an env variable ORGANIZATION_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/thorium-sim/thorium',
};

module.exports = siteConfig;
