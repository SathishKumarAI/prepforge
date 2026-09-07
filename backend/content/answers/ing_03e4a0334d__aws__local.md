---
qid: ing_03e4a0334d__aws__local
question: 'Explain: Neo4j'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 454
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:26-05:00'
sources: []
---

**Answer – Neo4j (Amazon‑style)**  

> *“I built a recommendation engine that drove a 12 % lift in upsell revenue by switching from a relational model to Neo4j.”*

### Situation & Task  
Our product catalog had millions of items linked by multi‑level tags. A SQL join cascade for each user request hit the database for ~30 ms, but with peak traffic (50k concurrent users) latency spiked to 350 ms and CPU usage hit 95 %. I was tasked with reducing query time while keeping cost under $5k/month.

### Action  
1. **Dive Deep & Ownership** – profiled queries, identified that the heavy join pattern matched a graph traversal.  
2. **Design** – migrated data to **Amazon Neptune (Neo4j‑compatible)**, used `MATCH` for depth‑first traversal, and materialized a *pre‑computed “recommended” relationship* via scheduled Lambda jobs every 6 hrs.  
3. **AWS services** –  
   - **Neptune** (highly available, read replicas).  
   - **Lambda + EventBridge** for incremental updates (cost $0.20/hr).  
   - **CloudWatch** for latency metrics; set alarms at 200 ms.  
4. **Bias for Action** – rolled out in a blue‑green fashion, switched traffic after a 10 % performance gain was verified.

### Result  
- Latency dropped from 350 ms to <70 ms (95th percentile).  
- CPU utilization fell to 35 %.  
- Upsell revenue increased by **12 %** within two months.  
- Total monthly cost: $4,200 vs. projected $6,500 with the old stack.

### Reflection  
I learned that graph databases excel at *relationship‑heavy* workloads; a quick pilot saved us both time and money. I documented trade‑offs (write latency ↑ ≈ 15 %) so future teams could make informed decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
