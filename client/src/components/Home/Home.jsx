import React from "react";
import Category from "../Category/Category";
import marga from "../images/marga.jpeg"
import heura from "../images/heura.jpeg"
import heures from "../images/heures.jpeg"
import horte from "../images/horte.jpeg"
import uno from "../images/uno.jpeg"
import dos from "../images/dos.jpeg"
import tres from "../images/tres.jpeg"
import runes1 from "../images/runes1.jpeg"
import runes2 from "../images/runes2.jpeg"
import pedidos2 from "../images/pedidos2.jpeg"
import PAM from "../images/PAM.png"
import plantes from "../images/plantes.png"


const Home = () => {

  return (

    <div >
      <div className="photoH">  </div>
      {/* <img className="plantes" src={plantes} alt="" /> */}
      <div className="PAM">
      <h2 className="joyas">La vida es demasiado corta para llevar joyas aburridas</h2>
      <p className="quieres">¿Quieres adoptar una pieza de naturaleza?     </p>
        
      </div>
      

      <div className="fotos">
        <div>
          <img src={marga} alt="Logo Plantes amb màgia" className=" pam2" />
          <img src={heura} alt="Logo Plantes amb màgia" className="pam2" />
          <img src={horte} alt="Logo Plantes amb màgia" className="pam2" />
          <img src={uno} alt="Logo Plantes amb màgia" className="pam2" />
          <img src={runes1} alt="Logo Plantes amb màgia" className="pam2" />
        </div>
        <div>
          <img src={dos} alt="Logo Plantes amb màgia" className="pam2" />
          <img src={heures} alt="Logo Plantes amb màgia" className="pam2" />
          <img src={tres} alt="Logo Plantes amb màgia" className="pam2" />
          <img src={pedidos2} alt="Logo Plantes amb màgia" className="pam2" />
          <img src={runes2} alt="Logo Plantes amb màgia" className="pam2" />
        </div>
      </div>


      <Category />
    </div>
  )
}

export default Home;