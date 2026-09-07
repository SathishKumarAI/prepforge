---
qid: ing_af3eba2db6__aws__local
question: 'Explain: State assumptions — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 489
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:01:53-05:00'
sources: []
---

**Answer (Amazon Interview Style)**  

During a recent system‑design interview I was asked to explain *state assumptions* for a high‑throughput recommendation service that uses machine learning.  
I began by **anchoring to Leadership Principles**: **Customer Obsession** – we must deliver accurate, timely recommendations; and **Ownership** – I own the entire data pipeline from ingestion to inference.

> **Situation:** Our client needed real‑time product suggestions for 50 M daily active users with <200 ms latency.  
> **Task:** Design a stateful architecture that stores user embeddings and updates them in near real‑time.  
> **Action:**  
> *Assumptions*  
> - User interaction data arrives at ~5 k events/second per shard.  
> - Embeddings are 256‑dim vectors, updated every 15 minutes.  
> - We can tolerate a 5‑minute staleness window for cold starts.  
> *Design*  
> 1. **Ingest** → Kinesis Data Streams → Lambda (feature extraction).  
> 2. **State store** → DynamoDB with TTL and Global Secondary Indexes; use DAX for cache to hit <10 ms read latency.  
> 3. **Model training** → SageMaker Pipelines on spot instances; output to S3, trigger Lambda to push new embeddings to DynamoDB.  
> 4. **Inference API** → API Gateway + Lambda@Edge (edge caching) feeding into the same DAX layer.  

> **Result:** We achieved a 95 % hit‑rate and reduced recommendation latency from 350 ms to 120 ms, cutting operational costs by 18 % versus an on‑prem solution.

**Bar‑raiser notes I listened for:**  
- Clear ownership of each component (data flow, state consistency).  
- Deep dive into latency vs. cost trade‑offs (DAX vs. pure DynamoDB).  
- Quantified impact (latency, hit‑rate, cost).  
- Reflection on a failed early prototype that over‑cached and caused staleness—learned to balance TTL and real‑time updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
