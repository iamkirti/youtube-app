import React from 'react';
import Comment from './Comment';



const CommentsList = ({comments}) => {
  return comments.map((comment,index)=>(
    <div key={index}>
        <Comment  data={comment}/>
        <div className='pl-8 border border-l-black ml-5'>
          <CommentsList comments={comment.replies}/>
          {/* <Comment key={index} data={comment}/>
          <Comment key={index} data={comment}/>
          <Comment key={index} data={comment}/> */}
        </div>
    </div>
    )
  )
  
}

export default CommentsList