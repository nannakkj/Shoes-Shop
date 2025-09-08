import './Produtos.css'
import bolsa from '../../assets/bolsa.png'
import portaNotebook from '../../assets/portaNotebook.png'
import sandalia1 from '../../assets/sandalia1.png'
import sandalia2 from '../../assets/sandalia2.png'
import tamanco from '../../assets/tamanco.png'
import tenis from '../../assets/tenis.png'

export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum repellendus at? Aliquam quia, ipsum eius in odio vero deserunt repellendus dolorem dolor necessitatibus fugit, laboriosam, totam minima autem numquam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maiores iusto, labore vel, dolor nulla aperiam sunt ducimus deserunt numquam quas! Nulla voluptatum temporibus, sit corrupti quis laboriosam veritatis? Odit repudiandae in voluptate? Facilis accusantium distinctio dolore ad sequi et quisquam. Dignissimos natus nisi porro deserunt repellat placeat nam at praesentium tempora vel, veritatis qui obcaecati debitis repellendus voluptatibus iusto unde, modi perferendis voluptate aspernatur labore adipisci optio facere quod? Beatae accusantium eum cupiditate? Molestiae et deserunt quisquam, iusto provident accusamus? Pariatur neque exercitationem dolor praesentium distinctio, sequi, doloremque nesciunt quos aspernatur reiciendis minus possimus? Itaque, quae. A, aperiam itaque.
                </p>
                <div className='produtos_grid'>
                    <div className="card">
                        <div className="card_image"><img src={sandalia1} alt='sandalia1'/>
                        <span className='badge_desconto'>mais vendido</span></div>
                        <span className="card_info"> 
                            <h3>sandalia</h3>
                            <p className="preco">R$260</p>
                            <button className="btn">comprar agora</button>
                        </span>
                    </div>
                    <div className="card">
                        <div className="card_image"><img src={sandalia2} alt='sandalia2'/>
                        <span className='badge_vendido'>mais vendido</span></div>
                        <span className="card_info"> 
                            <h3>sandalia</h3>
                            <p className="preco">R$160</p>
                            <button className="btn">comprar agora</button>
                        </span>
                    </div>
                    <div className="card">
                        <div className="card_image"><img src={tamanco} alt='tamanco'/>
                        <span className='badge_vendido'>mais vendido</span></div>
                        <span className="card_info"> 
                            <h3>tamanco</h3>
                            <p className="preco">R$320</p>
                            <button className="btn">comprar agora</button>
                        </span>
                    </div>
                    <div className="card">
                        <div className="card_image"><img src={tenis} alt='tenis'/>
                        <span className='badge_vendido'>mais vendido</span></div>
                        <span className="card_info"> 
                            <h3>tenis</h3>
                            <p className="preco">R$280</p>
                            <button className="btn">comprar agora</button>
                        </span>
                    </div>
                    <div className="card">
                        <div className="card_image"><img src={portaNotebook} alt='portaNotebook'/>
                        <span className='badge_vendido'>mais vendido</span></div>
                        <span className="card_info"> 
                            <h3>portaNotebook</h3>
                            <p className="preco">R$70</p>
                            <button className="btn">comprar agora</button>
                        </span>
                    </div>
                    <div className="card">
                        <div className="card_image"><img src={bolsa} alt='bolsa'/>
                        <span className='badge_vendido'>mais vendido</span></div>
                        <span className="card_info"> 
                            <h3>Bolsa</h3>
                            <p className="preco">R$321</p>
                            <button className="btn">comprar agora</button>
                        </span>
                    </div>
                </div>
                
            </div>
        </section>
    )
}