---
qid: ing_6e6dbc8b32__aws__local
question: 'Explain: Growing number of nodes — Recommendation engine & system use cases
  with graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 550
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:47-05:00'
sources: []
---

**Situation**  
At my previous e‑commerce company we saw a **40 % year‑over‑year growth** in product catalog and user base. The recommendation engine that drove 25 % of revenue had to scale from 5 k nodes to >200 k while keeping latency <150 ms.

**Task**  
Re‑architect the graph‑based recommendation system so it could ingest new nodes, run real‑time similarity queries, and support batch model training without impacting live traffic.

**Action**  
1. **Data ingestion & storage** – Migrated to **Amazon Neptune** (graph database) with a multi‑region replica for high availability. Used **AWS Glue** + **Kinesis Data Streams** to stream node updates in near real time, achieving 99.9 % durability.  
2. **Graph processing** – Deployed **Amazon SageMaker Neo** models that run on **AWS Inferentia** instances; the inference pipeline is triggered by Lambda whenever a node update arrives. This reduces per‑request cost from $0.12 to $0.04 and latency from 400 ms to 90 ms.  
3. **Batch analytics & training** – Scheduled nightly ETL jobs in Glue, exported graph snapshots to S3, then trained a Graph Neural Network (GNN) on SageMaker using the *GraphX* framework. Model accuracy (AUC‑ROC) improved from 0.78 to 0.86, boosting click‑through by 12 %.  
4. **Cost & resilience** – Leveraged Neptune’s pay‑as‑you‑go and Spot Instances for training, cutting $1M/year in infra spend while maintaining 99.99 % uptime.

**Result**  
The system handled >200 k nodes with <100 ms latency, cut recommendation latency by 75 %, increased revenue from recommendations by **$3.5 M/month**, and reduced infrastructure costs by **30 %**.  

---

> **Leadership Principles:** *Customer Obsession* (improved user experience), *Ownership* (owning the end‑to‑end pipeline), *Dive Deep* (profiling latency & cost), *Bias for Action* (rapid prototyping with Neptune & SageMaker).  
>   
> **Bar‑raiser cues** – clear ownership, data‑driven impact, deep technical trade‑offs, and lessons from a failed early prototype that lacked real‑time updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
