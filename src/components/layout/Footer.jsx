// src/components/layout/Footer.jsx
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors font-medium">
            About
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors font-medium">
            Contact
          </Link>
          <Link href="/privacy" className="text-muted-foreground hover:text-accent transition-colors font-medium">
            Privacy Policy
          </Link>
          <Link
            href="https://github.com"
            className="text-muted-foreground hover:text-accent transition-colors font-medium"
          >
            GitHub
          </Link>
        </div>
        <div className="text-center mt-8 text-muted-foreground">
          <p>&copy; 2024 CodePractice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
