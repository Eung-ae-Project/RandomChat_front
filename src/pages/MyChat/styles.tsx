import styled from '@emotion/styled';

export const Wrapper = styled.body`
		position: relative;
	`;
export const Main = styled.div`
    position: absolute;
		display: flex;	
		color: black;
    width: 100%;
    height: 100%;
	`;
export const LeftSect = styled.div`
		width: 20%;
		height: 100%;
    background: rgba(236, 236, 236, 1);
`;
export const RightSect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    font-weight: 400;
    color: rgb(169, 169, 169);
    width: 80%;
    height: 100%;
    background: white;
`;
