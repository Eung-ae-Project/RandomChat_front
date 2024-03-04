import React, { ChangeEvent, MouseEvent, useState } from "react";
import { Box, ChatBoxSect, ChatList, ChatOption, ChatSection, LeftBar, Li, RightBar } from "@pages/Group/styles";
import axios from "axios";
import { faCaretDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDown from "@components/DropDown/DropDown";
import CreateChat from "@components/CreateChat/CreateChat";

const ChatSect=()=>{

    const [chatList,setChatList] = useState([]);
    const [select,setSelect] = useState('all');
    const category = [
        {value:"all" , text:"전체채팅방"},
        {value:"normal" , text:"일반"},
        {value:"study" , text:"스터디"},
        {value:"exercise" , text:"운동"},
        {value:"game" , text:"게임"},
        {value:"food" , text:"음식"},
        {value:"location" , text:"지역"},
        {value:"etc" , text:"기타"},
    ]
    const tempChatRoom = [
        {index:1, title:"백엔드 개발자끼리 소통해요~", hashtag:["개발자","코딩","프로그래밍","치킨집사장","공부하기싫어요"], lastChat:12},
        {index:2,title:"프론트엔드 개발자끼리 소통해요~", hashtag:["개발자","코딩","프로그래밍","치킨집사장","공부하기싫어요"], lastChat:21},
        {index:3,title:"씹덕들 모여보자", hashtag:["오타쿠","씹덕","애니","진격거","러브라이브","아이돌마스터"], lastChat:32},
        {index:4,title:"취미 사진방", hashtag:["사진","카메라","필름","디카","보정"], lastChat:46},
        {index:5,title:"틀딱 모임", hashtag:["틀니","압수","경로당","20","19","18"], lastChat:70},
        {index:6,title:"동쿡대 코인방", hashtag:["비트코인","이더리움","자살추천","도지","자살명소","존버","살자","오킹"], lastChat:1883},
    ]
    const options = [
        {value:"recommend",label:"추천순"},
        {value:"recentChat",label:"최근 대화순"},
        {value:"numberOfPeople",label:"인원순"},
    ]
    const loadChat=(e:any)=>{
        // 벨류값 참고해서 벨류 값에 따라 db에 가져올 데이터가 달라짐
        // 채팅 목록을 state로 만들고 가져온 벨류에 따라서 스테이트 변경
        // 변경 과정은 벨류에 따라 백에 보내는 api가 달라지고 요청후 받는
        // 데이터를 state에 반영한다.
        const value =e.target.getAttribute('value');
        setSelect(value);
        console.log(value);
        axios
          .get(
            `/api/group/${value}`,
            {withCredentials:true,}
          )
          .then((response)=>{
              console.log(response.data);

              //백에서 조회한 채팅방을 객체 형태로 넘겨준다
              //setChatList(response.data);

              console.log("성공..");
          })
          .catch((error)=>{
                console.dir(error);
          })


    }


    const activeStyle={
        color: 'white',
        background: '#A4D3FF',
    }
    const deActiveStyle = {
        color: 'rgba(135, 135, 135, 100)',
    }
    const CategoryList = () => {
        return(
            <>{category.map(({value,text})=>(
                <Li key={value} onClick={loadChat} value={value} style={select==value ? activeStyle:deActiveStyle} >{text}</Li>
            )) }
        </>
        )
    }
    const detailChat=()=>{
        console.log("!!!!")
    }
    const ChatBox =()=>{
			return (
				<>
					{tempChatRoom.map(({ index, title, hashtag, lastChat }) => (
						<Box key={index} onClick={detailChat}>
							<div className="title">
								<h3>{title}</h3>
							</div>
							<div className="sub">
								<span>{
                    hashtag.map((value)=>{
                     return "#" + value + " "
                })
                }</span>
								<span>{lastChat}초 전</span>
							</div>
						</Box>
					))}
				</>
			);
		}

    return (
			<ChatSection>
				<ChatList className="ChatList">
					<LeftBar className="LeftBar">
						<ul className="CategoryList">
							<CategoryList />
						</ul>
					</LeftBar>
					<RightBar>
						<ChatOption>
							<div>
								<DropDown content="정렬기준"></DropDown>
							</div>
							<div className="generateChat">
								<CreateChat>
								</CreateChat>
							</div>
						</ChatOption>
						<ChatBoxSect>
							<ChatBox />
						</ChatBoxSect>
					</RightBar>
				</ChatList>
			</ChatSection>
		);
}


export default ChatSect
