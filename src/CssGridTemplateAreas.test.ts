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

test('count columns', () => {
  expect(new CssGridTemplateAreas(gridTemplateString).columns()).toStrictEqual([3, 3, 3]);
});