const formatStories = (stories: any[]) => {
  const result = stories.map((story: any) => {
    console.log('story', story);
    const { id, author: { name, avatar }, title, thumbnail: { desktop } } = story;
    console.log('desktop', desktop);
    return {
      id,
      authorName: name,
      authorAvatarSrc: avatar,
      title,
      thumbnailSrc: desktop
    }
  });
  
  return result;
};

export default formatStories;
