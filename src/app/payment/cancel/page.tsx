
import { XCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PaymentCancelPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-400 to-pink-500">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                        <XCircle className="h-12 w-12 text-red-500" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">Payment Unsuccessful</CardTitle>
                    <CardDescription className="text-center">We&apos;re sorry, but your payment couldn&apos;t be processed</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-center">
                        There was an issue processing your payment. This could be due to insufficient funds, an expired card, or a
                        temporary system error.
                    </p>
                    <p className="text-center font-semibold">Don&apos;t worry, no charges were made to your account.</p>
                </CardContent>
                <CardFooter className="flex justify-center space-x-4">
                    <Link href="/checkout">
                        <Button variant="outline">Try Again</Button>
                    </Link>
                    <Link href="/">
                        <Button>Return to Home</Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
