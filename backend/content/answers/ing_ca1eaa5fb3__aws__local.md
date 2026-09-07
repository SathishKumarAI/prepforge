---
qid: ing_ca1eaa5fb3__aws__local
question: 'Explain: The 80/20 Rule — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 414
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:58:26-05:00'
sources: []
---

**Situation / Task**  
I was tasked with redesigning our recommendation engine’s inference layer for a global e‑commerce platform that serves ~5 M users/day. The existing monolith had 3 s latency and cost ~$200k/month on EC2.  

**Action (Design)**  
- **Apply the 80/20 Rule:** 80 % of requests hit only 20 % of “hot” product vectors.  
- **Caching strategy:** Store those hot embeddings in an in‑memory store (Amazon ElastiCache‑Redis) with TTL=1 h; cold data fetched from S3 + SageMaker endpoints on demand.  
- **AWS services:**  
  - *ElastiCache* for low‑latency read, auto‑scaling shards.  
  - *SageMaker Hosting Services* behind an Application Load Balancer for the cold path.  
  - *CloudWatch/Auto Scaling* to adjust cache size based on hit‑ratio metrics.  

**Result (Data)**  
- Latency dropped from **3 s → 200 ms** (95th percentile).  
- Cache hit‑rate increased to **92 %**, cutting SageMaker invocations by **70 %** and saving ~$120k/month.  
- Availability improved: 99.99 % SLA vs previous 99.5 %.  

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered faster recommendations, directly improving conversion rates (+4 %).  
- **Ownership & Dive Deep:** Built end‑to‑end monitoring to detect cache evictions and retrain models automatically.  

**Bar‑raiser cues I heard**: Ownership of the full system, depth in trade‑offs (cost vs latency), quantified impact, and continuous learning from failed cache warm‑ups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
