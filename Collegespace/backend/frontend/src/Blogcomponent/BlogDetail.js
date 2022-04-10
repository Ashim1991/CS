import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = (props) => {
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const slug = props.match.params.id;

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
                setBlog(res.data);
            }
            catch (err) {

            }
        };

        fetchData();
    }, [props.match.params.id]);

    const createBlog = () => {
        return {__html: blog.content}
    };

   

    return (
        <div className='container mt-3'>
            <h1 className='display-2'>{blog.title}</h1>
           
            <h2 className='text-muted mt-3'>Category: {blog.category}</h2>
            <img  width=' 400'src={blog.thumbnail} alt =""/>
            <h4>{blog.month} {blog.day}</h4>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={createBlog()} />
            <hr />
            <p className='lead mb-5'><Link to='/bloglayout' className='font-weight-bold'>Back to Blogs</Link></p>
        </div>
    );
};

export default BlogDetail;
