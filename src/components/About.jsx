import megaformer from "../assets/megaformer.png";

// About page describes the app and its features
function About() {
  return (
    <main className="about">
      <h2>About Megababe Progress Tracker</h2>
      <img
        src={megaformer}
        alt="A megaformer machine used in Lagree fitness classes"
        className="about-img"
      />
      <p>
        Megababe Progress Tracker is a workout logging app built for Lagree
        fitness enthusiasts. It helps you stay consistent by tracking every
        class you attend.
      </p>
      <h3>Features</h3>
      {/* List of app features */}
      <ul>
        <li>Log your Lagree classes by date</li>
        <li>Track your total class count</li>
        <li>View your full class history</li>
        <li>Delete entries if needed</li>
      </ul>
      <h3>Why I Built This</h3>
      <p>
        I wanted a simple way to track my Lagree attendance and see my progress
        over time. This app keeps me motivated and accountable!
      </p>
    </main>
  );
}

export default About;