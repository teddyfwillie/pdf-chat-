interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </main>
    </div>
  )
}
