import React from "react";
import "./index.css";

const Pagination = ({reposPerPage, totalRepos, paginate }) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <div className="pagination">
        {pageNumbers.map(number => (
            <span key={number} className="page-number"
            oncClick={() => paginate(number)}>  
                {number}
            </span>
        ))}

    {console.log(pageNumbers)}
    
  </div>);
};

export default Pagination;