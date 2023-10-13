import LandingPage from './components/LandingPage'
import Nav from './components/Nav'

function App() {
    return (
        <div id="top-bg" className=" flex flex-col gap-32 px-28 py-10">
            <Nav />
            <LandingPage />
        </div>
    )
}

export default App
