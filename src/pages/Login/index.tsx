import React,{useCallback,useState} from 'react';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import {Button, Img, Form, Input, Label, LinkContainer} from './styles';
import { Link } from 'react-router-dom';
const Login =()=>{
	const [logInError, setLogInError] = useState(false);
	const[id,onchangeId] = useInput('');
	const[password,onchangePassword] = useInput('');
	const onSubmit = useCallback(
		(e:any) =>{
			e.preventDefault();
			setLogInError(false);
			axios
				.post(
					'/api/users/login',
					{id,password},
					{
						withCredentials: true,    //서로 다른 포트를 가진 url간 쿠키 공유
					},
				)
				.then((response)=>{
					console.log("성공..");
				})
				.catch((error)=>{
					setLogInError(error.response?.status === 401);
				})
		},[id,password],
	);


	return(
		<div id ='container'>
			<Img src="src/assets/logo.png" alt="logo" />
			<Form method='post' onSubmit={onSubmit}>
				<label htmlFor='email' id = 'id-label'>
					<Input className="form-control" id='email' name = 'email' value={id} onChange={onchangeId}/>
					{/* {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>} */}
				</label>
				<label htmlFor='password' id = 'password-label'>
					<Input className='form-control' type ='password' id='password' name = 'password' value={password} onChange={onchangePassword}/>
				</label>
				<Label id='islogin'>
					<Input type='checkbox' id='islogin'/>로그인 유지하기
				</Label>
				<Button id='login' type='submit'>로그인</Button>
				<LinkContainer>
					<Link to='/signup'>회원가입</Link><Link to= '/login'>아이디 /비밀번호 찾기</Link>
				</LinkContainer>

				<Button id ='speclogin'><Img id='kn' src ="src/assets/kakao.png"></Img></Button>
				<Button id ='speclogin'><Img id='kn' src ="src/assets/naver.png"></Img></Button>
			</Form>

		</div>
	)
}

export default Login;
