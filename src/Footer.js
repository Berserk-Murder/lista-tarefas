function Footer({nome, ano}) {
    return (
        <div className="text-center fixed-bottom">
            <a href="https://twitter.com/berserkmurder" target='_blank' rel="noreferrer">
            <i className = "bi bi-twitter p-2 fs-3"></i>
            </a>
            <h4 className="text-center m-3">Desenvolvido por &copy;{nome} - {ano}</h4>
        </div>
    )
}

export default Footer;