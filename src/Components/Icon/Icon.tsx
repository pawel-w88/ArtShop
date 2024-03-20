import * as LucideIcons from "lucide-react";
import { SVGProps } from "react";
import "./Icon.scss";

type IconName = keyof typeof LucideIcons;

type IconProps = {
  name: IconName;
  size?: number;
  color?: string;
};

export const Icon = ({ name, size = 24, color= "currentColor" }: IconProps) => {
  const LucideIcon = LucideIcons[name] as React.ComponentType<SVGProps<SVGSVGElement>>;
  if (!LucideIcon) {
    return null;
  };
  return  <LucideIcon width={size} height={size} color={color} />;
};

