"use client";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function PaymentSuccessPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-600 px-4">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Card className="w-full max-w-sm shadow-lg border border-gray-200 bg-white">
                    <CardHeader className="flex flex-col items-center">
                        <motion.div
                            className="mb-4"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            <CheckCircle className="h-16 w-16 text-green-500" />
                        </motion.div>
                        <CardTitle className="text-2xl font-bold text-center text-gray-800">Payment Successful!</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-gray-600 text-sm">
                        <p>Your transaction has been completed successfully.</p>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Link href="/">
                            <Button className="px-6 py-2 text-white transition-all">
                                Return to Home
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}