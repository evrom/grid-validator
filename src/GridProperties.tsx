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
    <ul className="grid-properties">
      <li className={rows === 0 ? 'invalid' : ''}>has {rows} rows</li>
      <li className={!isRectangular ? 'invalid' : ''}>is {!isRectangular && 'not'} rectangular</li>
      <li className={!isRectangular ? 'invalid' : ''}>has {isRectangular ? columnsPerRow[0] : columnsPerRow.join(', ')} columns per row</li>
      <li className={!isEmpty(nonContigousAreas) ? 'invalid' : ''}>
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
