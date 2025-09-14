import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Users, Bot, Trophy } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Everything you need to excel
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our comprehensive platform provides all the tools and features to
            accelerate your programming journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card">
            <CardHeader>
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Code className="h-7 w-7 text-accent" />
              </div>
              <CardTitle className="text-lg">Smart Problem Solving</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Practice with curated problems and get instant feedback with
                detailed explanations for every solution.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card">
            <CardHeader>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-lg">Collaborative Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Join real-time coding sessions and solve problems
                collaboratively with developers worldwide.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card">
            <CardHeader>
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bot className="h-7 w-7 text-accent" />
              </div>
              <CardTitle className="text-lg">AI-Powered Hints</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Get intelligent suggestions and personalized learning paths
                powered by advanced AI technology.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card">
            <CardHeader>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-lg">Progress Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Monitor your improvement with detailed analytics and compete on
                global leaderboards.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
