import * as LucideIcons from "lucide-react";
import "./Icon.scss";

type IconProps = {
  name: string;
  size?: number;
  color?: string;
};

export const Icon = ({ name, size = 24, color= "currentColor" }: IconProps) => {
  const LucideIcon: any = LucideIcons[name];

  return <LucideIcon color={color} size={size} />;
};

