
import React from "react"
import PAM from "../images/PAM.png"
import plantes from "../images/plantes.png"


const About = () => {

  return (
    <div className="PAM">
      <div className="photoH">  </div>
      <div className="intro">
        <div className="texthome">
          <h2 className="titleA">Plantes amb màgia</h2>
          <p>Mi nombre es Paula y Plantes amb màgia nace como un hobby para despejar la mente en un momento complicado de mi vida.</p>
          <p>Empece haciendo las joyas para regalar o para mí y vi que gustaban tanto que decidí crear esta web para poder compartirlas.</p>
          <p>En este proyecto se juntan mi pasión por las plantas y sus propiedades con las manualidades y las joyas.</p>
          <p>Todas las flores y plantas han sido recogidas y preservadas con amor y cariño por mí,
            y posteriormente encapsuladas en resina para que sean más duraderas.</p>
          <p>La naturaleza es única y es por eso que todos los productos que vas a encontrar en esta web también lo son,
            no hay una hoja o flor igual a otra, por lo que no habrá una pieza igual a otra.</p>

          <p>Todas las plantas son mágicas y son un gran aliado para nuestro día a día, todos los objetos que encontrarás
            en la web tienen propiedades mágicas.</p>
          <p>Creo firmemente que son las plantas y flores quien nos eligen a nosotros para que las adoptemos</p>

          <p className="quieres">¿Quieres adoptar una pieza de la naturaleza?     </p>
        </div>


      </div>
      <div className="intro2">

        

        <div className="textped">
          <p>Sé que mucha gente comparte mi pasión por las plantas, por eso en Plantes amb màgia también hacemos pedidos personalizados. </p>
          <p>¿Tienes una hoja o flor que quieres conservar para siempre?</p>
          <p>Escríbeme, te informaré como puedes conservarlas correctamente y juntos podemos
             crear una pieza única con tus plantas favoritas.</p>
        </div>
       
      </div>
      <img src={PAM} alt="Logo Plantes amb màgia" className="pam1" />
    </div>
  )
}

export default About;
