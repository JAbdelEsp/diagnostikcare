import { ImageProps } from "@/types/types";
export function Image({ src, alt, width, height }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: width || "100%",
        height: height || "auto",
        objectFit: "cover",
      }}
    />
  );
}
