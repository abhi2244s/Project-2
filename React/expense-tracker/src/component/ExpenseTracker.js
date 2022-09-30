import React from "react";
import "./ExpenseTracker.css";

function Expense(props) {
    const month = props.date.toLocaleString("eng-us",{month:'long'})
    const day = props.date.toLocaleString("eng-us",{month:'2-digit'})
    const year = props.date.getFullYear()
  return (
    
    <>
     
      <div className="box1">
        <div className="expense-date">
         <div>{year}</div>
         <div>{month}</div>
         <div>{day}</div>
        </div>
        <div className="expense-item">
          <h2>{props.title}</h2>

          <h2 className="dollar_price">{props.price}</h2>
        </div>
      </div>
    </>
  );
}

export default Expense;
