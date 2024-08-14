import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inici } from './modules/inici/inici';
import { Crea } from './modules/crea/crea';
import { Cerca } from './modules/cerca/cerca';
// import { Recepta } from './modules/recepta/recepta';
import { Navega } from './modules/navega/navega';
import './App.css'
import Search from './modules/cerca/cercat';
import { Grid, GridItem } from './modules/patterns/grid';
// import { GridItem } from './modules/patterns/grid-item';

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
        
        <Grid columns={12} gap="20px">
          <GridItem colSpan={4}>
            <div>Item 1</div>
          </GridItem>
          <GridItem colSpan={8}>
            <div>Item 2</div>
          </GridItem>
          <GridItem colSpan={6}>
            <div>Item 3</div>
          </GridItem>
          <GridItem colSpan={6}>
            <div>Item 4</div>
          </GridItem>
        </Grid>
      </BrowserRouter>
    </div>
  )
}

export default App
