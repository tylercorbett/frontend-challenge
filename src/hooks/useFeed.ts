import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import { formatStories } from '../helpers/formatStories';
import { StoryProps } from '../components/Story';
import { filterForNewStories } from '../helpers/filterForNewStories';

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
    setLoading(true);
    fetch(API_URL + `?page=${page}`).then((res) => {
      res.json().then((json) => {
        const formattedStories = formatStories(json);
        const newStories = [...stories, ...formattedStories];
        setStories(newStories);
      });
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });
    setPage(page + 1);
  };

  // Checks if the API has new stories to add and adds them to the top of the list
  const prependNewStories = () => {
    fetch(API_URL).then((res) => {
      res.json().then((json) => {
        const freshFormattedStories = formatStories(json);
        const newStories = filterForNewStories(stories, freshFormattedStories);

        if (newStories.length > 0) {
          const updatedStories = [...newStories, ...stories];
          setStories(updatedStories);
        }
      });
    })
    .catch((err) => {
      setError(err);
    })
  };

  useEffect(() => {
    fetchStories(API_URL);

    const interval = setInterval(() => {
      prependNewStories();
    }, 10000);
    return () => clearInterval(interval)
  }, [])

  return {stories, loading, error, fetchOldStories}
};

export default useFeed;
