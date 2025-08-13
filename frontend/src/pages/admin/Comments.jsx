import React,{useState,useEffect} from 'react'
import {comments_data} from './../../assets/assets';
const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

 const  fetchComments = async () => {
   setComments(comments_data);
  }
  useEffect(() => {
    fetchComments();
  }, [])
  
  return <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
    
  </div>;
}

export default Comments