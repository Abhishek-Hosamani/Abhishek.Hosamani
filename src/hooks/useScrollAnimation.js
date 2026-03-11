import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            const node = ref.current;
            if (node) {
                observer.unobserve(node);
            }
        };
    }, [threshold]);

    return [ref, isVisible];
};

export const useStaggeredAnimation = (items, delay = 100) => {
    const [visibleItems, setVisibleItems] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Stagger the animation of items
                    items.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleItems(prev => [...prev, index]);
                        }, index * delay);
                    });
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            const node = ref.current;
            if (node) {
                observer.unobserve(node);
            }
        };
    }, [items, delay]);

    return [ref, visibleItems];
};
