import * as LucideIcons from "lucide-react";

export const getIcon = (name: string, size = 16) => {
  const formatted =
    name.charAt(0).toUpperCase() +
    name.slice(1).replace(/-([a-z])/g, (_, g) => g.toUpperCase());

  const Icon = (LucideIcons as any)[formatted];
  return Icon ? <Icon size={size} /> : <span className="w-4 h-4 inline-block" />;
};
