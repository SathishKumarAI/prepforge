---
qid: ing_34f5142411__star__local
question: 'Explain: Subscription Management System — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 307
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:14:12-05:00'
sources: []
---

**Situation**  
While leading a fintech startup, we noticed our monthly churn rate spiked from 4% to 9% after launching a new tiered pricing model. The existing billing engine was monolithic and couldn’t handle dynamic subscription changes or promotional rules.

**Task**  
I had to redesign the Subscription Management System (SMS) so it could support real‑time plan upgrades, coupon stacking, proration, and integrate with our payment gateway without downtime, while keeping latency under 200 ms for user-facing APIs.

**Action**  
I broke the system into microservices: a **Plan Service** (PostgreSQL + Redis cache), an **Eligibility Engine** (Python/Flask using rule‑based engine), and a **Billing Scheduler** (Kafka streams to trigger invoicing). I introduced an event‑driven architecture, used gRPC for low‑latency calls, and leveraged Stripe’s webhooks for payment reconciliation. To ensure consistency, I implemented Sagas with compensating transactions. For observability, I added distributed tracing via OpenTelemetry.

**Result**  
The new SMS cut churn to 3% within two months, reduced billing errors by 85%, and allowed us to roll out promotions in under 10 seconds. I learned that decoupling services and using event sourcing can dramatically improve both reliability and agility in subscription platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
