import { SvgIconProps } from "../../types/types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={src} alt={src} width={width} height={height} />
);
