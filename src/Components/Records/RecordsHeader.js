import React, { useState, useEffect } from "react";

import Card from "../Common/Card";
import Row from "../Common/Row";
import { getTotalExpensesByCategory } from "../../Storage/LocalStorage";


function RecordsHeader () {

  const [ expenses, setExpenses ] = useState(null);


  const getCategorisedExpenses = () => {
    try {
      const res = getTotalExpensesByCategory();

      if (res.error) {
        throw new Error(res.message);
      }
      else {
        setExpenses(res.data);
      }
    }
    catch (err) {
      console.error(err);
    }
  }


  useEffect(() => {
    // execute only on the first render
    getCategorisedExpenses()
  }, []);


  return (
    <Row>
      {
        expenses && expenses !== null && Object.keys(expenses).map( (e, idx) =>
          <Card title={e} key={idx}>
            <strong>{expenses[e]}</strong> SGD
          </Card>
        )
      }
    </Row>
  )
}


export default RecordsHeader;
