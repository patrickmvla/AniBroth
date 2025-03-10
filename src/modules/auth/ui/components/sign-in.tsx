"use client";

// External Dependencies
import { useState } from "react";
import { toast } from "sonner";
import { Github, Loader2 } from "lucide-react";

// Internal Dependencies
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { signIn } from "../../lib/auth-client";

export const SignIn = () => {
  const [loadingGithub, setLoadingGithub] = useState(false);

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
        <CardDescription className="text-xn md:text-sm">
          Enter your email below to login
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0 pb-0">
        <div
          className={cn(
            "w-full gap-2 flex items-center mt-2",
            "justify-between flex-col"
          )}
        >
          <Button
            variant="outline"
            disabled={loadingGithub}
            className={cn("w-full gap-2")}
            onClick={async () => {
              await signIn.social({
                provider: "google",
                callbackURL: "/home",
                fetchOptions: {
                  onResponse: () => {
                    setLoadingGithub(false);
                  },
                  onRequest: () => {
                    setLoadingGithub(true);
                  },
                  onError: (ctx) => {
                    toast.error(ctx.error.message);
                  },
                },
              });
            }}
          >
            {loadingGithub ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Github size={16} />
            )}
            Continue with Github
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
