const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

const Releases = () => (
  <Container className="releases">
    <div id="prerelease" />
    <script src="/scripts/prerelease.js" />
  </Container>
);

module.exports = Releases;
