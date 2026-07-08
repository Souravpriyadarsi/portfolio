import TechBadge from "../ui/TechBadge";
import type { SkillCategory } from "../../types/skill";

interface Props {
  category: SkillCategory;
}

export default function SkillGroup({ category }: Props) {
  return (
    <div className="grid gap-10 py-16 border-b border-white/6 lg:grid-cols-[260px_1fr]">
      <div>
        <h3 className="text-3xl font-semibold tracking-tight">
          {category.title}
        </h3>
      </div>

      <div>
        <p className="max-w-xl text-white/60 leading-8">
          {category.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <TechBadge key={skill}>{skill}</TechBadge>
          ))}
        </div>
      </div>
    </div>
  );
}
