import React from 'react'
import Comment from './Comment'
import CommentsList from './CommentsList'


// const data=[{
//     name:"Kirti",
//     text:"This is the best video I have seen",
//     reply:""
// }]

const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className='p-2 m-5'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentsList comments={commentsData}/>
        {/* <Comment data={data[0]}/> */}
    </div>
  )
}

export default CommentsContainer