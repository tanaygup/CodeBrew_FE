import React from "react";
import Link from "next/link";
import { Code } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/" className="flex items-center space-x-2">
        <div className="p-2 bg-accent/10 rounded-lg">
          <Code className="h-6 w-6 text-accent" />
        </div>
        <span className="font-bold text-xl text-foreground">CodeBrewer</span>
      </Link>
    </div>
  );
};

export default Logo;
