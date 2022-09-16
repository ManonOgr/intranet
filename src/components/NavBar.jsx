import { useEffect, useState } from "react";


import logo from "../data/Donuts.png";

import Disconnect from "./Disconnect";
import { Link } from "react-router-dom";
import { Datas } from "../services/datacards";


function NavBar(){

let id = localStorage.getItem('id');
let [datasPeople, setDatasPeople] = useState();
let token = localStorage.getItem('token')


useEffect(() =>{
    let Url=`http://localhost:7000/api/collaborateurs/${id}`
    Datas(Url, token).then(res =>{
        setDatasPeople(res.data)
    })
}, [])

    return(

        <nav>
            <Link to={'/Accueil'}>
            <div className="logo">
          <img
            src={logo}
            alt="logo"
          />

          </div>
            </Link>
          

          <div className='containermorenav'>


<Link to={'/List'}>
<div className='list'>
    <button className="btnnav"><img src="https://img.icons8.com/ios-filled/15/000000/list.png" alt="list" /> List</button>
 
</div>
</Link>

<Link to={'/Modification'}>
<div className="imgpersoco">
    <img src={datasPeople?.photo} alt="imgperso" />
</div>
</Link>

<Disconnect/>

          </div>

      </nav>
    );
}

export default NavBar

