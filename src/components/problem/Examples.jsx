import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Examples({ examples }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Examples</CardTitle>
      </CardHeader>
      <CardContent>
        {examples.map((ex, i) => (
          <div key={i} className="mb-6 last:mb-0">
            <h4 className="font-semibold mb-2">Example {i + 1}:</h4>
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
              <div className="mb-2">
                <span className="text-muted-foreground">Input: </span>
                {ex.input}
              </div>
              <div className="mb-2">
                <span className="text-muted-foreground">Output: </span>
                {ex.output}
              </div>
              {ex.explanation && (
                <div>
                  <span className="text-muted-foreground">Explanation: </span>
                  {ex.explanation}
                </div>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
