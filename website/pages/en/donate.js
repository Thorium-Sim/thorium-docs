const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

const DonationForm = () => (
  <Container className="donation">
    <main className="content">
      <h1>Download Thorium</h1>
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
      <h2>Purchase & Donation</h2>
      <p>
        Thorium is being developed by a small number of contributors in their
        spare time. To fund Thorium development, you can purchase the bundled
        version of Thorium for $5.00. This includes everything you need to get
        started with your own Space Edventure.
      </p>
      <p>
        Additionally, you can donate any amount to Thorium. Your donations help
        to create new and exciting features and content which you can use in
        your space center. As a Thorium Donor, you recieve the following
        benefits:
      </p>
      <ul>
        <li>
          Access to a bundled version of Thorium, including content and missions
          from the Farpoint Universe.
        </li>
        <li>Your name in the credits of Thorium.</li>
        <li>A name of your choice added to the ship roster pool.</li>
        <li>
          A special Kiosk program for Thorium, locking the computer to only
          display Thorium.
        </li>
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
        <li>Keeping Thorium updates free.</li>
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
      {/* <em>
        We are currently not accepting donations while we upgrade our backend
        system. In the meantime, if you are interested in donating in the future
        and would like the built version of Thorium, or if you would like to
        support Thorium's development in some other way, please reach out:{" "}
        <a href="mailto:alex@fyreworks.us">alex@fyreworks.us</a>
      </em> */}
      <div id="donation" />
    </aside>
    <script src="/scripts/donation.js" />
  </Container>
);

module.exports = DonationForm;
