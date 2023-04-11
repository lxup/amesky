import { use, useEffect, useRef, useState } from 'react';

// FRAMER MOTION
import { motion } from 'framer-motion'

import ameskyIcon from '../../public/amesky_icon.svg'
import Image from 'next/image';

export default function Cursor() {


    const [mousePosition, setMousePosition] = useState({
        x:0,
        y:0
    });
    const [cursorVariant, setCursorVariant] = useState('default')

    useEffect(() => {
        const mouseMove = (e: any) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 25,
            y: mousePosition.y - 25,
        }
    }

    return (
        <motion.div
            className=' fixed top-0 left-0'
            variants={variants}
            animate={cursorVariant}
        >
            <Image src={ameskyIcon} alt='Amesky Icon' width={50}/>
        </motion.div>
    )
}