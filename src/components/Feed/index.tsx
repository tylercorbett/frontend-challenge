import React, { useState, useEffect } from 'react';
import LoadMoreButton from '../LoadMoreButton';
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
    title: 'This League Episode 49: Sixers Meltdown, Zion Wants Out & More',
    authorName: 'Chad Billingslea',
    authorAvatarSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg'
  },
  {
    thumbnailSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg',
    title: 'For Some Reason People Are Concerned About a Play Going On In China Where Actors Are Chased By Wolves In a Crowded Theatre',
    authorName: 'Damian Lillard',
    authorAvatarSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg'
  },
  {
    thumbnailSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg',
    title: 'The Amount Of Slander Orange Freeze Pops Get Is Uncalled For An Utter Bullshit (Bonus: Freeze Pop Power Rankings)',
    authorName: 'Tyler Corbett',
    authorAvatarSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg'
  },
];

const Feed: React.FC = () => {
  const [stories, setStories] = useState(null);

  return (
    <div>
      <LoadMoreButton />
      <ol>
        {fakeData.map((story => {
          return (
            <Story {...story}/> 
          );
        }))}
      </ol>
    </div>
  );
};

export default Feed;
