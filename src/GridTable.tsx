import React from "react";

type Props = {
  gridTemplate: string[][];
};

const GridTable: React.FC<Props> = ({ gridTemplate }: Props) => {
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
  );
};

export default GridTable;
