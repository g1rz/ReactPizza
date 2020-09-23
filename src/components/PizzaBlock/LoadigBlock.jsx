import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadigBlock() {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <circle cx="137" cy="113" r="113" />
            <rect x="-2" y="248" rx="4" ry="4" width="280" height="30" />
            <rect x="-2" y="288" rx="6" ry="6" width="280" height="84" />
            <rect x="2" y="394" rx="3" ry="3" width="85" height="26" />
            <rect x="112" y="387" rx="16" ry="16" width="166" height="43" />
        </ContentLoader>
    );
}

export default LoadigBlock;
