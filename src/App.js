import './App.css';
import Layout from './components/Layout'; // Ensure 'Layout' is used in your routes
import Home from './pages/Home'; // Ensure 'Home' is used in your routes
import Detail from './pages/Detail'; // Ensure 'Detail' is used in your routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
