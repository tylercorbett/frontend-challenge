import React from 'react';
import styles from './styles.module.css';

interface Props {
  thumbnailSrc: string,
  title: string,
  authorAvatarSrc: string,
  authorName: string,
}

const Story: React.FC = () => {
  return (
    <li className={styles.Story}>
        im a story
    </li>
  );
};

export default Story;
