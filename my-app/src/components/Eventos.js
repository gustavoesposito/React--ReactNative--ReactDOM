import Button from "./Button"

function Evento ({numero}){

    function meuEvento(){
        alert(`Ativando Primeiro Evento.....`  )

    }


    return(
        <div>
        <p>CLique Aqui Para Ativar um Evento </p>
        <Button event={meuEvento} text="Primeiro Evento"/>
      </div>
    )
}

export default Evento