import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerDetails = styled.div`
  display: flex;
  border-bottom: solid 2px black;
`;

export const Img = styled.img`
  max-height: 400px;
`;

export const TitleName = styled.h1`
  display: flex;
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
  justify-content: space-evenly;
`;

export const YearText = styled.p`
  margin: 0;
`;

export const PopularityText = styled.p`
  display: flex;
  margin: 0;
  font-weight: 400;
  font-size: 20px;
`;

export const TitleOverview = styled.h2`
  display: flex;
`;

export const GenresList = styled.p`
  font-weight: 400;
`;

export const ContainerInfo = styled.div`
  border-bottom: solid 2px black;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
`;
