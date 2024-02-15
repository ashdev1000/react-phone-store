import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';


export default function Default() {
 const location = useLocation();

  return (
    <div className='container'>
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className='display-3'>404</h1>
          <h1>error</h1>
          <h2>Page Not Found..</h2>
          <h3>The requested url<span className='text-danger'>{location.pathname}</span>was not found</h3>
        </div>
      </div>
    </div>
  );
}
