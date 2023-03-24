import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import formatStories from '../helpers/formatStories';
import { StoryProps } from '../components/Story';

const useFeed = () => {
  const [stories, setStories] = useState<StoryProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState<number>(2);

  const fetchStories = (url: string) => {
    setLoading(true);
    fetch(url).then((res) => {
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
  };

  const fetchOldStories = () => {
    fetchStories(API_URL + `?page=${page}`);
    setPage(page + 1);
  };

  useEffect(() => {
    fetchStories(API_URL);
  }, [])

  return {stories, loading, error, fetchOldStories}
};

export default useFeed;
