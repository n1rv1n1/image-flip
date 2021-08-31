import { imageFlip } from './image-flip';

describe('imageFlip', () => {

  it('inverts and horizontally flips an image', () => {
    expect(imageFlip([[1,1,0],[1,0,1],[0,0,0]])).toEqual([[1,0,0],[0,1,0],[1,1,1]]);
    expect(imageFlip([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])).toEqual([[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]);
  });
});
