"use client"
import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
}

const MotionSection = ({ children, delay = 0.2 }: { children: React.ReactNode; delay: number }) => {
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: "easeInOut", delay }}
            style={{ position: "relative" }}
        >
            {children}
        </motion.div>
    )
}

export { MotionSection }
