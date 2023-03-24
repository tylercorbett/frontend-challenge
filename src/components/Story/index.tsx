import React from 'react';
import styles from './styles.module.css';

export interface StoryProps {
  thumbnailSrc: string,
  title: string,
  authorAvatarSrc: string,
  authorName: string,
  id: number,
}

const fallbackAvatarSrc = 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg?crop=4%3A3&width=560&height=560';

const Story: React.FC<StoryProps> = ({ id, thumbnailSrc, title, authorAvatarSrc, authorName }) => {
  return (
    <li className={styles.Story} key={id}>
      <img className={styles.thumbnail} src={thumbnailSrc} alt='Post thumbnail' /> 
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.author}>
          <img className={styles.avatar} src={authorAvatarSrc ?? fallbackAvatarSrc} alt={`Photo of ${authorName}`} />
          <h4 className={styles.name}>{authorName}</h4>
        </div>
      </div>     
    </li>
  );
};

export default Story;
