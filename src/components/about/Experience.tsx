export interface ExperienceProps {
  title: string;
  desc: string;
  period: string;
  company?: string;
  position: "right" | "left";
}

export const Experience = ({
  title,
  desc,
  period,
  company,
  position,
}: ExperienceProps) => (
  <div className={`flex ${position === "left" ? "" : "flex-row-reverse"}`}>
    <div className="w-5/12">
      <div
        className={`p-3 bg-white font-semibold rounded-b-lg ${position === "left" ? "rounded-s-lg" : "rounded-e-lg"}`}
      >
        {title}
      </div>
      <div className="p-2 text-sm italic">{desc}</div>
      <div className="p-2 font-semibold text-red-400 text-sm">{period}</div>
      {!!company && (
        <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
          {company}
        </div>
      )}
    </div>
    <div className="w-2/12 flex justify-center">
      <div className="w-1 h-full bg-gray-600 rounded relative">
        <div className="absolute top-0 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
      </div>
    </div>
    <div className="w-5/12"></div>
    <div></div>
    <div></div>
  </div>
);
