// Simple custom hook to simulate authentication
import { useState } from "react";

export function useAuth() {
  // simulate login state
  const [isAuthenticated] = useState(true);
  return { isAuthenticated };
}
