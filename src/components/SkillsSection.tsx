import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { technicalSkills, type Skill } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

const SkillItem = ({ skill }: { skill: Skill }) => (
    <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg">
      <skill.Icon className="w-8 h-8 text-accent" />
      <span className="font-semibold text-lg">{skill.name}</span>
    </div>
  );
  

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-primary">My Skills</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Technologies and abilities I've mastered.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg bg-secondary/50 border-0">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-center">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {technicalSkills.map((skill) => (
                       <div key={skill.name} className="flex flex-col items-center justify-center p-4 rounded-lg bg-background/50 text-center gap-2 transition-transform duration-300 ease-in-out hover:scale-110">
                         <skill.Icon className="w-10 h-10 text-accent" />
                         <span className="font-semibold">{skill.name}</span>
                       </div>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
