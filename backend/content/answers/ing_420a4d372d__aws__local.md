---
qid: ing_420a4d372d__aws__local
question: 'Explain: Recall vs Latency Tradeoff — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 443
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:55:20-05:00'
sources: []
---

**Recall vs. Latency in Vector DBs – My Experience**

*Situation*: In my last role I led a feature that surfaced product recommendations for millions of users in real‑time. The recommendation engine used an open‑source vector store (Pinecone) to fetch the top‑k nearest vectors for each query.

*Task*: Balance **recall** (percentage of relevant items retrieved) against **latency** (≤ 120 ms per request) while keeping cost under $20K/month.

*Action*:  
1. **Quantified impact**: Measured recall by a precision@10 curve on a held‑out test set, and latency with CloudWatch metrics.  
2. **Design**: Deployed two clusters – a *hot* 2‑node cluster for the most popular 5 % of queries (low latency, high recall) and a *cold* 6‑node cluster that cached less frequent vectors. We used **Amazon ECS + Fargate** to spin up new nodes on demand, and **S3 + DynamoDB** to stage embeddings.  
3. **Trade‑offs**: Adding more replicas boosted recall by 3 % but increased latency by ~30 ms; we capped replicas at 4 per shard. Cost was $18K/month, within budget.  
4. **Bias for Action & Ownership**: I ran A/B tests in production, rolled back when latency exceeded SLA, and documented the decision matrix.

*Result*: Recall improved from 72 % to 85 % while keeping median latency at 110 ms, translating into a 12 % lift in click‑through rate. The solution was adopted company‑wide and reduced infrastructure spend by 15 %.  

**Leadership Principles**: *Customer Obsession* (better recommendations), *Ownership* (end‑to‑end delivery), *Dive Deep* (metrics‑driven tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
