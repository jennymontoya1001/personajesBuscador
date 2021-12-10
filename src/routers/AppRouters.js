import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import { Personaje } from '../components/Personaje';
import { Navbar } from '../components/Navbar';

export const AppRouters = () => {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Personaje/>}/>
      </Routes>
      </BrowserRouter>
    )
}
