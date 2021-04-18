import React from 'react'
import ReactPlayer from "react-player"

import './Review.css'
export default function Review() {
    return (
        <div className='body'>
          
          

      <div className="acc">
      <img src="https://previews.123rf.com/images/scrap4vec/scrap4vec2005/scrap4vec200500184/148077898-logo-design-of-student-child-or-people-with-book-template-in-creative-shape-isolate-vector-illustrat.jpg" alt=""/> 
  <div className="sign">
  <h6 className="cv" style={{color:"black"}}>
Do you have accommodation <br/> to share  or are you looking <br/> for it ? </h6>
<p style={{color:"black"}}>
so register now in Student-life to benefit <br/> from all these options</p>
<br/>
<button type="button" style={{width:"320px"}} className="btn btn-block btn-primary">Sign-UP</button>
  </div>

      </div>
      <br/><br/><br/>

            <div className="top">
              <div className="ress"><strong><h1 >i want to reserve</h1></strong>

              </div>
              <div className="post"><h1 >i want to post</h1>

              </div>
            </div>
            <div className="d">  <h2>Top Rated</h2></div>
            <br/>
          
          <div className="container">
          <div className="row row-cols-1 row-cols-md-3 row-cols-xs-2 row-cols-sm-2  g-3">
  <div className="col">
    <div className="card">
      <img
        src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/148099656.jpg?k=deea0b8cb989133477e9cd6f32312667e4ceb7d8ba6e2bf27cf559b041c1cf15&o="
        class="card-img-top"
        alt="..."
      />
      <div className="card-body"> 
        <h4 style={{textAlign:"center"}} className="card-title"><strong>Rabat</strong></h4>
        <h6 style={{textAlign:"center"}} className="card-title"> Hay Riad </h6>
        <hr/>
        <p className="card-text">
        Rate <strong>:</strong> 
        <img className="imog" src="https://schoolmeritstickers.com/data/img/products/main/_cache/99735571c6bb42bb8fd8f91b5db8956d.jpg?513b3a83" alt=""/>
        9.2 <br/>
        <strong>Prix :</strong>  Dès 2500 DH/Mois
        
       

        </p>
        <div className="btni">

<div className="res">
     <button type="button" className="btn btn-primary">reserve </button>
</div>
<div className="info">

<button type="button" class="btn btn-warning">More infos </button>

</div>
</div>
      </div>
    
    </div>
    
  </div>
  <div className="col">
    <div className="card">
      <img
        src="https://petervonstamm-travelblog.com/wp-content/uploads/2017/11/Mood-Rooms-NH-Collection-Eurobuilding-Madrid-TITEL.jpg"
        class="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h4 style={{textAlign:"center"}} className="card-title"><strong>Mohemmedia</strong> </h4>
        <h6 style={{textAlign:"center"}} className="card-title"> Riad salam </h6>
        <hr/>
        <p className="card-text">
        Rate   <strong>:</strong> 
        <img className="imog" src="https://schoolmeritstickers.com/data/img/products/main/_cache/99735571c6bb42bb8fd8f91b5db8956d.jpg?513b3a83" alt=""/>
        9.1<br/>
        <strong>Prix :</strong>   Dès 2200 DH/Mois
        
        </p>
        <div className="btni">

<div className="res">
     <button type="button" class="btn btn-primary">reserve </button>
</div>
<div className="info">

<button type="button" class="btn btn-warning">More infos </button>

</div>
</div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNPAwBZPo6_Z1jLAa6sEMfhhkFUEtKmLwzw&usqp=CAU"
         className="card-img-top"
         alt="..."
      />
      <div className="card-body">
        <h4 style={{textAlign:"center"}} className="card-title"> <strong>Casablanca</strong> </h4>
        <h6 style={{textAlign:"center"}} className="card-title"> Hay mohemmadi </h6>
        <hr/>
        <p className="card-text">
        Rate <strong>:</strong> 
        <img className="imog" src="https://schoolmeritstickers.com/data/img/products/main/_cache/99735571c6bb42bb8fd8f91b5db8956d.jpg?513b3a83" alt=""/>
        9.5 <br/>
        <strong>Prix :</strong>  Dès 2700 DH/Mois
        </p>
        <div className="btni">

<div className="res">
     <button type="button" class="btn btn-primary">reserve </button>
</div>
<div className="info">

<button type="button" class="btn btn-warning">More infos </button>

</div>
</div>
      </div>
    </div>
    
  </div>
 
 
</div>
<br/>
<div className="player-wrapper">
    <ReactPlayer
      url="https://www.youtube.com/watch?v=varEjXUVA-0&ab_channel=Coloc%27Appart31"
      className="react-player"
      playing
      width="100%"
      height="100%"
      controls={false}
    />
  </div>

          </div>
          <br/>
        </div>
    )
}
