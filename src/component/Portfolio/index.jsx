import React from 'react';

import './Portfolio.scss';

const portfolioImage = [
  {
    id: '1',
    img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },
  {
    id: '2',
    img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },
  {
    id: '3',
    img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },
  {
    id: '4',
    img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },
  {
    id: '5',
    img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },
  {
    id: '6',
    img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },
  {
    id: '7',
    img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },
  {
    id: '8',
    img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },
  {
    id: '9',
    img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  }  
];
 

function Portfolio() {
  return (
    <ul className="portfolio">
      {portfolioImage.map(img => (
        <img src={img.img} alt="pic" key={img.id}></img>
      ))}
    </ul>
  );
}

export default Portfolio;
