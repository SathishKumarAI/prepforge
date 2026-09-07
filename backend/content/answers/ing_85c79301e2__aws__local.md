---
qid: ing_85c79301e2__aws__local
question: 'Explain: Merge replication — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 433
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:27:16-05:00'
sources: []
---

**Situation / Task**  
While leading a SaaS platform that serves millions of users worldwide, I was tasked with reducing the single‑region latency for our billing service and ensuring zero data loss during a planned migration to a multi‑region architecture.

**Action**  
I evaluated three replication patterns:  
1. **Physical (block‑level) replication** – used by RDS Multi‑AZ for synchronous HA within a region.  
2. **Logical replication** – DynamoDB Global Tables and Aurora Replication, which allow asynchronous cross‑region sync with eventual consistency but support multi‑master writes.  
3. **Hybrid** – combining a primary Aurora cluster (synchronous) with a read‑replica Aurora Global Database for global reads.

I chose **Aurora Global Database** because it offers < 1 ms latency to replicas, automatic failover in < 30 s, and costs ~$0.15 per GB/month for data transfer, compared to DynamoDB’s $0.25/GB for cross‑region replication. I also implemented a lightweight CDC pipeline using AWS DMS to keep the analytics warehouse in sync.

**Result**  
Post‑migration:  
- Read latency dropped from 250 ms to 35 ms globally (≈86% improvement).  
- Uptime improved from 99.95% to >99.999%.  
- Cross‑region failover tests completed within 28 s, meeting SLA.  

**Reflection**  
I owned the end‑to‑end design, dove deep into consistency models, and quantified the trade‑offs between cost, latency, and durability—exactly what a bar‑raiser looks for in ownership and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
