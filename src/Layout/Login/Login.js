  import {useState,useContext} from 'react'
  import { useNavigate } from 'react-router-dom'
  import './Login.css'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faGoogle,faFacebook} from '@fortawesome/free-brands-svg-icons'
  import axios from 'axios'
  import { UserContext } from '../../asset/User'

  function Login() {

      const [name,setName] = useState("");
      const [pass,setPass] = useState("");
      const [rePass,setRePass] = useState("");
      const [email,setEmail] = useState("");
      const [lr,setLr] = useState(null);
      const navigate = useNavigate();
      const { setUser } = useContext(UserContext); 
      
      const postRegister = async()=>
      {
        let data = {  name,pass,rePass,email }
        console.log(data)
        const res = await axios.post('http://localhost:3300/v1/register', data, {
        withCredentials: true
  });
        console.log(res.data)
        if(res.status === 200)
        {
          setLr('login');
        }
      }

      const postLogin = async () => {
        let data = { username: email, password: pass };
        console.log(data);
        try {
            const res = await axios.post('http://localhost:3300/v1/login', data, {
            withCredentials: true
  });

            console.log("login req sent successfully")
            console.log(res.data);
            setUser(res.data);
            navigate('/');
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };
    

    if(lr==='register')
    {
      
    return ( 
      <>
      {/* <Navbar  /> */}
      <div className='container_Login'>
          <div className='card_login'>    
              <input id="inp1" className='inp'  placeholder={`Name :`} onChange={(e)=>setName(e.target.value)} /><br/>
              <input id="inp2" className='inp' placeholder={`Email :`}  onChange={(e)=>setEmail(e.target.value)} /><br/>
              <input id="inp3" className='inp' placeholder={`Password :`} onChange={(e)=>setPass(e.target.value)}/><br/>
              <input id="inp4" className='inp' placeholder={`Re-Password :`}  onChange={(e)=>setRePass(e.target.value)}/><br/>
              <button className='btn_login' onClick={postRegister} type='Submit'>Register</button>
              <h3 style={{cursor:'pointer'}} onClick={()=>setLr('login')}>Go to login</h3>
              <div className='login_icons'>
                <FontAwesomeIcon icon={faGoogle} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon icon={faFacebook} />
              </div>
        </div>  
      </div>
      </>
      )
    }

    if(lr ==='login')
    {
      return (
        <>
            {/* <Navbar /> */}
            <div className='container_Login'>
                <div className='card_login'>
                <input id="inp2" className='inp' placeholder={`Email :`}  onChange={(e)=>setEmail(e.target.value)} /><br/>
                <input id="inp3" className='inp' placeholder={`Password :`}  onChange={(e)=>setPass(e.target.value)}/><br/>
                    <button className='btn_login' onClick={postLogin} type='Submit'>Login</button>
                    <h3  style={{cursor:'pointer'}} onClick={()=>setLr('register')}>Go to register</h3>
                    <div className='login_icons'>
                        <FontAwesomeIcon icon={faGoogle} />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                </div>
            </div>
        </>
    );
    }

    return(
    <>
    {/* <Navbar /> */}
    <div className='container_Login'>
      <div className='lr'>
        <button className='btn_login' value={"register"} type='button' onClick={()=>setLr('register')} >Register</button>
        <button className='btn_login' value={"login"} type='button' onClick={()=>setLr('login')} >Login</button>
      </div>
    </div>
  </>
    )
  }


  export default Login