import React from 'react';

type gridTemplateProps = {
  gridTemplate: string[][]
}

function GridTable({ gridTemplate }: gridTemplateProps) {
  return (
    <>
      <h2>View tabular rendering of grid</h2>
      <table className="grid-table">
        <tbody>
          {gridTemplate.map((row: string[], index: number) => (
            <tr key={index}>
              {row.map((name: string, index: number) => (
                <td key={index}>{name}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default GridTable;