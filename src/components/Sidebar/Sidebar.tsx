import { ChevronRight } from "lucide-react";
import * as LucideIcons from "lucide-react"; // icon dynamic access
import menuData from "../../constants/menus.json"; // your JSON file path

export const Sidebar = () => {
  const getIcon = (name: string, size = 16) => {
    const Icon = (LucideIcons as any)[name.charAt(0).toUpperCase() + name.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase())];
    return Icon ? <Icon size={size} /> : <span className="w-4 h-4 inline-block" />;
  };

  return (
    <div className="h-screen w-64 bg-white  px-3 py-1 overflow-y-auto">
      {menuData.map((group, groupIndex) => (
        <div key={groupIndex} className="menu-group mb-6">
          <h5 className="px-2 text-xs font-semibold text-gray-400 uppercase mb-2">
            {group.group}
          </h5>
          <ul className="space-y-1">
            {group.items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-sm text-gray-600">
                {item.children ? (
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer select-none px-3 py-2 rounded hover:bg-gray-100 transition-all duration-200 list-none [&::-webkit-details-marker]:hidden">
                      <div className="flex items-center gap-2">
                        {getIcon(item.icon)} {item.label}
                      </div>
                      <ChevronRight
                        size={14}
                        className="transition-transform duration-300 group-open:rotate-90"
                      />
                    </summary>

                    <ul className="ml-6 mt-2 space-y-1 transition-all duration-300 ease-in-out opacity-0 max-h-0 overflow-hidden group-open:opacity-100 group-open:max-h-96">
                      {item.children.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={sub.path}
                            className="flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm py-1 pl-2 rounded select-none"
                          >
                            {getIcon(sub.icon, 14)} {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <a
                    href={item.path}
                    className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition text-sm text-gray-600 select-none"
                  >
                    {getIcon(item.icon)} {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
