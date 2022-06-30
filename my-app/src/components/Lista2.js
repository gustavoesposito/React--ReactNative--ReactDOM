function Lista02({itens}){
    return(
  <>
    <h3>Lista de coisas boas</h3>
    {itens.map((item,index)=>(
        <p>{item}</p>
    ))}
    </>
    )
}

export default Lista02