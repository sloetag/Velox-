import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Models from './pages/Models';
import Innovation from './pages/Innovation';
import Services from './pages/Services';
import Boutique from './pages/Boutique';

import Login from './pages/Login';
import Register from './pages/Register';

import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <Router>
      <div className="bg-[#050505] min-h-screen flex flex-col text-white selection:bg-white selection:text-black">
        {!loadingComplete && <Loader onLoadingComplete={() => setLoadingComplete(true)} />}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="models" element={<Models />} />
            <Route path="vehicles" element={<Models />} />
            <Route path="innovation" element={<Innovation />} />
            <Route path="services" element={<Services />} />
            <Route path="boutique" element={<Boutique />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

