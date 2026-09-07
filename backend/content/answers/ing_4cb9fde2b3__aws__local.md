---
qid: ing_4cb9fde2b3__aws__local
question: 'Explain: Time-Based Data | Elasticsearch: The Definitive Guide [2.x] |
  Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 683
total_tokens: 921
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:18:38-05:00'
sources: []
---

**Situation (S)**  
In my previous role I led the migration of a legacy log‑analytics platform to **Amazon OpenSearch Service** (the managed Elasticsearch fork). The system ingested 4 TB/day of application logs and had to support real‑time alerting for over 200 customers. Existing clusters were hitting 90 % CPU, high latency, and frequent index churn.

**Task (T)**  
I was tasked with designing a scalable, cost‑efficient architecture that could handle the load while keeping query latency under 200 ms and reducing operational overhead.

**Action (A)**  

1. **Time‑Based Indexing Strategy** – Adopted *daily rollover indices* (`app-logs-YYYY.MM.DD`) using OpenSearch’s `index.lifecycle` policy. This limits shard count per index, reduces GC pressure, and keeps hot data on the most recent indices.  
2. **Shard & Node Sizing** – Calculated 20 GB heap per data node, with 3 warm nodes for older indices and 1 hot node for the latest day. Used *dedicated master* nodes (no data role) to isolate control traffic.  
3. **Index Templates & Mappings** – Created dynamic templates that cast timestamps as `date` fields (`@timestamp`) and used `keyword` for routing keys, ensuring efficient range queries and aggregations.  
4. **Cost Controls** – Leveraged *spot instances* for warm nodes (30 % cheaper) and enabled *auto‑scaling* based on CPU/heap usage.  
5. **Observability** – Instrumented OpenSearch Dashboards with alerting rules that trigger when query latency > 200 ms or index size exceeds thresholds.

**Result (R)**  
- Reduced average query latency from **650 ms to 140 ms** (70 % improvement).  
- Cut daily operational cost by **$3,800/month** (~35 %) through spot‑based warm tiering.  
- Eliminated cluster crashes; uptime rose from **96 % to 99.9 %**.

---

### Technical Takeaways
| AWS Service | Role |
|-------------|------|
| **OpenSearch Service** | Managed Elasticsearch cluster with lifecycle policies |
| **Auto Scaling Groups** | Dynamically adjust warm node count |
| **Spot Instances** | Cost‑effective scaling for non‑critical data |
| **CloudWatch Alarms** | Monitor CPU, heap, latency |

### Leadership Principles Highlighted
- **Ownership** – Took full responsibility for the migration and post‑production stability.  
- **Dive Deep** – Analyzed cluster metrics to identify shard‑level bottlenecks and crafted a precise index lifecycle policy.  
- **Bias for Action** – Implemented spot scaling within two sprints, delivering measurable performance gains quickly.  

### Bar‑raiser Signals
- **Quantified Impact**: Explicit latency & cost numbers.  
- **Depth**: Detailed explanation of shard sizing, lifecycle policies, and mapping decisions.  
- **Learning from Failure**: Early cluster crashes taught me to separate master and data roles; I applied that knowledge in the final design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
