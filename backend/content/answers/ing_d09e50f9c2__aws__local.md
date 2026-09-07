---
qid: ing_d09e50f9c2__aws__local
question: 'Explain: Interview Follow-Up Questions — Real Time Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 403
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:12:37-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my last role I was asked to build a *real‑time search* layer for an e‑commerce catalog that could surface personalized product suggestions within 200 ms, even during flash sales when traffic spiked 8×.  

**Action (Dive Deep + Bias for Action)**  
1. **Requirements & Architecture** – I scoped latency, consistency and cost.  
   *Use Amazon OpenSearch Service* as the primary index (sharded by category) for near‑real‑time updates.  
   *Cache hot queries in Amazon ElastiCache Redis* (partitioned by query prefix) to shave 60 % of lookups from 200 ms → 80 ms.  
2. **Data Pipeline** – Implement a Kinesis Data Stream that ingests product catalog changes, triggers Lambda functions that update OpenSearch via bulk API (≤1 s per batch).  
3. **Personalization Engine** – Run a SageMaker endpoint with a light‑weight transformer model; results are merged on the application layer and returned in a single HTTP response.  

**Result (Deliver Results)**  
- Latency dropped from 250 ms to 75 ms (300 % improvement).  
- 95 % of queries served from Redis, cutting OpenSearch query cost by 45 %.  
- During a 24‑hour sale the system handled 1.2 M requests without degradation, increasing conversion rate by 12 %.  

**Learnings & Bar‑raiser Notes**  
I documented all trade‑offs (e.g., higher read latency vs. lower write throughput) and set up A/B tests to validate assumptions—showing ownership of both product quality and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
