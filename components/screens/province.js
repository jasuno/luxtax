import React from "react";
import CanadaMap from "react-canada-map";
import Store from "../../store";
import { observer } from "mobx-react";
import { useRouter } from "next/router";
import { fadeIn } from "../../animations";

import Layout from "../elements/layout";

const Province = () => {
  const router = useRouter();

  const content = () => {
    return (
      <CanadaMap
        height={"100%"}
        width={"100%"}
        fillColor="#e1deca"
        onHoverColor="#c00d00"
        onClick={(response) => {
          Store.updateProvince(response);
          router.push("/vehicle");
        }}
      />
    );
  };

  return (
    <Layout
      variants={fadeIn}
      title="Province of purchase."
      subtitle="Where are you buying your vehicle?"
      content={content()}
      activePage={0}
    />
  );
};

export default observer(Province);
