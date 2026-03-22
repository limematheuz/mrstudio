import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import CursorGlow from './components/CursorGlow';

// Pages
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import ServiceDetail from './pages/ServiceDetail';
import Precios from './pages/Precios';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import AvisoLegal from './pages/AvisoLegal';
import TerminosServicio from './pages/TerminosServicio';
import NotFound from './pages/NotFound';

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export default function App() {
    return (
        <div className="app-container">
            <CursorGlow />
            <ScrollToTop />
            <Header />

            <main style={{ minHeight: '80vh' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/precios" element={<Precios />} />
                    <Route path="/servicios/:id" element={<ServiceDetail />} />
                    <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
                    <Route path="/aviso-legal" element={<AvisoLegal />} />
                    <Route path="/terminos-del-servicio" element={<TerminosServicio />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
            <CookieBanner />
        </div>
    );
}
