import { Theme } from "./theme";

export const hexToRgba = (hex: string, alpha: number) => {
  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const sizeToFontSize = (
  theme: Theme,
  size: "xs" | "sm" | "md" | "lg" | "xl"
) => {
  switch (size) {
    case "xs":
      return theme.fontSize - 4;
    case "sm":
      return theme.fontSize - 2;
    case "md":
      return theme.fontSize;
    case "lg":
      return theme.fontSize + 2;
    case "xl":
      return theme.fontSize + 4;
  }
};
