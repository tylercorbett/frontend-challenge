import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import formatStories from '../helpers/formatStories';
import { StoryProps } from '../components/Story';

const useFeed = () => {
  const [stories, setStories] = useState<StoryProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(2);

  const fetchOldStories = () => {
    console.log('fetch old stories fired')
    const urlWithPage = API_URL + `?page=${page}`;
    console.log('urlwithpage', urlWithPage);
    setLoading(true);
    fetch(urlWithPage).then((res) => {
      res.json().then((json) => {
        const formattedStories = formatStories(json);
        console.log('formattedStories after new fetch', formattedStories);
        setStories(formattedStories);
      });
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setPage(page + 1);
      setLoading(false);
    });
  };

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

  return {stories, loading, error, fetchOldStories}
};

export default useFeed;
