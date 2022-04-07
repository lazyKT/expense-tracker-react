/**
 * This component is responsible for filtering, customizing and plotting the chart visuals
 **/
import { useState, useEffect } from "react";
import Modal from "../Common/Modal";

import LineChart from "../Visuals/LineChart";
import CustomDateChooser from "../Common/CustomDateChooser";
import VisualOptions from "./VisualOptions";
import {
  getTotalExpensesByDayAndCategory,
  getTotalExpensesByDay
} from "../../Storage/LocalStorage";


const styles = {
  container: {
    padding: "0px 10px",
    marginBottom: "30px"
  },
  header: {
    fontFamily: "system-ui"
  },
  filter: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px 10px"
  },
  filterItem: {
    background: "#f9f9f9",
    borderRadius: "5px",
    border: "solid 0.5px gainsboro",
    padding: "10px",
    margin: "0px 10px",
    fontWeight: "600",
    cursor: "pointer"
  },
  filterLabel: {
    padding: "10px",
    margin: "0px 10px",
    fontWeight: "600",
  },
  visualLabel: {
    marginBottom: "30px",
    textAlign: "center",
    textDecoration: "underline"
  }
};

function Statistic() {

  const [ visualMode, setVisualMode ] = useState("multi");
  const [ expenses, setExpenses ] = useState(null);
  const [ startDate, setStartDate ] = useState(null);
  const [ endDate, setEndDate ] = useState(null);
  const [ dateRange, setDateRange ] = useState([]);
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ loading, setLoading ] = useState(true);


  /**
   * Initialize the default dates, and time range. The default will be the from last 7 days to current time
   **/
  const init = () => {
    const date1 = new Date();
    date1.setDate(date1.getDate() - 7);
    const date2 = new Date();
    setStartDate(date1);
    setEndDate(date2);
  };


  /** Get Total Expenses Data by Days, from Local Stroage **/
  const fetchTotalExpensesByDay = () => {
    try {
      setLoading(true);
      const res = getTotalExpensesByDay();
      if (res.error) {
        throw new Error (res.message);
      }
      else {
        setExpenses(res.data);
      }
    }
    catch (err) {
      console.error(err);
    }
  }


  /** Get Categorized Expenses Data by Days **/
  const fetchCategorizedExpensesByDday = () => {
    try {
      setLoading(true);
      const res = getTotalExpensesByDayAndCategory();
      if (res.error) {
        throw new Error (res.message);
      }
      else {
        setExpenses(res.data);
      }
    }
    catch (err) {
      console.error(err);
    }
  }


  // change JS Date Object to ISO Format Date String
  const toISODateString = (dt) => dt?.toISOString().split("T")[0];


  const handleOnClickCurrentMonth = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    setStartDate(new Date(currentYear, currentMonth, 1));
    setEndDate(new Date(currentYear, currentMonth + 1, 0));
  };


  /** Return the range of dates between start and end **/
  const getDates = (start, end) => {
    const dateArray = [];
    let currentDate = new Date(start);
    while (currentDate <= end) {
      dateArray.push(new Date(currentDate).toLocaleDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
  }


  const handleOnClickCurrentWeek = () => {
    init();
  };


  useEffect(() => {
    init(); // initialize date ranges (Default: from last 7days to current day)
  }, []);


  useEffect(() => {
    if (visualMode === "single")
      fetchTotalExpensesByDay();
    else
      fetchCategorizedExpensesByDday();
  }, [visualMode]);


  useEffect(() => {
    setLoading(false);
    if (startDate !== null && endDate !== null)
      setDateRange(getDates(startDate, endDate));
  }, [startDate, endDate, expenses]);


  return (
    <div style={styles.container}>

      {
        loading ? "Loading ..." : (
          <>
            <h3 style={styles.header}>Statistic</h3>

            <VisualOptions
              setModalOpen={() => setModalOpen(true)}
              handleOnClickCurrentMonth={handleOnClickCurrentMonth}
              handleOnClickCurrentWeek={handleOnClickCurrentWeek}
              onChangeVisualOption={val => setVisualMode(val)}
              visualMode={visualMode}
            />

            {modalOpen && (
              <Modal>
                <CustomDateChooser
                  start={toISODateString(startDate)}
                  end={toISODateString(endDate)}
                  setEndDate={val => setEndDate(val)}
                  setStartDate={val => setStartDate(val)}
                  closeModal={() => setModalOpen(false)}
                />
              </Modal>
            )}

            <div style={styles.filter}>
              <h5 style={styles.filterLabel}>Start Date : {toISODateString(startDate)}</h5>
              <h5 style={styles.filterLabel}>End Date : {toISODateString(endDate)}</h5>
            </div>

            {
              (dateRange?.length > 0) && expenses && expenses !== null &&
              <LineChart days={dateRange} expenses={expenses} mode={visualMode}/>
            }
          </>
        )
      }

      {
        visualMode === "single"
          ? <h5 style={styles.visualLabel}>Daily trends of total expenses</h5>
          : <h5 style={styles.visualLabel}>Daily trends of total Expenses, cateogrized by expenses type</h5>
      }

    </div>
  );
}

export default Statistic;
