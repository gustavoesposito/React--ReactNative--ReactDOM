import Button from "./Button"

function Evento ({numero}){

    function meuEvento(){
        alert(`Ativando Primeiro Evento.....`  )

    }
    function segundoEvento(){
        alert("Ativando Segundo Evento")
    }


    return(
        <div>
        <p>CLique Aqui Para Ativar um Evento </p>
        <Button event={meuEvento} text="Primeiro Evento"/>
        <Button event={segundoEvento} text="Segundo  Evento"/>
      </div>
    )
}

export default Evento