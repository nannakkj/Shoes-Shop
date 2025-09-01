import './Topo.css'

export default function Topo() {
    return (
        <header>
            <div className="anuncio">
                <div className='anuncio_conteudo'>
                    <p>25% de desconto na sua primeira compra!!!</p>
                </div>
            </div>
            <div className='topo'>
                <picture>
                    <a href="#">
                        <img src= "./logoLoja.png"/>
                    </a>
                </picture>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">News</a>
                </nav>
            </div>
        </header>
    )
}