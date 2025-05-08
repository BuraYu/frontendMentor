import React from "react";
import "../styles.css";

interface ComponentProps {
  title: string;
  description?: string;
}

const BaseComponent: React.FC<ComponentProps> = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <h1>{description}</h1>
    </>
  );
};

export default BaseComponent;
