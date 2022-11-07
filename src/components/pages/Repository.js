import React, {useState, useEffect} from "react";
import "../../App.css";
import SearchBar from "../SearchBar";
import ReactPaginate from 'react-paginate';


const Repository = () => {
  
  return (
    <div>
      <h2 className="repository">Repositories</h2>
      <SearchBar />

      <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={5}
          // onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          activeClassName={'active'}
        />
    </div>
  );
};

export default Repository;
