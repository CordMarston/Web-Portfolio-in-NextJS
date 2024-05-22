"use client";
import { useCallback, useEffect, useState } from "react";

export default function onScreen(): { isInViewport: boolean; ref: React.RefCallback<HTMLElement> } {
    const [isInViewport, setIsInViewport] = useState(false);
    const [refElement, setRefElement] = useState<HTMLElement | null>(null);

    const setRef = useCallback((node: HTMLElement | null) => {
        if (node !== null) {
            setRefElement(node);
        }
    }, []);

    useEffect(() => {
        if (refElement && !isInViewport) {
            let options = {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            };

            const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsInViewport(true), options);
            observer.observe(refElement);

            return () => {
                observer.disconnect();
            };
        }
    }, [isInViewport, refElement]);

    return { isInViewport, ref: setRef };
}