import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Error from './Pages/Error'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Contato from './Pages/Contato'
import Header from './Components/Header'

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/contato' element={<Contato/>} />

                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;