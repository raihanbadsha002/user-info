// import React from 'react';
import React, { useEffect, useState } from 'react';
import Usercount from '../Usercount/Usercount';
import Userinfo from '../Userinfo/Userinfo';
import users from '../../data/data.json';


const User = () => {

    const [info, setInfo] = useState([]);
    const [friends, setFriends] = useState([])

    useEffect(() => {
       setInfo(users);
    }, []);

  const addFriends = (friend) => {
      const newAdd = [...friends, friend];
      setFriends(newAdd);
  }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 order-lg-1 order-2">
                     <h2 className="text-white-50 mt-4">Find Your Friends</h2>
                       {
                            info.map(ui => <Userinfo 
                                     addFriends = {addFriends}
                                            ui={ui}
                                     />)
                        }
                    </div>
                    <div className="col-md-4 order-lg-2 order-1">
                        <Usercount friends={friends}/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;