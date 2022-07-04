import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './index.scss';

const User = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [birth, setBirth] = useState();
  const [avatar, setAvatar] = useState();
  const [lastName, setlastName] = useState();

  useEffect(() => {
    axios.get('https://random-data-api.com/api/users/random_user').then(({data}) => {
      setlastName(data.last_name)
      setName(data.first_name)
      setEmail(data.email)
      setBirth(data.date_of_birth)
      setAvatar(data.avatar)
    });
  }, [])

  return (
    <div className="user">
      <div className="user__avatar">
        <img src={avatar} className="user__avatar-img" />
      </div>
      <div className="user__text">
        <div className="user__text-title">Name:</div>
        <div className="user__text-sub-title">{name}</div>
      </div>
      <div className="user__text">
        <div className="user__text-title">Last Name:</div>
        <div className="user__text-sub-title">{lastName}</div>
      </div>
      <div className="user__text">
        <div className="user__text-title">Email:</div>
        <div className="user__text-sub-title">{email}</div>
      </div>
      <div className="user__text">
        <div className="user__text-title">Date of Birth:</div>
        <div className="user__text-sub-title">{birth}</div>
      </div>
    </div>
  )
}

export default User;