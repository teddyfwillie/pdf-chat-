"use client";

import {
  Sidebar,
  SidebarBody,
  SidebarLink,
  useSidebar,
  SidebarProvider,
} from "@/components/dashboard/sidebar";
import {
  Home,
  User,
  FileText,
  MessageSquare,
  CreditCard,
  Settings,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <Home className="w-4 h-4 text-neutral-500" />,
  },
  {
    label: "Chat",
    href: "/chat",
    icon: <MessageSquare className="w-4 h-4 text-neutral-500" />,
  },
  {
    label: "Uploads",
    href: "/uploads",
    icon: <FileText className="w-4 h-4 text-neutral-500" />,
  },

  {
    label: "Billing",
    href: "/billing",
    icon: <CreditCard className="w-4 h-4 text-neutral-500" />,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: <User className="w-4 h-4 text-neutral-500" />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <Settings className="w-4 h-4 text-neutral-500" />,
  },
];

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
  const { setOpen } = useSidebar();

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Mobile Header */}
      <div className="sticky top-0 z-40 flex items-center justify-between px-4 py-4 bg-white dark:bg-neutral-800 border-b md:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex h-[calc(100vh-4rem)] md:h-screen">
        <Sidebar>
          <SidebarBody>
            <div className="flex flex-col gap-1 px-2">
              {links.map((link) => (
                <SidebarLink key={link.href} link={link} />
              ))}
            </div>
          </SidebarBody>
        </Sidebar>

        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-4 md:p-6 max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </SidebarProvider>
  );
}
