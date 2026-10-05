import { Hero } from './components/Hero.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Games } from './components/Games.jsx';
import { Mission } from './components/Mission.jsx';
import { Team } from './components/Team.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Games />
            <Mission />
            <Team />
            <Footer />
        </>
    );
};
