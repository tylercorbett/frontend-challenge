import React from 'react';
import styles from './styles.module.css';

interface Props {
  thumbnailSrc: string,
  title: string,
  authorAvatarSrc: string,
  authorName: string,
  id: string,
}

const Story: React.FC<Props> = ({ id, thumbnailSrc, title, authorAvatarSrc, authorName }) => {
  console.log('thumbnailSrc', thumbnailSrc);
  return (
    <li className={styles.Story} key={id}>
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
