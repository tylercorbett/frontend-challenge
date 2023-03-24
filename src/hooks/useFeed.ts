import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import formatStories from '../helpers/formatStories';
import { StoryProps } from '../components/Story';

const useFeed = () => {
  const [stories, setStories] = useState<StoryProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL).then((res) => {
      res.json().then((json) => {
        const formattedStories = formatStories(json);
        setStories(formattedStories);
      });
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [])

  return {stories, loading, error}
};

export default useFeed;
