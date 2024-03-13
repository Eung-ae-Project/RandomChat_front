import { FC } from "react";
import Header from "@layouts/Header";
import { Button, Gender, Main, Mbti, SelectForm } from "@pages/Private/styles";
const Private:FC =()=>{
	return (
		<>
			<Header/>
			<Main>
				<h1>1:1랜덤 매칭</h1>
				<SelectForm>
					<h4>선호성별</h4>
					<Gender>
						<label><input type="radio" name="gender" value="남자" />남자</label>
						<label><input type="radio" name="gender" value="여자" />여자</label>
						<label><input type="radio" name="gender" value="남자" />크레파스</label>
						<label><input type="radio" name="gender" value="남자" />아파치 헬리콥터</label>
					</Gender>
					<h4>선호 MBTI</h4>
					<Mbti>
						<div>
							<label><input type="radio" name="MBTI1" value="E" />E</label>
							<label><input type="radio" name="MBTI1" value="I" />I</label>
						</div>
						<div>
							<label><input type="radio" name="MBTI2" value="S" />S</label>
							<label><input type="radio" name="MBTI2" value="N" />N</label>
						</div>
						<div>
							<label><input type="radio" name="MBTI3" value="T" />T</label>
							<label><input type="radio" name="MBTI3" value="F" />F</label>
						</div>
						<div>
							<label><input type="radio" name="MBTI4" value="J" />J</label>
							<label><input type="radio" name="MBTI4" value="P" />P</label>
						</div>
					</Mbti>
					<label><input type="checkbox" name="Random" value="Random" />완전 랜덤으로 할래요!</label>
					<Button>랜덤 매칭 시작하기</Button>
				</SelectForm>

			</Main>
		</>
	);
}

export default Private;
