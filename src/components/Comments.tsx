import React, { useState } from 'react';
import logo from './logo.svg';
import { comments, CommentType } from '../data/comments';

const Comments = () => {
    
    // const [comment2, setComments] = useState<CommentType[]>([])
    // const [replie, setReplie] = useState<CommentType[]>([])
    // for(let i=0; i< comments.length; i++){
    //     for(let j=0; j<comments[i].replies.length; j++){
    //         const newreplie = [...replie,comments[i].replies[j]]
    //         setReplie(newreplie)
    //     }
    // }
    // setComments(comments)
    // const checkLikes = () => {
    //     if(comment2[1].replies[1].likeNum)
    // }
    // const checkLike = () => {

    // }
    return (
        <div>
            {comments.map(x => 
                <div className="flex p-2 items-start space-x-2">
                <img className="w-10 w-10 rounded-full" src={x.userImagePath}></img>
                <div className="bg-gray-200 rounded-lg p-2">
                <p className="font-semibold">{x.username}</p>
                <p>{x.commentText}</p>
                {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                <div className='flex items-center'>
                    <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                    <p className='text-gray-500'>{x.likeNum}</p>
                </div>
                </div>
                </div>)}
            {/* {replie.map(x => 
                <div className="flex p-2 items-start space-x-2 pl-14">
                <img className="w-10 w-10 rounded-full" src={x.userImagePath}></img>
                <div className="bg-gray-200 rounded-lg p-2">
                    <p className="font-semibold">{x.username}</p>
                    <p>{x.commentText}</p>
                </div>
                </div>)
            } */}
        </div>
    )
}
export default Comments

{/* normal comment */}
{/* <div className="flex p-2 items-start space-x-2">
<img className="w-10 w-10 rounded-full" src="/profileImages/lisa.jpg"></img>
<div className="bg-gray-200 rounded-lg p-2">
  <p className="font-semibold">Lisa</p>
  <p>ตัวอย่าง Template จ้า</p>
  {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
//   <div className='flex items-center'>
//     <img className='w-4 h-4 mr-1' src='/like.svg'></img>
//     <p className='text-gray-500'>999 คน</p>
//   </div>
// </div>
// </div>