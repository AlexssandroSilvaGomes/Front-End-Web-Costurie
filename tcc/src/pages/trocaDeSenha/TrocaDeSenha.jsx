import React from 'react'
import './styleTrocaDeSenha.css'
import FormularioTrocaDeSenha from '../../ui/components/trocaDeSenha/FormularioTrocaDeSenha'
import BotaoFormularioGlobal from '../../ui/components/global/BotaoFormularioGlobal/BotaoFormularioGlobal'

function TrocaDeSenha() {
  return (
    <>

      <div className='containerTrocaDeSenha'>

        <div className='containerTrocaDeSenha__containerFormulario'>

          <div className='containerFormulario__headerFormulario'>

            <div className='headerFormulario__iconeVoltarFormulario'></div>
            <h1 className='headerFormulario__tituloFormulario'>ALTERAR SENHA</h1>

          </div>

          <FormularioTrocaDeSenha></FormularioTrocaDeSenha>

          <BotaoFormularioGlobal
            value={'ENVIAR'}
          ></BotaoFormularioGlobal>

        </div>

      </div>

    </>
  )
}

export default TrocaDeSenha