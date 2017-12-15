/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Users extends React.Component {
  render() {
    const showcase = siteConfig.users.map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      );
    });
    const donors = siteConfig.donors.map((d, i) => {
      return (<p key={i}>{d}</p>);
    });
    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div>
            <h1 style={{textAlign:'center'}}>A Thriving Community</h1>
            <div className="sides">
            <div className="users">
              <h2>Who's Using This?</h2>
              <br />
              <p>We currently aren't aware of anyone using Thorium</p>
              <br />
            <div className="logos">{showcase}</div>
            <p>Are you using this project? <a
              href="https://github.com/thorium-sim/thorium-docs/edit/master/website/siteConfig.js"
              className="button">
              Add your company
            </a></p>
            </div>
            <div>
            <h2>Donors</h2>
            {donors}
            </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
