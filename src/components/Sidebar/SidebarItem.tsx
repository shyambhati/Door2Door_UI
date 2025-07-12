import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { getIcon } from "./getIcon";

export const SidebarItem = ({ item, index, openIndex, setOpenIndex }: any) => {
  const isOpen = openIndex === index;

  return (
    <li key={index}>
      <div
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className={`flex items-center justify-between cursor-pointer px-3 py-2 rounded hover:bg-gray-100 select-none
        ${isOpen ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-700"}`}
      >
        <div className="flex items-center gap-2">
          {getIcon(item.icon)} {item.label}
        </div>
        {item.children && (
          <ChevronRight
            size={14}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        )}
      </div>

      {/* Submenu */}
      {isOpen && item.children && (
        <ul className="ml-6 mt-1 space-y-1">
          {item.children.map((child: any, i: number) => (
            <li key={i}>
              <a
                href={child.path}
                className="flex items-center gap-2 text-sm py-1 pl-2 rounded text-gray-600 hover:text-blue-600"
              >
                {getIcon(child.icon, 14)} {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
