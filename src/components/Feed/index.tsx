import React from 'react';
import Story from '../Story';

const fakeData = [
  {
    thumbnailSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg',
    title: 'Trust Me, You Want To Try Out This Warzone Season 4 Loadout',
    authorName: 'Skye Brewster',
    authorAvatarSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg'
  },
  {
    thumbnailSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg',
    title: 'Trust Me, You Want To Try Out This Warzone Season 4 Loadout',
    authorName: 'Skye Brewster',
    authorAvatarSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg'
  },
  {
    thumbnailSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg',
    title: 'Trust Me, You Want To Try Out This Warzone Season 4 Loadout',
    authorName: 'Skye Brewster',
    authorAvatarSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg'
  },
  {
    thumbnailSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg',
    title: 'Trust Me, You Want To Try Out This Warzone Season 4 Loadout',
    authorName: 'Skye Brewster',
    authorAvatarSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg'
  },
];

const Feed: React.FC = () => {
  return (
    <ol>
      {fakeData.map((story => {
        return (
          <Story {...story}/> 
        );
      }))}
    </ol>
  );
};

export default Feed;
