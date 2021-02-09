import isEqual from 'lodash.isequal';
import compact from 'lodash.compact';

class CssGridTemplateAreas {
  gridTemplate: string[][];

  constructor(gridTemplateString: string) {
    const rows = Array.from(gridTemplateString.matchAll(/["']([^"']*)["']/g)).map(match => match[1])
    this.gridTemplate = rows.map(row => compact(row.trim().split(" ")));
  }

  rows(): number {
    return this.gridTemplate.length
  }

  columnsPerRow(): number[] {
    return this.gridTemplate.map((row, i) => row.length)
  }

  isRectangular(): boolean {
    return this.columnsPerRow().every( (val: number, i, arr: number[]) => val === arr[0] )
  }

  columns(): number {
    if (!this.isRectangular()){
      throw new Error('rows have different number of columns');
    }
    return this.columnsPerRow()[0]
  }

  namedAreas(): Set<string> {
    const names: Set<string> = new Set(this.gridTemplate.flat());
    names.delete('.');
    return names;
  }

  toPropertyValue(): string {
    return this.gridTemplate.map(row => `"${row.join(' ')}"`).join(' ');
  }

  /** find if a named area is contigous and rectangular */
  isContigous(name: string){
    const indicesByRow: number[][] = this.gridTemplate.map(row => {
      const indices: number[] = [];
      let idx: number = row.indexOf(name);
      while (idx !== -1) {
        indices.push(idx);
        idx = row.indexOf(name, idx + 1);
      }
      return indices;
    })
    for (let i: number = 0; i < indicesByRow.length - 1; i++) {
      if (indicesByRow[i].length === 0 || indicesByRow[i + 1].length === 0){
        continue;
      }
      if (!isEqual(indicesByRow[i], indicesByRow[i + 1])){
        return false;
      }
    } 
    return true;
  }

  findNotContigous(): Set<string> {
    return new Set(Array.from(this.namedAreas()).filter(name => !this.isContigous(name)))
  }
}

export default CssGridTemplateAreas;