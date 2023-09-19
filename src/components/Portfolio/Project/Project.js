export default function Project(props) {
    return (
        <ul className="list-group d-flex p-2 flex-wrap">
        {props.works.map((item, index) => {
          return (
            <li className="list-group-item" key={index} style={{width: 400}}>   
        <div className="card text-bg-dark" >
            <img src={item.src} className="card-img" alt={item.alt} />
            <div className="card-img-overlay">
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <button type="button" class="btn btn-secondary"><a href={item.url}>App Site</a></button>
                <button type="button" class="btn btn-secondary"><a href={item.repo}>GitHub Repo</a></button>
                </div>
            </div>
        </div>
        </li>
      );
    })}
  </ul>
    );
  }

