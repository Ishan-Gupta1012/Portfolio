"use client";

import { useState, useEffect } from 'react';

type TypingEffectOptions = {
    typeSpeed?: number;
    deleteSpeed?: number;
    delay?: number;
};

export function useTypingEffect(texts: string[], options: TypingEffectOptions = {}) {
    const { typeSpeed = 150, deleteSpeed = 100, delay = 1000 } = options;
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        if (!texts || texts.length === 0) return;

        const handleTyping = () => {
            const fullText = texts[textIndex];
            
            if (isDeleting) {
                if (charIndex > 0) {
                    setCurrentText(fullText.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                if (charIndex < fullText.length) {
                    setCurrentText(fullText.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, textIndex, texts, typeSpeed, deleteSpeed, delay]);

    return currentText;
}
