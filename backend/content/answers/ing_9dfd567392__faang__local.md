---
qid: ing_9dfd567392__faang__local
question: 'Explain: Linear partners with Stripe to handle billing and payments.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 744
total_tokens: 979
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:51:33-05:00'
sources: []
---

**Clarify**  
The question asks how a company (Linear) can integrate with Stripe so that it can bill its users and process their payments. I’ll assume Linear wants a reliable, PCI‑compliant payment flow, supports subscriptions, one‑time charges, and refunds, and wants to keep the integration maintainable.

---

### Approach
1. **Define business flows** – subscribe → plan change → cancel → refund.  
2. **Choose Stripe API patterns** – use *Checkout Sessions* for quick onboarding, *Subscriptions* for recurring billing, and *Invoices* for manual or automated invoicing.  
3. **Securely store minimal customer data** – keep only the `customer_id` and subscription ID; never persist raw card details.  
4. **Handle webhooks** – subscribe to `checkout.session.completed`, `invoice.payment_succeeded`, `payment_intent.failed`, etc., to update Linear’s DB in real time.  
5. **Error handling & retry logic** – use Stripe’s idempotency keys and implement exponential back‑off for network glitches.

---

### Depth (Implementation sketch)

```python
# 1️⃣ Create a customer
customer = stripe.Customer.create(email=user.email, name=user.name)

# 2️⃣ Initiate Checkout Session (one‑time or subscription)
session = stripe.checkout.Session.create(
    payment_method_types=['card'],
    mode='subscription',          # or 'payment'
    line_items=[{
        'price': price_id,       # pre‑created Stripe Price
        'quantity': 1,
    }],
    client_reference_id=user.id,   # for matching in webhook
    success_url=SUCCESS_URL,
    cancel_url=CANCEL_URL,
)

# 3️⃣ Store session id → user mapping; redirect frontend to session.url

# Webhook (simplified)
@router.post("/webhooks/stripe")
def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get('Stripe-Signature')
    event = stripe.Webhook.construct_event(payload, sig_header, endpoint_secret)

    if event.type == 'checkout.session.completed':
        session = event.data.object
        user_id = session.client_reference_id
        # create subscription record in DB using session.subscription
```

- **Complexity**: O(1) API calls per transaction; Stripe handles scaling.  
- **Trade‑offs**: Checkout abstracts UI but limits custom styling; building a full payment flow via `PaymentIntents` gives more control but adds complexity.

---

### Edge Cases
| Case | What can break | Test |
|------|----------------|------|
| User cancels mid‑checkout | Session may never complete | Simulate cancel on Stripe dashboard |
| Payment fails (insufficient funds) | Subscription not created | Mock `payment_intent.failed` webhook |
| Duplicate webhooks | Double billing | Replay same event twice, ensure idempotency |
| Currency mismatch | Invoices wrong amount | Verify with multi‑currency accounts |

---

### Optimize & Communicate
- **Performance**: Cache price objects locally; use async calls.  
- **Security**: Store only Stripe IDs; enable 3D Secure where required.  
- **Observability**: Log webhook payloads, monitor failed retries.  

When presenting this to interviewers, I’d emphasize the clear mapping between business requirements and Stripe primitives, highlight idempotency for safety, and show how we keep the integration lean yet robust—key signals of a well‑structured FAANG answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
