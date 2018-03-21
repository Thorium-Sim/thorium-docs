/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + "/siteConfig.js");

class Help extends React.Component {
  render() {
    const supportLinks = [
      {
        content:
          "Thorium is powerful, and as such might take a bit of study to learn how it works. Fortunately, all of the questions you have can be answered on this website. [Learn more using the documentation on this site.](/docs/overview.html)",
        title: "Browse Docs"
      },
      {
        content:
          "Thorium hopes to be a community-based project, which is why we have a Discord channel. This allows you to get help, learn tips, and be involved with all of the other Thorium users. [Ask questions about the documentation and project on Discord](https://discord.gg/UvxTQZz)",
        title: "Join the conversation"
      },
      {
        content:
          "Thorium is changing constantly, with a new release coming out every week. There's a lot you might miss if you don't stay up to date. [Find out what's new with this project](/blog)",
        title: "Stay up to date"
      }
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h2>Need help?</h2>
            </header>
            <p>Here's how to get the help you need.</p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
