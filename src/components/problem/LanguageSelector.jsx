"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function LanguageSelector({ onChange, defaultValue = "cpp" }) {
  const [language, setLanguage] = useState(defaultValue);

  const handleChange = (value) => {
    setLanguage(value);
    onChange?.(value);
  };

  return (
    <Select value={language} onValueChange={handleChange}>
      <SelectTrigger className="w-20">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="cpp">C++</SelectItem>
        <SelectItem value="java">Java</SelectItem>
        <SelectItem value="javascript">JavaScript</SelectItem>
        <SelectItem value="python">Python</SelectItem>
      </SelectContent>
    </Select>
  );
}
