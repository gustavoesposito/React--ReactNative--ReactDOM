import Item from "./Item"

function List(){
    return(
    <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca='Ferrai' anoLanĂ§amento={2024}/>
            <Item marca="Lamborghinni" anoLanĂ§amento={2024}/>
            <Item marca="RollsRoice" anoLanĂ§amento={2024}/>
         
        </ul>
    </>
    )
}

export default List