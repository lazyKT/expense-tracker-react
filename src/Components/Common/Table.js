/**
 * Reusable Component: Table
 * Props
 * columns : Array of Table Columns Names
 * data : Array of data objects
 **/

import React, { useState, useEffect } from "react";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';


const styles = {
  table: {
    border: "gainsboro solid 0.7px"
  },
  th: {
    width: "150px",
    margin: 0,
    padding: "5px",
    background: "dodgerblue",
    color: "white",
    cursor: "pointer"
  },
  td: {
    padding: "10px",
  },
  icon: {
    marginTop: "5px"
  }
}


function Table ({columns, data}) {

  const [ rows, setRows ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ sortConfig, setSortConfig ] = useState({
    field: "",
    order: "asc"
  });


  const doSorting = ({field, order}) => {
    return function innerSort(a,b) {
      const objA = typeof a[field] === "string" ? a[field].toLowerCase() : a[field];
      const objB = typeof b[field] === "string" ? b[field].toLowerCase() : b[field];

      let comparison = 0;

      if (objA > objB)
        comparison = 1;
      else if ( objA < objB )
        comparison = -1;
      else
        comparison = 0;

      return order === "asc" ? comparison : comparison*-1;
    }
  }


  const handleSort = (field) => {
    if (sortConfig.field === field) {
      // change the sorting order
      setSortConfig({
        ...sortConfig,
        order: sortConfig.order === "asc" ? "desc" : "asc"
      });
    }
    else {
      // change the sorting field and order
      setSortConfig({
        field, order: "asc"
      });
    }
  }


  useEffect(() => {
    if (columns?.length > 0 && data) {
      setRows(data);
      setSortConfig({
        field: columns[0],
        order: "asc"
      });
    }
  }, [columns, data]);


  useEffect(() => {
    if (rows?.length > 0) {
      /**
       * !!!!!
       * Arrays are the reference types in Js
       * Array.prototype.sort() which I used here, mutated the original array, instead of returning new copy
       * The returned array from sort() might looked changed in order, but in the lower level (memory),
       * it is the still pointing to the same reference.
       * And ## First Rule of React: Do Not Mutate the state Directly. Instead assign a new state object ##
       * When we directly mutate the state, the state will not be able detect the changes
       * Since the state doesn't really change,
       * Hence, the side effects will not take place, resulting no rendering
       * Notice that I used Spread Operator (...) of ES6 which returns the copied array (different reference),
       * so that React will able to detect the referencial difference and will render the changes.
       * I couldn't explain full details in here. Please refer to this SO Answer: https://stackoverflow.com/a/40309023
       * Good Explanation about useEffect: https://overreacted.io/a-complete-guide-to-useeffect/
       **/
      const sortedRows = [...rows].sort(doSorting(sortConfig));
      setRows(sortedRows);
    }
  }, [sortConfig]);

  useEffect(() => {
    if(rows) setLoading(false);
  }, [rows]);


  return (
    <div>
      { loading ? "loading ..." : (
        <table style={styles.table}>
          <thead>
            <tr>
              {
                columns?.map((col, idx) =>
                  <th onClick={() => handleSort(col)}
                    style={styles.th} key={idx}>
                    {col.toUpperCase()}
                    { sortConfig.field === col ? (
                        sortConfig.order === "asc"
                        ? <ArrowDropDownIcon/>
                        : <ArrowDropUpIcon/>
                    ) : null}
                  </th>
                )
              }
            </tr>
          </thead>
          <tbody>
            {
              rows?.map( (r, idx) =>
                <tr key={idx}>
                  {
                    columns?.map( (col, idx) => col === "date"
                      ? <td style={styles.td} key={idx}>{r[col].toLocaleDateString()}</td>
                      : <td style={styles.td} key={idx}>{r[col]}</td>
                    )
                  }
                </tr>
              )
            }
          </tbody>
        </table>
      )}
    </div>
  )
}


export default Table;
