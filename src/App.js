import { Routes, Route } from 'react-router-dom';

import CarLeasingPage from './pages/CarLeasingPage/CarLeasingPage';
import IntroPage from './pages/IntroPage/IntroPage';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<IntroPage />} />
            <Route path='/leasing' element={<CarLeasingPage />} />
        </Routes>
    );
};

export default App;
