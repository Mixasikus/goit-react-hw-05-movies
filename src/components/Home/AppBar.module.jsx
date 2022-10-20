import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

// export const Link = styled(NavLink)`
//   padding: 8px 16px;
//   border-radius: 4px;
//   text-decoration: none;
//   color: black;
//   font-weight: 500;

//   :hover:not(.active) {
//     color: red;
//   }
//   &.active {
//     color: white;
//     background-color: orangered;
//   }

//   &:not(:last-child) {
//     margin-right: 5px;
//   }
// `;
export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Nav = styled.nav`
  padding: 15px;
  border-bottom: solid 2px black;
`;
