import React from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import ai from "../Assets/ai.jpg"
import basket from "../Assets/basket.jpg"
import bitcoin from "../Assets/bitcoin.jpg"
import music from "../Assets/music.jpg"
import robot from "../Assets/robot.jpg"
import school from "../Assets/school.jpg"
import study from "../Assets/study.jpg"

const DashBoard = () => {
  return (
    <div>
      <Container>
        <Main>
          <One>
            <TotalHold>
              <Big>Total Order</Big>
              <Numb>40,876</Numb>
              <Up>Up from yesterday</Up>
            </TotalHold>
            <Sub>
              <Ab />
            </Sub>
          </One>
          <One>
            <TotalHold>
              <Big>Total Sales</Big>
              <Numb>38,876</Numb>
              <Up>Up from yesterday</Up>
            </TotalHold>
            <Sub>
              <Ab />
            </Sub>
          </One>
          <One>
            <TotalHold>
              <Big>Total Profit</Big>
              <Numb>$12,876</Numb>
              <Up>Up from yesterday</Up>
            </TotalHold>
            <Sub>
              <Ab />
            </Sub>
          </One>
          <One>
            <TotalHold>
              <Big>Total Return</Big>
              <Numb>12,086</Numb>
              <Up>Down from today</Up>
            </TotalHold>
            <Sub>
              <Ab />
            </Sub>
          </One>
        </Main>
        <Two>
          <Left></Left>
          <Right>
            <Sales>Top Selling Products</Sales>
            <SubSales>
              <Image src={ai}/>
              <Title>Vuiton Sunglasses</Title>
              <Price>$1142</Price>
            </SubSales>
            <SubSales>
            <Image src={basket}/>
              <Title>Hour Glass Jeans</Title>
              <Price>$1567</Price>
            </SubSales>
            <SubSales>
            <Image src={bitcoin}/>
              <Title>Nike Sport shoe</Title>
              <Price>$1234</Price>
            </SubSales>
            <SubSales>
            <Image src={music}/>
              <Title>Herme Silk Scarves</Title>
              <Price>$2312</Price>
            </SubSales>
            <SubSales>
            <Image src={robot}/>
              <Title>Succi Ladies Bag</Title>
              <Price>$1456</Price>
            </SubSales>
            <SubSales>
            <Image src={school}/>
              <Title>Gucci Woemen's Bag</Title>
              <Price>$2345</Price>
            </SubSales>
            <SubSales>
            <Image src={study}/>
              <Title>Addidas Running Shoe</Title>
              <Price>$2345</Price>
            </SubSales>
          </Right>
        </Two>
      </Container>
    </div>
  );
};

export default DashBoard;
const Image = styled.img`
height: 35px;
width: 35px;
border-radius: 5px;
background-color: grey;
object-fit: cover;
transition: all 350ms;

:hover{
  transform: scale(1.20);
  cursor: pointer;
}
`;
const Title = styled.div`
font-weight: 600;
`;

const Price = styled.div`
font-weight: 700;
`;

const SubSales = styled.div`
  display: flex;
  margin: 10px 20px;
  align-items: center;
  width: 80%;
  height: 35px;
  justify-content: space-between;
  transition: all 450ms;

  :hover{
    transform: scale(1.10);
    cursor: pointer;
    background: #E5E5E5;
  }
`;

const Sales = styled.div`
font-size: 20px;
font-weight: 600;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Left = styled.div`
  width: 67%;
  height: 95%;
  background-color: #8a8ae7;
  border-radius: 5px;
`;

const Right = styled.div`
  width: 30%;
  height: 95%;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
  border-radius: 5px;
 
`;

const Two = styled.div`
  width: 95%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Numb = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Up = styled.div`
  font-size: 14px;
  font-weight: 300;
`;

const Big = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Ab = styled(FiShoppingCart)`
  /* position: relative; */
  color: white;
  font-size: 30px;
`;

const TotalHold = styled.div`
  width: 70%;
  height: 90%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Sub = styled.div`
  width: 20%;
  height: 30%;
  background-color: lightblue;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const One = styled.div`
  width: 250px;
  height: 90%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  box-shadow: 7px -2px 24px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 7px -2px 24px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 7px -2px 24px 0px rgba(0, 0, 0, 0.5);
`;

const Main = styled.div`
  width: 95%;
  height: 150px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  width: 1160px;
  height: 590px;
  background-color: #b7b7b73e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
