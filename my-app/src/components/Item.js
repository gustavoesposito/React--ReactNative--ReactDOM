import PropTypes from 'prop-types'

function Item(marca, anoLançamento){
    return(
    <>
        <li >
            {marca}- {anoLançamento}
        </li>
         </>
    )
}

Item.prototypes={
    marca:PropTypes.string.isRequired,
    anoLançamento:PropTypes.number.isRequired
}
Item.defaultProps={
    marca:'Faltou marca',
    anoLançamento: 0
}
export default Item