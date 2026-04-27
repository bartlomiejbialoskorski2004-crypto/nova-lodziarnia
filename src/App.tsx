/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FullMenu from './pages/FullMenu';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="font-sans antialiased text-nova-text selection:bg-nova-pink/30 selection:text-nova-text min-h-screen flex flex-col relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<FullMenu />} />
          </Routes>
        </div>
      </LanguageProvider>
    </Router>
  );
}
