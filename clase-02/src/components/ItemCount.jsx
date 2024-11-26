import React, { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={handleDecrement}>
        -
      </button>
      <span style={styles.count}>{count}</span>
      <button style={styles.button} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
  },
  count: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default ItemCount;
