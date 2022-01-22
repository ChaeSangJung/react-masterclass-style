import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0;
    background:deeppink;
  }
  50% {
    border-radius:100px;
  }
  0% {
    transform:rotate(-360deg);
    border-radius:0;
    background:aqua;
  }
`;
const WrapContent =styled.div`
  display:flex;
`;
const BoxContent = styled.div`
  display:inline-flex;
  justify-content:center;
  align-items: center;
  width:100px;
  height:100px;
  background:${(props)=>props.color};
`;
const Text = styled.span`
  color: ${(props)=>props.theme.textColor};
  background: ${(props)=>props.theme.bgClr};
  text-align: center;
`;
const BoxCircle = styled(BoxContent)`
  border-radius:50px;
  animation: ${rotateAnimation} 120s linear infinite;
  transition: all 10s;
  ${Text} {
    transition: all 0.5s;
  }
  &:hover {
    background: #f0f;
    ${Text} {
      font-size:40px;
    }
  }
`;

const Btn = styled.button`
  background:transparent;
  border:none;
  background-color: #333;
`;
const Input = styled.input.attrs({required:true, minLength:10, disabled:true})``;

function App() {
  return (
    <>
      <WrapContent>
          <BoxContent color="darkred">
            <Text>Hello~</Text>
          </BoxContent>
          <BoxContent color="deeppink" />
          <BoxContent color="maroon" />
          <BoxCircle color="olive" >
            <Text>How are you?</Text>
          </BoxCircle>
      </WrapContent>
      <Btn>Link1</Btn>
      <Btn as="a" href="/">Link2</Btn>
      <div>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
      <div>

      </div>
    </>
  );
}

export default App;
