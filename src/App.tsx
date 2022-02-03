import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVars = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

function App() {
  /* ref : 특정 요소를 잡을 수 있는 방법 */

  const x = useMotionValue(0);

  // console.log(x);

  return (
    <Wrapper>
      <button onClick={() => x.set(200)}> Click me </button>
      <Box style={{ x }} drag="x" dragSnapToOrigin />

      {/* <Box
        whileHover={{ scale: 1.5, rotateZ: 90 }}
        whileTap={{ scale: 1, borderRadius: "100px" }}
      /> */}
    </Wrapper>
  );
}

export default App;
