import './styles/app.scss';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AllApp from "./components/AllApp";

function App() {
    return (
      <BrowserRouter>
        <div className="app">
            <Routes>
                <Route path="/" element={<Navigate replace to={`f${(+new Date).toString(16)}`} />} />
                <Route path='/:id' element={ <AllApp /> } />
            </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;
