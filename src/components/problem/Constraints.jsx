import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Constraints({ constraints }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Constraints</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {constraints.map((c, i) => (
            <li
              key={i}
              className="text-sm font-mono bg-muted/30 px-3 py-2 rounded"
            >
              {c}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
