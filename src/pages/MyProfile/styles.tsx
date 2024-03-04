import styled from '@emotion/styled';
import {NavLink} from "react-router-dom";



export const Img = styled.img `
    grid-area:img
    object-fit:cover;
`

export const Body = styled.body`
`
export const Section = styled.section`
    width:100%;
    min-height:100vh;
    display:grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    'side img'
    'side main'
    

`
export const Side = styled.aside`
    grid-area:side;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 2px solid #A4D3FF;
`

export const NavBar = styled(NavLink)`
    height: 130px;
	text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  grid-area: main;
`

export const UserName = styled.h1`
  margin: 10px 0;
`

export const UserStats = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
`

export const UserDescription = styled.p`
  margin: 10px 0;
`

export const UserImage = styled.img`
  width: 100px; // 원하는 크기로 조정
  height: 100px; // 원하는 크기로 조정
  margin: 20px 0;
`

export const HeartRate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const HeartIcon = styled.img`
  width: 40px; 
  height: 40px; 
`
