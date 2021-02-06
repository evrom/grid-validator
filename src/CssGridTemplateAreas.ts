class CssGridTemplateAreas {
  gridTemplate: string[][];

  constructor(gridTemplateString: string) {
    const rows = Array.from(gridTemplateString.matchAll(/["']([^"']*)["']/g)).map(match => match[1])
    this.gridTemplate = rows.map(row => row.split(" "));
  }

  rows(): number {
    return this.gridTemplate.length
  }

  columns(): number[] {
    let columnsPerRow: number[] = [];
    this.gridTemplate.forEach((row, i) => columnsPerRow[i] = row.length)
    return columnsPerRow
  }
}

export default CssGridTemplateAreas;