import Footart from 'components/Footar/Footart';
import   './contact.css';

export default function page() {
  return (
    <>
        
    <div>
 
  <section className="page-add">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="page-breadcrumb">
            <h2>Contact us<span>.</span></h2>
          </div>
        </div>
        <div className="col-lg-8 xc">
          <img src="img/add.jpg" alt='.' />
        </div>
      </div>
    </div>
  </section>
  <div className="contact-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <form action="#" className="contact-form">
            <div className="row">
              <div className="col-lg-6">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="col-lg-6">
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="col-lg-12">
                <input type="email" placeholder="E-mail" />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message" defaultValue={""} />
              </div>
              <div className="col-lg-12 text-right">
                <button type="submit">Send message</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-3 offset-lg-1">
          <div className="contact-widget">
            <div className="cw-item">
              <h5>Location</h5>
              <ul>
                <li>1525 Awesome Lane, </li>
                <li>Los Angeles, CA</li>
              </ul>
            </div>
            <div className="cw-item">
              <h5>Phone</h5>
              <ul>
                <li>+1 (603)535-4592</li>
                <li>+1 (603)535-4556</li>
              </ul>
            </div>
            <div className="cw-item">
              <h5>E-mail</h5>
              <ul>
                <li>contact@violetstore.com</li>
                <li>www.violetstore.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <div className="row">
          <div className="col-lg-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26440.72384129847!2d-118.24906619231132!3d34.06719475913053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c659f50c318d%3A0xe2ffb80a9d3820ae!2sChinatown%2C%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1570213740685!5m2!1sen!2sbd" height={560} style={{border: 0}} allowFullScreen />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<Footart/>

    </>
  )
}
