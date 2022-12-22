import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {

  return (
    <div className="Footer">

      <footer>

        <section>
          <div className="contact">
          <div className="sn">
            <a href='www.tiktok.com/@plantesambmagia' className='me-4 text-reset' target="_blank">
              <MDBIcon fab icon="tiktok" style= {{color: 'rgb(0, 0, 0)'}} />
            </a>


            <a href='https://www.instagram.com/plantesambmagia/' className='me-4 text-reset' target="_blank">
              <MDBIcon fab icon="instagram" className="icon" style= {{color: 'rgb(0, 0, 0)'}}/>
            </a>
            <a  onClick={() => window.location = 'mailto:plantesambmagia@gmail.com'} className='me-4 text-reset' target="_blank">
              <MDBIcon  icon="envelope" className="icon" style= {{color: 'rgb(0, 0, 0)'}}/>
            </a>

          </div>
          
          </div>
          <div className='pam text-center ' style={{ backgroundColor:  '#9575cd' }}>
        © 2022 Copyright:
        <a className='text-reset' >
          Plantesambmàgia
        </a>
      </div>
        </section>
       
       
      </footer>
      
    </div>
  )

}

export default Footer;