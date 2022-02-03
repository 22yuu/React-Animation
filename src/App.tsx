import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin // true인 경우 드래그 가능한 요소는 놓을 때 중심/원점으로 다시 애니메이션됨
          dragElastic={0.5} // 제한된 바깥을 벗어날 수 있는 이동 정도
          dragConstraints={biggerBoxRef} // 허용된 드래그 가능 영역에 제약 조건을 적용함.
          variants={boxVars}
          whileHover="hover"
          whileDrag="drag"
          whileTap="click"
        />
      </BiggerBox>
      {/* <Box
        whileHover={{ scale: 1.5, rotateZ: 90 }}
        whileTap={{ scale: 1, borderRadius: "100px" }}
      /> */}
    </Wrapper>
  );
}

export default App;
