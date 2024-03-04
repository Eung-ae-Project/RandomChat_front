import React from "react";
import Slider from "react-slick";
import '@components/Slider/styles/slick-theme.scss';
import '@components/Slider/styles/slick.scss';
import {Box, SlickContainer} from "@components/Slider/styles/style"
function VerticalMode() {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		autoplay:true,
		autoplaySpeed: 3000,
		pauseOnHover: true
		// beforeChange: function(currentSlide, nextSlide) {
		// 	console.log("before change", currentSlide, nextSlide);
		// },
		// afterChange: function(currentSlide) {
		// 	console.log("after change", currentSlide);
		// }
	};

	const tempChatRoom = [
		{index:1, title:"백엔드 개발자끼리 소통해요~", hashtag:["개발자","코딩","프로그래밍","치킨집사장","공부하기싫어요"], lastChat:12},
		{index:2,title:"프론트엔드 개발자끼리 소통해요~", hashtag:["개발자","코딩","프로그래밍","치킨집사장","공부하기싫어요"], lastChat:21},
		{index:3,title:"씹덕들 모여보자", hashtag:["오타쿠","씹덕","애니","진격거","러브라이브","아이돌마스터"], lastChat:32},
		{index:4,title:"취미 사진방", hashtag:["사진","카메라","필름","디카","보정"], lastChat:46},
		{index:5,title:"틀딱 모임", hashtag:["틀니","압수","경로당","20","19","18"], lastChat:70},
		{index:6,title:"동쿡대 코인방", hashtag:["비트코인","이더리움","자살추천","도지","자살명소","존버","살자","오킹"], lastChat:1883},
	]
	return (
		<SlickContainer className="slider-container">
			<Slider {...settings}>
				{tempChatRoom.map(({index,title})=>{
					return <Box key={index}>
						<div className="title"><h3>{title}</h3></div>
					</Box>
				})}

			</Slider>
		</SlickContainer>
	);
}

export default VerticalMode;
