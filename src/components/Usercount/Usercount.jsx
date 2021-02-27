import React from 'react';

const Usercount = (props) => {
    const countInfo = props.friends;
    const totalAmount = countInfo.reduce((total, income) => total + income.salary, 0);

    return (
        <div>
           <div className="">
               <h2 className="text-white my-4 text-center">Views of friend details</h2>
               <div className="card p-3">
                   <h6>Total Friend Add : {countInfo.length}</h6>
                   <h6>Total Salary :${totalAmount.toFixed(2)}</h6>

               </div>
           </div> 
        </div>
    );
};

export default Usercount;