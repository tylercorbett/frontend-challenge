import React from 'react';
import styles from './styles.module.css';

interface Props {
  thumbnailSrc: string,
  title: string,
  authorAvatarSrc: string,
  authorName: string,
}

const Story: React.FC<Props> = ({ thumbnailSrc = 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg', title = 'Trust Me, You Want To Try Out This Warzone Season 4 Loadout', authorAvatarSrc = 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg?crop=4%3A3', authorName = 'Skye Brewster' }) => {
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
