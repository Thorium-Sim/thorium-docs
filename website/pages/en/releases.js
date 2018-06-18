const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

const Releases = () => (
  <Container className="releases">
    <ul>
      <li>
        Latest Release{" "}
        <ul>
          <li>
            <a href="https://s3.amazonaws.com/thoriumsim/thorium-macos.zip">
              macOS
            </a>
          </li>
          <li>
            <a href="https://s3.amazonaws.com/thoriumsim/thorium-win.exe.zip">
              Windows
            </a>
          </li>
          <li>
            <a href="https://s3.amazonaws.com/thoriumsim/thorium-linux.zip">
              Linux
            </a>
          </li>
        </ul>
      </li>
      <li>
        Template Simulators<ul>
          <li>
            <a href="https://s3.amazonaws.com/thoriumsim/simulators/Voyager.sim">
              Voyager
            </a>
          </li>
          <li>
            <a href="https://s3.amazonaws.com/thoriumsim/simulators/Vanguard.sim">
              Vanguard (Jr.)
            </a>
          </li>
        </ul>
      </li>
      <li>
        Template Missions<ul>
          <li>
            <a href="https://s3.amazonaws.com/thoriumsim/missions/Intolerance.misn">
              Intolerance
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </Container>
);

module.exports = Releases;
