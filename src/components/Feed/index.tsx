import React from 'react';
import useFeed from '../../hooks/useFeed';
import LoadMoreButton from '../LoadMoreButton';
import Story from '../Story';

const fakeData = [
  {
    id: '1',
    thumbnailSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg',
    title: 'Trust Me, You Want To Try Out This Warzone Season 4 Loadout',
    authorName: 'Skye Brewster',
    authorAvatarSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg'
  },
  {
    id: '2',
    thumbnailSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg',
    title: 'This League Episode 49: Sixers Meltdown, Zion Wants Out & More',
    authorName: 'Chad Billingslea',
    authorAvatarSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg'
  },
  {
    id: '3',
    thumbnailSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg',
    title: 'For Some Reason People Are Concerned About a Play Going On In China Where Actors Are Chased By Wolves In a Crowded Theatre',
    authorName: 'Damian Lillard',
    authorAvatarSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg'
  },
  {
    id: '4',
    thumbnailSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg',
    title: 'The Amount Of Slander Orange Freeze Pops Get Is Uncalled For An Utter Bullshit (Bonus: Freeze Pop Power Rankings)',
    authorName: 'Tyler Corbett',
    authorAvatarSrc: 'https://chumley.barstoolsports.com/union/defaults/thumbnail.jpg'
  },
];

const Feed: React.FC = () => {
  const { stories, loading, error } = useFeed();

  if (error) console.error(error);

  console.log(stories)

  return (
    <div>
      <LoadMoreButton 
        isLoading={loading}
      />
      <ol>
        {stories?.map((story => {
          return (
            <Story {...story}/> 
          );
        }))}
      </ol>
    </div>
  );
};

export default Feed;
