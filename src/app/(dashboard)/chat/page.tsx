"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: string;
}

const mockMessages: Message[] = [
  {
    id: "1",
    content: "Hello! How can I help you with your PDF document today?",
    role: "assistant",
    timestamp: "2024-01-16T10:00:00",
  },
  {
    id: "2",
    content: "Can you summarize the main points of the document?",
    role: "user",
    timestamp: "2024-01-16T10:01:00",
  },
];

export default function ChatPage() {
  return (
    <div className="flex h-[calc(100vh-2rem)] flex-col space-y-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Chat</h2>
        <p className="text-muted-foreground">
          Chat with your PDF documents using AI.
        </p>
      </div>

      <Card className="flex-1">
        <CardContent className="flex h-full flex-col p-6">
          <div className="flex-1 space-y-4 overflow-y-auto">
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-lg px-4 py-2 max-w-[80%] ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 flex space-x-2">
            <Input
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
