
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Userinfo.css';




const Userinfo = (props) => {
   const {image, name, email, phone, salary} = props.ui;

    return (
        <div>
           <div className="user__main card my-4 bg-dark text-white">
          <div className="user__box card-body ">
               <img className="mb-3" src={image} alt=""/>
               <p><b>Name :-</b> {name}</p>
               <p><b>Email :-</b> {email} </p>
               <p><b>Phone :-</b> {phone} </p>
               <p><b>Salary :-</b> ${salary} </p>
             <button onClick={() => props.addFriends(props.ui)} className="btn btn-primary px-4"><FontAwesomeIcon icon={faUserPlus} /> Add me </button>
         </div> 
           </div> 
        </div>
    );
};

export default Userinfo;