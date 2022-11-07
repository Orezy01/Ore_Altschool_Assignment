import React from "react";
import { Link } from "react-router-dom";

const EndResults = (props) => {
  const { repos } = props;
  console.log("In this  currently", repos.data);
  const repositoryLists =
    repos.length !== 0 ? (
      repos.data.slice(0,3).map((repoList) => (
        <li key={repoList.id}>
          <a href={repoList.html_url}>{repoList.name}</a>
        </li>
      ))
    ) : (
      <li>No Repository Found</li>
    );
  return <ul>{repositoryLists}</ul>;
};

export default EndResults;
