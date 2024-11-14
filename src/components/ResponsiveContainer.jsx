"use client";

import useScreenSize from "./hooks/useScreenSize";

export default function ResponsiveContainer({ children }) {
  const size = useScreenSize();

  return <>{children({ size })}</>;
}
