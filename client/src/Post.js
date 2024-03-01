import React from 'react'

export const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img src="https://kindlepreneur.com/wp-content/uploads/2021/12/character-quirks.png" alt=""></img>
        </div>
        <div className="texts">
         <h2>Understanding quirks </h2>
         <p className="info">
          <a className="author">Qwenty Fish</a>
          <time>17 Jan 2024 13:14</time>
         </p>
         <p className="summary">Quirks are like food taste different for everyone</p>
         </div>
      </div>
  )
}

export default Post;