import React from 'react'

export const Post = () => {
  return (
    <div className="post">
    <div className="image">
    <img src="https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.jpg?s=1024x1024&w=is&k=20&c=mTABddPRSU1r_hCBpknMjJbCIrJAicjjXGSU42rx-YI="></img>
    </div>
     <div class="texts">
     <h2>Write form anywhere</h2>
     <p className="info">
      <a className="author">Dawid Pazsko</a>
      <time>29-02-2024 18:13</time>
     </p>
     <p className="summary">Remote jobs have changed the way people work it has completely changed the worl wide view and has made it easier for people to work from anywhere and anyhow</p>
     </div>
  </div>
  )
}

export default Post;