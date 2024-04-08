import mp from '/boondocks.jpg'
export default function macacoprego() {
  return (
    <div>
      <h2 className='font-bold text-6xl  text-vermelho mb-1'>Sinopse</h2>
      <p className= 'text-4xl mb-6' >The Boondocks é uma sátira social da cultura estadunidense, que aborda temas complexos como o racismo e a luta de classes, e tem com foco narrativo a família Freeman, composta por Huey o mais velho, de dez anos, seu irmão mais novo Riley de oito anos de idade, e o seu avô Robert.</p>
      <img src={mp} alt="" />
      <a className='text-2xl my-4' href="https://youtu.be/xQ-WEP7EFZA?si=QOssyH89tWvQH-Vk" >Mais sobre os Boondocks</a>
    </div>
  )
}
