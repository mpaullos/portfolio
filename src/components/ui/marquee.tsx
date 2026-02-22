export default function Marquee({
  items,
}: {
  items: { icon: React.ReactNode; title: string }[];
}) {
  return (
    <div
      className="
        relative flex w-full overflow-x-hidden
        bg-[#85EEAB]
        border-y-4 border-black
        text-black font-black
        
      "
    >
      <div className="animate-marquee whitespace-nowrap py-10 flex">
        {items.map((item, index) => (
          <div key={index} className="mx-10 flex items-center gap-4 text-3xl">
            <span className="text-4xl">{item.icon}</span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-10 flex">
        {items.map((item, index) => (
          <div key={index} className="mx-10 flex items-center gap-4 text-3xl">
            <span className="text-4xl">{item.icon}</span>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
