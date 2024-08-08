import { Form, Link } from "react-router-dom";
import { routes } from "../routes";
import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { colors } from "../Globalstyled";
import styled from "styled-components";

const Container = styled.header`
  max-width: 500px;
  width: 100%;
  height: 80px;
  margin: 20px auto;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 30%;
  }
`;
const Ham = styled.div`
  Button {
    font-size: 20px;
    font-weight: 900;
  }
`;

const Menu = styled.div``;

export const Header = () => {
  const { isOpen, onOpen, onClose } = useState();
  const btnRef = useRef();
  const imgUrl = "/img/logo.png";
  const {register,handleSubmit,for} = useForm();
  return (
    <Container>
      <Wrap>
        <Link to={routes.home}>
          <img src={imgUrl} alt="logo" />
        </Link>

        <Ham>
          <Button
            ref={btnRef}
            bgColor={"white"}
            color={colors.point_1}
            onClick={onOpen}
          >
            <HamburgerIcon />
          </Button>

          <Menu>
            <button>회원이신가요?</button>
            <Form onSubmit={handleSubmit}>
              <input type="text" placeholder="검색어를 입력해주세요."></input>
            </Form>
          </Menu>
        </Ham>
      </Wrap>
    </Container>
  );
};
