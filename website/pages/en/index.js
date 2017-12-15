/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + "/siteConfig.js");

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

class HomeSplash extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">
            <div className="inner">
              <h2 className="projectTitle">
                <div>
                  <img
                    draggable={false}
                    src={siteConfig.baseUrl + "img/thorium.svg"}
                  />
                </div>
                {siteConfig.title}
                <small>{siteConfig.tagline}</small>
              </h2>
              <div className="section promoSection">
                <div className="promoRow">
                  <div className="pluginRowBlock">
                    <Button href="#try">Get Started</Button>
                    <Button href="https://github.com/thorium-sim/thorium#getting-started">
                      Download
                    </Button>
                    <Button
                      href={
                        siteConfig.baseUrl +
                        this.props.language +
                        "/donate.html"
                      }
                    >
                      Donate
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    let language = this.props.language || "en";
    const showcase = siteConfig.users
      .filter(user => {
        return user.pinned;
      })
      .map(user => {
        return (
          <a href={user.infoLink}>
            <img src={user.image} title={user.caption} />
          </a>
        );
      });

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Container padding={["bottom", "top"]}>
            <div className="gridBlock">
              <div className="blockElement imageAlignSide twoByGridBlock">
                <div className="blockContent">
                  <h2>
                    <div>
                      <span>
                        <p>Multi-Platform</p>
                      </span>
                    </div>
                  </h2>
                  <div>
                    <span>
                      <p>
                        Thorium Server works on Windows, macOS, Linux, and the
                        controls work with anything that runs a modern web
                        browser. They'll even operate on a electrical switch
                        panel!
                      </p>
                    </span>
                  </div>
                </div>
                <div className="sizeBlock">
                  <div className="blockImage rotating">
                    <img
                      className="apple"
                      src={siteConfig.baseUrl + "img/apple.svg"}
                    />
                    <img
                      className="windows"
                      src={siteConfig.baseUrl + "img/windows.svg"}
                    />
                    <img
                      className="linux"
                      src={siteConfig.baseUrl + "img/linux.svg"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <Container padding={["bottom", "top"]} background="light" id="try">
            <GridBlock
              contents={[
                {
                  content: `Not comfortable running the mission by yourself? Thorium comes bundled with pre-written missions that remove the endless button clicking and lets you focus on what matters - telling a great story. It also features a built-in mission editor, allowing you to write your own missions.`,
                  image: siteConfig.baseUrl + "img/code-branch.svg",
                  imageAlign: "left",
                  title: "Mission Timelines"
                }
              ]}
            />
          </Container>

          <Container padding={["bottom", "top"]} background="dark">
            <GridBlock
              contents={[
                {
                  content:
                    "Want to run a small shuttle? Done. Capital Class Carrier? You've got it. Any kind of ship you can imagine is possible. Use one of the pre-built simulator configurations or make your own!",
                  image: siteConfig.baseUrl + "img/cogs.svg",
                  imageAlign: "right",
                  title: "Flexible Simulator Configs"
                }
              ]}
            />
          </Container>

          <Container padding={["bottom", "top"]} background="">
            <GridBlock
              contents={[
                {
                  content:
                    "Thorium remembers every event that happened during a flight, giving you access to a wealth of data about your crew which can be used for post-mission analysis.",
                  image: siteConfig.baseUrl + "img/database.svg",
                  imageAlign: "left",
                  title: "Powerful Analytics"
                }
              ]}
            />
          </Container>
          <Container padding={["bottom", "top"]} background="dark">
            <GridBlock
              contents={[
                {
                  content:
                    "Joint simulator missions are first class citizens in Thorium. Send messages between simulators, or battle each other in space. Collaborative (or competitive) missions are a click away.",
                  image: siteConfig.baseUrl + "img/rocket.svg",
                  imageAlign: "right",
                  title: "Multi-ship Missions"
                }
              ]}
            />
          </Container>
          <Container padding={["bottom", "top"]} background="light">
          <div className="gridBlock">
              <div className="blockElement imageAlignSide twoByGridBlock">
              <div className="blockImage">
                    <img
                      src={siteConfig.baseUrl + "img/code.svg"}
                    />
                </div>
                <div className="blockContent">
                  <h2>
                    <div>
                      <span>
                        <p>Open Source</p>
                      </span>
                    </div>
                  </h2>
                  <div>
                    <span>
                      <p>
                      Do you sling divs? Got code chops? All of the code is available, so you can see how it works under the hood and even add your own features.
                      </p>            <a
                className="button"
                href="https://github.com/thorium-sim/thorium"
              >
                Check it out
              </a>
                    </span>
                  </div>
                </div>
    
              </div>
            </div>

          </Container>
          <div className="productShowcaseSection paddingBottom">
            <h2>{"Who's Using This?"}</h2>
            <p>Nobody is using Thorium yet. You could be the first!</p>
            <div className="logos">{showcase}</div>
            <div className="more-users">
              <a
                className="button"
                href={
                  siteConfig.baseUrl + this.props.language + "/" + "donate.html"
                }
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
