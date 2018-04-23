/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: "The Lion's Gate Center",
    image: "/img/tlgc.jpg",
    infoLink: "https://thelionsgatecenter.com",
    pinned: true
  },
  {
    caption: "Farpoint Space Center",
    image: "/img/farpoint.png",
    infoLink: "https://farpointcadets.weebly.com",
    pinned: true
  },
  {
    caption: "Christa McAuliffe Space Education Center",
    image: "/img/cmsec.png",
    infoLink: "https://spacecenter.alpineschools.org",
    pinned: true
  },
  {
    caption: "Telos Discovery Space Center",
    image: "/img/tdsc.png",
    infoLink: "https://discoveryspacecenter.com",
    pinned: true
  }
];

const donors = [
  "Thomas Delclite 🇧🇪",
  "Chuck Smith 🇺🇸",
  "The Lion's Gate Center 🇺🇸",
  "Brent Anderson 🇺🇸",
  "Maeson Busk 🇺🇸",
  "The Christa McAuliffe Space Education Center 🛰",
  "Victor Williamson 👽",
  "The Telos Discovery Space Center 🌌"
];

const siteConfig = {
  title: "Thorium" /* title for your website */,
  tagline: "Next Generation Simulator Controls",
  url: "https://thoriumsim.com" /* your website url */,
  baseUrl: "/" /* base url for your project */,
  projectName: "thorium",
  headerLinks: [
    { search: true },
    { doc: "overview", label: "Get Started" },
    /*{doc: 'mission_writing', label: 'Missions'},
    {doc: 'developers', label: 'Devs'},*/
    { page: "help", label: "Help" },
    { blog: true, label: "Blog" }
  ],
  users,
  donors,
  /* path to images for header/footer */
  headerIcon: "img/thorium.svg",
  footerIcon: "img/thorium.svg",
  favicon: "img/favicon.png",
  /* colors for website */
  colors: {
    primaryColor: "#37203C",
    secondaryColor: "#544980"
  },
  algolia: {
    apiKey: "215cc1c55f0d508b47d27f3ae089c7e0",
    indexName: "thoriumsim"
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + " Fyreworks",
  organizationName: "thorium-sim", // or set an env variable ORGANIZATION_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: "https://github.com/thorium-sim/thorium"
};

module.exports = siteConfig;
