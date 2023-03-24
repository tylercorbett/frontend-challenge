import React from 'react';
import styles from './styles.module.css';

interface Props {
  thumbnailSrc: string,
  title: string,
  authorAvatarSrc: string,
  authorName: string,
}

const Story: React.FC<Props> = ({ thumbnailSrc, title, authorAvatarSrc, authorName }) => {
  return (
    <li className={styles.Story}>
      <img className={styles.thumbnail} src={thumbnailSrc} alt='Post thumbnail' /> 
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.author}>
          <img className={styles.avatar} src={authorAvatarSrc} alt={`Photo of ${authorName}`} />
          <h4>{authorName}</h4>
        </div>
      </div>     
    </li>
  );
};

export default Story;
