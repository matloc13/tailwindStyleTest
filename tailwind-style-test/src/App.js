import logo from './logo.svg';
import './App.css';
import tw from "tailwind-styled-components"
import styled from 'styled-components'

const StyledButton = tw.div`
${(p) => (p.$color === 'blue' ? "bg-indigo-600" : "bg-indigo-300")}
flex
items-center
justify-center
flex-col
w-full
hover:bg-sky-700
hover: text-white
h-1/2
border
border-transparent
`
const StyledDiv = tw.div`
${(p) => (p.$color === 'green' ? "bg-green-600" : "bg-indigo-300")}
flex
items-center
justify-center
flex-
w-1/3
hover:bg-sky-700
h-1/2
rounded
text-zinc-500
font-medium
hover:text-white
align-text-bottom
m-1
`

function App() {
  return (
    <div className="App h-screen flex flex-row   flex-wrap">
      <header className="App-header">
      </header>
      <StyledButton $color={'blue'}>nice button</StyledButton>
      <StyledDiv $color={'green'}>yoyoyoyoyoyoyo</StyledDiv>
      <StyledDiv $color='green'>3u842098482093</StyledDiv>
      <StyledDiv $color='green'>4843789324783</StyledDiv>
      <StyledDiv $color={'green'}>65hfakldjslk</StyledDiv>
    </div>
  );
}

export default App;
