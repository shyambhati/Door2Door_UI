import { SidebarItem } from "./SidebarItem";

export const SidebarSection = ({
  section,
  sectionIndex,
  openIndex,
  setOpenIndex,
  showTitle,
}: any) => {
  return (
    <div className="menu-section mb-6">
      {showTitle && (
        <h5 className="px-1 text-xs font-semibold text-gray-400 mb-2">
          {section.title}
        </h5>
      )}

      <ul className="space-y-1">
        {section.items.map((item: any, index: number) => (
          <SidebarItem
            key={index}
            item={item}
            index={index + sectionIndex * 100}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </ul>
    </div>
  );
};
