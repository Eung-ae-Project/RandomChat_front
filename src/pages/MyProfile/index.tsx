import { FC } from "react";
import { useState } from "react";
import useInput from '@/hooks/useInput';
import { Img, Body, Side, Section,NavBar} from "./styles"
import { UserInfo, UserName, UserStats, UserDescription, UserImage, HeartRate, HeartIcon } from './styles';
import Header from "@layouts/Header";
import { useLocation,} from "react-router-dom";
import { RenderErrorBoundary } from "react-router/dist/lib/hooks";
const Bar2 =({location}:any)=>{
    const selectedPath = location.pathname;
    
    const links = [
      { path: '/myProfile', text: '내 프로필' },
	  { path: '/myAddress', text: '주소록'},
	  { path: '/option', text: '설정'}
    ];

    const activeStyle = {
      color: 'white',
      background: '#A4D3FF',
    }
    const deActiveStyle = {
      color: 'rgba(135, 135, 135, 100)',
    }

    const renderLinks = (selectedPath: string) =>
        links.map(({ path, text }) => (
            <NavBar key={path} to={path} style={({isActive}) => {
              return isActive ? activeStyle : deActiveStyle;
            }}>
              {text}
            </NavBar>

        ));
	return <>{renderLinks(selectedPath)}</>;
}
const MyProfile:FC =()=>{
	const [heart_rate, setHeart_rate] = useState(90);
  const [friendnum, setFriend_num] = useState(1080);
  const [mbti, setMbiti] = useState('ISFP');
  const [userDescript, setUserDescript] = useState('공부하기 진짜 싫다');
  const [userName, setuserName] = useState('sung');
  return (
		<>
			<Body>
			<Header/>
				<Section className="container">	
					<Side className="my-menu">
						<Bar2 location = {useLocation()}></Bar2>
					</Side>
					<UserInfo>
                        <UserImage src="src/assets/user_image.png" alt="User Name" />
                        <UserName>{userName}</UserName>
                        <HeartRate>
                            <HeartIcon src="src/assets/heart.png" alt="Heart Rate" />
                            <span>{heart_rate} bpm</span>
                        </HeartRate>
                        <UserStats>
                            <div>친구수: {friendnum}</div>
                            <div>MBTI: {mbti}</div>
                        </UserStats>
                        <UserDescription>
                            {userDescript}
                        </UserDescription>
                    </UserInfo>
					<Img src="src/assets/logo.png" alt="logo" />
				</Section>
			</Body>
		</>
	);
}

export default MyProfile;
