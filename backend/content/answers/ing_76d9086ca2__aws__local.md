---
qid: ing_76d9086ca2__aws__local
question: 'Q: Why not just provide all 50 examples we have in the prompt?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 592
total_tokens: 827
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:53:56-05:00'
sources: []
---

**Situation (S)**  
In a prior project I was asked to deliver a prompt‑generation service for a conversational AI product that had **50 distinct example prompts**. The goal was to expose users to a diverse set of use cases while keeping the API response time under 200 ms.

**Task (T)**  
I had to decide whether to ship all 50 examples in every request or to implement a smarter selection strategy that would still satisfy customers but reduce latency and cost.

**Action (A)**  

| Decision | AWS Services Used | Why |
|----------|------------------|-----|
| **Store the prompt set in S3 + DynamoDB** | • S3 for bulk storage<br>• DynamoDB for metadata (tags, popularity) | Enables fast lookup and cost‑effective storage. |
| **Cache popular prompts in Elasticache Redis** | • Redis cluster with read replicas | Reduces cold‑start latency by 70 % and cuts Lambda invocations by ~40 %. |
| **Use a Lambda “selector” that samples 5–10 prompts based on user intent & recency** | • AWS Lambda (Python) | Keeps response payload small, meets SLA. |
| **Metrics dashboard in CloudWatch + QuickSight** | • Custom metrics: latency, cache hit rate, cost per request | Provides visibility for continuous improvement. |

**Result (R)**  

* Response latency dropped from 320 ms to **210 ms** (32 % improvement).  
* Per‑request data transfer fell by **85 %**, cutting monthly API costs from $12k to $1.8k.  
* User satisfaction scores rose from 3.6/5 to **4.2/5** in a post‑deployment survey, because the AI still surfaced relevant examples without overwhelming bandwidth.

---

### Leadership Principles Anchored

- **Customer Obsession** – I focused on delivering fast, relevant prompts that improved user experience.  
- **Ownership & Dive Deep** – I owned the entire data pipeline, from storage to caching, and dove deep into performance metrics to iterate quickly.  

### What a Bar‑Raiser Looks For

1. **Quantified Impact** – Clear numbers on latency, cost savings, and satisfaction.  
2. **Depth (Dive Deep)** – Detailed rationale for each service choice and trade‑off analysis.  
3. **Learning from Failure** – Highlighted how initial naive “send all 50” approach failed to meet SLA and cost constraints, leading to the refined solution.

This structured approach demonstrates ownership, data‑driven decision making, and a scalable architecture that aligns with Amazon’s principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
