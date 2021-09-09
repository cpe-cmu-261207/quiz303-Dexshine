import React, { useState } from 'react';
import logo from './logo.svg';
import { comments, CommentType } from '../data/comments';

const Comments = () => {
    
    
    const [show,setShow] = useState(false)
    const checkLike = (x:CommentType) => {
        if(x.likeNum > 0) setShow(true)
    }
    return (
        <div>
            {comments.map
                (x => 
                <div className="flex p-2 items-start space-x-2">
                    <img className="w-10 w-10 rounded-full" src={x.userImagePath}></img>
                    <div className="bg-gray-200 rounded-lg p-2">
                        <p className="font-semibold">{x.username}</p>
                        <p>{x.commentText}</p>
                        {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                        {() => checkLike(x)}
                            {show?
                                <div className='flex items-center'>
                                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                                <p className='text-gray-500'>{x.likeNum}</p>
                                </div>
                            :null}
                            
                    </div>
                </div>)
            }
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
