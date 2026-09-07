---
qid: ing_c4789bccd3__aws__local
question: 'Explain: Performance at scale — MongoDB Search: Scalable Full-Text Search
  | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 569
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:47:11-05:00'
sources: []
---

**Situation (S)**  
At my last role I was tasked with powering a global e‑commerce catalog search that needed to support **10M+ products and 5k queries/sec** while keeping latency under 200 ms.

**Task (T)**  
I had to design a scalable, fault‑tolerant full‑text solution using MongoDB Atlas Search, ensuring data freshness, cost control, and easy rollback.

**Action (A)**  
1. **Data model & sharding** – Partitioned by region, each shard holds ~2 M documents; used `hashed` key on `_id` for even spread.  
2. **Atlas Search index** – Created a *compound* analyzer (`standard`, `stopwords`) and added *text* fields with *weights* (title 10x, description 3x).  
3. **Read‑replica clusters** – Deployed 3 replicas per shard; read traffic routed via an Application Load Balancer with weighted target groups to balance load.  
4. **Autoscaling & Spot instances** – Leveraged Atlas’s autoscale for read replicas and launched spot workers for nightly reindexing, cutting infra spend by **35 %**.  
5. **Monitoring** – Used CloudWatch + Prometheus exporters; set alerts on query latency > 180 ms.  

**Result (R)**  
- Query latency dropped from 350 ms to **<120 ms** at peak load.  
- Search click‑through rate increased by **18 %**, translating to a $2M+ lift in revenue per quarter.  
- Infra cost reduced by **30 %** vs. the legacy Solr cluster.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Prioritized user experience with sub‑200 ms latency.  
- **Ownership** – Took full responsibility for architecture, monitoring, and cost optimization.

### AWS Services Used
- **Amazon MongoDB Atlas** (fully managed)  
- **Application Load Balancer** (traffic routing)  
- **CloudWatch & Prometheus** (observability)

---

### Bar‑raiser Expectations
- **Ownership:** I drove the end‑to‑end solution, from data modeling to cost control.  
- **Dive Deep:** Detailed shard strategy and analyzer tuning show depth.  
- **Quantified Impact:** Clear metrics on latency, revenue lift, and cost savings.  
- **Learning from Failure:** Early spike in query latency led me to add weighted replicas; post‑deployment monitoring prevented regressions.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
