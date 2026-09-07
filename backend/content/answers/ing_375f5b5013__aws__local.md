---
qid: ing_375f5b5013__aws__local
question: 'Explain: for DynamoDB replication so when we propagate'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 573
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:29:48-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led the migration of our recommendation engine from a single‑region RDS cluster to a multi‑region architecture using **DynamoDB Global Tables**. The goal was to reduce read latency for international users and improve fault tolerance during the 2023 regional outage that knocked out our primary zone.

**Task (T)**  
I had to design a replication strategy that kept data consistent across three regions while keeping write amplification low, all under a $30k/month budget.

**Action (A)**  
1. **Ownership & Dive Deep:** I mapped every write path and identified the *eventual consistency* window as the critical risk.  
2. **Design Choices:**
   - Enabled **DynamoDB Global Tables** with automatic multi‑region replication (US‑East, EU‑West, AP‑South).  
   - Configured **point‑in‑time recovery (PITR)** and **on‑demand backups** for disaster recovery.  
   - Used **AWS Lambda + DynamoDB Streams** to reconcile any conflict via a *last‑write‑wins* strategy tailored to our recommendation timestamp.  
3. **Scalability & Cost:** Leveraged **Provisioned Capacity with Auto Scaling** (50‑200 RCU/WCU per region) and switched to **On‑Demand** during peak traffic spikes, keeping average cost at $28k/month.  
4. **Availability:** Implemented a **health‑check + failover Lambda** that rerouted traffic to the nearest healthy endpoint within 30 ms.

**Result (R)**  
- Reduced global read latency from 350 ms to **120 ms** (a 66% drop).  
- Cut regional outage impact time by **>95%**, with no data loss.  
- Maintained cost below target, achieving a **$2k/month savings** compared to the planned RDS multi‑AZ design.

---

### What a bar‑raiser looks for
| Expectation | Why it matters |
|-------------|----------------|
| **Ownership** | Demonstrates taking full responsibility from migration through post‑deployment monitoring. |
| **Dive Deep** | Shows understanding of DynamoDB internals (Global Tables, Streams, conflict resolution). |
| **Quantified Impact** | Provides concrete latency and cost metrics that tie directly to business goals. |
| **Learning from Failure** | Mentions the 2023 outage as a catalyst for design changes, highlighting resilience focus. |

This answer aligns with Amazon’s Leadership Principles: **Customer Obsession (improved user experience), Ownership, Dive Deep, Bias for Action, Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
