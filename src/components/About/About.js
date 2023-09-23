import './About.css';

export default function About() {
    return (
        <div className="card about-card mb-3 border-0">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./me.jpg" className="img-fluid rounded-start" alt="..."></img>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title about-title">About Me</h5>
        <p className="card-text about-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
    );
  }