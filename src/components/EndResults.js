import React from "react";

import "./EndResults.css";

const EndResults = (props) => {
  const { repos } = props;
  console.log("In this  currently", repos.data);
  const repositoryLists =
    repos.length !== 0 ? (
      repos.data.slice(0, 3).map((repoList) => (
        <div key={repoList.id} className="row main-src">
          <div className="co-md-6 d-flex justify-content-center">
            <div className="card m-2 cbl text center">
              <div className="card-body">
                <span className="card-number">ID: {repoList.id}</span> 
                <h5 className="card-title mb-4">Repository Name: n{repoList.full_name}</h5>
                <p className="card-text">Description: {repoList.description}</p>
                <button className="button-85">
                  {" "}
                  <a href={repoList.html_url} className="link-btn">
                  {repoList.name}
                  </a>
                </button>
              </div>
            </div>
          </div>
           {/* <a href={repoList.html_url}>{repoList.name}</a> */}
        </div>
      ))
    ) : (
      <li>No Repository Found Enter a Github UserName in the Search</li>
    );
  return (
    <>
      <div>{repositoryLists}</div>

      {/* <div className="row">
        <div className="co-md-6 d-flex justify-content-center">
          <div className="card m-2 cbl text center">
            {/* <img src="..." class="card-img-top" alt="..."/> */}
            {/* <div className="card-body">
              <span className="card-number">Id Number 1</span>
              <h5 className="card-title mb-4">Card title</h5> */}
              {/* <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
              {/* <button className="button-85" role="button">
                {" "}
                <a href="" className="link-btn">
                  Go somewhere
                </a>
              </button> */}
            {/* </div>
          </div>
        </div>
      </div> */} 
    </>
  );
};

export default EndResults;
