import React from 'react';

/**
 * @param {String} name     아이콘 이름 
 * @param {String} category 아이콘 구분 
 * @param {Object} style    아이콘 스타일
 */
const Icon = ({ name, category, style }) => {
    const iconClass = `
        ${name} 
        ${category ? category : 'fas'}
    `;
    return (<i className={iconClass} style={style}></i>);
};

export default Icon;