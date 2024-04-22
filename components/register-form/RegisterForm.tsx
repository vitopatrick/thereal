"use client";

import React from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
// import { Mail } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, store } from "../../config/firebase";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";

const formSchema = z.object({
  name: z.string().min(1, { message: "Field is Important" }),
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z.string().min(6, { message: "Characters must be more than 6" }),
  telephone: z.string().min(1, { message: "Field is Important" }),
});

export default function RegisterForm() {
  // Initaialize the Hook
  const router = useRouter();

  // set up React Hook form with ShadeCN
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      telephone: "",
      name: "",
    },
  });

  // Async function to Create Users
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      //  create the user
      const { user } = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // Create the user and the re-route to the dashboard
      const userStorageRefrenece = doc(store, "/users", `/${user.email}`);
      // Create the users credentials for firestore
      await setDoc(userStorageRefrenece, {
        name: values.name,
        email: values.email,
        telephone: values.telephone,
        password: values.password,
        balance: 0,
        profit: 0,
        address: 1,
        trading_account_balance: 0,
        trading_password: null,
        trading_stage: 0,
        verfied: false,
        wallets: {
          btc: 0,
          eth: 0,
          trx: 0,
          usdt: 0,
        },
      });

      // send the toast message
      toast.success("Account Created", {
        duration: 900,
      });

      await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
        }),
      });

      // re route to the dashboard
      router.push("/dashboard");
    } catch (error: any) {
      toast.error(error.code, {
        duration: 4000,
      });
    }
  }

  return (
    <div className="flex-1 h-screen p-3 flex justify-center items-center">
      {/* flex container */}
      <div className="space-y-6">
        {/* globe and write up */}
        <div className="flex items-center gap-4">
          <img src="/globe.png" alt="globe" className="w-[15%]" />
          <div className="space-y-3">
            <h3 className="font-bold text-3xl">JOIN THE REAL WORLD</h3>
            <p className="text-2xl">ESCAPE THE MATRIX</p>
          </div>
        </div>
        {/* form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="bg-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="name@example.com"
                      {...field}
                      className="bg-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* telephone */}
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutral-200">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+345"
                      {...field}
                      type="tel"
                      className="bg-transparent"
                    />
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
                    <Input
                      placeholder="xxxx"
                      {...field}
                      type="password"
                      className="bg-transparent"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="space-y-3 my-3">
              {/* Normal button */}
              <Button
                type="submit"
                className="w-full block bg-orange-500 hover:bg-orange-400"
                variant={"secondary"}
              >
                Create Account
              </Button>
            </div>
          </form>
        </Form>
        {/* <Button className="w-full my-2" variant={"destructive"}>
          <Mail className="mr-2 h-4 w-4" /> Continue With Google
        </Button> */}
        {/* sign in */}
        <Link href="/login" className="underline text-neutral-300 my-2 block">
          Sign In Account
        </Link>
      </div>
    </div>
  );
}
