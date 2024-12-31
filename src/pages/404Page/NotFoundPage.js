import React from "react";
import NotFound from "../../components/notFound/NotFound";
import useTitle from "../../hooks/useTitle";

const NotFoundPage = () => {
  useTitle("404 Page | VDWT");
  return (
    <div className="bg-container">
      <NotFound />
    </div>
  );
};

export default NotFoundPage;
