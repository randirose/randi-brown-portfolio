import './Resume.css'

export default function Resume() {
    return (
  <div className='row d-flex justify-content-around m-2'>
<div className="card col-12 col-md-3">
<div class="card-title">title</div>
<div class="card-body">
    <ul>
        <li>item1</li>
        <li>item1</li>
        <li>item1</li>
        </ul>
  </div>
</div>
<div className="card col-12 col-md-3">
<div class="card-body">
    This is some text within a card body.
  </div>
</div>
<div className="card col-12 col-md-3">
<div class="card-body">
    This is some text within a card body.
  </div>
</div>
</div>
    );
  }