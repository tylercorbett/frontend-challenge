import React from 'react';
import useFeed from '../../hooks/useFeed';
import LoadMoreButton from '../LoadMoreButton';
import Story, { StoryProps } from '../Story';

const Feed: React.FC = () => {
  const { stories, loading, error, fetchOldStories } = useFeed();

  if (error) console.error(error);

  return (
    <div>
      <ol>
        {stories.length <= 0 && <h3>No stories found</h3>}
        {stories?.map(((story: StoryProps) => {
          return (
            <Story {...story}/> 
          );
          }))}
      </ol>
      <LoadMoreButton 
        isLoading={loading}
        onClick={fetchOldStories}
      />
    </div>
  );
};

export default Feed;
