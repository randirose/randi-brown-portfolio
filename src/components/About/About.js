import './About.css';

export default function About() {
    return (
        <div className="card about-card mb-3 border-0 mt-300">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./me.JPG" className="img-fluid rounded-start rounded-end" alt="Randi at Grand Tetons"></img>
    </div>
    <div className="col-md-8">
      <div className="card-body about-body">
        <h5 className="card-title about-title">About Me</h5>
        <p className="card-text about-text">Hi! My name is Randi and I'm a full-stack web developer residing in Portland, Oregon.<br />I have a Bachelor's in Journalism and a Minor in Spanish from the University of Oregon. We built a website back in one of my Journalism courses at the UofO, and I've loved coding ever since!<br />I just successfully completed the University of Oregon’s immersive, 24-week Full-Stack Coding Bootcamp—with training in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Integrations, MongoDB, MySQL, Command Line, Git, and much more. Visit my works and download my resume here on my custom-made site!</p>
      </div>
    </div>
  </div>
</div>
    );
  }