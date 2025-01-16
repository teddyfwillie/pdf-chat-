"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Trash2, MessageSquare } from "lucide-react";
import Link from "next/link";

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  uploadedAt: string;
  chats: number;
}

const mockFiles: UploadedFile[] = [
  {
    id: "1",
    name: "business-proposal.pdf",
    size: "2.4 MB",
    uploadedAt: "2024-01-15",
    chats: 5,
  },
  {
    id: "2",
    name: "technical-spec.pdf",
    size: "1.8 MB",
    uploadedAt: "2024-01-14",
    chats: 3,
  },
];

export default function UploadsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Uploads</h2>
          <p className="text-muted-foreground">
            Manage your uploaded PDF documents.
          </p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Upload PDF
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="rounded-md border">
            <div className="grid grid-cols-5 p-4 text-sm font-medium text-muted-foreground">
              <div className="col-span-2">Name</div>
              <div>Size</div>
              <div>Uploaded</div>
              <div>Actions</div>
            </div>
            {mockFiles.map((file) => (
              <div
                key={file.id}
                className="grid grid-cols-5 items-center border-t p-4 hover:bg-muted/50"
              >
                <div className="col-span-2 font-medium">{file.name}</div>
                <div>{file.size}</div>
                <div>{file.uploadedAt}</div>
                <div className="flex space-x-2">
                  <Link href={`/chat?pdf=${file.id}`}>
                    <Button variant="ghost" size="icon">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
