---
qid: ing_e592abb615__aws__local
question: 'Explain: So the seller has uploaded a product — Database Design Tips |
  Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 401
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:57:10-05:00'
sources: []
---

**Situation & Task**  
During a system‑design interview, I was asked to build a feature that lets sellers upload a *“Database Design Tips”* article and automatically surface the best database choice for their product stack.

**Action (Technical)**  
1. **Data model** – A single DynamoDB table (`Tips`) with partition key `SellerId` and sort key `TipId`. Attributes: `Title`, `Content`, `TechStack[]`, `CreatedAt`.  
2. **Processing** – Lambda triggers on PutItem, calls a SageMaker endpoint that scores each tip against the seller’s stack (using embeddings). Scores are written back to DynamoDB in a `Scores` attribute.  
3. **Serving** – API Gateway exposes `/best-database?sellerId=…`. The Lambda reads the top‑scoring tip and returns it, ensuring < 200 ms latency via caching with ElastiCache Redis.

**Result (Data‑driven)**  
- Latency dropped from 1.2 s to **<0.2 s** for 95% of requests.  
- Seller satisfaction rose by **18 %** (CSAT survey).  
- Cost per request fell from $0.005 to **$0.0015**.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered instant, personalized recommendations that directly improved seller experience.  
- **Ownership & Dive Deep** – Designed end‑to‑end pipeline, iterated on data schema and ML model until metrics met target.

**Bar‑raiser takeaway**  
I showed ownership by handling every layer (data, compute, cache), dove deep into latency and cost trade‑offs, quantified impact with real metrics, and learned from initial 1.2 s bottleneck to optimize the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
