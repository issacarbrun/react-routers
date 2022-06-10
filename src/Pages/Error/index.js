import {Link} from 'react-router-dom';

function Error(){
    return(
        <div>
            <h1>Página não existente</h1>
            <span>Encontramos essas paginas aqui:</span> <br/>
            <Link to='/'>Home</Link><br/>
            <Link to='/sobre'>Sobre</Link><br/>
            <Link to='/contato'>Contato</Link><br/>
        </div>
    )
}

export default Error