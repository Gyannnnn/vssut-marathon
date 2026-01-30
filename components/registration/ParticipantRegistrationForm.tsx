"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    age: z.coerce
      .number()
      .min(5, {
        message: "Age must be at least 5.",
      })
      .max(100, {
        message: "Age must be at most 100.",
      }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    gender: z.enum(["male", "female", "other"], {
      message: "Please select a gender.",
    }),
    tshirtSize: z.enum(["XS", "S", "M", "L", "XL", "XXL"], {
      message: "Please select a t-shirt size.",
    }),
    event: z.enum(["5km", "10km", "21km"], {
      message: "Please select an event.",
    }),
    participantType: z.enum(
      ["vssut_student", "non_vssut_student", "overseas_alumni"],
      {
        message: "Please select a participant type.",
      },
    ),
    branch: z.string().optional(),
    regNo: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.participantType === "vssut_student") {
        return !!data.branch && !!data.regNo;
      }
      return true;
    },
    {
      message:
        "Branch and Registration Number are required for VSSUT Students.",
      path: ["branch"],
    },
  )
  .refine(
    (data) => {
      if (data.participantType === "vssut_student") {
        return !!data.regNo;
      }
      return true;
    },
    {
      message: "Registration Number is required.",
      path: ["regNo"],
    },
  );

type FormValues = z.infer<typeof formSchema>;

export function ParticipantRegistrationForm() {
  const [price, setPrice] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      name: "",
      email: "",
      age: undefined,
      gender: undefined,
      tshirtSize: undefined,
      event: undefined,
      participantType: "vssut_student",
      branch: "",
      regNo: "",
    },
  });

  const participantType = form.watch("participantType");

  useEffect(() => {
    switch (participantType) {
      case "vssut_student":
        setPrice(0);
        break;
      case "non_vssut_student":
        setPrice(100);
        break;
      case "overseas_alumni":
        setPrice(5000);
        break;
      default:
        setPrice(0);
    }
  }, [participantType]);

  function onSubmit(values: FormValues) {
    console.log(values);
    alert("Registration Successful (check console for data)");
    // Here you would typically send data to your backend
  }

  return (
    <div className="w-full max-w-2xl sm:mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-1 text-center pb-8 pt-2">
          <h2 className="text-3xl font-bold text-primary">Join the Run</h2>
          <p className="text-lg text-muted-foreground">
            Register for the VSSUT Burla Marathon 2026
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Nihar Rout" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="25" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="nihar@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Event Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Event & Gear
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="event"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select distance" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="5km">5km Fun Run</SelectItem>
                          <SelectItem value="10km">10km Challenge</SelectItem>
                          <SelectItem value="21km">
                            21km Half Marathon
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tshirtSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>T-Shirt Size</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="XS">XS</SelectItem>
                          <SelectItem value="S">S</SelectItem>
                          <SelectItem value="M">M</SelectItem>
                          <SelectItem value="L">L</SelectItem>
                          <SelectItem value="XL">XL</SelectItem>
                          <SelectItem value="XXL">XXL</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Participant Type & Pricing */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                Registration Type
              </h3>
              <FormField
                control={form.control}
                name="participantType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0 bg-white p-4 rounded-lg border hover:border-primary transition-colors cursor-pointer">
                          <FormControl>
                            <RadioGroupItem value="vssut_student" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer flex-1 flex justify-between items-center">
                            <span>VSSUT Student</span>
                            <span className="font-bold text-green-600">
                              Free
                            </span>
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0 bg-white p-4 rounded-lg border hover:border-primary transition-colors cursor-pointer">
                          <FormControl>
                            <RadioGroupItem value="non_vssut_student" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer flex-1 flex justify-between items-center">
                            <span>Non-VSSUT Student</span>
                            <span className="font-bold text-primary">₹100</span>
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0 bg-white p-4 rounded-lg border hover:border-primary transition-colors cursor-pointer">
                          <FormControl>
                            <RadioGroupItem value="overseas_alumni" />
                          </FormControl>
                          <FormLabel className="font-normal cursor-pointer flex-1 flex justify-between items-center">
                            <span>Overseas Alumni</span>
                            <span className="font-bold text-primary">
                              ₹5000
                            </span>
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Conditional Fields for VSSUT Students */}
              {participantType === "vssut_student" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <FormField
                    control={form.control}
                    name="branch"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Branch / Department</FormLabel>
                        <FormControl>
                          <Input placeholder="CSE, ETC, Civil..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="regNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Registration Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Reg No." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}
            </div>

            {/* Total Price */}
            <div className="flex items-center justify-between p-6 bg-gray-900 text-white rounded-xl shadow-lg mt-8">
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
                  Total Payable
                </p>
                <p className="text-3xl font-bold">₹{price}</p>
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-secondary text-primary hover:bg-white hover:text-black font-bold h-12 px-8"
              >
                Proceed to Payment
              </Button>
            </div>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
