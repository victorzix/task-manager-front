import styled from "styled-components";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const DashboardContainer = styled.div`
  display: flex;
  `

export default function Dashboard() {
  return(
    <DashboardContainer>
      <SideBar/>
      <div><Outlet/></div>
    </DashboardContainer>
  )
}