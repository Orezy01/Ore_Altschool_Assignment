import React from 'react'

 const Repos = ({repos, loading}) => {

    if(loading){
        return <h2>Loading...</h2>
    }
  return (
    <div className='repos'>
      {repos.map((repo) => (
        <div className='repo' key={repo.id}>
          <div className='repo-header'>
           
            <h3>{repo.name}</h3>
            <h3>{repo.description}</h3>
            <a href={repo.html_url} target="_blank" rel="noreferrer"> {repo.html_url}</a>
          </div>
          <div className='repo-body'>
            <h3>{repo.title}</h3>
            <p>{repo.body}</p>
          </div>
        </div>
          ))}
    </div>
  )
}
export default Repos