import { Button } from "./components";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout/Layout";

export function OrderSummary() {
  return (
    <Layout>
      <Card>
        <Card.Image
          src="/order-summary-card-component/illustration-hero.svg"
          alt="Woman Dancing With Headphones Image"
        />
        <Card.Title>Order Summary</Card.Title>
        <Card.Description>
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
        </Card.Description>
        <div></div>
        <div>
          <Button>Proceed to Payment</Button>
        </div>
        <div>
          <Button>Cancel Order</Button>
        </div>
      </Card>
    </Layout>
  );
}
