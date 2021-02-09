import React from 'react';

import isEmpty from 'lodash.isempty';

type GridPropertiesProps = {
  rows: number,
  isRectangular: boolean,
  columnsPerRow: number[],
  nonContigousAreas: Set<string>
}

function GridProperties({ rows, isRectangular, columnsPerRow, nonContigousAreas }: GridPropertiesProps) {
  return (
    <ul>
      <li>has {rows} rows</li>
      <li>is {!isRectangular && 'not'} rectangular</li>
      <li>has {isRectangular ? columnsPerRow[0] : columnsPerRow.join(', ')} columns per row</li>
      <li>
        {
          isEmpty(nonContigousAreas) ?
            'All areas are contiguous and rectangular' :
            <>
              The following areas are not contigous or rectangular:
              {Array.from(nonContigousAreas).map((name: string) => <code>{name}</code>)}
            </>
        }
      </li>
    </ul>
  )
}

export default GridProperties;
