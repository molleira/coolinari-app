import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inici } from './modules/inici/inici';
import { Crea } from './modules/crea/crea';
import { Cerca } from './modules/cerca/cerca';
// import { Recepta } from './modules/recepta/recepta';
import { Navega } from './modules/navega/navega';
import './App.css'
import Search from './modules/cerca/cercat';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navega />
        <Routes>
          <Route path='/' element={<Inici />} />
          <Route path='/crea' element={<Crea />} />
          {/* <Route path='/cerca' element={<Search />} /> */}
          {/* <Route path='/recepta/:id' element={<Recepta receptes={undefined} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
