import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import flow from "../../../Assets/flow.jpg";
import { MdNotificationsActive } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const ListofNames = [
    { name: "Somtochukwu" },
    { name: "Solomon Onuoha" },
    { name: "Onuiri Destiny" },
    { name: "Umeh Emmanuel" },
    { name: "Francis Uzoigwe" },
  ];
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggled = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Container>
        <Main>
          <Holder1>
            <Icon1 />
            <DashBoard>TEAM II</DashBoard>
          </Holder1>
          <Holder2>
            <Search placeholder="Search..." />
            <IconBack>
              <SearchIcon />
            </IconBack>
          </Holder2>
          <Holder3>
            <Img>
              <Wrap>
                <Not></Not>
                {toggle ? (
                  <People>
                    <Team>
                      {ListofNames.map((el) => {
                        return <TeamName> {el.name} </TeamName>;
                      })}
                    </Team>
                  </People>
                ) : null}
              </Wrap>
              <Image src={flow} />
              <Name>Team 2</Name>
            </Img>
            <Drop
              onClick={() => {
                onToggled();
              }}
            ></Drop>
          </Holder3>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const TeamName = styled.div`
  margin: 7px 0px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 600;
  transition: all 450ms;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Team = styled.div``;

const People = styled.div`
  position: absolute;
  margin-top: 10px;
  height: 150px;
  width: 170px;
  border-radius: 10px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div``;

const Not = styled(MdNotificationsActive)`
  font-size: 20px;
  transition: all 450ms;

  :hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;

const Img = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
`;

const IconBack = styled.div`
  background-color: #22bbee;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 355px;
  width: 30px;
  height: 30px;
  border-radius: 3px;
`;

const Icon1 = styled(MdMenu)`
  font-size: 28px;
  color: black;
  margin-top: 3px;
`;

const Search = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 3px;
  background: #dadada;
  outline: 2px solid silver;
  position: relative;
`;

const SearchIcon = styled(FiSearch)`
  color: white;
  font-size: 20px;
`;

const Image = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 5px;
  background-color: grey;
  object-fit: cover;
  transition: all 850ms;

  :hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const Name = styled.div`
  color: black;
  font-size: 14px;
`;

const Drop = styled(RiArrowDropDownLine)`
  color: black;
  font-size: 25px;
  cursor: pointer;

  :hover{
    color: #2e2e2e;
  }
`;

const DashBoard = styled.div`
  color: black;
  font-weight: 700;
  font-size: 20px;
`;

const Holder3 = styled.div`
  height: 40px;
  width: 13%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Holder2 = styled.div`
  height: 40px;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Holder1 = styled.div`
  height: 40px;
  width: 13%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled.div`
  width: 95%;
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  height: 70px;
  width: calc(100vw - 200px);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -1px 7px 10px -4px rgba(0, 0, 0, 0.61);
  -webkit-box-shadow: -1px 7px 10px -4px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: -1px 7px 10px -4px rgba(0, 0, 0, 0.61);
`;
