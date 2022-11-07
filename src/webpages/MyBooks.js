import React, {useEffect}  from 'react'

export default function MyBooks() {
    useEffect(() => {
        document.title = "My Books";
    }, []);
  return (
    <div>
      <p>These are my books</p>
    </div>
  )
}
