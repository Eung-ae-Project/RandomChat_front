import Header from "@layouts/Header";
import SearchSect from "@pages/Group/SearchSect"
import React from "react";
import HotChatSect from "@pages/Group/HotChatSect";
import ChatSect from "@pages/Group/ChatSect";


const Group =()=>{


	return(
		<>
			<Header/>
			<SearchSect/>
			<HotChatSect/>
			<ChatSect/>
		</>
	)
}

export default Group;
