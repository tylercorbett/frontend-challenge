const formatStories = (stories: any[]) => {
  const result = stories.map((story: any) => {
    const { id, author: { name, avatar }, title, thumbnail: { desktop } } = story;
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
