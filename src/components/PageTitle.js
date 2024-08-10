import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>travel keeper | {title}</title>
    </Helmet>
  );
};
