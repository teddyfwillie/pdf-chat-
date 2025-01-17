"use client"

import { ThemeProvider } from "@/providers/theme-provider"
import { SupabaseProvider } from "@/providers/supabase-provider"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <SupabaseProvider>{children}</SupabaseProvider>
    </ThemeProvider>
  )
}
