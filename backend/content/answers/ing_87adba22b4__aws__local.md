---
qid: ing_87adba22b4__aws__local
question: 'Explain: Browserbase offers usage-based billing for an AI agent browser
  with Stripe.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 504
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:30:56-05:00'
sources: []
---

**Situation** – At my last role, we built a headless‑browser service that let customers run AI agents in real time. The business model required us to bill per actual usage (seconds of compute + data transfer) rather than flat monthly plans.

**Task** – Design an end‑to‑end billing pipeline that scales to millions of short sessions, guarantees 0.1 % revenue leakage, and integrates with Stripe for instant payouts.

**Action**  
- **Instrumentation & Metrics**: Added a lightweight telemetry agent in each browser instance that emits `session_start`, `session_end`, and cumulative CPU/GPU ticks to an Amazon Kinesis stream (latency < 200 ms).  
- **Aggregation Layer**: A fleet of Lambda functions consume the stream, compute per‑user totals, and write a single *usage record* into DynamoDB (`partition key = user_id`). Using **DynamoDB Streams** we trigger a second Lambda that pushes the final bill to an SQS queue.  
- **Billing Service**: An EC2 Auto Scaling group hosts a stateless Node.js service that pulls from SQS, constructs Stripe `invoice_item`s via the Stripe API (using the official SDK), and calls `stripe.invoice.create`. The service is wrapped in a Circuit Breaker to avoid cascading failures.  
- **Cost Controls**: Leveraging AWS Cost Explorer we set budgets of $1 M/month with alerts at 90 % spend, ensuring no runaway charges from mis‑instrumented agents.

**Result** – Reduced billing latency from 24 h to < 5 min, cut revenue leakage by 95 %, and achieved a 99.9 % success rate for invoicing across 10M+ sessions/month.  

---

### Leadership Principles  
- **Customer Obsession**: Delivered instant, accurate invoices so partners could trust our platform.  
- **Ownership**: Took end‑to‑end responsibility for the billing pipeline, from telemetry to Stripe integration.

### Bar‑raiser signals  
- Demonstrated ownership and deep technical dive (Kinesis → Lambda → DynamoDB → SQS).  
- Quantified impact with precise metrics (latency, leakage %, success rate).  
- Learned from a prior failure where we missed late‑arriving events; introduced deduplication logic to prevent double billing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
