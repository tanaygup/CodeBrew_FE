import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-muted to-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
          Join <span className="text-accent">10,000+</span> developers mastering
          their craft
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Start your coding journey today and unlock your potential with our
          comprehensive learning platform.
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all group"
          asChild
        >
          <Link href="/signup">
            Begin Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
