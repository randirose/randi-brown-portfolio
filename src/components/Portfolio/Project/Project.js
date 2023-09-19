export default function Project(props) {
    return (
        <div className="card text-bg-dark">
            <img src={props.src} className="card-img" alt="..." />
            <div className="card-img-overlay">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    );
  }

