export const filterForNewStories = (stories1: any[], stories2: any[]) => {
  const result = [];

  for (let i = 0; i < stories1.length; i++) {
    const story1 = stories1[i];
    let found = false;

    for (let j = 0; j < stories2.length; j++) {
      const story2 = stories2[j];

      if (story1.id === story2.id) {
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(story1);
    }
  }
  
  return result;
}