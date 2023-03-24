import React from 'react';
import styles from './styles.module.css';

interface Props {
  isLoading: boolean
}

const LoadMoreButton: React.FC<Props> = ({ isLoading }) => {
  const computedStyles = {
    background: isLoading ? 'gray' : '#C4232A',
  }
  return (
    <button style={computedStyles} className={styles.button}>{isLoading ? 'Loading...' : 'Load More' }</button>
  );
};

export default LoadMoreButton;
