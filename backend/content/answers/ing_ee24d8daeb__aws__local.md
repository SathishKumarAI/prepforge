---
qid: ing_ee24d8daeb__aws__local
question: 'Explain: PACELC Theorem — 11 System Design Concepts Explained, Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 437
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:16:31-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role designing a global recommendation engine I had to decide between latency and consistency for the user profile store. Using the **PACELC theorem**—*“If you’re always partition tolerant (P) and eventually consistent (E), then when there is no partition (L), do you prefer consistency (C) or latency (L)”*—guided my trade‑off.

**Situation:** Our traffic spiked 4× during holiday sales, causing the profile store to hit a partition.  
**Task:** Deliver sub‑200 ms read latency while keeping user data accurate.  
**Action:** I introduced an **event‑driven CQRS pattern**: writes go to a *Kinesis Data Stream* feeding a *Lambda* that updates a **DynamoDB Global Secondary Index (GSI)** for fast reads; the same stream updates an **Aurora Serverless** replica for strong consistency.  
- **AWS services:** Kinesis, Lambda, DynamoDB, Aurora Serverless, CloudWatch.  
- **Scalability/Availability:** Kinesis scales to millions of events per second; DynamoDB provides 99.9 % availability with auto‑scaling.  
- **Cost trade‑off:** We paid ~30 % more for the GSI but reduced read latency from 650 ms to 180 ms, increasing conversion rate by 12 %.  

**Result:** Post‑deployment, read latency dropped to 140 ms on average, while consistency lag never exceeded 200 ms. Revenue grew 8 % in the first month of rollout.  

*Leadership Principles:* **Customer Obsession** (improved user experience), **Ownership** (owning both performance and correctness). The bar‑raiser looks for evidence that I dove deep into trade‑offs, quantified impact, and iterated based on failure data—exactly what this solution demonstrates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
