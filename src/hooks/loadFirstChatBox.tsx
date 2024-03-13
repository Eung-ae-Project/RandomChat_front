import { useEffect, useState } from "react";
import axios from "axios";


const loadFirstChatBox = () => {

	useEffect(() => {
		axios
			.get(
				`http://localhost:8080/api/group/all`,
				{ withCredentials: true, }
			)
			.then((response) => {
				console.log(response.data.chats);
				//백에서 조회한 채팅방을 객체 형태로 넘겨준다
				//setChatList(response.data);
				console.log("성공..");
				return response.data.chats;
			})
			.catch((error) => {
				console.dir(error);
			})
	}, []);

}

export default loadFirstChatBox;
