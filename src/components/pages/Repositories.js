import React,{useState,useEffect} from "react";
import ReactPaginate from "react-paginate";
import Repos from "../Repos";
import {Helmet} from 'react-helmet-async';

const Repositories = () => {

  
  

  const [repos, setRepos] = useState([]);
  const [repoPerPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      const res = await fetch("https://api.github.com/users/Orezy01/repos");
      const data = await res.json();
      setRepos(data);
      setLoading(false);
    };
    fetchRepos();
  }, []);


  function handlePageClick({ selected: selectedPage }) {
    // console.log('selectedPage', selectedPage);
    setCurrentPage(selectedPage+1);
  }


  const indexOfLastRepo = currentPage * repoPerPage;
  const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);





  // Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <Helmet>
      <title>Repositories</title>
      <meta name="description" content="Repositories"/>
      <link rel="canonical" href="/Repositories" />
      </Helmet>

      <h1>Repositories</h1>
      <div>
        <h1 className="main-title">Repositories</h1>
        <Repos repos={currentRepos} loading={loading} />

        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={5}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
          reposPerPage={repoPerPage}
          totalRepos={repos.length}
          paginate={paginate}
          onPageChange={handlePageClick}
        />
      </div>
    </div>
  );
};

export default Repositories;
