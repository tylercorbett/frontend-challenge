import { filterForNewStories } from "./filterForNewStories";

describe('filterForNewStories', () => {
  const arr1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
  const arr2 = [{ id: 2, name: 'Bob' }, { id: 4, name: 'David' }];

  it('should return objects found only in the first array', () => {
    const result = filterForNewStories(arr1, arr2);
    expect(result).toEqual([{ id: 1, name: 'Alice' }, { id: 3, name: 'Charlie' }]);
  });

  it('should return an empty array if only duplicates are found', () => {
    const result = filterForNewStories(arr2, arr2);
    expect(result).toEqual([]);
  });
});
