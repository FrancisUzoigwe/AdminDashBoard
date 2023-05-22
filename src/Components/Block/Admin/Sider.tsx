import React from "react";
import styled from "styled-components";
import {RxDashboard} from "react-icons/rx"
import {MdProductionQuantityLimits} from "react-icons/md"
import {AiOutlineUnorderedList} from "react-icons/ai"
// import {GrAnalytics} from "react-icons/gr" 
import {MdAnalytics} from "react-icons/md" 
import {AiOutlineStock} from "react-icons/ai" 
import {BiBook} from "react-icons/bi" 
import {RiTeamFill} from "react-icons/ri" 
import {BiMessageDetail} from "react-icons/bi" 
import {MdOutlineFavoriteBorder} from "react-icons/md" 
import {IoMdSettings} from "react-icons/io" 
import{BiLogOut} from "react-icons/bi" 
// import {SiCodingninjas} from "react-icons/si"

const Sider = () => {
  return (
    <div>
      <Container>
        <Main>
          <Wrap>CodingLab</Wrap>
          <Wrapped>
            <Icon1/>
            <Text>DashBoard</Text>
          </Wrapped>
          <Wrapped>
            <Icon2></Icon2>
            <Text>Products</Text>
          </Wrapped>
          <Wrapped>
            <Icon3></Icon3>
            <Text>Order List</Text>
          </Wrapped>
          <Wrapped>
            <Icon4></Icon4>
            <Text>Analytics</Text>
          </Wrapped>
          <Wrapped>
            <Icon5></Icon5>
            <Text>Stock</Text>
          </Wrapped>
          <Wrapped>
            <Icon6></Icon6>
            <Text>Total Order</Text>
          </Wrapped>
          <Wrapped>
            <Icon7></Icon7>
            <Text>Team</Text>
          </Wrapped>
          <Wrapped>
            <Icon8></Icon8>
            <Text>Messages</Text>
          </Wrapped>
          <Wrapped>
            <Icon9></Icon9>
            <Text>Favorite</Text>
          </Wrapped>
          <Wrapped>
            <Icon10></Icon10>
            <Text>Settings</Text>
          </Wrapped>
          <Wrap>
            <Icon11></Icon11>
            Logout
          </Wrap>
        </Main>
      </Container>
    </div>
  );
};

const Text = styled.div`
color: white;

`;

const Icon11 = styled(BiLogOut)`
color: white;
font-size: 20px;
`;


const Icon10 = styled(IoMdSettings)`
color: white;
font-size: 20px;
`;


const Icon9 = styled(MdOutlineFavoriteBorder)`
color: white;
font-size: 20px;
`;

const Icon8 = styled(BiMessageDetail)`
color: white;
font-size: 20px;
`;

const Icon7 = styled(RiTeamFill)`
color: white;
font-size: 20px;
`;

const Icon6 = styled(BiBook)`
color: white;
font-size: 20px;
`;

const Icon5 = styled(AiOutlineStock)`
color: white;
font-size: 20px;
`;

const Icon4 = styled(MdAnalytics)`
color: white;
font-size: 20px;
`;

const Icon3 = styled(AiOutlineUnorderedList)`
color: white;
font-size: 20px;
`;

const Icon2 = styled(MdProductionQuantityLimits)`
color: white;
font-size: 20px;
`;

const Icon1 = styled(RxDashboard)`
color: white;
font-size: 20px;
`;

const Wrapped = styled.div`
margin: 10px 0px;
display: flex;
justify-content: space-between;
width: 60%;
height: 40px;
transition: all 450ms;

:hover{
  color: black;
  cursor: pointer;
}
`;

const Wrap = styled.div`
margin: 40px 0;
font-size: 15px;
font-weight: 400;
color: white;
width: 130px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export default Sider;
const Main = styled.div`
  width: 96%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: #0A2658;
  height: 100vh;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
