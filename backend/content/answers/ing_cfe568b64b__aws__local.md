---
qid: ing_cfe568b64b__aws__local
question: Should we choose Consistency or Availability for our service?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 446
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:10:52-05:00'
sources: []
---

**Situation & Decision**  
I led the redesign of a real‑time recommendation engine for our e‑commerce platform. The new service had to process ≈ 10 M requests per day while keeping latency < 50 ms. We faced a classic CAP trade‑off: should we prioritize **Availability** (serve every request) or **Consistency** (exact, up‑to‑date recommendations)?

**Task**  
Determine the right balance and design an architecture that meets SLAs without overspending.

**Action**  
1. *Dive Deep*: Collected latency & error data from the legacy system—5 % of requests returned stale data after a 2‑second cache miss, leading to a 3 % drop in conversion rate.  
2. *Bias for Action*: Chose **Eventual Consistency** with a short “read‑your‑writes” window (≤ 200 ms) using **Amazon DynamoDB** (global tables + conditional writes).  
3. *Invent & Simplify*: Added an **SQS FIFO queue** to serialize updates, ensuring no duplicate recommendation calculations.  
4. *Cost & Availability*: Leveraged **AWS Global Accelerator** for low‑latency routing and **Auto Scaling Groups** behind a **ALB** to maintain 99.99 % availability.

**Result**  
- Latency dropped from 70 ms → 45 ms (30 % improvement).  
- Conversion rate rose by 2.7 %, translating to an estimated $1.8 M annual revenue lift.  
- Cost stayed within 12 % of the previous budget due to efficient use of DynamoDB on‑demand capacity.

**Bar‑raiser Takeaway**  
Ownership: I owned both data quality and cost.  
Dive Deep: I quantified stale‑data impact with real metrics.  
Learning from failure: The pilot revealed a rare race condition; we added optimistic locking, improving reliability by 99.5 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
