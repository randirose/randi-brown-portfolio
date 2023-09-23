import './About.css';

export default function About() {
    return (
        <div className="card about-card mb-3 border-0">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./me.jpg" className="img-fluid rounded-start rounded-end" alt="Randi at Grand Tetons"></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title about-title">About Me</h5>
        <p className="card-text about-text">Hi! My name is Randi and I'm a full-stack web developer residing in Portland, Oregon.<br /><br />I have a Bachelor's in Journalism and a Minor in Spanish from the University of Oregon. We built a website back in one of my Journalism courses at the UofO, and I've loved coding ever since!<br /><br />In addition to coding all day, I love to travel and get outdoors whenever possible. I've been to the majority of our National Parks and I can't wait to visit them all! My partner and I are also the proud parents of 3 adorable cats named Mila, Ellie, and Georgie.</p>
      </div>
    </div>
  </div>
</div>
    );
  }