import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out our service",
    features: [
      "5 PDFs per month",
      "100 chat messages",
      "2MB file size limit",
      "Basic support",
    ],
    current: true,
  },
  {
    name: "Pro",
    price: "$10",
    description: "For power users who need more",
    features: [
      "Unlimited PDFs",
      "Unlimited chat messages",
      "25MB file size limit",
      "Priority support",
      "Advanced analytics",
    ],
    current: false,
  },
];

export default function BillingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Billing</h2>
        <p className="text-muted-foreground">
          Manage your subscription and billing information.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {plans.map((plan) => (
          <Card key={plan.name}>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-between">
                  <span>{plan.name}</span>
                  <span className="text-2xl font-bold">{plan.price}</span>
                </div>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {plan.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={plan.current ? "outline" : "default"}>
                {plan.current ? "Current Plan" : "Upgrade"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-sm font-medium">
                  •••• •••• •••• 4242
                </div>
                <div className="text-sm text-muted-foreground">
                  Expires 12/2024
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-4 p-4 text-sm font-medium text-muted-foreground">
              <div>Date</div>
              <div>Amount</div>
              <div>Status</div>
              <div>Invoice</div>
            </div>
            <div className="grid grid-cols-4 items-center border-t p-4">
              <div className="text-sm">Jan 1, 2024</div>
              <div className="text-sm">$10.00</div>
              <div className="text-sm text-green-600">Paid</div>
              <Button variant="ghost" size="sm">
                Download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
