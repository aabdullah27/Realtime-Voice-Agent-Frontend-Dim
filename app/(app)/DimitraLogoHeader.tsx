import * as React from "react";
import { DimitraLogo } from "@/components/dimitra-logo";

export default function DimitraLogoHeader() {
  return (
    <div className="flex items-center">
      <DimitraLogo className="h-16 w-auto drop-shadow-lg" />
    </div>
  );
}
