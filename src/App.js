import React from 'react'
import styled from "styled-components";
import Nav from "./components/Nav"
import Header from "./components/Header"
import Main from "./components/Main"
const MainUi = styled.main`
width: 80%;
margin: auto;
`
function SiciliaMia() {
  return (
    <MainUi>
      <Nav />
      <Header/>
      <Main/>
    </MainUi>
  )
}

export default SiciliaMia