import styled from '@emotion/styled';

export const Main = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		h1 {
			color: #A4D3FF;	
		}
		h4{
				color: #A4D3FF;
		}
	`;
export const SelectForm = styled.form`
		display: flex;
		flex-direction: column;
		align-items: center;
`;
export const Gender =styled.div`
		margin-bottom: 20px;

		label{
				margin-right: 60px;
				font-size: 28px;
			}

`;
export const Mbti = styled.div`
margin-bottom: 60px;
		font-size: 32px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
		label{
				margin-right: 50px;
		}
`;
export const Button = styled.button`
	background: #A4D3FF;
		color:white;
		border: none;
		height: 70px;
		width: 800px;
		border-radius: 10px;
		font-weight: 800;
		font-size: 39px;
		margin-top: 50px;
	`;
