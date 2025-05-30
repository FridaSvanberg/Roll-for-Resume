import { useEffect } from 'react';
import { logEasterEgg } from '../utils/logEasterEgg';

export function useEasterEgg() {
    useEffect(() => {
        if (typeof window !== 'undefined' && window.console) {
            logEasterEgg();
        }
    }, []);
}