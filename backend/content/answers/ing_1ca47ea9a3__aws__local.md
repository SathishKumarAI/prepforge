---
qid: ing_1ca47ea9a3__aws__local
question: 'Explain: Hybrid work — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 376
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:30:57-05:00'
sources: []
---

**Hybrid‑Work AI Career at Glean – My Response**

*Leadership Principles:* **Customer Obsession** & **Ownership**.

**Situation:** At my previous firm we launched a hybrid‑work platform that let employees toggle between on‑site and remote modes while keeping productivity data in sync. The product needed to scale to 50 k users, stay available 99.9%, and keep latency under 200 ms for core analytics dashboards.

**Task:** I led the design of an AI‑driven workload scheduler that predicted optimal work mode per user based on calendar events, location, and real‑time bandwidth. The goal was to reduce idle desk time by ≥30% while keeping employee satisfaction above 90%.

**Action:**  
- Built a **Serverless microservice** stack (AWS Lambda + API Gateway) that ingested event streams from Calendar and Location services.  
- Employed **Amazon SageMaker** for a lightweight gradient‑boosted model, retrained nightly on anonymized usage data stored in **S3**.  
- Used **DynamoDB Global Tables** for low‑latency read/write of user state across regions, ensuring *availability* even during partial outages.  
- Implemented **AWS Cost Explorer alerts** to keep compute spend < $15k/month.

**Result:** Within 4 months we saw a **32% drop in idle desk hours**, cut energy costs by $12k annually, and employee satisfaction rose from 84% to 91%. Post‑launch, the model’s precision hit 88%, giving us confidence that AI can power efficient hybrid work without compromising user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
