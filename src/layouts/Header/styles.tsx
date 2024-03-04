import styled from '@emotion/styled';
import {NavLink} from "react-router-dom";



export const Head = styled.ul`
  height: 110px;
    font-weight: 1000;
    font-size: 35px;
    margin:0;
    padding: 0;
    
    font-style: normal;
    & > :first-of-type {
        /* 첫 번째 자식 요소에 대한 스타일 */
        flex-basis: 180%;
        justify-content: start;
        padding-left: 50px;
    }
		display: flex;
    justify-content: space-between; /* 가로 방향으로 가운데 정렬 */
    align-items: center;
    text-decoration:none;
    border-bottom: 2px solid #A4D3FF; // 테두리 스타일 설정
    
`;
export const StyledLink = styled(NavLink)`
	color: rgba(135, 135, 135, 100);
    width: 100%;
    height: 100%;
	text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;
export const NavBar = styled(NavLink)`
	
    width: 100%;
    height: 100%;
	text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

