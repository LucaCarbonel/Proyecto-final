import React, { useEffect } from 'react';
import axios from 'axios';

import TopBar from './../../Components/TopBar';

const Home = () => {

    useEffect(() => {
      axios.get('https://random-data-api.com/api/users/random_user').then(({data}) => {console.log(data)});
    }, [])

    return (
    <> 
      <TopBar/>
      <div> 
        Soy el home padre
      </div>
    </>
  )
}

export default Home;