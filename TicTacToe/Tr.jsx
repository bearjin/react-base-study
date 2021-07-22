import React, { memo } from 'react';
import Td from './Td';

const Tr = memo(({ rowData, rowIndex, dispatch, cellData }) => {
  return (
    <tr>
      {Array(rowData.length).fill().map((td, i) => (<Td key={`td_${rowIndex}_${i}`} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} />))}
    </tr>
  );
});

export default Tr;