import React from "react";
import "./pagination.css";

const Pagination1 = ({ totalPost, postInPage, setCurrentPage, currentPage }) => {
  let items = [];
  for (let i = 1; i<= Math.ceil(totalPost / postInPage); i++) {
    items.push(i);
  }
  return (
    <>
      {items.map((item, index) => {
        return <button className= {item === currentPage ? 'active' : ''} key={index} onClick={()=> setCurrentPage(item)}>{item}</button>;
      })}
    </>
  );
};

export default Pagination1;
