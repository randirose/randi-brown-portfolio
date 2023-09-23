import './Resume.css'

export default function Resume() {
    return (
        <>
        <h1 className="res-header">Check out my skills below and/or download my resume!</h1>
        <div className="res-btn-holder">
        <button className="btn btn-secondary download-btn"><a href='./RandiB_Resume.png' download>
              Download My Resume (PDF)</a></button>
        </div>
  <div className='row d-flex justify-content-around m-2'>
<div className="res-card card col-12 col-md-3" style={{backgroundColor: 'rgb(229, 182, 163, 0.5)'}}>
<div className="card-title res-title">Front-End</div>
<div className="card-body res-body">
        <li>HTML, Advanced CSS, and Git</li>
        <li>JavaScript</li>
        <li>Web APIs</li>
        <li>Third-Party APIs</li>
        <li>Server-Side APIs</li>
        <li>JQUERY</li>
  </div>
</div>
<div className="card res-card col-12 col-md-3" style={{backgroundColor: 'rgb(229, 182, 163, 0.5)'}}>
<div className="card-title res-title">Back-End</div>
<div className="card-body res-body">
        <li>Node.js</li>
        <li>Object-Oriented Programming (OOP)</li>
        <li>Express.js</li>
        <li>SQL/Sequelize</li>
        <li>Object-Relational Mapping (ORM)</li>
        <li>Model-View-Controller (MVC)</li>
  </div>
</div>
<div className="card res-card col-12 col-md-3" style={{backgroundColor: 'rgb(229, 182, 163, 0.5)'}}>
<div className="card-title res-title">Performance</div>
<div className="card-body res-body">
        <li>Computer Science for JS</li>
        <li>NoSQL/Mongoose</li>
        <li>Progressive Web Applications</li>
        <li>Handlebars</li>
        <li>React</li>
        <li>The MERN Stack</li>
        <li>GraphQL</li>
  </div>
</div>
</div>
</>
    );
  }