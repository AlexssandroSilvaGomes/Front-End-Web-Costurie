import React from 'react'
import './styleRegistrar.css'
import FormularioRegistrar from '../../ui/components/registrar/FormularioRegistrar/FormularioRegistrar'
import costureiraRegistrarImagem from './images/costureiraRegistrar.svg'

function Registrar() {
  return (
    <>
      {/* SVG Absolute */}
       
        <svg className='marcaRegistrarTransparente' xmlns="http://www.w3.org/2000/svg" width="657" height="689" viewBox="0 0 657 689" fill="none">
          <path d="M0 0H636.042C653.595 0 662.634 20.9959 650.57 33.7459L322 381L34.4705 682.37C22.0137 695.427 0 686.61 0 668.564V0Z" fill="url(#paint0_linear_339_21309)" fillOpacity="0.4"/>
          <defs>
            <linearGradient id="paint0_linear_339_21309" x1="320" y1="0" x2="320" y2="720" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A89BFF"/>
              <stop offset="1" stopColor="#C98FEC"/>
            </linearGradient>
          </defs>
        </svg>

        <svg className='marcaRegistrar' xmlns="http://www.w3.org/2000/svg" width="614" height="650" viewBox="0 0 614 650" fill="none">
          <path d="M0 0H593.664C611.199 0 620.245 20.9584 608.218 33.7181L303.5 357L34.5753 643.203C22.1675 656.408 0 647.628 0 629.508V0Z" fill="url(#paint0_linear_339_21308)"/>
          <defs>
            <linearGradient id="paint0_linear_339_21308" x1="320" y1="0" x2="320" y2="720" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A89BFF"/>
              <stop offset="1" stopColor="#C98FEC"/>
            </linearGradient>
          </defs>
        </svg>

      {/* SVG Absolute */}

      <div className="containerRegistrar">

      <div className='containerRegistrar__imageRegistrar containerRegistrar-displayFlex'>
          <img id="costureiraRegistrarImagem" src={costureiraRegistrarImagem} alt="Imagem de uma costureira fazendo login num app" />
        </div>

        <div className='containerRegistrar__formRegistrar containerRegistrar-displayFlex'>
            <FormularioRegistrar></FormularioRegistrar>
        </div>

        

      </div>


    </>
  )
}

export default Registrar