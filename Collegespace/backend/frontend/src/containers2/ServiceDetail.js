import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useParams} from 'react-router-dom' 


const ServiceDetail = () => {
    const [service, setBlog] = useState({});

    const {id} = useParams()
    

    useEffect(() => { 

        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/service/`);
                res.data.map(x=>{
                    if(x.id==id){
                        setBlog(x)
                    }
                    else{
                    }
                })
            }
            catch (err) {

            }
        };

        fetchData();
     }, []
    );

 

    const serviceinfo = () => {
        return {__html: service.content}
    };

    return (
        <div className='container mt-3'>
            <h1 className='display-2'>{service.title}</h1>
            <h4>{service.month} {service.day}</h4>
            <div className='mt-5 mb-5' dangerouslySetInnerHTML={serviceinfo()} />
            <hr />
            <p className='lead mb-5'><Link to='/service' className='font-weight-bold'>Back to Services</Link></p>
        </div>
    );
};

export default ServiceDetail;
