import React from 'react';
import styles from './styles.module.css';

interface Props {
  isLoading: boolean,
  onClick: () => void
}

const LoadMoreButton: React.FC<Props> = ({ isLoading, onClick }) => {
  const computedStyles = {
    background: isLoading ? 'gray' : '#C4232A',
  };

  return (
    <button 
      onClick={onClick}
      style={computedStyles}
      className={styles.button}
      disabled={isLoading}
    >
        {isLoading ? 'Loading...' : 'Load More' }
    </button>
  );
};

export default LoadMoreButton;
