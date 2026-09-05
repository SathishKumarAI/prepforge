---
qid: ing_8f2ebd68d8__star__local
question: Your agent charged a customer's card twice. The trace shows one tool call.
  What happened, and how do you prevent it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 354
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:25-05:00'
sources: []
---

**Situation** – While integrating the Stripe payment API into our chatbot for a subscription service, we received a support ticket from a user who was charged twice for a single order. The debug trace showed only one tool call to `/charges` with identical parameters.

**Task** – I needed to identify why two charges were created from a single API request and implement a safeguard so this never happens again while keeping the agent’s flow seamless.

**Action** – First, I replayed the exact payload against Stripe’s sandbox. The issue turned out to be the lack of an idempotency key: our retry middleware automatically resent the call when the network hiccup returned a timeout, and Stripe treated each request as a new charge because no unique key was supplied. To fix it, I added a UUID-based idempotency header (`Idempotency-Key`) generated per user session, stored the key in Redis with the charge status, and modified the agent to check this cache before invoking the tool. I also updated our monitoring to flag any duplicate `id` responses from Stripe.

**Result** – After deployment, we saw a 0 % recurrence of double charges over two months, saving an estimated $4k in refunds and improving user trust scores by 15%. I learned that even a single missing header can cascade into significant financial loss, so idempotency must be baked into every external API call.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
