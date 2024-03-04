import React from "react";
import {Carousel, DownWhiteBox, FireImg, HotChat, HotChatTitle, UpWhiteBox} from "@pages/Group/styles";

import VerticalMode from "@components/Slider/VerticalMode";



const HotChatSect=()=> {

    return (
        <HotChat>
            <HotChatTitle>실시간 인기 채팅방<FireImg src ="src/assets/fire.png"></FireImg></HotChatTitle>
            <Carousel>
                <UpWhiteBox></UpWhiteBox>
                <VerticalMode>
                </VerticalMode>
                <DownWhiteBox></DownWhiteBox>
            </Carousel>

        </HotChat>

    )
}
export default HotChatSect;
