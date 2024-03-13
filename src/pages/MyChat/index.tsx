import { FC } from "react";
import Header from "@layouts/Header";
import { LeftSect, Main, RightSect, Wrapper } from "@pages/MyChat/styles";
import { RightBar } from "@pages/Group/styles";

const MyChat:FC =()=>{
	return (
		<>
			<Wrapper>
				<Header/>
				<Main>
					<LeftSect></LeftSect>
					<RightSect>텅~</RightSect>
				</Main>
			</Wrapper>


		</>
	);
}

export default MyChat;
