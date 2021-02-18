import React from 'react';

import isEmpty from 'lodash.isempty';

type GridPropertiesProps = {
  rows: number,
  isRectangular: boolean,
  columnsPerRow: number[],
  nonContigousAreas: Set<string>
}

const GridProperties: React.FC<GridPropertiesProps> = ({ rows, isRectangular, columnsPerRow, nonContigousAreas: nonContiguousAreas }: GridPropertiesProps) => {
  return (
    <ul className="grid-properties">
      <li className={rows === 0 ? 'invalid' : ''}>has {rows} rows</li>
      <li className={!isRectangular ? 'invalid' : ''}>is {!isRectangular && 'not'} rectangular</li>
      <li className={!isRectangular ? 'invalid' : ''}>has {isRectangular ? columnsPerRow[0] : columnsPerRow.join(', ')} columns per row</li>
      <li className={!isEmpty(nonContiguousAreas) ? 'invalid' : ''}>
        {
          isEmpty(nonContiguousAreas) ?
            'All areas are contiguous and rectangular' :
            <>
              The following areas are not contiguous or rectangular:
              {Array.from(nonContiguousAreas).map((name: string) => <code key={name}>{name}</code>)}
            </>
        }
      </li>
    </ul>
  )
}

export default GridProperties;
