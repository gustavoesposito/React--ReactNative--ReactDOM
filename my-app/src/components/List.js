import Item from "./Item"

function List(){
    return(
    <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca='Ferrai' anoLançamento={2024}/>
            <Item marca="Lamborghinni" anoLançamento={2024}/>
            <Item marca="RollsRoice" anoLançamento={2024}/>
         
        </ul>
    </>
    )
}

export default List