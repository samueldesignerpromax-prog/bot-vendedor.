export function vendedorIA(mensagem){

mensagem = mensagem.toLowerCase()

if(mensagem.includes("preço") || mensagem.includes("valor")){

return `
O preço depende do tipo de projeto.

Nós criamos:

• Sites profissionais
• Chatbots automáticos
• Sistemas personalizados

Qual dessas soluções você precisa para seu negócio?
`

}

if(mensagem.includes("site")){

return `
Um site profissional pode aumentar muito suas vendas.

Ele ajuda a:

✔ gerar confiança
✔ atrair clientes
✔ vender automaticamente

Seu site seria para:

empresa
loja online
ou portfólio?
`

}

if(mensagem.includes("chatbot")){

return `
Um chatbot pode responder clientes 24h por dia.

Ele pode:

✔ responder perguntas
✔ vender produtos
✔ capturar clientes
✔ automatizar atendimento

Você quer usar no site ou no WhatsApp?
`

}

if(mensagem.includes("empresa")){

return `
Perfeito.

A Samuel Tech IA cria soluções tecnológicas para empresas crescerem.

Nós desenvolvemos:

• Sites profissionais
• Automação com IA
• Sistemas personalizados
• Chatbots inteligentes

Quer ver um exemplo de projeto?
`

}

return `
Interessante.

Me conta melhor o que você precisa para seu negócio.

Talvez possamos criar uma solução perfeita para você.
`

}
