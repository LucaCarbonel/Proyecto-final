/* eslint-disable */ 
import React, { useState, useEffect } from 'react'
import axios from 'axios';
export default function Contactos() {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://10.1.12.69:4001/api/contacts');
            console.log(response.data);
            setContacts(response.data);
        }
        fetchData();
}, []);
    return (
    <div>
        {contacts.map((data) => (
          <>
            <input type="text" value={data.nombre} />
            <input type="text" value={data.telefono} />
            <input type="text" value={data.email} />
          </>
        ))}
    </div>
    );
}
;

