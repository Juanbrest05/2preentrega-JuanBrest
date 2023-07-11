import './style.css';
import NavBar from './components/header/NavBar';
import ConteinerCardItems from './components/components item/ConteinerCardItems';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import DetailsItem from './components/components item/DetailItem';


function App() {
  return (
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/' element={<ConteinerCardItems />}/>
    <Route path='/item/:idItem' element={ <DetailsItem />} />
    <Route path='/category/:idCategory' element={<ConteinerCardItems />}/>
  </Routes>
  
  </BrowserRouter>
  );
}

export default App;
