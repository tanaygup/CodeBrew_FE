import { Card, CardContent } from "@/components/ui/card";

export default function ProblemDescription({ description }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </CardContent>
    </Card>
  );
}
