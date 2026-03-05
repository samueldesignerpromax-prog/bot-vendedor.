"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login(){

const router = useRouter()

const [email,setEmail] = useState("")
const [senha,setSenha] = useState("")

function entrar(){

if(email === "admin" && senha === "123"){

router.push("/dashboard")

}else{

alert("Login inválido")

}

}

return(

<div>

<h1>Login Samuel Tech IA</h1>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Senha"
onChange={(e)=>setSenha(e.target.value)}
/>

<button onClick={entrar}>
Entrar
</button>

</div>

)

}
