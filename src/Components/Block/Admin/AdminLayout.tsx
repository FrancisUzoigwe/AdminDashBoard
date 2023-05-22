import { Outlet } from "react-router-dom";
import React from "react";
import Sider from "./Sider";
import Header from "./Header";
import styled from "styled-components";

const AdminLayout = () => {
  return (
    <Container>
      <Sider />
      <Main>
        <Header />
        <Outlet />
      </Main>
    </Container>
  );
};

export default AdminLayout;

const Main = styled.div`
display: flex;
flex-direction: column;
`;

const Container = styled.div`
display: flex;
width: 100%;
/* background-color: black; */

`;
