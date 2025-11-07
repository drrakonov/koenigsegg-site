import { ReactLenis } from 'lenis/react'
import {type ReactNode} from 'react';

const SmoothScrolling = ({ children }: { children : ReactNode }) => {
    return (
        <ReactLenis root >
            {children}
        </ReactLenis>
    )
}

export default SmoothScrolling;