"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Smartphone, Medal } from "lucide-react";

export default function VirtualRunPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-background pt-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6 pt-12"
          >
            Virtual Run
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Can't make it to Burla? Join the movement from anywhere in the
            world.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Participate globally and be part of the VSSUT spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 bg-blue-50/50 border-blue-100">
            <CardHeader className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Smartphone className="w-8 h-8" />
              </div>
              <CardTitle>1. Register & Download App</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Sign up for the Virtual 5K category. Download our partner
                tracking app or use Strava/Garmin.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-orange-50/50 border-orange-100">
            <CardHeader className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600">
                <Globe className="w-8 h-8" />
              </div>
              <CardTitle>2. Run Anywhere</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                On January 11th, run 5K at your location. Park, treadmill, or
                your neighborhood.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 bg-green-50/50 border-green-100">
            <CardHeader className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                <Medal className="w-8 h-8" />
              </div>
              <CardTitle>3. Submit & Earn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Upload your run screenshot. Receive your E-Certificate and Medal
                via post (optional).
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-bold px-10 py-6 text-lg rounded-full"
          >
            Register for Virtual Run
          </Button>
        </div>
      </div>
    </div>
  );
}
