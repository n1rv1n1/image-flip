/**
 * Takes an image and returns a flipped version
 * @param image n x n binary matrix image, ie, [[1,1,0],[1,0,1],[0,0,0]]
 * @returns inverted and horizontally flipped image
 */
export function imageFlip(image: number[][]): number[][] {
  return image.map(row => {
      const lastRowItemIndex = row.length - 1;
      return row.map((_rowItem, rowItemIndex) => row[lastRowItemIndex - rowItemIndex] === 0 ? 1 : 0);
  });
};
