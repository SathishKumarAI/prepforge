---
qid: ing_878e99e230__aws__local
question: 'Explain: Components in Parallel — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 465
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:30:39-05:00'
sources: []
---

**Situation / Task**  
I was tasked to redesign our recommendation engine so it could serve 10 M concurrent users during peak holiday traffic without downtime. The requirement was *parallel* processing of model inference, data ingestion, and result caching while keeping latency <200 ms.

**Action**  
1. **Architectural split** – I decomposed the pipeline into three loosely‑coupled services:  
   - *Ingest*: Amazon Kinesis Data Streams for real‑time click streams (auto‑scaling shards).  
   - *Inference*: A fleet of Spot EC2 g4dn.xlarge instances behind an Application Load Balancer, each running a TensorFlow model in Docker. Auto‑Scaling Groups were configured with target tracking on CPU utilization (70%) and integrated with Amazon SageMaker for model versioning.  
   - *Cache*: Amazon ElastiCache‑Redis cluster (partitioned shards) to store top‑k recommendations per user, replicated across two AZs.

2. **Availability** – Each component was deployed in a *multi‑AZ* pattern. The ALB performed health checks; if an inference node failed, traffic rerouted instantly. Kinesis ensured data durability with 3× replication. Redis used Multi-AZ with automatic failover (≤1 s latency).

3. **Cost & Scalability** – Spot instances cut compute spend by ~55 %. Lambda functions processed low‑priority batch updates, reducing EC2 load. The design supported linear scalability; during a 48 h test we handled 20 M requests with 99.9 % success and <210 ms average latency.

**Result**  
The new system delivered **+40 % lift in conversion rate** during the holiday season, reduced infra cost by $120K/month, and maintained SLA of 99.9 % uptime across all regions.

> *Leadership Principles:* **Ownership**, **Dive Deep** – I owned the full end‑to‑end pipeline, dissected every failure mode, and quantified impact with real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
