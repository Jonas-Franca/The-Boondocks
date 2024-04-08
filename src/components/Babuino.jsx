import babu from '/huey.jpg'

export default function Babuino() {
  return (
    <div>
      <h2 className='font-bold text-6xl text-vermelho mb-2'>Huey Freeman</h2>
      
      <p className= 'text-3xl' >Huey Freeman é o personagem principal da tira em quadrinhos The Boondocks escrita por Aaron McGruder, assim como o personagem principal e narrador da série animada de TV de mesmo nome.[1] Politicamente militante, ele regularmente reflete sobre os acontecimentos atuais, bem como a situação dos afro-americanos, no que se refere à maior sociedade estadunidense.
      </p>
      
      <img src={babu} alt="" />
      <a className='text-2xl my-4' href="https://youtu.be/QLC7ZilFrSo?si=naTIrFsT7BL2VnYn">Mais sobre Huey Freeman</a>
    </div>
  )
}
