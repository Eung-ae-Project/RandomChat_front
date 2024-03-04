import {Input, Button, Form,Label, Img, Span} from './styles';
import { useCallback, useState } from 'react';
import useInput from '@/hooks/useInput';
import axios from "axios";


const Signup = () =>{
  const [name, setName] = useInput('');
  const [id, setId] = useInput('');
  const [passwd, setPasswd] = useInput('');
  const [passwdcheck, setPasswdcheck] = useInput('');
  const [nickname, setNickname] = useInput('');
  const [mbti, setMbti] = useInput('');
  const[mismatchError,setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const onChangePassword = useCallback((e:any)=>{
    setPasswd(e.target.value);
    setMismatchError(e.target.value !== passwdcheck);

  },[passwdcheck]);

  const onChangePasswordCheck = useCallback((e:any)=>{
    setPasswdcheck(e.target.value);
    setMismatchError(e.target.value !== passwd);
  },[passwd]);

  const onSubmit = useCallback((e:any) => {
    e.preventDefault();
    if(!mismatchError){
      console.log('회원가입')
      setSignUpError('');
      setSignUpSuccess(false);
      axios.post('url',{
        name,id,passwd,nickname,mbti
      })
        .then((response)=>{
          console.log(response);
          setSignUpSuccess(true);
        })
        .catch((error)=>{
          console.log(error.response);
          setSignUpError(error.response.data);
        })
        .finally(()=>{});
    }
  },[name,id,passwd,nickname,mbti,passwdcheck,mismatchError]);

  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href='App.css' />
      </head>
      <Img src="src/assets/logo.png" alt="logo" />
      <Form onSubmit={onSubmit}>
        <div className="form-group">
          <Label htmlFor="name">
            <Span>이름</Span>
            <Input type='name' id='name' name='name' value ={name} onChange={setName}/>
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="id">
            <Span>아이디</Span>
            <Input type='id' id='id' name='id' onChange={setId}/>
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="passwd">
            <Span>비밀번호</Span>
            <Input type='passwd' id='passwd' name='passwd' onChange={setPasswd}/>
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="passwdcheck">
            <Span>비밀번호 확인</Span>
            <Input type='passwdcheck' id='passwdcheck' name='passwdcheck' onChange={setPasswdcheck}/>
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="nickname">
            <Span>닉네임</Span>
            <Input type='nickname' id='nickname' name='nickname' onChange={setNickname}/>
          </Label>
        </div>
        <div className="form-group">
          <Label htmlFor="mbti">
            <Span>MBTI</Span>
            <Input type='mbti' id='mbti' name='mbti' onChange={setMbti}/>
          </Label>
        </div>
        <Button type="submit">회원가입</Button>
      </Form>
    </div>
  );
}

export default Signup;
