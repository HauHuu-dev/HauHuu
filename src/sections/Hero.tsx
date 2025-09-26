import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Motants } from "@/components/Motants";

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 853 });
    return (
        <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
            <HeroText />
            <ParallaxBackground />
            <figure
                className="absolute inset-0"
                style={{ width: "100vw", height: "100vh" }}
            >
                <Canvas camera={{ position: [0, 1, 3] }}>

                    <ambientLight intensity={0.2} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <pointLight position={[-3, 2, -2]} intensity={0.5} />

                    <Suspense fallback={<Loader />}>
                        <Float>
                            <Motants
                                scale={isMobile ? 0.8 : undefined}
                                position={isMobile ? [0, -1.5, 0.5] : undefined}
                            />

                        </Float>

                        <Rig />
                    </Suspense>
                </Canvas>
            </figure>
        </section>
    );
};

function Rig() {
    return useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
            0.5,
            delta
        );
    });
}

export default Hero;