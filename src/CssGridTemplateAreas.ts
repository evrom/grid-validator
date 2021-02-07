class CssGridTemplateAreas {
  gridTemplate: string[][];

  constructor(gridTemplateString: string) {
    const rows = Array.from(gridTemplateString.matchAll(/["']([^"']*)["']/g)).map(match => match[1])
    this.gridTemplate = rows.map(row => row.split(" "));
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

  isValid(): boolean {
    if (this.rows() < 1){
      return false;
    }
    if (this.columnsPerRow()[0] < 1){
      return false;
    }
    if (!this.isRectangular()){
      return false;
    }
    return true;
  }
}

export default CssGridTemplateAreas;