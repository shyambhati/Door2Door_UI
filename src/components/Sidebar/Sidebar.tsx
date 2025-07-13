import { useState } from "react";
import menuData from "../../constants/menu2.json";
import {  SidebarSection } from "./SidebarSection";

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
   <div className="min-h-screen fixed w-64 bg-white px-3 py-2 overflow-y-auto ">
      {menuData.sections.map((section, sectionIndex) => (
        <SidebarSection
          key={sectionIndex}
          section={section}
          sectionIndex={sectionIndex}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
          showTitle={menuData.settings?.sectionsTitle !== false}
        />
      ))}
    </div>
  );
}
