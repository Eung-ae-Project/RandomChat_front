
import {
  StyledLink,Head, NavBar,

} from "@layouts/Header/styles"
import { useLocation,} from "react-router-dom";
import React from "react";




const Header =()=>{
  console.log("헤더!!")


  const Bar2 =({location}:any)=>{
    const selectedPath = location.pathname;

    const links = [
      { path: '/group', text: '단체 채팅' },
      { path: '/private', text: '1:1 채팅' },
      { path: '/myChat', text: '내 채팅' },
      { path: '/myProfile', text: '내 프로필' }
    ];

    const activeStyle = {
      color: 'white',
      background: '#A4D3FF',
    }
    const deActiveStyle = {
      color: 'rgba(135, 135, 135, 100)',
    }

    const renderLinks = (selectedPath: string) =>
        links.map(({ path, text }) => (
            <NavBar key={path} to={path} style={({isActive}) => {
              return isActive ? activeStyle : deActiveStyle;
            }}>
              {text}
            </NavBar>

        ));


    return <>{renderLinks(selectedPath)}</>;
  }

    return(
      <div>
        <Head>
          <StyledLink to="/group">이런저런 랜덤채팅</StyledLink>
          <Bar2 location={useLocation()}></Bar2>
        </Head>
      </div>
    )
};


export default Header;
