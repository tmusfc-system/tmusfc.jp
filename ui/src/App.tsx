import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Home'; {/*パスを追加次第このように追加していく*/}
import { Header } from './components/header.tsx'
import Annual from './annual schedule.tsx';
import About from './about.tsx';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/annual" element={<Annual/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
