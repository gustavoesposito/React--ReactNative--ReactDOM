function Evento ({numero}){

    function meuEvento(){
        alert(`Fui ativado ${numero}`  )

    }


    return(
        <>
        <p>CLique Aqui Para Ativar um Evento </p>
        <button onClick={meuEvento}>Ativar</button>
         </>
    )
}

export default Evento