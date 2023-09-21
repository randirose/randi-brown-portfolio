import './Project.css'

export default function Project(props) {
    return (
        <ul className="list-group-horizontal d-flex justify-content-around  p-2 flex-wrap">
        {props.works.map((item, index) => {
          return (
            <li className="list-group-item" key={index} style={{width: 400}}>   
        <div className="card text-bg-light" >
            <img src={item.src} className="card-img" alt={item.alt} />
            <div className="card-img-overlay">
            <div className='mask p-2' style={{ backgroundColor: 'rgb(229, 182, 163, 0.6)', height: 200 }}>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <div className='button-holder'>
                <button type="button" class="btn btn-secondary"><a href={item.url}>App Site</a></button>
                <button type="button" class="btn btn-secondary"><a href={item.repo}>GitHub Repo</a></button>
                </div>
                </div>
            </div>
        </div>
        </li>
      );
    })}
  </ul>
    );
  }

