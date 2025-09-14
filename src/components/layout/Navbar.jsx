// src/components/layout/Navbar.jsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Code className="h-6 w-6 text-accent" />
              </div>
              <span className="font-bold text-xl text-foreground">CodeBrewer</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/problems" className="text-muted-foreground hover:text-accent transition-colors font-medium">
              Problems
            </Link>
            <Link href="/leaderboard" className="text-muted-foreground hover:text-accent transition-colors font-medium">
              Leaderboard
            </Link>
            <Link href="/login" className="text-muted-foreground hover:text-accent transition-colors font-medium">
              Login
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
