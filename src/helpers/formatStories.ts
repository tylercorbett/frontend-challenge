const formatStories = (stories: any[]) => {
  const result = stories.map((story: any) => {
    console.log('story', story);
    const { id, author: { name, avatar }, title, thumbnail: { desktop } } = story;

    return {
      id,
      authorName: name,
      authorAvatarSrc: avatar,
      title,
      thumbnail: desktop
    }
  });
  
  return result;
};

export default formatStories;
