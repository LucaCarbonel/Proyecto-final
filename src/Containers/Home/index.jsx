import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TopBar from './../../Components/TopBar';
import User from './../../Components/User';

import './index.scss';

const Home = () => {
    return (
    <> 
      <TopBar/>
      <div className="home"> 
        <User />
      </div>
    </>
  )
}

export default Home;