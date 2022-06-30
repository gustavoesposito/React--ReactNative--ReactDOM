import {useState} from 'react'

function Condicional(){

const[email,setEmail]= useState()
const[userEmail,setUserEmail]= useState()
 
    function enviarEmail(e){
        e.preventDefault()
setUserEmail(email)
alert("UserEmail")       

    }
    function limparEmail(e){
        e.preventDefault()
setUserEmail("" )
       

    }
     return(
        <div>
            <h2>Cadastre Seu Email</h2>
            <form>
                <input 
                type="email" 
                placeholder='Digite seu Email..'
               onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>
                {userEmail && (
                    <div>
                        <p>O email do Usuário é : {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>
    )


}





export default Condicional