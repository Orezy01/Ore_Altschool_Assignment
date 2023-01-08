import React from 'react'
import "./EndResults.css";


 const Repos = ({repos, loading}) => {
 
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
    <div className='repos main-src'>
      {repos.map((repoList) => (
         <div className="co-md-6 d-flex justify-content-center" key={repoList.id}>
         <div className="card m-2 cbl text center">
           <div className="card-body">
            <img className='my_avatar' src={repoList.owner.avatar_url} alt="profile_image" />
             <span className="card-number">ID: {repoList.id}</span> 
             <h5 className="card-title mb-4">Repository Name: n{repoList.full_name}</h5>
             <p className="card-text">Description: {repoList.description}</p>
             <button className="button-85" >
               {" "}
               <a href={repoList.html_url} className="link-btn" target="_blank" rel="noreferrer">
               {repoList.name}
               </a>
             </button>
           </div>
         </div>
       </div>
          ))}



          
    </div>


  )
}
export default Repos