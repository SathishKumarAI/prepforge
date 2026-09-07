---
qid: ing_3ded362c61__aws__local
question: 'Explain: Write-Through — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 407
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:58-05:00'
sources: []
---

**Situation / Task**  
While redesigning the recommendation engine for a global e‑commerce platform, I was asked to explain write‑through caching and its trade‑offs so that our data team could decide whether to adopt it for product catalog updates.

**Action**  
I framed the problem around **Customer Obsession** (ensuring catalog freshness) and **Ownership** (owning end‑to‑end latency).  
1. **Define write‑through**: every write hits both cache (Amazon ElastiCache Redis) *and* persistence layer (DynamoDB) atomically via a Lambda that writes to both.  
2. **Design pattern**: use an “update‑first” approach—Lambda receives event → writes to DynamoDB, then publishes to SNS → subscriber updates Redis. This guarantees consistency while keeping cache latency < 5 ms.  
3. **Scalability/Availability**: DynamoDB auto‑scales; Redis is deployed in a Multi‑AZ cluster with read replicas for high availability.  
4. **Cost & trade‑offs**: Write‑through doubles write traffic (cost ~15% higher) but removes stale reads, eliminating the need for cache invalidation logic and reducing downstream error rates by 30%.  

**Result**  
After deployment, catalog read latency dropped from 45 ms to 12 ms, while consistency incidents fell by **48%** over three months. The team adopted the pattern across all product services, saving ~$0.8M annually in SLA penalties.

**Bar‑raiser note** – I demonstrated *dive deep* into failure modes (cache evictions vs. stale reads), quantified impact, and showed learning: we later added a “write‑back” path for bulk updates to keep costs under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
