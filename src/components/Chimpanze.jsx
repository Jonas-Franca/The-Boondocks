import chimp from '/Riley Freeman.jpg'

export default function Chimpanze() {
  return (
    <div>
      <h2 className='font-bold text-5xl  text-vinho' >Riley Freeman</h2>
      
      <p className= 'text-2xl' >Riley Freeman é um dos dois principais protagonistas (aux côtés de Huey Freeman) da série de animação Adult Swim de 2005, The Boondocks.

Ele é o irmão cadete de Huey Freeman e o mais pequeno filho de Robert Freeman. Ele tem 8 anos e imita o estilo de vida dos gangsters. Ele e muito mais o apelo apelativo «Riley Escobar», «Young Reezy» e «The Fundraiser».
      </p>
      
      <img src={chimp} alt="" />
      <a className='text-2xl my-4' href="https://youtu.be/x2drf_yjbKA?si=NyqUa9A-jqHVqqiU">Mais de Riley Freeman</a>
    </div>
  )
}
