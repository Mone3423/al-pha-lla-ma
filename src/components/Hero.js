import { React, useRef } from 'react';
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import VariableProximity from './TextAnimations/VariableProximity/VariableProximity'
import "./Hero.css";
import TextPressure from './TextAnimations/TextPressure/TextPressure';

const Hero = () => {
    const containerRef = useRef(null);

    return (
        <section className="hero">
            {/* Capa de video */}
            <div className="video-wrapper">
                <ReactPlayer
                    url="/video/La Paz cutslice.mp4"
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                    className="video-bg"
                    playsinline
                    config={{
                        file: {
                            attributes: {
                                style: { objectFit: 'cover' },
                                playsInline: true
                            }
                        }
                    }}
                />

            </div>

            {/* Contenido interactivo */}
            <div className="interactive-content">
                <motion.div
                    className="text-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="title-wrapper"
                    >
                        <TextPressure
                            text="ALPHA LLAMA!"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={true}
                            textColor="#ffffff"
                            strokeColor="#ff0000"
                            minFontSize={25}  /* Asegura que empiece más grande */
                            maxFontSize={30}  /* Permite que crezca más */
                            responsive={true}
                        />


                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className="subtitle-wrapper"
                    >
                        <VariableProximity
                            label={'Transformamos tu visión en contenido multimedia de alto impacto'}
                            className={'variable-proximity-demo'}
                            fromFontVariationSettings="'wght' 700, 'opsz' 25" /* Inicia más grande */
                            toFontVariationSettings="'wght' 1000, 'opsz' 100" /* Llega a un tamaño mayor */
                            containerRef={containerRef}
                            radius={120} /* Expande el área de interacción */
                            falloff='linear'
                            responsive={true}
                        />

                    </motion.div>
                </motion.div>

                {/* Indicador de scroll responsivo */}
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        y: [0, 20, 0]
                    }}
                    transition={{
                        delay: 2,
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className="chevron"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;