import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../img/avatar.png'
import { menuItems } from '../utils/menuitems'

function Navigation({active, setActive}) {
    
    return (
        <NavStyled>
            <div className="user-con">
            <img src={avatar} alt="" />
                <div className="text">
                    <h2>Hi!</h2>
                    <p></p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
   width: 250px;
  height: 100vh;
  background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 11%, rgba(18,15,17,1) 65%);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: 'Roboto', sans-serif;

  .user-con {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .text {
      h2 {
        font-size: 40px;
        margin: 0;
        color: #fffff;
      }
    }
  }

  .menu-items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;

    li {
      display: flex;
      align-items: center;
      padding: 12px;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      border-radius: 10px;
      font-size: 16px;
      color: #fffff;

      &:hover {
        background-color: #333;
      }

      &.active {
        background-color: #444;
      }

      span {
        margin-left: 15px;
      }

      svg {
        font-size: 20px;
      }
    }
  }
`;


export default Navigation