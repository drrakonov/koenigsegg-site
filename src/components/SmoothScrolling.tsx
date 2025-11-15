import { ReactLenis } from 'lenis/react'
import { type ReactNode } from 'react';

const SmoothScrolling = ({ children }: { children: ReactNode }) => {
    return (
        <ReactLenis root
            options={{
                lerp: 0.05,       
                duration: 1.5,         
                wheelMultiplier: 0.6,  
                touchMultiplier: 0.5,  
                smoothWheel: true,
            }}
        >
            {children}
        </ReactLenis>
    )
}

export default SmoothScrolling;