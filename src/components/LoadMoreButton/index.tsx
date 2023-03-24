import React from 'react';
import styles from './styles.module.css';

interface Props {
  isLoading: boolean,
  handleClick: () => void
}

const LoadMoreButton: React.FC<Props> = ({ isLoading, handleClick }) => {
  const computedStyles = {
    background: isLoading ? 'gray' : '#C4232A',
  };

  return (
    <button 
      onClick={handleClick}
      style={computedStyles}
      className={styles.button}
      disabled={isLoading}
    >
        {isLoading ? 'Loading...' : 'Load More' }
    </button>
  );
};

export default LoadMoreButton;
