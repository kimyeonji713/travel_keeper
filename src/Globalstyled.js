import { createGlobalStyle } from "styled-components";

export const colors = {
  point_1: "#5BBCFF",
  point_2: "#FDE767",
  sub: "#666",
  backsub: "rgba(0, 0, 0, 0.7)",
};

export const spacing = {
  side: "120px",
  subside: "100px",
  side_1024: "50px",
  moSide: "30px",
};

export const size = {
  size1024: "1024px",
  size768: "768px",
  size435: "435px",
  size368: "368px",
};

export const GlobalStyled = createGlobalStyle`
 ${reset}

*{box-sizing:border-box}


body{
    font-family: "Noto Sans KR", sans-serif;
    /* background-color: #252525; */
    /* color: white; */
}

ul,li{
    list-style: none;
}

a{
    text-decoration: none;
    color: white;
}

img{
  width: 100%;
  display: block;
}
`;