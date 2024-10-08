import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { foodList } from "../../api";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { colors, size } from "../../Globalstyled";
import { GiRotaryPhone } from "react-icons/gi";
import { LuMapPinOff } from "react-icons/lu";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useScrollTop } from "../../lib/useScrollTop";
import { TopButton } from "../home/components/TopButton";
import { PageTitle } from "../../components/PageTitle";

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  color: ${colors.fontColor_3};
`;
const Wrap = styled.div`
  height: 100%;
  font-family: "Noto Sans KR", sans-serif;
  padding-top: 100px;

  @media screen and (max-width: ${size.size435}) {
    padding-top: 90px;
  }
  @media screen and (max-width: ${size.size368}) {
    padding-top: 85px;
  }
`;
const BannerWrap = styled.div`
  padding: 20px 15px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  @media screen and (max-width: ${size.size435}) {
    h3 {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: ${size.size368}) {
    h3 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
`;

const Heart = styled.button`
  all: unset;
  font-size: 18px;
  display: ${(props) => props.$resetActive};
`;
const FHeart = styled.button`
  all: unset;
  font-size: 18px;
  display: ${(props) => props.$changeActive};
  color: crimson;
`;
const MainMenu = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  @media screen and (max-width: ${size.size435}) {
    h3 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: ${size.size368}) {
    h3 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
`;
const Desc = styled.p`
  font-size: 16px;
  line-height: 18px;
  margin-bottom: 10px;
  @media screen and (max-width: ${size.size435}) {
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: ${size.size368}) {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 10px;
  }
`;
const Order = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  line-height: 18px;
  @media screen and (max-width: ${size.size435}) {
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: ${size.size368}) {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 10px;
  }
`;
const Tel = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 10px;
  .telIcon {
    margin-right: 5px;
    font-size: 18px;
    font-weight: 600;
  }
`;

const Map = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 60px;
  border: 1px solid ${colors.fontColor_3};
  margin-top: 40px;
  @media screen and (max-width: ${size.size435}) {
    margin-top: 30px;
  }
  @media screen and (max-width: ${size.size368}) {
    margin-top: 30px;
  }
`;
export const Detail = () => {
  useScrollTop();

  const [isLoading, setIsLoading] = useState(true);
  const [foodData, setFoodData] = useState();
  const [show, setShow] = useState(false);

  const changeHandler = () => {
    if (!show) {
      setShow(true);
    }
  };

  const resetHandler = () => {
    if (show) {
      setShow(false);
    }
  };
  const {
    state: { id },
  } = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const {
          getFoodKr: { item },
        } = await foodList();

        setFoodData(item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const idData = foodData?.filter((data) => data.UC_SEQ === id);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <Header />
          {idData?.map((data) => (
            <Wrap key={data.UC_SEQ}>
              <PageTitle title={data.MAIN_TITLE} />
              <img src={data.MAIN_IMG_NORMAL} />
              <BannerWrap>
                <Title>
                  <h3>{data.MAIN_TITLE}</h3>
                  <Heart $resetActive={show ? "none" : "block"}>
                    <FaRegHeart onClick={changeHandler} />
                  </Heart>
                  <FHeart $changeActive={show ? "block" : "none"}>
                    <FaHeart className="fullHeart" onClick={resetHandler} />
                  </FHeart>
                </Title>
                <MainMenu># {data.RPRSNTV_MENU}</MainMenu>
                <Desc>{data.ITEMCNTNTS}</Desc>
                <Order>{data.USAGE_DAY_WEEK_AND_TIME}</Order>
                <Tel>
                  <GiRotaryPhone className="telIcon" />
                  {data.CNTCT_TEL}
                </Tel>
                <Map>
                  <LuMapPinOff />
                </Map>
              </BannerWrap>
            </Wrap>
          ))}
          <TopButton />
          <Footer />
        </Container>
      )}
    </>
  );
};
