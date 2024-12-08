"use client";
import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { MdExpandMore } from "react-icons/md";

interface AccordionProps {
    title: string;
    children: ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <button
                className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-left"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{title}</span>
                <motion.div
                    className="flex items-center"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <MdExpandMore className="w-6 h-6" />
                </motion.div>
            </button>
            <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-4 py-2">{children}</div>
            </motion.div>
        </div>
    );
};

export default Accordion;

