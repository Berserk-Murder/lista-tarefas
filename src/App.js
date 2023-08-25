import './App.css'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const nome = 'Usuário'
  const ano = 2023

  return (
    <div className='container'>
      <Header />
      <Outlet />
      <Footer nome={nome} ano={ano} />

    </div>
  );
}

export default App;
