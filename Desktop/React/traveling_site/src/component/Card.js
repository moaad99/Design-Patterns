import React from 'react'

function Card() {
    return (
        <div className="cart">
            <div class="row row-cols-2 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img
        src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Marrakech</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img
        src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
    <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img
        src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Happy</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content.
        </p>
      </div>
    </div>
    </div>
  </div>
  <div className="row row-cols-2 row-cols-md-3 g-4">
  <div class="col">
    <div class="card" style={{marginInline :"300px"}}>
      <img
        src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" style={{marginInline :"644px"}}>
      <img
        src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
    )
}

export default Card
