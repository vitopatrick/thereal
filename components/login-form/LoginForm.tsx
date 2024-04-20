"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
// import { Mail } from "lucide-react";
import Link from "next/link";
import { auth } from "@/config/firebase";
import { toast } from "sonner";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z.string().min(6, { message: "Characters must be more than 6" }),
});

export default function LoginForm() {
  // Router hook
  const router = useRouter();

  // initalize React Hook form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Async function to auth the user
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Try to login
      const { user } = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      localStorage.setItem("TOKEN", user.refreshToken);

      // show toast message
      toast.success("Authentication Successful", { duration: 900 });
      // redirect to the dashboard
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.code, {
        duration: 4000,
      });
    }
  }

  return (
    <Card>
      <CardTitle className="text-white capitalize underline text-center my-3 py-2">
        Sign in to your account
      </CardTitle>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="name@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="xxxx" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-3 my-3">
              {/* Normal button */}
              <Button type="submit" className="w-full block">
                Login Account
              </Button>
            </div>
          </form>
        </Form>
        {/* google account  */}
        {/* <Button className="w-full my-2" variant={"destructive"}>
          <Mail className="mr-2 h-4 w-4" /> Continue With Google
        </Button> */}
        <div className="flex justify-between">
          <Link href={"/forgot-password"} className="text-neutral-400">
            Forgot Password?
          </Link>
          <Link href="/register" className="text-neutral-200 underline">
            Create An Account
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
