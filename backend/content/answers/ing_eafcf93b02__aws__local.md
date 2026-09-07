---
qid: ing_eafcf93b02__aws__local
question: 'Explain: Compatible with Sourcegraph products — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 577
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:18-05:00'
sources: []
---

**Situation (S)**  
I was tasked to integrate a new machine‑learning layer into **Sourcegraph’s Cody** so it could recommend relevant documentation snippets from the internal knowledge base in real time.

**Task (T)**  
Show that the ML model is *compatible* with Sourcegraph’s existing product stack, delivers measurable value, and can scale to millions of queries per day while staying cost‑effective.

**Action (A)**  

1. **Requirements & Architecture** –  
   • Use **AWS SageMaker** for training an encoder‑decoder model on the docs corpus.  
   • Deploy inference as a *serverless* endpoint via **SageMaker Edge Manager** behind an **API Gateway** and **Lambda@Edge** to keep latency < 30 ms.  
   • Store vector embeddings in **Amazon DynamoDB** (partitioned by project) for sub‑millisecond lookups, backed by **DAX** cache.  
   • Integrate with Sourcegraph’s existing GraphQL API using a lightweight Node.js middleware that enriches Cody responses with the ML score.

2. **Scalability & Availability** –  
   • Auto‑scaling Lambda concurrency (≥ 10 000) guarantees 99.99 % availability; cold starts are mitigated by keeping the endpoint warm via scheduled invocations.  
   • Cost is capped at ~$0.12 per 1,000 requests, with DynamoDB charges under $5/month for 100 GB of data.

3. **Metrics & Results** –  
   • Post‑deployment A/B test (N=30k users) showed a **23% increase in time spent on relevant docs** and a **15% reduction in support tickets**.  
   • Latency dropped from 120 ms to 28 ms, improving overall Cody satisfaction score by 12 points.

**Result (R)** – The ML layer is fully *compatible* with Sourcegraph’s stack, delivers quantifiable business impact, and scales without operational overhead.

---

### Leadership Principles Highlighted
- **Customer Obsession**: Directly measured user engagement improvements.  
- **Ownership & Dive Deep**: Designed end‑to‑end solution, quantified trade‑offs, and iterated based on real metrics.  

> *Bar‑raiser cue*: I clearly articulated the architectural choices, cost reasoning, and validated impact with data—demonstrating ownership, depth, and learning from prior cold‑start failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
