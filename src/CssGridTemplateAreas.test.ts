import CssGridTemplateAreas from './CssGridTemplateAreas';

const gridTemplateString = `           "a a ."
"a a ."
". b c";`

test('converts template string into string[][]', () => {
  expect(new CssGridTemplateAreas(gridTemplateString).gridTemplate).toStrictEqual([["a", "a", "."], ["a", "a", "."], [".", "b", "c"]]);
});

test('count rows', () => {
  expect(new CssGridTemplateAreas(gridTemplateString).rows()).toBe(3);
});

test('count columns per row', () => {
  expect(new CssGridTemplateAreas(gridTemplateString).columnsPerRow()).toStrictEqual([3, 3, 3]);
});

test('is rectangular', () => {
  expect(new CssGridTemplateAreas(gridTemplateString).isRectangular()).toBe(true);
});

test('count columns', () => {
  expect(new CssGridTemplateAreas(gridTemplateString).columns()).toBe(3);
});

test('names of areas', () => {
  expect(new CssGridTemplateAreas(gridTemplateString).namedAreas()).toEqual(new Set(['a', 'b', 'c']));
});

test('determine if named area is contigous', () => {
  expect(new CssGridTemplateAreas(gridTemplateString).isContigous('a')).toEqual(true);
});

test('determine that non contigous named area is not contigous', () => {
  expect(new CssGridTemplateAreas(`"a a ." "a a ." ". b a";`).isContigous('a')).toEqual(false);
});

test('find no non-contigous areas', () => {
  expect(new CssGridTemplateAreas(gridTemplateString).findNotContigous()).toEqual(new Set());
});

test('find non-contigous area', () => {
  expect(new CssGridTemplateAreas(`"a a ." "a a ." ". b a";`).findNotContigous()).toEqual(new Set(['a']));
});

test('creates valid property value', () => {
  expect(new CssGridTemplateAreas(gridTemplateString).toPropertyValue()).toBe(`"a a ." "a a ." ". b c"`);
});