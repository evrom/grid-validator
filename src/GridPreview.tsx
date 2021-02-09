import React from 'react';
import CssGridTemplateAreas from './CssGridTemplateAreas';

function GridPreview({grid}: { grid: CssGridTemplateAreas }) {
  const gridStyleNamedRegions = {
    gridTemplateAreas: `${grid.toPropertyValue()}`
  }

  return (
    <div className="grid-preview-container">
      <div>
        <table>
          {grid.gridTemplate.map((row: string[], index: number) => (
            <tr key={index}>
              {row.map((name: string, index: number)  => (
                <td key={index}>{name}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
      <div className="grid-preview" style={gridStyleNamedRegions}>
        {Array.from(grid.namedAreas()).map((name: string, index: number) => {
          return <div key={name} style={{gridArea: `${name}`}}>{name}</div>
        })}
      </div>
    </div>
  );
}

export default GridPreview;