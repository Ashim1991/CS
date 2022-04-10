import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Service.css';
import { Link } from 'react-router-dom';


const Services = () => {
    const [blogs, setBlogs] = useState([]);
    

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/service/`);
                setBlogs(res.data);
            }
            catch (err) {

            }
        }

        fetchBlogs();
    }, []);


    const getBlogs = () => {
        
        let list = [];
        let result = [];
        
        blogs.map(Service => {
            return list.push(
               
                <div className='row'>
                 <div className="card">
                 <img src={Service.thumbnail} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title"><span>{Service.title}</span></h5>
               <p className="card-text">{Service.excerpt}</p>
               <Link to={`/services/${Service.id}`}>Continue</Link>
               </div>
              </div>
              </div>
              
            );
        });

        for (let i = 0; i < list.length; i += 3) {
            result.push(
                <div key={i} className='row md-4'>
                    <div className='col-md-4'>
                        {list[i]}
                    </div>
                    <div className='col-md-4'>
                        {list[i+1] ? list[i+1] : null}
                    </div>
                    <div  className='col-md-4'>
                      {list[i+2] ? list[i+2] : null}
                    </div>
                    
                </div>
            )
        }

        return result;
    };

    return (
        <div className='container mt-3'>
            <div className='topic'>
                Our Services 
            </div>
            {getBlogs()}
        </div>
    );
};

export default Services;
