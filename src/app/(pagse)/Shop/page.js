import Producttt from 'components/productProo/producttt';
import  './shop.css';
import Footart from 'components/Footar/Footart';

export default function page() {
  return (
    <>
 
<section className="page-add cart-page-add">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="page-breadcrumb">
          <h2>Cart<span>.</span></h2>
          <a href="#">Home</a>
          <a href="#">Dresses</a>
          <a className="active" href="#">Night Dresses</a>
        </div>
      </div>
      <div className="col-lg-8 xc">
        <img   src="img/add.jpg" alt='' />
      </div>
    </div>
  </div>
</section>

  <Producttt/>


<Footart/>
         
    </>
  )
}
