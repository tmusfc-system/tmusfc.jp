import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Home'; {/*パスを追加次第このように追加していく*/}
import { Header } from './components/header.tsx'
import Annual from './content/annual schedule.tsx';
import About from './content/about.tsx';
import Example from './content/examples.tsx';
import Taiken from './content/taiken.tsx';{/*なぜか名前空間がファイル名と機能名で衝突するとうまくいかないらしい。*/}
import Taiken_2026 from './content/2026.tsx';
function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/annual" element={<Annual/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/examples" element={<Example/>}/>
        <Route path="/taiken" element={<Taiken/>}/>
        <Route path="/taiken2026" element={<Taiken_2026/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App