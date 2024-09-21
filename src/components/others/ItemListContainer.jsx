import React, { useState } from 'react';

const ItemListContainer = ({ greeting }) => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #ddd',
        padding: '20px',
        fontSize: '24px',
        color: '#333'
    };

    return (
        <div style={containerStyle}>
            {greeting}
        </div>
    );
}

export default ItemListContainer