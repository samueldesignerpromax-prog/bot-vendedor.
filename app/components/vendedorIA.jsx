"use client"

import { useState } from "react"
import { vendedorIA } from "../../lib/vendedorBrain"

export default function VendedorIA(){

const [mensagem,setMensagem] = useState("")
const [chat,setChat] = useState([])

function enviar(){

const resposta = vendedorIA(mensagem)

setChat([
...chat,
{cliente: mensagem},
{ia: resposta}
])

setMensagem("")
}

return(

<div>

<h2>Vendedor IA Samuel Tech</h2>

<div>

{chat.map((msg,i)=>(
<div key={i}>

{msg.cliente && <p><b>Cliente:</b> {msg.cliente}</p>}
{msg.ia && <p><b>IA:</b> {msg.ia}</p>}

</div>
))}

</div>

<input
value={mensagem}
onChange={(e)=>setMensagem(e.target.value)}
placeholder="Digite sua mensagem"
/>

<button onClick={enviar}>
Enviar
</button>

</div>

)

}
