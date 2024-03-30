import { CustomArrowProps } from "react-slick";

export const PrevArrow = (props: CustomArrowProps) => {
  const { className, style, onClick, currentSlide } = props;

  return (
    currentSlide !== 0 && (
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
