"use client";

import { recommendRelevantProjects } from "@/ai/flows/recommend-relevant-projects";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { projectsData } from "@/lib/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type RecommendedProject = {
  title: string;
  description: string;
  keywords: string[];
};

export default function ContactForm() {
  const [recommendations, setRecommendations] = useState<RecommendedProject[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const messageValue = form.watch("message");

  useEffect(() => {
    if (!messageValue || messageValue.trim().length < 20) {
      setRecommendations([]);
      return;
    }

    const handler = setTimeout(async () => {
      setIsLoading(true);
      try {
        const result = await recommendRelevantProjects({
          message: messageValue,
          projects: projectsData,
        });
        setRecommendations(result.slice(0, 2)); // Show max 2 recommendations
      } catch (error) {
        console.error("Failed to get recommendations:", error);
      } finally {
        setIsLoading(false);
      }
    }, 1000); // Debounce for 1 second

    return () => clearTimeout(handler);
  }, [messageValue]);
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const subject = encodeURIComponent(`Message from ${values.name} via Portfolio`);
    const body = encodeURIComponent(values.message);
    const mailtoLink = `mailto:ishangupta1012@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    toast({
      title: "Email Client Opened",
      description: "Your message is ready to send in your email app.",
    });
    form.reset();
    setRecommendations([]);
  };


  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell me about your project or inquiry..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {(isLoading || recommendations.length > 0) && (
              <div className="space-y-4 rounded-lg border bg-secondary/50 p-4">
                <h4 className="font-semibold text-sm">
                  AI-Suggested Projects to Mention
                </h4>
                {isLoading ? (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing your message...
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {recommendations.map((proj) => {
                      const fullProject = projectsData.find(p => p.title === proj.title);
                      return fullProject ? (
                        <Link href={`#projects`} key={proj.title}>
                          <div className="p-3 rounded-md border bg-background hover:bg-secondary/80 cursor-pointer">
                              <p className="font-semibold text-primary">{proj.title}</p>
                              <p className="text-sm text-muted-foreground line-clamp-2">{proj.description}</p>
                          </div>
                        </Link>
                      ) : null;
                    })}
                  </div>
                )}
              </div>
            )}

            <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="w-full sm:w-auto">
                {form.formState.isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
