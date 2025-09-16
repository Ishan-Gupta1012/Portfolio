import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { projectsData } from "@/lib/data";
import { ArrowRight, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-primary">My Projects</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            A selection of my work.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {projectsData.map((project, index) => {
              const projectImage = PlaceHolderImages.find(
                (img) => img.id === project.image
              );
              return (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl h-full">
                      {projectImage && (
                        <div className="relative">
                          <Image
                            src={projectImage.imageUrl}
                            alt={project.title}
                            width={600}
                            height={400}
                            className={`w-full object-cover ${project.comingSoon ? 'filter brightness-50' : ''}`}
                            data-ai-hint={projectImage.imageHint}
                          />
                          {project.comingSoon && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Badge variant="destructive" className="text-lg">Coming Soon</Badge>
                            </div>
                          )}
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.keywords.map((keyword) => (
                            <Badge key={keyword} variant="secondary">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-muted-foreground">{project.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-end gap-2 mt-auto">
                        {project.repoUrl && !project.comingSoon && (
                          <Button asChild variant="outline">
                            <Link href={project.repoUrl} target="_blank">
                              <Github className="mr-2 h-4 w-4" />
                              GitHub
                            </Link>
                          </Button>
                        )}
                        {project.liveUrl && !project.comingSoon && (
                          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            <Link href={project.liveUrl} target="_blank">
                              Live Demo
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
