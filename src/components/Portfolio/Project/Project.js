import './Project.css'

export default function Project(props) {
    return (
        <ul className="list-group-horizontal d-flex justify-content-around  p-2 flex-wrap">
        {props.works.map((item, index) => {
          return (
            <li className="list-group-item project-item" key={index} style={{width: 400}}>
                <div class="card project-card text-bg-light col-12">
                <img src={item.src} className="card-img" alt={item.alt} />
        <div class="card-body">
            <h5 className="card-title project-title">{item.title}</h5>
                <p className="card-tex project-text">{item.text}</p>
                <div className='button-holder'>
                <button type="button" class="btn btn-outline-secondary"><a href={item.url}>App Site</a></button>
                <button type="button" class="btn btn-outline-secondary"><a href={item.repo}>GitHub Repo</a></button>
                </div>
                </div>
                </div>
        </li>
      );
    })}
  </ul>
    );
  }

