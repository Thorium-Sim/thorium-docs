const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

const DonationForm = () => (
  <Container className="donation">
    <main className="content">
      <h1>Download Thorium</h1>
      <p>
        Thorium builds are created weekly and are freely available to download.
        The standalone client application download links are available from
        within Thorium.
      </p>
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
      <p>
        Thorium is Open Source software, and the source code can be downloaded
        and compiled from the{" "}
        <a href="https://github.com/thorium-sim/thorium">code repository</a>.
        Instructions to build Thorium are included in the repository. Assets and
        content can be collected separately from third-parties.
      </p>
      <a href="https://github.com/thorium-sim/thorium" className="button">
        Get the Code
      </a>
      <h2>Donation</h2>
      <p />
      <p>
        Thorium is being developed by a small number of contributors in their
        spare time. To help fund Thorium development, you can provide a donation
        (minimum of $5.00). Your donations help to create new and exciting
        features and content which you can use in your space center. As a
        Thorium Donor, you recieve the following benefits:
      </p>
      <ul>
        <li>Your name in the credits of Thorium.</li>
        <li>Your company's logo on the front page of this website.</li>
        <li>Increased priority for feature requests.</li>
        <li>
          A warm feeling knowing that you have contributed to creating excellent
          starship simulator software.
        </li>
      </ul>
      <p>Your donation will go toward several great causes: </p>
      <ul>
        <li>Making new features and content for Thorium.</li>
        <li>
          Teaching middle and high school students in the{" "}
          <a href="https://github.com/webdev-guild/webdev-guild">
            WebDev Guild
          </a>{" "}
          how to code.
        </li>
      </ul>
      <p>
        Use the donation form to find out your suggested donation based on your
        use-case, or fill in your own amount. Recurring donations are also
        accepted and encouraged!
      </p>
      <p>
        If you have any problems with your donation, need to cancel your
        subscription or want to request a refund, please{" "}
        <a href="mailto:alex@fyreworks.us">contact us</a>.
      </p>
    </main>
    <aside className="sidebar">
      <h1>Donate</h1>
      <div id="donation" />
    </aside>
    <script src="/scripts/donation.js" />
  </Container>
);

module.exports = DonationForm;
