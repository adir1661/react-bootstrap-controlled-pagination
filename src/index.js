import React from 'react';
import PaginationBS from "react-bootstrap/Pagination";
import propTypes from 'prop-types';

function Pagination({ startButton, prev, endButton, next, onSelect, value, end, start },ref) {
  return <PaginationBS ref={ref}>
    {startButton && start +1< value &&  <PaginationBS.First onClick={() => onSelect(start)} />}
    {prev && start  < value &&<PaginationBS.Prev onClick={() => onSelect(value - 1)} />}
    {value > start + 5 && [
      <PaginationBS.Item onClick={() => onSelect(value - 5)} >{value - 5}</PaginationBS.Item>,
      <PaginationBS.Ellipsis />]
    }

    {value - 2 >= start && <PaginationBS.Item onClick={() => onSelect(value - 2)}>{value - 2}</PaginationBS.Item>}
    {value - 1 >= start && <PaginationBS.Item onClick={() => onSelect(value - 1)}>{value - 1}</PaginationBS.Item>}
    <PaginationBS.Item active>
      {value}
    </PaginationBS.Item>
    {value + 1 <= end && <PaginationBS.Item onClick={() => onSelect(value + 1)}>{value + 1}</PaginationBS.Item>}
    {value + 2 <= end && <PaginationBS.Item onClick={() => onSelect(value + 2)}>{value + 2}</PaginationBS.Item>}

    {value < end - 5 && [
      <PaginationBS.Ellipsis />,
      <PaginationBS.Item onClick={() => onSelect(value + 5)} >{value + 5}</PaginationBS.Item>]
    }
    {next && end > value &&<PaginationBS.Next onClick={() => onSelect(value + 1)} />}
    {endButton && end-1 > value &&<PaginationBS.Last onClick={() => onSelect(end)} />}
  </PaginationBS>
}
Pagination = React.forwardRef(Pagination)
Pagination.propTypes = {
  onSelect: propTypes.func.isRequired,
  value: propTypes.number.isRequired,
  start: propTypes.number,
  end: propTypes.number,
  startButton: propTypes.bool,
  prev: propTypes.bool,
  endButton: propTypes.bool,
  next: propTypes.bool,
};
Pagination.defaultProps = {
  start: 0,
  end: 0,
  startButton: true,
  prev: true,
  endButton: true,
  next: true,
}
export { Pagination };