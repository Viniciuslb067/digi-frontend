import { CustomArrowProps } from "react-slick";

import "./styles.css";

export const NextArrow = (props: CustomArrowProps) => {
  const { className, style, onClick, currentSlide, slideCount } = props;

  return (
    currentSlide !== Number(slideCount || 0) - 1 && (
      <div
        className={className}
        style={{
          ...style,
          top: "40%",
          display: "block",
        }}
        onClick={onClick}
      />
    )
  );
};
