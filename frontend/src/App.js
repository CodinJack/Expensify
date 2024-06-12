import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import Orb from './components/background'
import Navigation from './components/Navigation'
import bg from './img/bg.png'
function App() {
  const [active, setActive] = useState(1)

  
  

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      
        <Navigation active={active} setActive={setActive} />
        <main>
        </main>

    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
   background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;