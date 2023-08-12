import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://twitter.com/Forii_ok'>
                <img src="/img/twitter.png" alt='twitter' target="blank"/>
            </a>
            <a href='https://www.instagram.com/forii_ok/' target="blank">
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Rodrigo</strong>
    </footer>
}

export default Footer