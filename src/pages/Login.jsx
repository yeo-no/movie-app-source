import React, { useEffect, useState } from 'react'

const User = {
  email : 'test@example.com',
  pw: 'test1234!!'
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handelEmail = (e) => {
    setEmail(e.target.value);
    const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    
    if(regex.test(email)){
      setEmailValid(true);
    }else{
      setEmailValid(false);
    }
  }

  const handlePassword = (e) => {
    setPw(e.target.value);
    const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    
    if(regex.test(pw)){
      setPwValid(true);
    } else{
      setPwValid(false);
    }
  }

  useEffect(() => {
    if(emailValid && pwValid){
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  },[emailValid, pwValid]);

  const onClickConfirmButton = () => {
    if(email === User.email && pw === User.pw){
      alert('로그인 성공');
      
    }else{
      alert('등록되어지지 않은 회원입니다.');
    }
    
  }

  return (
    <div className="login-page">
      <div className="login-titleWrap">
        이메일과 비밀번호를
        <br/>
        입력해주세요.
      </div>

      <div className="login-contentWrap">
        <div className="login-inputTitle">
          이메일주소
        </div>
        <div className="login-inputWrap">
          <input
            type='text'
            className="login-input"
            placeholder='test@gmail.com'
            value={email}
            onChange={handelEmail}/>
        </div>
        <div className="login-errorMessageWrap">
          {
            !emailValid && email.length >0 && (
              <div className="">올바른 이메일을 입력해주세요.</div>
            )
          }
        </div>
        <div className="login-inputTitle" style={{marginTop:"26px"}}>
          비밀번호
        </div>
        <div className="login-inputWrap">
          <input
            type='password' 
            className="login-input" 
            placeholder='영문, 숫자, 특수문자 포함 8자 이상'
            value={pw}
            onChange={handlePassword}/>
        </div>
        <div className="login-errorMessageWrap">
          {
            !pwValid && pw.length >0 && (
              <div className="">영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )
          }
        </div>
      </div>

      <div className="">
          <button 
            onClick={onClickConfirmButton}
            disabled={notAllow}
            className='login-bottomButton'>
            확인
          </button>
       </div>
    </div>
  )
}
