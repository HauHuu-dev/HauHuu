import Contact from "./sections/Contact";
import Hero from "./sections/Hero";

function App() {
    return (
        <div className="container mx-auto max-w-7xl">
            {/* <Navbar /> */}
            <Hero />
            {/* <About /> */}
            <Contact />
            <img
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
                className="rounded-xl border border-black/10 dark:border-white/10"
            />

        </div>
    )

}

export default App;