import React from 'react';
import useFeed from '../../hooks/useFeed';
import LoadMoreButton from '../LoadMoreButton';
import Story, { StoryProps } from '../Story';

const Feed: React.FC = () => {
  const { stories, loading, error } = useFeed();

  if (error) console.error(error);

  return (
    <div>
      <LoadMoreButton 
        isLoading={loading}
      />
      <ol>
        {stories?.map(((story: StoryProps) => {
          return (
            <Story {...story}/> 
          );
        }))}
      </ol>
    </div>
  );
};

export default Feed;
