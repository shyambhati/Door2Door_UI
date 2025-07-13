export function highlightText(
  text: string | number,
  searchTerm: string,
  highlightClass = "bg-yellow-200 text-black"
) {
  const safeText = String(text); // ✅ Convert anything to string

  if (!searchTerm) return safeText;

  const escapedSearch = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedSearch})`, "gi");
  const parts = safeText.split(regex);

  return parts.map((part, i) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <mark key={i} className={highlightClass}>
        {part}
      </mark>
    ) : (
      part
    )
  );
}
