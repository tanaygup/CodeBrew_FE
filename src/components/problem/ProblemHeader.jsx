import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, XCircle } from "lucide-react";

function getDifficultyColor(difficulty) {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400";
    case "medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
    case "hard":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

function getStatusIcon(status) {
  switch (status) {
    case "solved":
      return <CheckCircle className="h-5 w-5 text-emerald-600" />;
    case "attempted":
      return <Clock className="h-5 w-5 text-yellow-600" />;
    default:
      return <XCircle className="h-5 w-5 text-gray-400" />;
  }
}

export default function ProblemHeader({ problem }) {
  return (
    <div>
      <div className="flex items-center space-x-3 mb-4">
        {getStatusIcon(problem.status)}
        <h1 className="text-2xl font-bold">
          {problem.id}. {problem.title}
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <Badge
          className={getDifficultyColor(problem.difficulty)}
          variant="secondary"
        >
          {problem.difficulty}
        </Badge>
        <span className="text-sm text-muted-foreground">
          Acceptance: {problem.acceptanceRate}%
        </span>
        <div className="flex space-x-1">
          {problem.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
