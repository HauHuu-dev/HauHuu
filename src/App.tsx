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
            <div className="relative">
                <img
                    src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
                    className="rounded-xl"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
            </div>

        </div>
    )

}

export default App;