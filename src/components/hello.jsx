import React from "react";
import { useTranslation } from "react-i18next";

const Hello = () => {
  const { t, i18n } = useTranslation();

  console.log(t);
  return <div>{t("hello.label")}</div>;
};

export default Hello;
