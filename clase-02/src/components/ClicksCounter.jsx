import  { useState } from 'react';

const ClicksCounter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Clickeaste {count} veces</p>
            <button onClick={handleClick}>Clickeame</button>
        </div>
    );
};

export default ClicksCounter;