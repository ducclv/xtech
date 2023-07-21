import React, { useEffect, useState } from 'react';

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        document.addEventListener('scroll', toggleVisibility);
        return () => {
            document.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div
            className="d-print-none"
            style={{
                position: 'fixed',
                bottom: '24px',
                right: '12px',
                cursor: 'pointer',
                zIndex: 999,
            }}>
            {isVisible && (
                <div onClick={scrollToTop}>
                    <img
                        src={process.env.PUBLIC_URL + '/images/up-arrow.svg'}
                        alt="up-to-top"
                        width={40}
                    />
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;
