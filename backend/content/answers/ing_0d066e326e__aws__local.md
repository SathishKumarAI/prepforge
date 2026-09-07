---
qid: ing_0d066e326e__aws__local
question: 'Explain: Amazon SNS resource — Amazon Simple Notification Service endpoints
  and quotas - AWS General Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 461
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:55:10-05:00'
sources: []
---

**Situation / Task**  
While leading the migration of our on‑prem event bus to a fully serverless architecture, I was tasked with replacing dozens of legacy polling services with Amazon SNS so that downstream data‑processing jobs could react instantly to inventory updates.

**Action**  
I first scoped the required *resource limits* (SNS topics, subscriptions, message size, and API request quotas) from the AWS General Reference. To stay within the default 100 000 requests/second per region, I designed a **partitioned topic strategy**: each SKU family gets its own topic, and we publish to them via an **AWS Lambda fan‑out** that batches messages into 256 KB payloads (the SNS max).  
I also enabled **SNS message filtering** on the subscription level so that each consumer receives only relevant events—eliminating unnecessary traffic. For durability I set **Amazon CloudWatch Logs** retention to 90 days and used **AWS X-Ray** for end‑to‑end tracing, ensuring we could audit every notification.

**Result**  
After deployment, our real‑time processing latency dropped from 4 s (polling) to <300 ms. The partitioned approach kept us below the SNS quota even during peak traffic spikes of 1.2 M messages/hour, and overall cost decreased by **32%** compared to the previous architecture.  

---

### Leadership Principles Anchored
- **Customer Obsession:** Delivered instant updates to downstream teams that reduced their manual reconciliation time by 75%.  
- **Ownership & Dive Deep:** Took full responsibility for understanding SNS quotas, designing a scalable partitioned solution, and troubleshooting edge‑case throttling.

### What the Bar‑Raiser Listens For
| Indicator | Why It Matters |
|-----------|----------------|
| Quantified impact (latency, cost) | Shows real business value |
| Deep technical dive into limits & design trade‑offs | Demonstrates ownership and depth |
| Learning from a failed initial attempt (throttling on single topic) | Illustrates resilience and continuous improvement |

This showcases my ability to balance AWS service constraints with customer needs while driving measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
